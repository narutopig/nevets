import fs from "fs";
import path from "path";
import { Command } from "./types";

export function loadCommands() {
  const res = new Map<string, Command>();

  fs.readdirSync(path.resolve(__dirname, "./commands")).forEach((file) => {
    const { data } = require(path.resolve(__dirname, "./commands", file));
    const command = data as Command;
    res.set(command.name, command);
    console.log(`Loaded command ${command.name} from ${file}`);
  });

  return res;
}
