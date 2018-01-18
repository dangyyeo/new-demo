import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import styles from './Icon.less';

const Icon = ({ icons }) => {
    return (
        icons ? <Button type="primary" shape="circle" size="small" className={styles.icon} icon={icons} /> : null
    );
};

Icon.propTypes = {
    icons: PropTypes.string,
};
Icon.defaultProps = {
    icons: '',
};
export default Icon;
