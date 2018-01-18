import React from 'react';
import Common from './Common';
import PropTypes from 'prop-types';

const Education = ({ icon, titleCh, titleEn, datas }) => {
    // console.log(educations);
    const commonProps = {
        icon,
        titleCh,
        titleEn,
        commonObj: datas,
    };
    return (
        <Common {...commonProps} />
    );
};

Education.propTypes = {
    // educations: PropTypes.array,
};

export default Education;
