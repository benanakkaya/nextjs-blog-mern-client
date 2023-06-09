import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Toast from "./components/Toast/Toast";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/User";

export const metadata = {
  title: "Next.js Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-nunito">
        <UserProvider>
        <Toast />
          <Header />
        <div className="px-3 py-2 sm:px-6 sm:py-2 md:px-16 md:py-3 lg:px-32 lg:py-6 grid grid-cols-3 gap-4">
          <div className="col-span-3 lg:col-span-2">{children}</div>
          <Sidebar />
        </div>
        <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
