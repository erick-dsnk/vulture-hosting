import cp from "child_process";
import util from "util";

import getServerInfo from "../utils/getServerInfo";

const exec = util.promisify(cp.exec);

const startServer = async (serverId: string) => {
  const { memory, port, version } = await getServerInfo(serverId);

  try {
    const command = [
      "docker",
      "run",
      `--name mc-${serverId}`,
      "-itd",
      `-p ${port}:25565`,
      `-m ${memory}M`,
      `-e EULA=TRUE`,
      `-e VERSION=${version}`,
      `-e MEMORY=${memory}M`,
      `iztg/minecraft-server`,
    ].join(" ");

    await exec(command);
  } catch (err) {
    console.log("container already exists, starting it");

    await exec(`docker start mc-${serverId}`);
  }
};

export default startServer;
