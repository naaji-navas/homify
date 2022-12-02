import { Layout } from "antd";
import React from "react";

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
        <Header>Header</Header>
        <Content className="p-3">
          <Main />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </>
);

export default App;
