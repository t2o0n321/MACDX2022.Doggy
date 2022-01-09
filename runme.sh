#! /bin/bash

options="$@"

opt_config(){
    for opt in $options; do
        case $opt in
            "-c" )
                cp .env.example .env
                echo "Enter server port: "
                read port
                sudo sed -i "1c SERVER_PORT = ${port}" .env
            ;;
            "-s" )
                ip=$(ip route get 8.8.8.8 | \
                        awk '{gsub(".*src",""); print $1; exit}')
                port=$(grep "SERVER_PORT" .env | \
                        awk '{print $3}')
                echo "Starting server on ${ip}:${port}"
                npm start
            ;;
            * )
                echo "no option or wromg input"
            ;;
        esac
    done       
}

opt_config