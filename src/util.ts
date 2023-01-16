import * as dotenv from "dotenv";

dotenv.config();

export function token() {
  return process.env.TOKEN ?? "";
}

export function clientID() {
  return process.env.CLIENTID ?? "";
}
