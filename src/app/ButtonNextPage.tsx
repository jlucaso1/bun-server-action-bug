"use client";

import { goToNextPage } from "./action";

type Props = {
  href: string;
  children?: React.ReactNode;
};

export default function Button({ href, children }: Props) {
  return (
    <button
      onClick={async () => {
        await goToNextPage(href);
      }}
    >
      {children}
    </button>
  );
}
