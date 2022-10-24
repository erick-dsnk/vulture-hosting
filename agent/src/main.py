from docker_handler.handler import DockerHandler
import docker

client = docker.from_env()
client.login(username="dsnk", password="dsnkecelmaitare")

handler = DockerHandler(client)