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

# Only run Flask's built-in server in local development
if __name__ == '__main__':
    import os
    import subprocess
    port = int(os.environ.get('PORT', 8000))
    if port == 5000:
        # Kill any process using port 5000 (Windows PowerShell)
        try:
            subprocess.run(
                'powershell.exe -Command "Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process"',
                check=True
            )
        except Exception as e:
            print(f"Could not kill process on port 5000: {e}")
    app.run(debug=True, host='0.0.0.0', port=port)