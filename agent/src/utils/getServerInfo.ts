import fetch from "node-fetch";

import { Server } from "../types";

const getServerInfo = async (serverId: string) => {
  const resp = await fetch(
    `${process.env.CENTRAL_API_URL}/servers/${serverId}`
  );

  return await resp.json() as Server;
};

export default getServerInfo;
