import LangSetter from "@/components/LangSetter";

export default function SvLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LangSetter lang="sv" />
      {children}
    </>
  );
}
