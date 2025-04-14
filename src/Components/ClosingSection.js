import React from 'react';

const ClosingSection = () => {
  return (
    <>
      <footer className="font-jakarta w-full bg-[#0f0f0f] mx-auto px-20 py-16 space-y-16 text-white">
        {/* Reviews Section */}
        <div className="flex flex-col items-start gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="w-4 h-4">
                ★
              </span>
            ))}
          </div>
          <a
            href="/reviews"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            READ OUR CLIENT REVIEWS
          </a>
        </div>

        {/* Main Heading */}
        <div className="space-y-2">
          <h2 className="text-5xl font-normal">Text us,</h2>
          <h2 className="text-5xl font-normal">Let's get to work.</h2>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="font-medium font-high text-xl">MONOCHROME</h3>
            <div className="space-y-2 text-sm">
              <p>106104, Lapai Close</p>
              <p>Lagos, NG</p>
              <a href="mailto:iyohajessy@gmail.com" className="hover:underline">
                iyohajessy@gmail.com
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm">SERVICES</h3>
            <div className="space-y-2 text-sm">
              <a href="/work" className="block hover:underline">
                Work
              </a>
              <a href="/about" className="block hover:underline">
                About
              </a>
              <a href="/team" className="block hover:underline">
                Team
              </a>
            </div>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm">RESOURCES</h3>
            <div className="space-y-2 text-sm">
              <a href="/freebies" className="block hover:underline">
                Freebies
              </a>
              <a href="/blog" className="block hover:underline">
                Blog
              </a>
              <a href="/contact" className="block hover:underline">
                Contact
              </a>
            </div>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm">SOCIAL</h3>
            <div className="space-y-2 text-sm">
              <a href="https://instagram.com" className="block hover:underline">
                Instagram
              </a>
              <a href="https://facebook.com" className="block hover:underline">
                Facebook
              </a>
              <a href="https://dribbble.com" className="block hover:underline">
                Dribbble
              </a>
              <a href="https://webflow.com" className="block hover:underline">
                Webflow
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ClosingSection
