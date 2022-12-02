import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
import img from './rating1.png'
import img2 from './Review1.png'
const App = () => {
  const [size, setSize] = useState('large'); // default is 'middle'

  return (
    <>
        <div className="w-100 d-flex justify-content-around mt-5">
              <button type="button" class="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">13/40 Rooms</button>
              <button type="button" class="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">2 KM <h6 className="h6">From your Location</h6></button>
        </div>
        <div className="d-flex justify-content-center p-3" >
        <Space wrap className="w-75 inline " >
        <button type="button" class="d-flex justify-content-around w-100 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          <div className="d-flex">
            <img className="rounded-circle me-2" style={{width:"60px"}} src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="" />
            <img className="rounded-circle me-2" style={{width:"60px"}} src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="" />
            <img className="rounded-circle me-2" style={{width:"60px"}} src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="" />
          </div>
          <div className="">
            <h6 className="h6">Join Team!</h6>
            <h6 className="h6">Book Now</h6>
          </div>
          </button>
        <button type="button" class="d-flex justify-content-around w-100 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><h6 className="h6 ms-5">Join Individually</h6><h6 className="h6">Book Now</h6></button>
        <div className="mt-5">
            <img className="mb-4" src={img} alt="" />
           <img className="mb-4" src={img2} alt="" />
           <img src={img2} alt="" />
        </div>
        </Space>
        </div>
    </>
  );
};
export default App;