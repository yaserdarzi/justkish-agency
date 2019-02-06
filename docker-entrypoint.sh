#!/bin/sh
set -e
    if [[ -z "${API_URL}" ]]; then
        API_URL="https://api.stars.do"
    fi
    if [[ -z "${SOCKET_URL}" ]]; then
        SOCKET_URL="https://socket.stars.do"
    fi

    echo "{
        \"api_url\": \"${API_URL}\",
        \"socket_url\": \"${SOCKET_URL}\"
    }" > /usr/share/nginx/html/config.json

exec "$@"