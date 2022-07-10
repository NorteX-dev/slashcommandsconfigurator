import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App";
import "./index.css";
import BotProvider from "./providers/BotProvider";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<MantineProvider
			theme={{ colorScheme: "dark" }}
			withNormalizeCSS
			withGlobalStyles
		>
			<BotProvider>
				<App />
			</BotProvider>
		</MantineProvider>
	</React.StrictMode>
);
