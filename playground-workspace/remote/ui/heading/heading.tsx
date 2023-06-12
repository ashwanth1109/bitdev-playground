import type { ReactNode } from 'react';

export type HeadingProps = {
  children?: ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <h1 className="text-white-primary text-3xl font-bold underline">
      {children}
    </h1>
  );
}
