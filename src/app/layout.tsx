import "./normalize.scss";
import { MainLayout } from "@/shared/layouts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
            <MainLayout>{children}</MainLayout>
            
        </body>
    </html>
  );
}
