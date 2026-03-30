	export const mergeContacts = (
		contacts: Record<string, string>[]
	): Record<string, string> => {
		const result: Record<string, string> = {};

		for (const contact of contacts) {
			for (const [key, value] of Object.entries(contact)) {
				if (!(key in result)) {
					result[key] = value;
				}
			}
		}
		return result;
	};
