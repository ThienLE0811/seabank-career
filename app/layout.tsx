import '#/styles/globals.css';
import NavigationBar from '#/ui/NavigationBar';
import '#/services/api/interceptors';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="[color-scheme:dark]">
      <head />
      <body className=" bg-gray-1100 bg-[url('/grid.svg')]">
        <NavigationBar />
        <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
          {children}
        </div>
      </body>
    </html>
  );
}
