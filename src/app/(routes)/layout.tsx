import { font } from "@/lib/fonts";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${font.variable}`}>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}