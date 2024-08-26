import { Button, Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import styles from './MainPage.module.css';
import LoginModalComponent from '../../components/ComponentsOutletNavBar/LoginModalComponent/LoginModalComponent';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';


export default function MainPages() {

	const { login, setLogin, email, setEmail } = useContext(UserContext);
	
 useEffect(() => {
	 const token = localStorage.getItem('authToken');
	 const email = localStorage.getItem('emailToken');
    if (token && email) {
			setLogin(true);
			setEmail(email)
		} else {
			setLogin(false);
		}
 }, []);
	

	
	const handleExit = () => {
		setLogin(false);
		setEmail('');
		// localStorage.removeItem('authToken'); //! снизу сокращенная запись
		// localStorage.removeItem('emailToken')
		['authToken', 'emailToken'].forEach((key) => localStorage.removeItem(key));
	}


	return login ? (
		<Layout className={styles.layoutStyle}>
			<Sider width='2%' className={styles.siderStyle}>
				Sider
			</Sider>
			<Layout>
				<Header className={styles.headerStyle}>
					<nav className={styles.navStyle}>
						<li>
							<NavLink
								to='/accounts'
								className={({ isActive }) =>
									isActive ? styles.activeLink : undefined
								}
							>
								Учётные записи
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/users'
								className={({ isActive }) =>
									isActive ? styles.activeLink : undefined
								}
							>
								Пользователи
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/objects'
								className={({ isActive }) =>
									isActive ? styles.activeLink : undefined
								}
							>
								Объекты
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/drivers'
								className={({ isActive }) =>
									isActive ? styles.activeLink : undefined
								}
							>
								Водители
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/notifications'
								className={({ isActive }) =>
									isActive ? styles.activeLink : undefined
								}
							>
								Уведомления
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/tasks'
								className={({ isActive }) =>
									isActive ? styles.activeLink : undefined
								}
							>
								Задания
							</NavLink>
						</li>
					</nav>
					<nav>
						<Button>{email}</Button>
						<Button onClick={handleExit}>Выйти</Button>
					</nav>
				</Header>

				<Content className={styles.contentStyle}>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	) : (
	
		
			<LoginModalComponent />
		
	);
}
