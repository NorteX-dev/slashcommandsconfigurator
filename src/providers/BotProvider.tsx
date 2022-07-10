import { createContext, ReactNode, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export const BotContext = createContext<any>(null);

export interface ICommand {
	type: string;
	name: string;
	description: string;
	options?: IOption[];
}

export interface IOption {
	type: string;
	name: string;
	description: string;
	required?: boolean;
}

export interface IBot {
	token: string;
	username: string;
	discriminator: string;
	commands: ICommand[];
}

const mockBot = {
	token: "000000000-00000000",
	username: "Testing username",
	discriminator: "0000",
	commands: [
		{
			type: "CHAT_INPUT",
			name: "invoice",
			description: "Create an invoice.",
			options: [
				{
					type: "STRING",
					name: "amount",
					description: "The amount.",
					required: true,
				},
				{
					type: "STRING",
					name: "payment_method",
					description: "Method of payment.",
					required: false,
				},
			],
		},
	],
};

export default function BotProvider({ children }: { children: ReactNode }) {
	const [value, setValue] = useState<IBot | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	// useEffect(() => {
	//
	// }, []);

	async function connect(token: string) {
		setLoading(true);
		setValue(mockBot);
		setLoading(false);
		console.log("Connecting...");
		invoke("connect", { token })
			.then((r) => {
				console.log(r);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<BotContext.Provider value={{ value, setValue, loading, connect }}>
			{children}
		</BotContext.Provider>
	);
}
