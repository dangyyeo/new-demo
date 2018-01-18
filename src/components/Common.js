import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Row, Col } from 'antd';
import CommonItem from './CommItem';
import styles from './Common.less';

const Common = ({ icon, titleCh, titleEn, commonObj: commonobj }) => {
    return (
        <div className={styles.timeline}>
            <div className={styles.timeline_title}>
                <Button type="primary" shape="circle">
                    <Icon type={icon} style={{ fontSize: 22 }} />
                </Button>
                <span>{titleCh}</span>
                <span>{titleEn}</span>
            </div>
            {
                commonobj.map(obj => (
                    <CommonItem icons={obj.icon} key={obj.name}>
                        <Row style={{ padding: '4px 25px 0 25px' }}>
                            <Col span={8} style={{ textAlign: 'left' }}><span>{obj.name}({obj.type})</span></Col>
                            <Col span={8} style={{ textAlign: 'center' }}><span>{obj.major}</span></Col>
                            <Col span={8} style={{ textAlign: 'right' }}>{obj.start}~{obj.end}</Col>
                        </Row>
                    </CommonItem>
                ))
            }
        </div>
    );
};

Common.propTypes = {
    titleCh: PropTypes.string,
    titleEn: PropTypes.string,
    commonObj: PropTypes.array,
};
Common.defaultProps = {
    titleCh: '',
    titleEn: '',
    commonObj: [],
};
export default Common;
