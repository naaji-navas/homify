import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
import img from './reminder.png'
const App = () => {
  const [size, setSize] = useState('large'); // default is 'middle'

  return (
    <>
        <div className="w-100 d-flex justify-content-around mt-5">
              
        <div className="mt-5">
            <img className="mb-4 w-50" src={img} alt="" />
        </div>
        </div>
    </>
  );
};
export default App;