import React, { useState, useCallback } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';
import { useDisapatch } from 'react-redux';
import { signUpAction } from '../reducer/user';

const TextInput = ({ value }) => {
    return (
        <div>{value}</div>
    )
};

TextInput.propTypes = {
    value: PropTypes.string
}

export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    }, [])
    return [value, handler];
}

const Signup = () => {

    const [passworkdCheck, setPasswordCheck] = usetSate('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);



    const [nick, setNick] = useState('');
    const [password, setPassword] = useSate('');
    const dispatch = useDispatch();

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if (password !== passwordCheck) {
            return setPasswrodErrors
        }

        if (!term) {
            return setTermError(true);
        }
        dispatch(signUpAction({
            id,
            password,
            nick
        }));
    }, [password, passwordCheck, term]);

    const onChangeNick = (e) => {
        setNick(e.target.value);
    };

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, '');

    const onChangePassworkdCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }, [password]);

    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);


    const [id, onChangeId] = useInput('');

    return (
        <>
            <Form onSubmit={onSubmit} stype={padding: 10 }>
                <TextInput value={'135'}></TextInput>
            <div>
                <label htmlFor="user-id" />아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangedId} />
        </div>
        <div>
            <label htmlFor="user-nick" />닉네임</label>
        <br />
        <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                </div >


    <div>
        <label htmlFor="user-password" />비밀번호</label>
    <br />
    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                </div >

    <div>
        <label htmlFor="user-password-check" />비밀번호 체크</label>
    <br />
    <Input name="user-password-check" type="password" value={passworkdCheck} required onChange={onChangePassworkdCheck} />
                    { passwordError && <div stype={{ color: 'red' }}>비밀번호가 일치하지않습니다.</div> }
                </div >
    <div>
        <Checkbox name="user-term" value={term} onChange={onChangeTerm}>동의합니다. </Checkbox>
        {termError && <div stype={{ color: 'red' }}>약관에 동의하셔야합니다.</div>}
    </div>
    <div style={{ marginTop: 10 }}>
        <Button type="primary">가입하기 </Button>
    </div>

            </Form >
        </>
    )
}

export default Singup;