import { type ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative mx-auto flex h-screen w-full max-w-[560px] flex-col overflow-hidden">
      {children}
    </div>
  );
};
