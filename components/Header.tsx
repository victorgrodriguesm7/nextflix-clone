import Image from 'next/image';

import logo from '../public/assets/logo.svg';
import avatar from '../public/assets/images/avatar.png';

import styles from '../styles/components/Header.module.css';

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image
                    src={logo} 
                    alt="Netflix logo"/>
            </div>
            <div className={styles.avatar}>
                <Image
                    src={avatar} 
                    alt="Netflix avatar"/>
            </div>
        </div>
    )
}
