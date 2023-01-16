import { ChatInputCommandInteraction, CacheType } from "discord.js";

export interface Command {
  name: string;
  description: string;
  execute(interaction: ChatInputCommandInteraction<CacheType>): Promise<void>;
}
