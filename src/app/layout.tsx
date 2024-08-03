import type { Metadata } from "next";
import ThemeProvider from "./theme-provider";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Next JS",
  description: "studing Next JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <ThemeProvider>
            <StoreProvider>{children}</StoreProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
