import util from "util";
import cp from "child_process";

const exec = util.promisify(cp.exec);

const stopServer = async (serverId: string) => {
  try {
    await exec(`docker update --restart=no mc-${serverId}`);
    await exec(`docker exec mc-${serverId} mc-send-to-console /stop`)
  } catch (err) {
    if (
      !err.message.includes("is not running") &&
      !err.message.includes("No such container")
    ) {
      throw err;
    }
  }
}

export default stopServer;