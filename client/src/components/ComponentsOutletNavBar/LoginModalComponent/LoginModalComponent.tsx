import { Button, Form, Input, Modal, Switch, message } from 'antd';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import styles from './Login.module.css';
import Password from 'antd/es/input/Password';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/userContext';

export default function LoginModalComponent() {
		const { login, setLogin, email, setEmail } = useContext(UserContext);
		const navigate = useNavigate();
		const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});

	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => setIsModalOpen(true);
	const modalCancel = () => setIsModalOpen(false);

	const handleOk = async () => {
		if (Object.values(inputs).some(value => value === '')) {
			message.error('Заполните все поля');
			return;
		}

		
		try {
			const response = await axios.post(
				'https://gps.autotracker.group/api/session',
				new URLSearchParams({
			email: inputs.email,
			password: inputs.password,
		}).toString(),
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				},
			);
			const { data } = response;

			if (data) {
				//! setLogin(true);
				navigate('/objects');
				localStorage.setItem('authToken', data);
				localStorage.setItem('emailToken', data.email);
				setLogin(true);
				setIsModalOpen(false);
				message.success('Успешная авторизация');
				setEmail(data.email);
				console.log(data);
			} else {
				message.success('Неверный логин или пароль');
			}
		} catch (error) {
			console.error('Произошла ошибка при авторизации: ', error);
			message.success('Проверьте логин/пароль');
		}
	};

	const handleInputChange = e => {
		setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<div>
			<Button className={styles.btn} type='primary' onClick={showModal}>
				Войти
			</Button>
			<Modal
				title='Авторизуйтесь'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={modalCancel}
				okText='Войти'
				cancelText='Отмена'
			>
				<Form>
					<>
						<Form.Item label='Email'>
							<Input
								onChange={handleInputChange}
								name='email'
								value={inputs.email}
							/>
						</Form.Item>
						<Form.Item label='Пароль'>
							<Password
								type='password'
								onChange={handleInputChange}
								name='password'
								value={inputs.password}
							/>
						</Form.Item>
					</>
				</Form>
			</Modal>
		</div>
	);
}
