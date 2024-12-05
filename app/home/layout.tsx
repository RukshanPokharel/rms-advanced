// this layout is specific for only home page and shared with its children pages or children routes. the children prop will direct to its main page.tsx
// where there is more html and content to render.

import Navbar from "../ui/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Nepalisk Cusine. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
