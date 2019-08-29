import React from "react"
import {Layout} from "antd"
import {ToastContainer} from "react-toastify"

const {Content} = Layout;

const RootContainer = ({children}) => (
  <Layout className="main-layout">
    <Content>
      {children}
      <ToastContainer
        position={"bottom-center"}
        autoClose={2000}
        closeOnClick
        pauseOnHover/>
    </Content>
  </Layout>
);

export default RootContainer;
