import { Link } from '@remix-run/react';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { useScrollingUp } from '~/utils/use-scrolling-up';
import { classNames } from '~/utils/class-names';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export function Header() {
  const data = useRootLoader();
  const isScrollingUp = useScrollingUp();
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={classNames(
        isScrollingUp ? 'sticky top-0 z-10 animate-dropIn' : '',
        'bg-white transform shadow-xl',
      )}
    >
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        {/* Logo on the far left */}
        <div className="w-32">
          <Link to="/">
            <img
              src="/logo.svg"
              width={250}
              height={250}
              alt={t('commmon.logoAlt')}
            />
          </Link>
        </div>

        {/* Mobile menu icon */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Centered navigation links (visible on large screens only) */}
        <nav className="hidden lg:flex flex-1 justify-center space-x-6">
          <Link
            className="text-sm md:text-base text-black hover:text-blue-900"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-sm md:text-base text-black hover:text-blue-900"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="text-sm md:text-base text-black hover:text-blue-900"
            to="/product"
          >
            Products
          </Link>
          <Link
            className="text-sm md:text-base text-black hover:text-blue-900"
            to="/sell"
          >
            Sell
          </Link>
        </nav>

        {/* Search Bar (always visible on large screens, and on mobile optionally) */}
        <div className="hidden lg:block flex-grow-0">
          <SearchBar />
        </div>

        {/* Mobile Menu (visible when toggled) */}
        {isMenuOpen && (
          <nav
            className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50 p-4 flex flex-col items-center space-y-4"
            onClick={() => setIsMenuOpen(false)} // This ensures that clicking anywhere inside the menu closes it.
          >
            <Link
              className="text-base text-black hover:text-blue-900"
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-base text-black hover:text-blue-900"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="text-base text-black hover:text-blue-900"
              to="/products"
            >
              Products
            </Link>
            <Link
              className="text-base text-black hover:text-blue-900"
              to="/sell"
            >
              Sell
            </Link>
            <div className="w-full px-4">
              <SearchBar />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
