import { MainButton } from "@/shared/ui";
import { Header } from "@/widgets/header";
import Link from "next/link";
import styles from "./main-page.module.scss";

export const MainPage = () => {
    return (
        <main className={styles.mainContainer}>
            <Header isLoggedIn/>

        </main>
    )
}