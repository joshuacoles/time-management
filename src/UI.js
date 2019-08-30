import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export const EditIcon = () => <FontAwesomeIcon icon={faPencilAlt} size={'14px'} color={'#dedede'}/>;

export function Timer({ title, rhs = <EditIcon/>, editing = false, titlePillColor = '#eee', style = {}, titleStyle = {} }) {
    return <div className="box" style={{ backgroundColor: titlePillColor, ...style }}>
        <span style={{ margin: '10px', fontSize: '17px', ...titleStyle }}>{title}</span>

        {rhs && <span style={{ margin: '10px' }}>{rhs}</span>}
    </div>;
}

export function TimerArea({ title, items, containerStyle = {}, titleStyle = {} }) {
    return <div style={{ paddingBottom: '10px', ...containerStyle }}>
        <div className="box" style={{ width: '300px', backgroundColor: '#ddd', ...titleStyle }}>
            <span style={{ margin: '10px', fontSize: '20px' }}>{title}</span>
        </div>

        <div>
            {items.map((item, index) => <Timer title={item} key={title + index}/>)}
        </div>
    </div>;
}
