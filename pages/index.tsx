import Head from 'next/head';
import io from 'socket.io-client';

import { Field } from '../src/components';
import styles from './index.module.css';

const Index = (): JSX.Element => {
    const socket = io('http://localhost:3000');

    socket.on('message', ({ message }) => {
        console.log(message);
    });

    const handleClick = () => {
        socket.emit('joinRoom');
    };

    return (
        <>
            <Head>Home</Head>
            <main className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h1>Tacklebox</h1>
                    </div>
                    <div className={styles.join}>
                        <div className={styles.input}>
                            <p>Email Address</p>
                            <Field></Field>
                        </div>
                        <div className={styles.input}>
                            <p>Username</p>
                            <Field></Field>
                        </div>
                        <div className={styles.input}>
                            <p>Chat Room</p>
                            <Field></Field>
                        </div>
                        <button onClick={handleClick}>Join</button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Index;
