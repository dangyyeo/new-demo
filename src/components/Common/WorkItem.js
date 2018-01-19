import React from 'react';
import PropTypes from 'prop-types';
// import Icon from './Icon';
import styles from './WorkItem.less';

const WorkItem = ({ works }) => {
    const contentworks = works.map(work => (
        <div>
            <h5>{work.name}</h5>
            {
                work.descriptions.map(des => (
                    <p>{des}</p>
                ))
            }
        </div>
    ));
    return (
        <div>
            {contentworks}
        </div>
    );
};

WorkItem.propTypes = {
    works: PropTypes.array,
};
WorkItem.defaultProps = {
    works: [],
};
export default WorkItem;
