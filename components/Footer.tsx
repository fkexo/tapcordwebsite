import Link from "next/link";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Latest News", href: "/latest-news" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1128] border-t border-[#8A99B4]/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Tapcord Engineering</h3>
            <p className="text-[#FFB700] text-sm font-medium mb-4">
              Quality. Safety. Reliability. Every time.
            </p>
            <p className="text-gray-400 text-sm">
              Building Nigeria&apos;s infrastructure with expert MEP solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFB703] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="text-[#FFB703]">Lagos:</span>{" "}
                <a href="tel:08140790116" className="hover:text-[#FFB703] transition-colors">
                  08140790116
                </a>
              </p>
              <p>
                <span className="text-[#FFB703]">Onitsha:</span>{" "}
                <a href="tel:07025455698" className="hover:text-[#FFB703] transition-colors">
                  07025455698
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#8A99B4]/10 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Tapcord Engineering — Building Nigeria&apos;s infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
}