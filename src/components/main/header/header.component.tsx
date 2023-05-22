import Image from "next/image";
import Link from "next/link";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import AnimatedSimpleIcon from "@/components/modules/simpleIcons/simpleIcons";
import styles from "./header.module.css";
import ProfilePicture from "./ProfileImage.png";

export default function HeaderComponent() {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/" className={styles.logo}>
                    <div />
                    <Image src={ProfilePicture} alt="Profile Image" width={60} height={60} />
                </Link>
                <span className={styles.navigation}>
                    <Link href="/">HOME</Link>
                    <Link href="/about">ABOUT</Link>
                    <Link href="/projects">PROJECTS</Link>
                    <Link href="/blog">BLOG</Link>
                </span>
                <div className={styles.featureButtons}>
                    <div className={styles.icons}>
                        <div className={styles.main}>
                            <Link href="mailto:dev@alpha93.kr">
                                <AtSymbolIcon />
                            </Link>
                            <Link href="mailto:dev@alpha93.kr">
                                <AnimatedSimpleIcon
                                    id="twitter"
                                    color={{
                                        primary: "6B7280",
                                        secondary: "ffffff"
                                    }}
                                />
                            </Link>
                            <Link href="mailto:dev@alpha93.kr">
                                <AnimatedSimpleIcon
                                    id="github"
                                    color={{
                                        primary: "6B7280",
                                        secondary: "ffffff"
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                    <span className={styles.buttons}>
                        <Link href="https://toss.me/alphakr93" className={styles.default}>
                            SOURCE
                        </Link>
                        <Link href="https://toss.me/alphakr93" className={styles.accent}>
                            <div />
                            <p>DONATE</p>
                        </Link>
                    </span>
                </div>
            </nav>
        </header>
    );
}
