import Link from "next/link";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import AnimatedSimpleIcon from "@/components/modules/simpleIcons/simpleIcons";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.banner}>
                <div className={styles.glower} />
                <div className={styles.background}>
                    <div className={styles.content}>
                        <p className={styles.start}>Hi! I&#39;m</p>
                        <h1>Alpha</h1>
                        <p>
                            Korean full-stack student developer & translate proofreader
                            <br />
                            with 6+ years of experience.
                        </p>
                        <div className={styles.social}>
                            <Link href="mailto:dev@alpha93.kr">
                                <AtSymbolIcon />
                            </Link>
                            <Link href="mailto:dev@alpha93.kr">
                                <AnimatedSimpleIcon
                                    id="twitter"
                                    color={{
                                        primary: "9CA3AF",
                                        secondary: "9CA3AF"
                                    }}
                                />
                            </Link>
                            <Link href="mailto:dev@alpha93.kr">
                                <AnimatedSimpleIcon
                                    id="github"
                                    color={{
                                        primary: "9CA3AF",
                                        secondary: "9CA3AF"
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.contributed}>
                <h1>class ContributingProjects {"{"}</h1>
                <div className="my-6 rounded-xl bg-gray-600 bg-opacity-20 p-7" />
                <h1>{"}"}</h1>
            </section>
            <section className={styles.translated}>
                <h1>class TranslatingProjects {"{"}</h1>
                <div className="my-6 rounded-xl bg-gray-600 bg-opacity-20 p-7" />
                <h1>{"}"}</h1>
            </section>
        </main>
    );
}
