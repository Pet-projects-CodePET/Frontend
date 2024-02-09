import { MainButton } from "@/shared/ui"
import Link from "next/link"
import styles from './mainpage.module.scss';

export const MainPage = () => {
    return (
        <main>
            <div>CodePET FRONTEND</div>
            <br />
            <Link href='/login'>
                <MainButton variant="primary" width="regular">Login</MainButton>
            </Link>
            <br />
            <br />
            <Link href='/registration'>
                <MainButton variant="primary" width="regular">Registration</MainButton>
            </Link>
            <br />
            <p className={styles.test1}> Open Sans Variable Font</p>
            <p className={styles.test2}> Open Sans Variable Font</p>
            <p className={styles.test3}> Open Sans Variable Font</p>
            <p className={styles.test4}>Montserrat Variable Font</p>
            <p className={styles.test5}>Montserrat Variable Font</p>
            <p className={styles.test6}>Montserrat Variable Font</p>
            <p className={styles.test4}>Inter Variable Font</p>
            <p className={styles.test5}>Inter Variable Font</p>
            <p className={styles.test6}>Inter Variable Font</p>
        </main>
    )
}