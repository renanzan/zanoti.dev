declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_BASE_URL: string;
			NEXT_PUBLIC_ENVIRONMENT: "development" | "staging" | "production";
			NEXT_PUBLIC_POSTHOG_KEY: string;
			NEXT_PUBLIC_POSTHOG_HOST: string;
		}
	}
}

export {};
