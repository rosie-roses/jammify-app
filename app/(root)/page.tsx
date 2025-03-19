import Header from "@/components/Header";

export default function Home() {
  return (
    <section className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 px-4 gap-x-4 bg-content1">
        main content
      </div>
      <div className="h-25 bg-content1">
        player
      </div>
    </section>
  );
}
