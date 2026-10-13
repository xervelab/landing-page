import { ReactNode } from "react";
import { AppPath } from "../../routes";
import { Navbar } from "../navbar";
import { Footer } from "../footer";

type SiteLayoutProps = {
  currentPath: AppPath;
  children: ReactNode;
};

export function SiteLayout({ currentPath, children }: SiteLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_35%)] bg-background">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-64 h-[26rem] w-[26rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
      </div>
      <Navbar currentPath={currentPath} />
      <main className="relative z-10">{children}</main>
      <Footer currentPath={currentPath} />
    </div>
  );
}
