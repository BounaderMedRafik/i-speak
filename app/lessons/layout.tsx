import Nav from "@/components/lessons/Nav";

export default function LessonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="pt-36">{children}</div>
    </div>
  );
}
