import Footer from "../Footer";
import Header from "../Header";

export default function MainLayout({ children }) {
    return (
        <div className="overflow-x-hidden">
            <Header />
            {children}
            <Footer />
        </div>
    );
};