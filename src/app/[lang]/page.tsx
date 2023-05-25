import Link from "next/link";
import { AtSymbolIcon, GlobeAltIcon, ServerStackIcon } from "@heroicons/react/24/outline";
import AnimatedSimpleIcon from "@/components/modules/simpleIcons/simpleIcons";
import ProjectBannerComponent from "@/components/modules/projectBanner/projectBanner.component";
import PlazmaImage from "@/assets/Plazma.png";
import FomalhautImage from "@/assets/Fomalhaut.jpg";
import SchoolDdayImage from "@/assets/SchoolDday.png";
import ProfileImage from "@/assets/ProfileImage.png";
import MinecraftIcon from "@/assets/icons/MinecraftIcon";
import JavaIcon from "@/assets/icons/JavaIcon";
import NextIcon from "@/assets/icons/NextIcon";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.banner}>
                <div className={styles.glower} />
                <div className={styles.background}>
                    <div className={styles.content}>
                        <p className={styles.start}>Hi! I&apos;m</p>
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
            <section className={styles.section}>
                <span className={styles.title}>
                    <h1>Developing Projects</h1>
                    <p>More info &gt;</p>
                </span>
                <div className={styles.main}>
                    <ProjectBannerComponent
                        image={PlazmaImage}
                        name="Plazma"
                        tagIcons={
                            <>
                                <JavaIcon />
                                <MinecraftIcon />
                                <ServerStackIcon />
                            </>
                        }
                        description="A Server Platform for Minecraft based on Paper"
                        linkIcons={
                            <>
                                <Link href="https://github.com/PlazmaMC/Plazma">
                                    <AnimatedSimpleIcon
                                        id="github"
                                        color={{
                                            primary: "ffffff",
                                            secondary: "ffffff"
                                        }}
                                    />
                                </Link>
                                <Link href="https://discord.gg/5hYydS3AQu">
                                    <AnimatedSimpleIcon
                                        id="discord"
                                        color={{
                                            primary: "ffffff",
                                            secondary: "ffffff"
                                        }}
                                    />
                                </Link>
                            </>
                        }
                        moreInfo={{
                            url: "https://plazmamc.org/",
                            isMove: true
                        }}
                    />
                    <ProjectBannerComponent
                        image={FomalhautImage}
                        name="Fomalhaut"
                        tagIcons={
                            <>
                                <AnimatedSimpleIcon
                                    id="python"
                                    color={{
                                        primary: "ffffff",
                                        secondary: "ffffff"
                                    }}
                                />
                                <AnimatedSimpleIcon
                                    id="discord"
                                    color={{
                                        primary: "ffffff",
                                        secondary: "ffffff"
                                    }}
                                />
                            </>
                        }
                        description="Multithreaded Discord bot based on discord.py"
                        linkIcons={
                            <Link href="https://github.com/TeamEarendel/Fomalhaut">
                                <AnimatedSimpleIcon
                                    id="github"
                                    color={{
                                        primary: "ffffff",
                                        secondary: "ffffff"
                                    }}
                                />
                            </Link>
                        }
                        moreInfo={{
                            url: "",
                            isMove: true
                        }}
                    />
                    <ProjectBannerComponent
                        image={SchoolDdayImage}
                        name="School Dday"
                        tagIcons={
                            <>
                                <NextIcon />
                                <GlobeAltIcon className="h-7 w-7 text-white" />
                            </>
                        }
                        description="A D-day website for my school students"
                        linkIcons={
                            <>
                                <Link href="https://dday.alpha93.kr/">
                                    <AnimatedSimpleIcon
                                        id="github"
                                        color={{
                                            primary: "ffffff",
                                            secondary: "ffffff"
                                        }}
                                    />
                                </Link>
                                <Link href="https://github.com/AlphaKR93/SchoolDday">
                                    <GlobeAltIcon className="h-6 w-6" />
                                </Link>
                            </>
                        }
                        moreInfo={{
                            url: "https://dday.alpha93.kr/",
                            isMove: true
                        }}
                    />
                    <ProjectBannerComponent
                        image={ProfileImage}
                        name="Portfolio"
                        tagIcons={
                            <>
                                <NextIcon />
                                <GlobeAltIcon className="h-7 w-7 text-white" />
                            </>
                        }
                        description="My personal portfolio site (This website)"
                        linkIcons={
                            <>
                                <Link href="https://alpha93.kr/">
                                    <AnimatedSimpleIcon
                                        id="github"
                                        color={{
                                            primary: "ffffff",
                                            secondary: "ffffff"
                                        }}
                                    />
                                </Link>
                                <Link href="https://github.com/AlphaKR93/alpha93.kr">
                                    <GlobeAltIcon className="h-6 w-6" />
                                </Link>
                            </>
                        }
                        moreInfo={{
                            url: "",
                            isMove: true
                        }}
                    />
                </div>
            </section>
            <section className={styles.section}>
                <span className={styles.title}>
                    <h1>Languages and Tools</h1>
                </span>
                <div className={styles.main}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Nulla in purus ac purus tempus pellentesque sit amet et quam.</p>
                    <p>Sed malesuada lectus in nisi porttitor congue eget id tortor.</p>
                    <p>Aenean gravida leo id faucibus blandit.</p>
                </div>
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
            <div className="flex items-center justify-center">
                <h1 className="flex h-max w-max items-center justify-center rounded bg-blue-950 bg-opacity-80 px-4 py-2">
                    View more information
                </h1>
            </div>
        </main>
    );
}
