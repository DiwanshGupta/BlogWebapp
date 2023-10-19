import Footer from "./components/Footer/footer";
import Navbar from "./components/navbar/navbar";
import { ThemeContextProvider } from "./context/themecontext";
import "./globals.css";
import { Inter } from "next/font/google";
import Themeprovider from "./provider/themeprovider";
import "font-awesome/css/font-awesome.min.css";
import Authprovider from "./provider/authprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog website",
  description: "Created by Diwansh Gupta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className `}>
        <Authprovider>
          <ThemeContextProvider>
            <div className="bgmain">
              <Themeprovider>
                <div className=" mr-auto ml-auto  md:pl-20 md:pr-20">
                  <div className=" p-2">
                    <Navbar />
                    {children}
                    <Footer />
                  </div>
                </div>
              </Themeprovider>
            </div>
          </ThemeContextProvider>
        </Authprovider>
      </body>
    </html>
  );
}
