import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Contact
            </h3>
            <p className="text-sm mb-1">Phone: +91 79995 55222</p>
            <p className="text-sm">Email: book@postcardresorts.com</p>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#terms" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#refund" className="hover:underline">
                  Cancellation & Refunds
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Follow Us
            </h3>
            <div className="flex space-x-4 text-gray-600">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-900"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-gray-900"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-gray-900"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} All rights reserved by{" "}
          <a
            href="https://ratebotai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Ratebotai.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
