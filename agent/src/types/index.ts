export type Server = {
  id: string;
  name: string;
  port: number;
  nodeId: number;
  userId: string;
  memory: number;
  running: boolean;
  version: string;
  type: string;
}