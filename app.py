from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/complimentary')
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

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/about/site')
def aboutSite():
    return render_template("abt.html")

@app.route('/random')
def random():
    return render_template("rand.html")

