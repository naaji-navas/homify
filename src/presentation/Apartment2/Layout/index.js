import { Layout } from "antd";
import React from "react";


import Sidebar from "../Sidebar";
import Top from "../Top";
import Bottom from "../Bottom";

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <>
    <Layout className="w-100" >
      <Sider className="w-50">
        <Sidebar />
      </Sider>
      <Layout>
        <Header></Header>
        <Content className="p-3">
          <Top />
          <Bottom/>
        </Content>
      </Layout>
    </Layout>
  </>
);

export default App;
