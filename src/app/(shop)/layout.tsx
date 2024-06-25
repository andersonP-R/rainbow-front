import { Footer, Sidebar, TopMenu } from "@/components";
import { useParams } from "next/navigation";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen ">
      <TopMenu />
      <Sidebar />
      <div className="px-1 sm:px-6">{children}</div>
      <Footer />
    </main>
  );
}
