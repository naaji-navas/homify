import React from 'react';
import Card from '../Card';
import {Link} from "react-router-dom";

function index() {
  return (
    <div className="">
        <div className="d-flex mt-2">
            <Link to="/landingpage" className="btn">Home</Link>
            <Link to="/landingpage1" className="btn">Hostel</Link>
            <Link to="/landingpage2" className="btn btn-primary">Paying Guest</Link>
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