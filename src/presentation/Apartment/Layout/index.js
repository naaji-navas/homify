import { Layout } from "antd";
import React from "react";

import Main from "../Main";
import Sidebar from "../Sidebar";
import Top from "../Top";

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <>
    <Layout className="w-100" style={{ height: "100vh" }}>
      <Sider className="w-50">
        <Sidebar />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content className="p-3">
          <Top />
          <Main />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </>
);

export default App;
