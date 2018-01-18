import React from 'react';
// import { Button } from 'antd';
import Icon from './Icon';
import PropTypes from 'prop-types';
import styles from './ComItem.less';

const CommItem = ({ icons, children }) => {
    console.log(icons, children);
    return (
        <div style={{ position: 'relative' }}>
            <Icon icons={icons} />
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
