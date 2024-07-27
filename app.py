from flask import Flask, render_template
import os
import dotenv
app = Flask(__name__)

dotenv.load_dotenv()

LOCAL_HOST = os.getenv('LOCAL_HOST')
LOCAL_PORT = os.getenv('PORT')
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/free_movies')
def movies():
    return render_template('free_movies.html')

@app.route('/personal_card')
def card():
    return render_template("card.html")


if __name__ == '__main__':
    app.run(host=LOCAL_HOST , port=LOCAL_PORT, debug=True)