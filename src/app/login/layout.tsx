import { PageWrapper } from "@/components/layout";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageWrapper>{children}</PageWrapper>;
}
