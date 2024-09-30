import { Link } from '@remix-run/react';
import Logo from '../../../public/logoWhite.svg'; // Ensure the path is correct

export default function Footer() {
  return (
    <footer className="border-t border-ui-border-base w-full bg-[#19355E] py-8 px-6 md:px-12 lg:px-20 xl:px-40 mt-8">
      <div className="content-container flex flex-col w-full">
        {/* Top Section: Logo on the left, Socials on the right */}
        <div className="flex flex-col md:flex-row justify-between items-center py-10 w-full gap-8">
          {/* Logo on the left */}
          <div className="flex justify-center md:justify-start">
            <Link
              to="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            >
              <img
                src={Logo}
                alt="Logo"
                width={200}
                className="w-40 md:w-48 lg:w-56"
              />
            </Link>
          </div>

          {/* Social Links on the right */}
          <div className="flex flex-col items-center md:items-end text-white">
            <span className="text-lg text-white mb-2">Follow Us</span>
            <ul className="flex gap-4 text-sm md:gap-6 lg:gap-8">
              <li>
                <a
                  href="https://www.facebook.com/share/xcz631K38SAyKYpA/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/space_car.cernier?igsh=MXhhcGFxYmt2Zndj&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="wa.me/41767979217s"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-300"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-center gap-4 md:flex-row justify-between w-full mt-6 border-t border-gray-600 pt-6 text-white">
          <p className="txt-compact-small text-center md:text-left">
            © {new Date().getFullYear()} Space-Car. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
