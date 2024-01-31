import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";


export const metadata = {
    title: 'INTERIOR-DESIGN.AI',
    description: 'Redesign Interiors with AI, in Less than 30 Seconds - Upload your photo, choose a mode and pick from over 40 design styles. Re-imagine Any Home Interior, Exterior, or Garden using AI.',
}

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}