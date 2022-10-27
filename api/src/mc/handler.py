import docker
from docker.models.containers import Container
from docker.errors import APIError, ImageNotFound, NotFound

class DockerHandler:
  def __init__(self, docker_client: docker.DockerClient):
    self.docker_client = docker_client

  def create_container(self, name: str):
    try:
      container: Container = self.docker_client.containers.create(
        name=name,
        image="itzg/minecraft-server",
        ports={"25565/tcp": None},
        environment=["EULA=TRUE"],
        detach=True
      )  # type: ignore

    except (APIError, ImageNotFound) as e:
      print(f"Couldn't create server.\n{e}")


  def start_container(self, name: str):
    try:
      container: Container = self.docker_client.containers.get(name)  # type: ignore
      container.start()

    except (APIError, NotFound) as e:
      print(f"Couldn't start server.\n{e}")

  def stop_container(self, name: str):
    try:
      container: Container = self.docker_client.containers.get(name)  # type: ignore
      container.stop(timeout=15)

    except (APIError, NotFound) as e:
      print(f"Couldn't stop server.\n{e}")

  def logs_container(self, name: str):
    try:
      container: Container = self.docker_client.containers.get(name)  # type: ignore
      return container.logs()

    except (APIError, NotFound) as e:
      print(f"Couldn't fetch logs.\n{e}")
      return None

  def delete_container(self, name: str):
    try:
      container: Container = self.docker_client.containers.get(name)  # type: ignore
      container.remove()

    except APIError as e:
      print(f"Couldn't delete server.\n{e}")