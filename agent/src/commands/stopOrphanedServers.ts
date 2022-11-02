import cp from "child_process";
import getRunningContainers from "../utils/getRunningContainers";
import util from "util";

const exec = util.promisify(cp.exec);

const stopOrphanedServers = async (expectedServerIds: string[]) => {
  const runningServerIds = await getRunningContainers();
  const promises: Promise<any>[] = [];

  runningServerIds.forEach((runningId) => {
    if (!expectedServerIds.find((expectedId) => expectedId === runningId)) {
      promises.push(exec(`docker stop --time=30 mc-${runningId}`));
    }
  });

  await Promise.all(promises);
};

export default stopOrphanedServers;
