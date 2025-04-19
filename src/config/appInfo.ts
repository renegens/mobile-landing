import type { AppLogo, StoreLinks } from "./types";

export const appInfo = {
	title: "Your App Name",
	description:
		"Here you can write a brief description of your application. Tell users about its main features and benefits in 1-2 sentences.",
	logo: {
		type: "iframe" as AppLogo["type"],
		src: "https://api.bohd4n.me/embed/3pzhXGJ7CAaBA3e/emoji1",
	},
	storeLinks: {
		apple: "#",
		google: "#",
	} as StoreLinks,
};
