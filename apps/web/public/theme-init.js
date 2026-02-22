(function() {
	try {
		const savedTheme = localStorage.getItem('theme');
		const root = document.documentElement;
		
		let theme = savedTheme;
		if (!theme || theme === 'system') {
			const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			theme = systemPrefersDark ? 'dark' : 'light';
		}
		
		if (theme === 'dark' || theme === 'light') {
			root.classList.remove('light', 'dark');
			root.classList.add(theme);
		}
	} catch (e) {
		// Fallback para tema claro se houver erro
		document.documentElement.classList.add('light');
	}
})();
