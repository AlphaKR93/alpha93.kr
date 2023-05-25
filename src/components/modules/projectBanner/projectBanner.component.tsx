import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./projectBanner.module.css";

export default function ProjectBannerComponent(props: {
    image: StaticImageData;
    name: string;
    tagIcons: JSX.Element | null;
    description: string;
    linkIcons: JSX.Element | null;
    moreInfo: { url: string; isMove: boolean } | null;
}) {
    const { image, name, tagIcons, description, linkIcons, moreInfo } = props;

    return (
        <div className={styles.banner}>
            <div className={styles.title}>
                <Image src={image} alt={`${name} Icon`} width={64} height={64} />
                <div className={styles.projectTitle}>
                    <h1>{name}</h1>
                    {tagIcons !== null ? <div className={styles.tagIcons}>{tagIcons}</div> : null}
                </div>
            </div>
            <p className={styles.description}>{description}</p>
            {linkIcons !== null || moreInfo !== null ? (
                <div className="mx-3 mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">{linkIcons}</div>
                    {moreInfo !== null ? (
                        <Link className="text-sm text-gray-500" href={moreInfo.url}>
                            {moreInfo.isMove ? "View " : "More info"} &gt;
                        </Link>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
}
