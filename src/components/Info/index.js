import React from 'react';
import Item from './Item';
import styles from './index.less';

const Info = ({ name, job, contacts }) => {
    return (
        <div className={styles.info}>
            <div className={styles.left}>
                <span>{name}</span>
                <span>{job}</span>
            </div>
            <div>{contacts && contacts.map(contact => (
                <Item {...contact} key={contact.type} />
            ))}</div>
        </div>
    );
};

Info.propTypes = {
};

export default Info;
