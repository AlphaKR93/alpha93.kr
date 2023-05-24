import Image, { StaticImageData } from "next/image";
import styles from "./projectBanner.module.css";

export default function ProjectBannerComponent(props: {
    image: StaticImageData;
    name: string;
    tagIcons: JSX.Element | null;
    description: string;
}) {
    const { image, name, tagIcons, description } = props;

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
        </div>
    );
}
