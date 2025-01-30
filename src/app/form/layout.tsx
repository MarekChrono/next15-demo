import { Suspense } from "react";

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className="flex flex-col items-center justify-between bg-slate-100 p-4">
        <h1 className="text-4xl text-black font-bold">Pizza Shop Finder</h1>
      </header>
      <section className="flex min-h-screen flex-col items-center justify-between p-24">
        <Suspense>{children}</Suspense>
      </section>
    </main>
  );
}
