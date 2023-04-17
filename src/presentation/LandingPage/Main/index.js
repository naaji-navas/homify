import React from 'react';
import Card from '../Card';

function index() {
  return (
    <div className="">
        <div className="d-flex mt-2">
            <button className="btn btn-primary">Home</button>
            <button className="btn">Hostel</button>
            <button className="btn">Paying Guest</button>
        </div>
        <h2 className="pt-3 ps-3">Near From you</h2>
        <div className="w-100 d-flex flex-wrap">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default index