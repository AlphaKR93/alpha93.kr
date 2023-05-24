import Link from "next/link";
import { AtSymbolIcon, GlobeAltIcon, ServerStackIcon } from "@heroicons/react/24/outline";
import AnimatedSimpleIcon from "@/components/modules/simpleIcons/simpleIcons";
import PlazmaImage from "@/assets/Plazma.png";
import FomalhautImage from "@/assets/Fomalhaut.jpg";
import SchoolDdayImage from "@/assets/SchoolDday.png";
import ProfileImage from "@/assets/ProfileImage.png";
import FabulouslyOptimizedImage from "@/assets/FabulouslyOptimized.png";
import SodiumExtraImage from "@/assets/SodiumExtra.png";
import SodiumImage from "@/assets/Sodium.png";
import SkriptImage from "@/assets/SkriptLang.png";
import MinecraftIcon from "@/assets/icons/MinecraftIcon";
import JavaIcon from "@/assets/icons/JavaIcon";
import NextIcon from "@/assets/icons/NextIcon";
import ProjectBannerComponent from "@/components/modules/projectBanner/projectBanner.component";
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
                    <h1>Teams</h1>
                </span>
                <div className={styles.main}>
                    <ProjectBannerComponent
                        image={PlazmaImage}
                        name="PlazmaMC"
                        tagIcons={null}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <ProjectBannerComponent
                        image={SodiumExtraImage}
                        name="Team Earendel"
                        tagIcons={null}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <ProjectBannerComponent
                        image={SodiumImage}
                        name="MDD & MCC"
                        tagIcons={null}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <ProjectBannerComponent
                        image={FabulouslyOptimizedImage}
                        name="FO Translation"
                        tagIcons={null}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
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
                    />
                    <ProjectBannerComponent
                        image={FomalhautImage}
                        name="Fomalhaut"
                        tagIcons={
                            <>
                                <NextIcon />
                                <GlobeAltIcon className="h-7 w-7 text-white" />
                            </>
                        }
                        description="Multithreaded Discord bot engine based on discord.py"
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
                        description="D-day site for my school"
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
                        description="My personal ortfolio site (This website)"
                    />
                </div>
            </section>
            <section className={styles.section}>
                <span className={styles.title}>
                    <h1>Translating Projects</h1>
                    <p>More info &gt;</p>
                </span>
                <div className={styles.main}>
                    <ProjectBannerComponent
                        image={FabulouslyOptimizedImage}
                        name="FO MMH, CRH"
                        tagIcons={
                            <>
                                <JavaIcon />
                                <MinecraftIcon />
                            </>
                        }
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <ProjectBannerComponent
                        image={SodiumExtraImage}
                        name="Sodium Extra"
                        tagIcons={
                            <>
                                <NextIcon />
                                <GlobeAltIcon className="h-7 w-7 text-white" />
                            </>
                        }
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <ProjectBannerComponent
                        image={SodiumImage}
                        name="Sodium"
                        tagIcons={
                            <>
                                <NextIcon />
                                <GlobeAltIcon className="h-7 w-7 text-white" />
                            </>
                        }
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <ProjectBannerComponent
                        image={SkriptImage}
                        name="Skript"
                        tagIcons={
                            <>
                                <NextIcon />
                                <GlobeAltIcon className="h-7 w-7 text-white" />
                            </>
                        }
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
        </main>
    );
}
