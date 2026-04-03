import SearchExplorer from "../components/search-explorer";


export default function HomePage() {
  return (
    // F-1: Main Listing Page Container
    <main className="min-h-screen bg-white">
      {/* 1. Top Section / Hero */}
      <header className="py-16 px-4 border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-black text-gray-900 tracking-tight mb-4">
            ShopExplorer<span className="text-blue-600">.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Discover the best products with our powerful search and filtering tools. Start exploring now!
          </p>
        </div>
      </header>

      {/* 2. The Interactive Content (F-1, F-3, F-4) */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <SearchExplorer />
      </div>

      {/* 3. Simple Footer */}
      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} ShopExplorer Technical Assessment
      </footer>
    </main>
  );
}