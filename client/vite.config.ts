import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	// Экспорт конфигурации: Используется defineConfig для создания и экспорта конфигурации Vite. Это обеспечивает автодополнение и типизацию в файле конфигурации.
	plugins: [react()], // Подключение плагина React, который необходим для работы с React в Vite.
	server: {
		port: 3000,
		proxy: {
			'/api': 'https://gps.autotracker.group', 
		},
	},
});
