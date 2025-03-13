import { ThemeProvider } from "next-themes";
import { font } from "@/lib/fonts";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${font.variable}`}>
                <ThemeProvider defaultTheme="system" enableSystem>
                    <main className="w-full max-w-2xl mx-auto">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    )
}