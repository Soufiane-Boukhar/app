import Link from 'next/link';

export default function Nav() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href="https://flowbite.com" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FirstApp</span>
          </Link>
        </div>
      </nav>

      

      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-900 dark:text-white hover:underline">About</Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-900 dark:text-white hover:underline">Register</Link>
              </li>
              <li>
                <Link href="/" className="text-gray-900 dark:text-white hover:underline">Features</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
