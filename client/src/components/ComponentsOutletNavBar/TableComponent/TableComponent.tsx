import React, { useEffect, useState } from 'react';
import { Space, Switch, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import axios from 'axios';
import { DataType } from '../../../types/types';

type TableRowSelection<T extends object = object> =
	TableProps<T>['rowSelection'];



const columns: TableColumnsType<DataType> = [
	{
		title: 'Имя',
		dataIndex: 'name',
		key: 'name',
		width: '22%',
		align: 'center',
	},
	{
		title: 'Уникальный идентификатор',
		dataIndex: 'uniqueId',
		key: 'uniqueId',
		width: '22%',
		align: 'center',
	},
	{
		title: 'Статус',
		dataIndex: 'status',
		key: 'status',
		width: '22%',
		align: 'center',
	},
	{
		title: 'Последнее обновление',
		dataIndex: 'lastUpdate',
		key: 'lastUpdate',
		width: '22%',
		align: 'center',
	},
	{
		title: 'ID',
		dataIndex: 'id',
		width: '22%',
		key: 'id',
	},
];


const rowSelection: TableRowSelection<DataType> = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(
			`selectedRowKeys: ${selectedRowKeys}`,
			'selectedRows: ',
			selectedRows,
		);
	},
	onSelect: (record, selected, selectedRows) => {
		console.log(record, selected, selectedRows);
	},
	onSelectAll: (selected, selectedRows, changeRows) => {
		console.log(selected, selectedRows, changeRows);
	},
};

const TableComponent: React.FC = () => {
	const [data, setData] = useState<DataType[]>([]);
	
	useEffect(() => {
	
		const fetchData = async () => {
			// const token = localStorage.getItem('authToken');
			// console.log('token', token);
			const token1 =
				'RzBFAiEA1IzNNW2mj-WVA0FxSNN6ADzFlvN0na9rhtNWc63vbrsCIB3dZcqwhtmZ4kIKFLCOJnz2vD8BQKHgpDD-NzxExfVmeyJ1IjozLCJlIjoiMjAyNC0wOC0zMFQyMTowMDowMC4wMDArMDA6MDAifQ';
			try {
				const response = await axios.get(
					'https://gps.autotracker.group/api/devices',
					{
						headers: {
							Authorization: `Bearer ${token1}`,
							'Content-Type': 'application/x-www-form-urlencoded',
						},
					},
				);
		//!
				if (!token1) {
					message.error('Не авторизован');
					return;
				}

				const formattedData = response.data.map((device: any) => ({
					key: device.id,
					id: device.id,
					name: device.name,
					uniqueId: device.uniqueId,
					status: device.status,
					lastUpdate: device.lastUpdate,
				}));
				setData(formattedData);
			} catch (error) {
				console.error('Ошибка в fetchData', error);
			}
		};

		fetchData(); 
	}, []);

	return (
		<>
			<Table
				columns={columns}
				rowSelection={{ ...rowSelection }}
				dataSource={data}
				pagination={false}
			/>
		</>
	);
};

export default TableComponent;

