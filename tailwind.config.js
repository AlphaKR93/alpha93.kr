// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                elice: ["Elice Digital Coding", "monospace"]
            }
        }
    },
    plugins: [
        "flowbite/plugin",
        plugin(function Plugin({ addComponents }) {
            addComponents({
                ".trans": {
                    transition: "all 0.2s ease-in-out"
                }
            });
        })
    ]
};
