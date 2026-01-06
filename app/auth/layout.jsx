

export default function AuthLayout({children}) {

    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <header className="text-3xl font-bold text-gray-800 mb-8">
        Authentication
      </header>
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
}