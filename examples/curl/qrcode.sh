#!/usr/bin/env bash
# QR Code API – cURL example
# Usage: CHARTQUERY_API_KEY=your-key bash qrcode.sh
set -euo pipefail

curl -sS -G "https://api.chartquery.com/v1/qrcode" \
  -H "x-api-key: ${CHARTQUERY_API_KEY}" \
  --data-urlencode data=https://chartquery.com \
  --data-urlencode format=png \
  -o qrcode.png

echo "Saved qrcode.png"
