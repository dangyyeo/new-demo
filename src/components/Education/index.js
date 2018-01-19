import React from 'react';
import Common from '../Common/index';

const Education = ({ icon, titleCh, titleEn, datas }) => {
    const commonProps = {
        type: 'education',
        icon,
        titleCh,
        titleEn,
        commonObj: datas,
    };
    return (
        <Common {...commonProps} />
    );
};

export default Education;
