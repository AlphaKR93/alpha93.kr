// noinspection HtmlRequiredTitleElement

"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [isReady, updateStatus] = useState(false);
    useEffect(() => updateStatus(true), []);

    return (
        <html lang="en">
            <head>{isReady ? <meta httpEquiv="refresh" content={`0; url=/${navigator.language}`} /> : null}</head>
        </html>
    );
}
