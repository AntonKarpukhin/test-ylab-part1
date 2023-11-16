import styles from './form.module.css';
import cn from 'classnames';
import Button from "../button/button.jsx";
import { useState } from "react";
import Paragraph from "../paragraph/paragraph.jsx";
import isEmailValid from "../../helpers/validation.js";
import postUserInfo from "../../helpers/api.js";

const Form = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [viewPassword, setViewPassword] = useState(true);
    const [isValid, setIsValid] = useState(false);

    const onSubmitForm = (evt) => {
        evt.preventDefault();
        if (isEmailValid(email)) {
            setIsValid(false);
            postUserInfo(email, password)
                .then(res => {
                //    Какой-то ответ от сервера, данные ушли удачно.
                })
                .catch(err => console.log(err))
                .finally(() => {
                    setEmail('');
                    setPassword('');
                });
        } else {
            setIsValid(true);
            return;
        }
    }

    const onViewPassword = () => {
        setViewPassword(state => !state);
    }

    return (
        <form className={styles.form} onSubmit={onSubmitForm} name='registration'>
            <h1 className={styles.title}>Вход</h1>
            <label className={styles.label} htmlFor='email'>
                <Paragraph className={styles.paragraph} children='E-mail' color={'gray'}/>
                <input
                    className={cn(styles.input, {
                        [styles.inputRed]: isValid
                    })}
                    id='email'
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                />
                <img className={styles.img} src="../../../public/name.svg" alt='email'/>
                {isValid ? <span>Некорректный E-mail</span> : null}
            </label>
            <label className={styles.label} htmlFor='password'>
                <Paragraph className={styles.paragraph} children='Пароль' color={'gray'}/>
                <input
                    className={styles.input}
                    type={viewPassword ? 'password' : 'text'}
                    id='password'
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                    onClick={onViewPassword}
                />
                <img className={styles.img} src="../../../public/password.svg" alt='password'/>
            </label>
            <Button />
        </form>
    )
}

export default Form;