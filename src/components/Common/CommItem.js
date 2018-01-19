import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
// import Icon from './Icon';
import styles from './ComItem.less';

const CommItem = ({ icons, children }) => {
    return (
        <div className={styles.position}>
            {icons ? <Button type="primary" shape="circle" size="small" className={styles.icon} icon={icons} /> : null}
            {children}
        </div>
    );
};

CommItem.propTypes = {
    icons: PropTypes.string,
    children: PropTypes.element.isRequired,
};
CommItem.defaultProps = {
    icons: '',
};
export default CommItem;
