import { Layout } from "antd";
import React from "react";
import {Link} from "react-router-dom";
import Sidebar from "../Sidebar";
import Main from "../Main";

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <>
    <Layout className="w-100" >
      <Sider className="w-50">
        <Sidebar />
      </Sider>
      <Layout>
        <Header></Header>
        <Content className="p-3 d-flex justify-content-center flex-column ">
          <Main />
            <div className="d-flex justify-content-center">
              <Link to='/gateway' type="button" class="d-flex justify-content-center w-25  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><h6 className="h6">Pay Now</h6></Link>
                 
            </div>
        </Content>
      </Layout>
    </Layout> 
  </>
)

export default App;
