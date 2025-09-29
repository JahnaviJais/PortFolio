import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-secondary/20 py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <div className="flex flex-col items-center justify-center gap-2">
          {/* Made with Love */}
          <div className="flex items-center gap-2 text-secondary">
            <span className="text-sm sm:text-base">Made with</span>
            <span className="text-red-500 text-xl animate-pulse" aria-label="love">
              ❤️
            </span>
            <span className="text-sm sm:text-base">by Jahnavi Jaiswal</span>
          </div>

          {/* Copyright */}
          <p className="text-secondary text-xs sm:text-sm">
            © {currentYear} Jahnavi Jaiswal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;