import cp from "child_process";
import util from "util";

const exec = util.promisify(cp.exec);

const getRunningContainers = async () => {
  const { stdout: namesStdout } = await exec("docker ps --format '{{.Names}}'");

  const names = namesStdout
    .trim()
    .split("\n")
    .filter((n) => n.length)
    .filter((n) => n.startsWith("mc-"));

  return names;
};

export default getRunningContainers;
