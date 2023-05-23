import Link from "next/link";
import Image from "next/image";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import AnimatedSimpleIcon from "@/components/modules/simpleIcons/simpleIcons";
import PlazmaImage from "@/assets/Plazma.png";
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
                <h1>class ContributingProjects</h1>
                <div className="my-6 rounded-xl bg-gray-600 bg-opacity-20 p-7">
                    <div className="rounded-xl bg-pink-700">
                        <div className="flex">
                            <div className="rounded-tr-xl bg-gray-800" />
                            <div className="z-0 h-max w-max">
                                <div className="min-h-max min-w-max rounded-full bg-gray-900 p-1.5 pr-2">
                                    <Image
                                        src={PlazmaImage}
                                        width={72}
                                        height={72}
                                        alt="Plazma Icon"
                                        className="rounded-full"
                                    />
                                </div>
                                <div className="mt-4 h-full w-full bg-gray-800 p-6" />
                            </div>
                        </div>
                    </div>
                </div>
                {/*
                - Plazma
                  - AlwaysUpToDate
                  - Homepage
                  - Andromeda (Archived)
                    - Andromeda Plus (Archived)
                    - Magellan (Archived)
                  - Prismarine (Archived)
                - Fomalhaut
                - SchoolDday
                - Portfolio
                  - TeamEarendel Portfolio
                 */}
            </section>
            <section className={styles.translated}>
                <h1>class TranslatingProjects</h1>
                <div className="my-6 rounded-xl bg-gray-600 bg-opacity-20 p-7" />
                {/*
                - Fabulously Optimized
                - Sodium Extra
                - Unofficial Sodium Translation
                - Skript
                 */}
            </section>
            <section className={styles.languages}>
                <h1>class UsingLanguages</h1>
                <div className="my-6 rounded-xl bg-gray-600 bg-opacity-20 p-7" />
                {/*
                ## Speaking
                - Korean
                - English

                ## Front-end
                - Vite React
                - Turbopack Next.js
                - TailwindCSS
                - JSX / TSX
                - CSS, SCSS, PostCSS
                - HTML

                ## Back-end
                - Python
                - Java
                - Skript
                - ShellScript

                ## IDE
                - IntelliJ Idea Ultimate
                - PyCharm Professional
                - WebStorm
                - Visual Studio Code

                ## DevOps
                - Vercel
                - GitHub Pages
                - cloudtype
                - cloudsandbox
                 */}
            </section>
        </main>
    );
}
