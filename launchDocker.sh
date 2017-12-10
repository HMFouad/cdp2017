#!/bin/bash
containerName="gghb"
imageName="teamgghb"
localPort="4200"

printf '%s\n' "----- Build image -----"
docker image build -t $imageName ./

printf '\n%s\n' "----- Stop and remove old container -----"
docker container stop $containerName && docker container rm $containerName

printf '\n%s%d%s\n' "----- Run new container (port : " $localPort ") -----"
# use -d for running in background. See logs with : docker container logs
docker run -t --name $containerName -p $localPort:4200 $imageName
