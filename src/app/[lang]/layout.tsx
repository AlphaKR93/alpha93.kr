import "./globals.css";
import React from "react";
import AnalyticsProvider from "@/components/modules/provider/analyticsProvider";
import HeaderComponent from "@/components/main/header/header.component";
import FooterComponent from "@/components/main/footer/footer.component";
import localFont from "next/font/local";
import styles from "./layout.module.css";

const font = localFont({
    src: [
        {
            path: "../fonts/EliceDigitalCoding_Regular.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../fonts/EliceDigitalCoding_Bold.ttf",
            weight: "700",
            style: "bold"
        }
    ],
    display: "swap"
});

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
    // noinspection HtmlRequiredTitleElement
    return (
        <html lang={params.lang} className={font.className}>
            {["en", "ko"].includes(params.lang) ? (
                <body className={styles.body}>
                    <HeaderComponent />
                    {children}
                    <FooterComponent />
                    <AnalyticsProvider />
                </body>
            ) : (
                <head>
                    <meta httpEquiv="refresh" content="0; url=/ko" />
                </head>
            )}
        </html>
    );
}
