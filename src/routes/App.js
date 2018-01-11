import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
// import styles from './App.less';

function App() {
    return (
        <Button type="primary" icon="search">Hello</Button>
    );
}

App.propTypes = {
};

export default connect()(App);
