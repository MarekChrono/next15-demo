import { Suspense } from "react";
import Header from "../Header";

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("render layout");
  return (
    <main>
      <Header />
      <section className="flex min-h-screen flex-col items-center justify-between p-24">
        <Suspense>{children}</Suspense>
      </section>
    </main>
  );
}
