import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export function Timer({ title }) {
    return <div className="box" style={{ backgroundColor: '#eee', }}>
        <span style={{ margin: '10px', fontSize: '17px' }}>{title}</span>

        <FontAwesomeIcon icon={faPencilAlt} size={'14px'} color={'#dedede'} style={{ margin: '10px' }}/>
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
