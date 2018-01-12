import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
// import styles from './Resume.less';

function Resume() {
    return (
        <Button type="primary" icon="search">Hello</Button>
    );
}

Resume.propTypes = {
};

export default connect()(Resume);
