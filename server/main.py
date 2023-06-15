from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__)
CORS(app) # Enable CORS for all routes

# Check if the database file exists, and create it if it doesn't
if not os.path.exists('countdowns.db'):
    conn = sqlite3.connect('countdowns.db')
    c = conn.cursor()
    c.execute('CREATE TABLE countdowns (id TEXT, datetime TEXT, title TEXT)')
    conn.commit()
    conn.close()

# Route to retrieve countdowns from the database
@app.route('/countdown', methods=['GET'])
def get_countdowns():
    conn = sqlite3.connect('countdowns.db')
    c = conn.cursor()
    c.execute('SELECT * FROM countdowns')
    countdowns = c.fetchall()
    conn.close()
    countdowns_list = []
    for countdown in countdowns:
        countdown_dict = {
            'id': countdown[0],
            'datetime': countdown[1],
            'title': countdown[2]
        }
        countdowns_list.append(countdown_dict)
    return jsonify(countdowns_list)

# Route to save countdowns to the database
@app.route('/sync', methods=['POST'])
def sync_countdowns():
    countdowns = request.get_json()
    conn = sqlite3.connect('countdowns.db')
    c = conn.cursor()
    c.execute('DELETE FROM countdowns')
    for countdown in countdowns:
        c.execute('INSERT INTO countdowns (id, datetime, title) VALUES (?, ?, ?)', (countdown['id'], countdown['datetime'], countdown['title']))
    conn.commit()
    conn.close()
    return 'OK'

if __name__ == '__main__':
    app.run(port=8000)
