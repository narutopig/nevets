import { REST, Routes } from "discord.js";
import { clientID, token } from "./util";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!"
  }
];

const rest = new REST({ version: "10" }).setToken(token());

export async function init() {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(clientID()), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}
