import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import classNames from 'classnames';

export const EditIcon = (...props) => <FontAwesomeIcon icon={faPencilAlt} size={'14px'} color={'#dedede'} {...props}/>;

export const Pill = ({ children, className, ...props }) =>
    <div className={classNames(['box', className])} {...props}>
        {children}
    </div>;

export function Timer({
                          title,
                          rhs = <EditIcon/>,
                          editing = false,
                          titlePillColor = '#eee',
                          style = {},
                          titleStyle = {}, pillProps,
                      }) {
    return <Pill style={{ backgroundColor: titlePillColor, ...style }} {...pillProps}>
        <span style={{ margin: '10px', fontSize: '17px', ...titleStyle }}>{title}</span>

        {rhs && <span style={{ margin: '10px' }}>{rhs}</span>}
    </Pill>;
}

function SavedTimer(props) {
    return <Timer
        pillProps={{ className: 'savedTimer' }}
        rhs={<span className={'saved-edit-icon'}><EditIcon/></span>}
        {...props}
    />;
}

export function TimerArea({ title, items, containerStyle = {}, titleStyle = {} }) {
    return <div style={{ paddingBottom: '10px', ...containerStyle }}>
        <div className="box" style={{ width: '300px', backgroundColor: '#ddd', ...titleStyle }}>
            <span style={{ margin: '10px', fontSize: '20px' }}>{title}</span>
        </div>

        <div>
            {items.map((item, index) => <SavedTimer title={item} key={title + index}/>)}
        </div>
    </div>;
}
