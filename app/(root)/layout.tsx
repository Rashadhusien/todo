import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <main className="min-h-screen bg-background">{children}</main>;
};

export default RootLayout;
