import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Cornell Electric Vehicles",
  description:
    "Updates, competition recaps, and stories from Cornell Electric Vehicles.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
