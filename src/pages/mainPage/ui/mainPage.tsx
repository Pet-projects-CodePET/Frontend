import React from "react";
import { Header } from "@/widgets/header";
import styles from "./main-page.module.scss";

export const MainPage = () => {
    return (
        <main className={styles.mainContainer}>
            <Header isLoggedIn/>

        </main>
    )
}