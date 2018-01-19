import React from 'react';
import Common from '../Common/index';

const Experience = ({ icon, titleCh, titleEn, datas }) => {
    const commonProps = {
        type: 'experience',
        icon,
        titleCh,
        titleEn,
        commonObj: datas,
    };
    return (
        <Common {...commonProps} />
    );
};

export default Experience;
