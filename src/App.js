import React from 'react';
import './App.css';

import { data } from './data';
import { TimerArea } from './UI';

function App() {
    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div className="saved-timers">
                {Object.entries(data).map(([title, items]) =>
                    <TimerArea title={title} items={items}/>
                )}
            </div>

            <div className="current-timer">
                <TimerArea
                    title={'Current'}
                    items={[]}
                    containerStyle={{ width: '100%' }}
                    titleStyle={{ width: '90%', float: 'right' }}
                />
            </div>
        </div>
    );
}

export default App;
