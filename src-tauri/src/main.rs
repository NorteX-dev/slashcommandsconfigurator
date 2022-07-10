#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

use std::collections::HashMap;
use reqwest::header::AUTHORIZATION;

const DISCORD_ROOT_URL: &str = "https://discord.com/api/v10";

fn main() {
	tauri::Builder::default()
		.invoke_handler(tauri::generate_handler![connect])
		.run(tauri::generate_context!())
		.expect("error while running tauri application");

	println!("Created app window.");
}

#[derive(Debug, Serialize, Deserialize)]
struct Model {
	id: String,
	name: String,
	icon: Option<String>,
}

#[tauri::command]
async fn connect(token: String) -> Result<String, String> {
	let client = reqwest::Client::new();

	let resp = client
		.get(&format!("{}/oauth2/applications/@me", DISCORD_ROOT_URL))
		.header(AUTHORIZATION, format!("Bot {}", token))
		.send()
		.await
		.expect("Failed to get bot")
		.json::<Model>()
		.await
		.expect("Failed to deserialise json");

	println!("{:#?}", resp);
	Ok("Done".parse().unwrap())
}
