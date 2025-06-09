import ActionCard from '../components/common/ActionCard';
import QuickStatus from '../components/common/QuickStatus';

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
          <ActionCard
            title="Your Collection"
            description="View and manage all your books in one place"
            buttonText="Browse Library"
            href="/library"
          />
          <ActionCard
            title="Add New Books"
            description="Expand your collection with new discoveries"
            buttonText="Add Book"
            href="/add-book"
          />
        </div>
        <QuickStatus />
      </div>
    </div>
  );
}