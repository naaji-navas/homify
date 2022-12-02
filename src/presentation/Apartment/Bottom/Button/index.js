import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
const App = () => {
  const [size, setSize] = useState('large'); // default is 'middle'

  return (
    <>
        <div className="d-flex justify-content-center p-3" >
        <Space wrap className="w-75 inline " >
        <button type="button" class="w-100 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Join Team<h6 className="h6">From your Location</h6></button>
        <button type="button" class="w-100 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">2 KM <h6 className="h6">From your Location</h6></button>
          
        </Space>
        </div>
    </>
  );
};
export default App;