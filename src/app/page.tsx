import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 px-4">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to Your <span className="text-indigo-600">Book Library</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-10">
          Organize your reading journey. Track what you've read, discover new titles,
          and never lose sight of your next great adventure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Your Collection</h3>
            <p className="text-gray-600 mb-4">View and manage all your books in one place</p>
            <Link 
              href="/library"
              className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Browse Library
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Add New Books</h3>
            <p className="text-gray-600 mb-4">Expand your collection with new discoveries</p>
            <Link 
              href="/add-book"
              className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Add Book
            </Link>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Quick Stats</h3>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">24</div>
              <div className="text-sm text-gray-500">Total Books</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">18</div>
              <div className="text-sm text-gray-500">Books Read</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">6</div>
              <div className="text-sm text-gray-500">To Read</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}