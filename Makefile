include .env

export API_SERVER_PROD \
       API_PORT \
       DOCKER_USERNAME \
       PROJECT_NAME \
       PROJECT_VERSION \
       SSH_KEY_PATH

dev:
	docker-compose -f docker-compose.yml up -d

down:
	docker-compose down

build:
	docker build -t ${DOCKER_USERNAME}/${PROJECT_NAME}:${PROJECT_VERSION} -f Dockerfile.prod .

prod:
	docker run -p 4200:80 --rm -d --name ${PROJECT_NAME} ${DOCKER_USERNAME}/${PROJECT_NAME}:${PROJECT_VERSION}

copy-to-vps:
	scp -i ${SSH_KEY_PATH} #any-file root@${API_SERVER_PROD}:/root/${PROJECT_NAME}

connect-to-vps:
	ssh -i ${SSH_KEY_PATH} root@${API_SERVER_PROD}

copy-id:
	pbcopy < ~/.ssh/vikings_rsa
