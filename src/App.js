import React from 'react';
import './App.css';

import { data } from './data';
import { Pill, Timer, TimerArea } from './UI';
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
                height: '300px', top: '-20px',
                width: '100%',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}>
                {/* Buffer for the -30*/}
                <div style={{ height: '20px' }}/>

                <div style={{
                    // display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                    width: '100%',
                    position: 'relative',
                    color: '#444',
                    // fontSize: '10px',
                }}>
                    <label htmlFor="name" style={{ fontSize: 'inherit', marginLeft: '7px' }}>Name</label>
                    <input name="name" style={{
                        fontSize: 'inherit',
                        color: 'inherit',
                        marginRight: '7px',
                        border: 0,
                        outline: 0,
                        backgroundColor: 'transparent',
                        float: 'right'
                    }}/>

                    <div className="underline" style={{
                        backgroundColor: '#ddd',
                        border: 0,
                        height: '1px',
                        marginTop: '2px',
                        marginLeft: '2.5px',
                        width: 'calc(100% - 5px)',
                    }}/>
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
