import React from 'react';
import './App.css';

import { data } from './data';
import { Pill, Timer, TimerArea } from './UI';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextField from '@material-ui/core/TextField';
import { TokenInput } from './input/token/tokens';

function CurrentTimer2() {
    return (
        <div style={{ width: '100%', margin: '10px', marginLeft: '7%', marginRight: '15px' }}>
            <Pill style={{ backgroundColor: '#ddd', width: '100%', margin: '0', zIndex: '10', position: 'relative' }}>
                <span style={{ margin: '10px', fontSize: '20px', }}>Current</span>

                <span style={{ margin: '10px', marginRight: '20px' }}>
                    <FontAwesomeIcon icon={faCheck} size={'14px'} color={'#999'}
                                     style={{ paddingRight: '10px' }}/>

                    <FontAwesomeIcon icon={faTimes} size={'14px'} color={'#999'}/>
                </span>
            </Pill>

            <Pill style={{
                backgroundColor: '#f7f7f7', margin: '0', position: 'relative',
                height: 'fit-content', top: '-20px',
                width: '100%',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}>
                {/* Buffer for the -20*/}
                <div style={{ height: '20px' }}/>

                <TextField
                    label="Description"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ marginLeft: '10px', maxHeight: '10em' }}
                />

                <TextField
                    label="Notes"
                    margin="normal"
                    variant="outlined"
                    multiline
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ marginLeft: '10px' }}
                />

                <TextField
                    label="Project"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    style={{ marginLeft: '10px' }}
                />

                <TokenInput tokens={[]} onUpdate={tokens => {
                }}/>

                <TextField
                    label="Tags"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ marginLeft: '10px' }}
                />

                <div>
                    <TextField
                        label="Start"
                        margin="normal"
                        variant="outlined"
                        type="time"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ marginLeft: '10px' }}
                    />


                    <TextField
                        label="End"
                        margin="normal"
                        variant="outlined"
                        type="time"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ marginLeft: '10px' }}
                    />
                </div>

            </Pill>
        </div>
    );
}

/*
input:focus {
    outline: none
}

input {
    width: calc(100% - 2px);
    margin-left: 1px;
    padding-bottom: 2px;
}

input[type=text] {
    border: 0;
    cursor: text;
}

.underline {
    background-color: #ebebeb;
    transition: color 0.3s, background 0.3s, border 0.3s, text-shadow 0.3s;
    z-index: 0;
    height: 5px;
    margin-top: -4px;
    width: 100%;
}

input:focus ~ .underline {
    background-color: #4EA6EA;
}
*/

/*
input[type=text] {
  height:17px;
  border: 0;
  width: calc(100% - 2px);
  margin-left:1px;
  box-shadow: -8px 10px 0px -7px #ebebeb, 8px 10px 0px -7px #ebebeb;
  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.3s;
}
input[type=text]:focus {
  outline: none;
  box-shadow: -8px 10px 0px -7px #4EA6EA, 8px 10px 0px -7px #4EA6EA;
}

* */


function App() {
    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div className="saved-timers">
                {Object.entries(data).map(([title, items]) =>
                    <TimerArea title={title} items={items}/>
                )}
            </div>

            <div className="current-timer">
                <CurrentTimer2/>
            </div>
        </div>
    );
}

export default App;
