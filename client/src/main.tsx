import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import {UserAppContext} from './context/userContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<UserAppContext>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</UserAppContext>
	</React.StrictMode>,
);
