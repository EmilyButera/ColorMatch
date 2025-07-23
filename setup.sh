#!/bin/bash

# Use the PORT environment variable provided by Render
PORT=${PORT:-8000}

# Kill any process using the port (optional, but not recommended on Render)
# kill -9 $(lsof -ti ":$PORT") 2>/dev/null

git pull
python3 -m venv .venv
source .venv/bin/activate || . .venv/bin/activate
pip install -r requirements.txt
# Bind to 0.0.0.0:$PORT for external access
exec gunicorn -b 0.0.0.0:$PORT app:app