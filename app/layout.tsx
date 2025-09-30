//import css or styles
import './ui/global.css';
//import a google font
import { inter } from './ui/fonts';
 /**
  * another way to add a css, can be with css modules
  * ex: home.modules.css
  */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <footer>
        <p>Made with 💟  by Vercel </p> 
      </footer>
    </html>
  );
}
