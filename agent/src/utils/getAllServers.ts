import fetch from "node-fetch";

import { Server } from "../types";

const getAllServers = async () => {
  const resp = await fetch(`${process.env.CENTRAL_API_URL}/servers`);

  return (await resp.json()) as Server[];
};

export default getAllServers;
