from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/Complimentary')
def complimentary():
    return render_template("comp.html")

@app.route('/triadic')
def triadic():
    return render_template("tri.html")

@app.route('/tetric')
def tetric():
    return render_template("tetric.html")

@app.route('/hexadic')
def hexadic():
    return render_template("hex.html")

if __name__ == '__main__':
    app.run(debug=True)