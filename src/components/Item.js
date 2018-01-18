import React from 'react';
import { Icon } from 'antd';
// import PropTypes from 'prop-types';
import styles from './Item.less';

const Item = ({ type, isurl, url, urlText }) => {
    return (
        <div className={styles.item}>
            <Icon type={type} />
            {
                isurl ? <a href={url}>{urlText}</a> : <span>{urlText}</span>
            }
        </div>
    );
};

Item.propTypes = {
};

export default Item;
