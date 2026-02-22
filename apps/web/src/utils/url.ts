/**
 * Determina o tipo de URL baseado em seu formato.
 */
export const urlType = (url: string): "internal" | "hash" | "mail" | "external" => {
	if (!url || url.length === 0) {
		return "external";
	}

	if (url[0] === "/") {
		return "internal";
	}

	if (url[0] === "#") {
		return "hash";
	}

	if (url.startsWith("mailto:")) {
		return "mail";
	}

	return "external";
};
