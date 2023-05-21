import React from "react";
import styles from "./simpleIcons.module.css";

export default function AnimatedSimpleIcon(props: { id: string; color: { primary: string; secondary: string } }) {
    const { id, color } = props;
    return (
        <div
            className={styles.icon}
            style={
                {
                    "--primary": `url(https://cdn.simpleicons.org/${id}/${color.primary})`,
                    "--secondary": `url(https://cdn.simpleicons.org/${id}/${color.secondary})`
                } as React.CSSProperties
            }
        />
    );
}
