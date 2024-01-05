export const metadata = {
  title: "Welcome",
  description: "Web application summary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
