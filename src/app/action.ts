"use server";

import { redirect } from "next/navigation";

export const goToNextPage = async (href: string) => {
  redirect(href);
};
