import { init } from "./slash";
import { Client, GatewayIntentBits } from "discord.js";
import { token } from "./util";
import { loadCommands } from "./loader";

init();
const commands = loadCommands();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

if (client == null) {
  console.log("client is null, exiting");
  process.exit(1);
}

client.on("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  console.log(commandName);
  commands.get(commandName)?.execute(interaction);
});

client.login(token());
