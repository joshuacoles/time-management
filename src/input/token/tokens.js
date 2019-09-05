import React from 'react';

const Token = props => (
    <span style={{
        padding: '0.2rem',
        marginLeft: '0.15rem',
        marginRight: '0.15rem',
        backgroundColor: '#ddd',
        border: '1px #aaa solid',
        borderRadius: '10%',
        textAlign: 'center'
    }}>
        <span style={{ paddingRight: '0.15rem', userSelect: 'none' }} onClick={props.removeToken}>&times;</span>
        <span>{props.children}</span>
    </span>
);

const Tokens = props => (
    <div style={{ display: 'inline-flex', flexDirection: 'row' }}>
        {props.tokens.map(token =>
            <Token key={`tok-${token}`} removeToken={() => props.removeToken(token)}>{token}</Token>
        )}
    </div>
);

function TextInput(props) {
    const onKeyDown = e => {
        if (e.keyCode === 13 || e.keyCode === 188 || e.keyCode === 32) e.preventDefault();

        // backspace
        if (e.keyCode === 8 && e.target.value === '') {
            props.removeLastToken();
        }

        if ((e.keyCode === 13 || e.keyCode === 188 || e.keyCode === 32) && e.target.value.trim() !== '') {
            props.appendToken(e.target.value);
            e.target.value = '';
        }
    };

    return <input style={{
        outline: 'none',
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: 'inherit',
        color: 'inherit',
        width: '100%',
    }} onKeyDown={onKeyDown} {...props.inputProps}/>;
}

export function TokenInput({
    tokens, onUpdate,
    style = {}, inputProps = {}, ...props
}) {
    const appendToken = token => onUpdate([...tokens, token]);
    const removeToken = token => onUpdate(tokens.filter(x => x !== token));
    const removeLastToken = () => onUpdate(tokens.slice(0, -1));

    return (
        <div style={{ display: 'inline-flex', flexDirection: 'row', ...style }} {...props}>
            <Tokens tokens={tokens} removeToken={removeToken}/>
            <TextInput appendToken={appendToken} removeLastToken={removeLastToken} inputProps={inputProps}/>
        </div>
    );
}

export default TokenInput;
