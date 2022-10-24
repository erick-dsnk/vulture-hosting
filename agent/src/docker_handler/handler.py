import docker
from docker.models.containers import Container

class DockerHandler:
  def __init__(self, docker_client: docker.DockerClient):
    self.docker_client = docker_client
    self.active_containers = []

    with open("docker_handler/last_port", "r") as f:
      self.__last_used_port = int(f.read(), base=10)

  def run_container(self, name: str):
    try:
      container: Container = self.docker_client.containers.run(
        name=name,
        image="itzg/minecraft-server",
        ports={"25565/tcp": self.__last_used_port + 1},
        environment=["EULA=TRUE"],
        detach=True
      )  # type: ignore
      self.__last_used_port += 1
      with open("docker_handler/last_port", "w") as f:
        f.write(str(self.__last_used_port))

    except Exception as e:
      print(e)
      return -1

  def stop_container(self, name: str):
    try:
      container: Container = self.docker_client.containers.get(name)  # type: ignore
      container.stop()

    except Exception as e:
      print(e)
      return -1