import React from 'react';
import Common from '../Common/index';

const Skill = ({ icon, titleCh, titleEn, datas }) => {
    const commonProps = {
        type: 'skill',
        icon,
        titleCh,
        titleEn,
        commonObj: datas,
    };
    return (
        <Common {...commonProps} />
    );
};

export default Skill;
