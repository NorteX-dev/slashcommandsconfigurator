import { createContext, ReactNode, useEffect, useState } from "react";

export const BotContext = createContext<any>(null);

interface IBot {
	token: string;
	username: string;
	discriminator: string;
}

export default function BotProvider({ children }: { children: ReactNode }) {
	const [value, setValue] = useState<IBot | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	// useEffect(() => {
	//
	// }, []);

	function connect(token: string) {
		setLoading(true);
		setValue({
			token: "bruh",
			username: "bruh2",
			discriminator: "bruh3",
		});
		setLoading(false);
	}

	return (
		<BotContext.Provider value={{ value, loading, connect }}>
			{children}
		</BotContext.Provider>
	);
}
