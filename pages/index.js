import React from 'react';
import Layout from '../layout/index'
import Home from "../components/task/index"


const IndexPage = (props) => {
  return (
    <Layout>
      <h1>Welcome to To-Do</h1>
      <Home />
    </Layout>
  )
}

export default IndexPage;

// IndexPage.getInitialProps = async props => {
//   return props;
// };

// export default privateRoute(IndexPage);
