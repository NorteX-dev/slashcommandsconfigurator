import { BotContext } from "../providers/BotProvider";
import { useContext } from "react";

export default function useBot() {
	return useContext(BotContext);
}
