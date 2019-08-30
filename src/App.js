import React from 'react';
import './App.css';

import { data } from './data';
import { Timer, TimerArea } from './UI';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CurrentTimer() {
    return <Timer
        title={'Current'}
        titlePillColor="#ddd"
        editing={true}
        style={{ width: '100%', marginLeft: '7%' }}
        titleStyle={{ fontSize: '20px' }}
        rhs={
            <span style={{ marginRight: '10px' }}>
                            <FontAwesomeIcon icon={faCheck} size={'14px'}
                                             color={'#999'}
                                             style={{ paddingRight: '10px' }}
                            />

                            <FontAwesomeIcon icon={faTimes} size={'14px'}
                                             color={'#999'}
                            />
                        </span>
        }
    />;
}

function App() {
    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div className="saved-timers">
                {Object.entries(data).map(([title, items]) =>
                    <TimerArea title={title} items={items}/>
                )}
            </div>

            <div className="current-timer">
                <CurrentTimer/>
            </div>
        </div>
    );
}

export default App;
