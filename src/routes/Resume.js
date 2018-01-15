import React from 'react';
import { connect } from 'dva';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';
import styles from './Resume.less';
import Info from '../components/Info';

const { Footer, Content } = Layout;

const Resume = ({ app }) => {
    const { resumes } = app;
    console.log(resumes);
    const { contents, name, job, contacts } = resumes;

    const infoProps = {
        contents,
        name,
        job,
        contacts,
    };

    return (
        <div className={styles.normal}>
            <Layout>
                <Info {...infoProps} />
                <Content>
                    b
                </Content>
                <Footer>
                    Copyright © 2018 Created by Yyeo
                </Footer>
            </Layout>
        </div>
    );
};

Resume.propTypes = {
    // app: PropTypes.object,
};

export default connect(({ app }) => ({ app }))(Resume);
