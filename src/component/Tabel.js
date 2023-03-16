import { Table } from 'antd';
import React from 'react'

const Tabel = () => {
    const dataSource = [
        {
            key: '1',
            name: 'santh',
            age: 9,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'abi',
            age: 7,
            address: '10 Downing Street',
        },
        {
            key: '3',
            name: 'kathi',
            age: 1,
            address: '10 Downing Street',
        },
        {
            key: '4',
            name: 'barath',
            age: 2,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Id',
            dataIndex: 'key',
            sorter: (a, b) => (a.key - b.key)

        },
        {
            title: 'Name',
            dataIndex: 'name',

        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    return (
        <div>
            <Table
                dataSource={dataSource}
                columns={columns}
            />;
        </div>
    )
}

export default Tabel
