import React from 'react';
import { connect } from 'dva';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';
import styles from './Resume.less';
import { Info, Education, Experience, Skill } from '../components';

const { Footer, Content } = Layout;

const Resume = ({ app }) => {
    const { resumes } = app;
    const { contents, name, job, contacts, educations, experiences, skills } = resumes;

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
                <Content className={styles.content_style}>
                    <Education {...educations} />
                    <Experience {...experiences} />
                    <Skill {...skills} />
                </Content>
                <Footer className={styles.center}>
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
