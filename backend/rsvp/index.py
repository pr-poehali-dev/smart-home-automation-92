import json
import os
import urllib.request
import psycopg2


TELEGRAM_CHAT_ID = "1307887224"


def send_telegram(message: str):
    token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    if not token:
        return
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    data = json.dumps({'chat_id': TELEGRAM_CHAT_ID, 'text': message, 'parse_mode': 'HTML'}).encode()
    req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
    try:
        urllib.request.urlopen(req, timeout=5)
    except Exception:
        pass


def handler(event: dict, context) -> dict:
    """RSVP: сохранение и получение ответов гостей, уведомление в Telegram"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    if event.get('httpMethod') == 'POST':
        body = json.loads(event.get('body') or '{}')
        name = (body.get('name') or '').strip()
        answer = body.get('answer')

        if not name or answer not in ('yes', 'no'):
            cur.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Укажите имя и ответ'})
            }

        try:
            cur.execute(
                "INSERT INTO rsvp_responses (name, answer) VALUES (%s, %s)",
                (name, answer)
            )
            conn.commit()
            db_ok = True
        except Exception:
            db_ok = False

        cur.close()
        conn.close()

        emoji = "🥂" if answer == "yes" else "💌"
        answer_text = "придёт" if answer == "yes" else "не сможет прийти"
        send_telegram(f"{emoji} <b>{name}</b> {answer_text}")

        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'ok': True, 'db_saved': db_ok})
        }

    if event.get('httpMethod') == 'GET':
        cur.execute(
            "SELECT id, name, answer, created_at FROM rsvp_responses ORDER BY created_at DESC"
        )
        rows = cur.fetchall()
        cur.close()
        conn.close()

        data = [
            {'id': r[0], 'name': r[1], 'answer': r[2], 'created_at': r[3].isoformat()}
            for r in rows
        ]
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'responses': data})
        }

    return {
        'statusCode': 405,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'})
    }
