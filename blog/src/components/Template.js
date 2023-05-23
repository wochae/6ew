import React from 'react';
import './Template.css';

const Template = ({ children }) => {
    return (
        <div className="Template">
            <div className="title">오늘의 할 일 (0)</div>
            <div>{children}</div>
        </div>
    );
};

export default Template;