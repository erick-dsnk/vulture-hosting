import { spawn } from "child_process";

export const createServer = (name: string) => {
  const serverCreationProcess = spawn("python", [
    "mc_server.py",
    "create",
    name,
  ]);

  serverCreationProcess.stdout.on("data", (data) => {
    return data;
  });

  serverCreationProcess.stderr.on("error", (error) => {
    console.log(error.message);
  });

  serverCreationProcess.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

export const startServer = (name: string) => {
  const serverStartProcess = spawn("python", ["mc_server.py", "start", name]);

  serverStartProcess.stdout.on("data", (data) => {
    return data;
  });

  serverStartProcess.stderr.on("error", (error) => {
    console.log(error.message);
  });

  serverStartProcess.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

export const stopServer = (name: string) => {
  const serverStopProcess = spawn("python", ["mc_server.py", "stop", name]);

  serverStopProcess.stdout.on("data", (data) => {
    return data;
  });

  serverStopProcess.stderr.on("error", (error) => {
    console.log(error.message);
  });

  serverStopProcess.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

export const deleteServer = (name: string) => {
  const serverDeleteProcess = spawn("python", ["mc_server.py", "delete", name]);

  serverDeleteProcess.stdout.on("data", (data) => {
    return data;
  });

  serverDeleteProcess.stderr.on("error", (error) => {
    console.log(error.message);
  });

  serverDeleteProcess.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
}