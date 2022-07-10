import { useState } from "react";
import { Button, Container, TextInput, Title } from "@mantine/core";
import useBot from "./hooks/useBot";
import CommandList from "./components/CommandList";

function App() {
	const [token, setToken] = useState("");
	const { bot, loading, connect } = useBot();

	function updateToken(event: any) {
		setToken(event.target.value);
	}

	function submit() {
		connect(token);
	}

	return (
		<Container my={15}>
			<Title order={3} mb={10}>
				Slash command configurator
			</Title>
			<div style={{ display: "flex" }}>
				<TextInput
					placeholder={"Discord bot token..."}
					style={{ width: "100%", marginRight: "10px" }}
					onChange={updateToken}
				/>
				<Button onClick={submit}>Connect</Button>
			</div>
			<CommandList />
		</Container>
	);
}

export default App;
