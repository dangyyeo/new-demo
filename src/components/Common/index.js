import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Row, Col, List } from 'antd';
import CommonItem from './CommItem';
// import WorkItem from './WorkItem';
import styles from './index.less';

const Common = ({ type, icon, titleCh, titleEn, commonObj: commonobj }) => {
    const getContent = (_type, _commonobj) => {
        if (_type === 'education') {
            return _commonobj.map(obj => (
                <CommonItem icons={obj.icon} key={obj.did}>
                    <Row>
                        <Col span={8} style={{ textAlign: 'left' }}><span>{obj.name}({obj.type})</span></Col>
                        <Col span={8} style={{ textAlign: 'center' }}><span>{obj.major}</span></Col>
                        <Col span={8} style={{ textAlign: 'right' }}>{obj.start}~{obj.end}</Col>
                    </Row>
                </CommonItem>
            ));
        } else if (_type === 'experience') {
            return _commonobj.map(obj => (
                <CommonItem icons={obj.icon} key={obj.did}>
                    <div className={styles.exper} >
                        <span>{obj.company}</span>
                        <span>（{obj.start}~{obj.end}）</span>
                        {
                            obj.works.map(work => (
                                <div style={{ marginTop: 10 }} key={work.wid}>
                                    <h3>{work.name}</h3>
                                    <List
                                        className={styles.border}
                                        dataSource={work.descriptions}
                                        renderItem={item => (<List.Item style={{ border: 'none', padding: '2px 0', lineHeight: 1.5 }}><Icon type="disconnect" style={{ padding: '4px 4px 0 0' }} /><span style={{ wordWrap: 'bread-word' }}>{item}</span></List.Item>)}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </CommonItem>
            ));
        }
    };
    const contentItems = getContent(type, commonobj);
    return (
        <div className={styles.timeline}>
            <div className={styles.timeline_title}>
                <Button type="primary" shape="circle" size="small">
                    <Icon type={icon} style={{ fontSize: 20 }} />
                </Button>
                <span>{titleCh}</span>
                <span>{titleEn}</span>
            </div>
            {contentItems}
        </div>
    );
};

Common.propTypes = {
    type: PropTypes.string,
    titleCh: PropTypes.string,
    titleEn: PropTypes.string,
    commonObj: PropTypes.array,
};
Common.defaultProps = {
    type: '',
    titleCh: '',
    titleEn: '',
    commonObj: [],
};
export default Common;
