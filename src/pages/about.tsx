import Image from 'next/image'

import styles from "../styles/about.scss"

export default function Home() {
    return (
        <main className={styles["flex min-h-screen flex-col items-center justify-between p-24"]}>
      <div className={styles["z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"]}>
        <h1>About</h1>
      </div>
    </main>
    )
}