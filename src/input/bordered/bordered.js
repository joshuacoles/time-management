import React from 'react';

export default function ({ label, backgroundColor, children, ...props }) {
    return (
        <div className="con" {...props}>
            <span style={{ backgroundColor }} className="l">{label}</span>
            {children}
        </div>
    );
}
