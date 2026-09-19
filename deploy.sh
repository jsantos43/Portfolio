#!/bin/bash
set -euo pipefail

APP_DIR=/home/deploy/portfolio
WEB_ROOT=/var/www/portfolio

echo "=== Deploy started at $(date) ==="

cd "$APP_DIR"

git pull origin main

echo "--- Manager: installing dependencies ---"
npm ci --omit=dev
npm run build
cp -r dist/. "$WEB_ROOT/"

echo "=== Deploy finished at $(date) ==="