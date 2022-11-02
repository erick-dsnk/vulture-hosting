import cp from "child_process";
import util from "util";
import express from "express";
import cors from "cors";

import startServer from "./commands/startServerCommand";
import stopOrphanedServers from "./commands/stopOrphanedServers";
import getAllServers from "./utils/getAllServers";

import router from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", router);

app.listen(process.env.PORT || 4444, () =>
  console.log(`agent running on port ${process.env.PORT || 4444}`)
);

const exec = util.promisify(cp.exec);

const startRunningServers = async () => {
  const servers = await getAllServers();

  if (!servers || servers.length === 0) return;

  await stopOrphanedServers(servers.map((server) => server.id));

  const { stdout } = await exec("docker ps");

  servers.forEach((server) => {
    const shouldStartServer =
      !server.running && stdout.indexOf(`mc-${server.id}`) !== -1;

    if (shouldStartServer) {
      startServer(server.id).then(() => {
        console.log(`started server ${server.id}`);
      });
    }
  });
};

(async function () {
  startRunningServers();
})();
