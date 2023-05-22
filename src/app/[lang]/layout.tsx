import "./globals.css";
import React from "react";
import AnalyticsProvider from "@/components/modules/provider/analyticsProvider";
import HeaderComponent from "@/components/main/header/header.component";
import FooterComponent from "@/components/main/footer/footer.component";
import styles from "./layout.module.css";

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
    // noinspection HtmlRequiredTitleElement
    return (
        <html lang={params.lang} className="font-elice">
            {["en-US", "ko-KR"].includes(params.lang) ? (
                <body className={styles.body}>
                    <HeaderComponent />
                    {children}
                    <FooterComponent />
                    <AnalyticsProvider />
                </body>
            ) : (
                <head>
                    <meta httpEquiv="refresh" content="0; url=/" />
                </head>
            )}
        </html>
    );
}
