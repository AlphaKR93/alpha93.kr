import Image from "next/image";
import Link from "next/link";
import {AtSymbolIcon} from "@heroicons/react/24/outline";
import AnimatedSimpleIcon from "@/components/modules/simpleIcons/simpleIcons";
import styles from "./header.module.css";
import ProfilePicture from "./ProfileImage.png";

export default function HeaderComponent() {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/" className="relative">
                    <div className="h-13 w-13 absolute inset-0 rounded-full bg-blue-600 bg-opacity-50 blur" />
                    <Image
                        src={ProfilePicture}
                        alt="Profile Image"
                        width={60}
                        height={60}
                        className="relative rounded-full"
                    />
                </Link>
                <span className="ml-8 flex gap-6">
                    <Link href="/">HOME</Link>
                    <Link href="/">ABOUT</Link>
                    <Link href="/">PROJECTS</Link>
                    <Link href="/">BLOG</Link>
                </span>
                <div className="ml-11 flex w-full justify-end gap-4">
                    <div className="flex items-center">
                        <div className="flex h-max items-center gap-3 border-r border-gray-700 pr-3">
                            <Link href="mailto:dev@alpha93.kr">
                                <AtSymbolIcon className="text-gray-500 " width={24} />
                            </Link>
                            <Link href="mailto:dev@alpha93.kr" className="h-max w-max">
                                <AnimatedSimpleIcon
                                    id="twitter"
                                    color={{
                                        primary: "6B7280",
                                        secondary: "ffffff"
                                    }}
                                />
                            </Link>
                            <Link href="mailto:dev@alpha93.kr" className="h-max w-max">
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
                    <span className="flex gap-4">
                        <Link
                            href="https://toss.me/alphakr93"
                            className="flex h-9 items-center rounded-md border border-gray-800 px-4 text-sm"
                        >
                            SOURCE
                        </Link>
                        <Link
                            href="https://toss.me/alphakr93"
                            className="flex h-9 items-center rounded-md bg-gray-800 px-4 text-sm"
                        >
                            DONATE
                        </Link>
                    </span>
                </div>
            </nav>
        </header>
    );
}
