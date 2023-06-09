
import Link from "next/link"
const Header = () => {
  return (
    <header className="fixed w-full z-[100]">
      <nav className="bg-new-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-new-black">
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center tracking-widest">
        
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-vibrant-green">
             HULK-Pharma
            </span>
          </Link>

        </div>
      </nav>
    </header>
  );
};

export default Header;
