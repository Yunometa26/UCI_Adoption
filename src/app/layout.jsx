export const metadata = {
  title: 'UCI Adoption Dashboard',
  description: 'Excel-based KPIs powered by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
