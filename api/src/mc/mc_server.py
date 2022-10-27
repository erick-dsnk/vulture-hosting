from dotenv import load_dotenv
import os
import docker
from handler import DockerHandler
import sys

load_dotenv()

if __name__ == "__main__":
  client = docker.from_env()
  client.login(name=os.environ.get("USERNAME"), password=os.environ.get("PASSWORD"))
  docker_handler = DockerHandler(client)

  if sys.argv[1] == "create":
    docker_handler.create_container(sys.argv[2])

  elif sys.argv[1] == "run":
    docker_handler.start_container(sys.argv[2])

  elif sys.argv[1] == "stop":
    docker_handler.stop_container(sys.argv[2])

  elif sys.argv[1] == "delete":
    docker_handler.delete_container(sys.argv[2])