#!/usr/bin/env bash

cat <<EOF
██████╗  ██████╗  ██████╗██╗  ██╗███████╗██████╗ ███╗   ███╗ █████╗  ██████╗ ██╗ ██████╗
██╔══██╗██╔═══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗████╗ ████║██╔══██╗██╔════╝ ██║██╔════╝
██║  ██║██║   ██║██║     █████╔╝ █████╗  ██████╔╝██╔████╔██║███████║██║  ███╗██║██║
██║  ██║██║   ██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══██║██║   ██║██║██║
██████╔╝╚██████╔╝╚██████╗██║  ██╗███████╗██║  ██║██║ ╚═╝ ██║██║  ██║╚██████╔╝██║╚██████╗
╚═════╝  ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝ ╚═════╝

EOF

cd docker-craft ; docker-compose exec $1 $2
