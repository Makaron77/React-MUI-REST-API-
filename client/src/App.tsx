import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainPages from './pages/MainPage/MainPage';
import ObjectPages from './pages/ObjectPage/ObjectPage';
import AccountsComponent from './components/ComponentsOutletNavBar/AccountsComponent/AccountsComponent';
import UsersComponent from './components/ComponentsOutletNavBar/UsersComponent/UsersComponent';
import DriversComponent from './components/ComponentsOutletNavBar/DriversComponent/DriversComponent';
import NotificationsComponent from './components/ComponentsOutletNavBar/NotificationsComponent/NotificationsComponent';
import TasksComponent from './components/ComponentsOutletNavBar/TasksComponent/TasksComponent';


function App() {


  return (
		<>
			<Routes>
				<Route path='/' element={<MainPages />}>
					<Route path='objects' element={<ObjectPages />} />
					<Route path='accounts' element={<AccountsComponent />} />
					<Route path='users' element={<UsersComponent />} />
					<Route path='drivers' element={<DriversComponent />} />
					<Route path='notifications' element={<NotificationsComponent />} />
					<Route path='tasks' element={<TasksComponent />} />
				</Route>
			</Routes>
		</>
	);
}

export default App
