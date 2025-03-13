import LocalFont from "next/font/local";

export const font = LocalFont({
    src: [
        {
            path: "../../public/fonts/SF-Pro-Display-Light.otf",
            style: "light",
            weight: "300"
        },
        {
            path: "../../public/fonts/SF-Pro-Display-Regular.otf",
            style: "normal",
            weight: "400"
        }, 
        {
            path: "../../public/fonts/SF-Pro-Display-Medium.otf",
            style: "medium",
            weight: "500"
        },
        {
            path: "../../public/fonts/SF-Pro-Display-Bold.otf",
            style: "bold",
            weight: "700"
        },
        {
            path: "../../public/fonts/SF-Pro-Display-Heavy.otf",
            style: "extrabold",
            weight: "900"
        }
    ],
    variable: "--sf-display"
})