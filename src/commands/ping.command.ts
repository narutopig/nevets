import { Command } from "../types";

export const data: Command = {
  name: "ping",
  description: "Pong!",
  execute: async (interaction) => {
    await interaction.reply("Pong!");
  }
};
