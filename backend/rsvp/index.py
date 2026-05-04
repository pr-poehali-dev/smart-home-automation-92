import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """RSVP: сохранение и получение ответов гостей"""

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
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Укажите имя и ответ'})
            }

        cur.execute(
            "INSERT INTO rsvp_responses (name, answer) VALUES (%s, %s)",
            (name, answer)
        )
        conn.commit()
        cur.close()
        conn.close()

        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'ok': True})
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
