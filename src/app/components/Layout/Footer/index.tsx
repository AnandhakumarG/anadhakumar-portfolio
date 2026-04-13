"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-darkblue dark:bg-darkmode">
      <div className="container py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Column 1 — Brand + Social */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-white font-extrabold text-base">AG</span>
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-tight">Anandhakumar G</p>
                <p className="text-white/50 text-xs">Data Engineer · ETL Developer</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Dynamic data warehouse engineer with 3.5+ years of experience delivering
              high-quality ETL integration solutions in Agile environments.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/anandhakumar-gunasekarapandian-06bb5a1ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Icon icon="tabler:brand-linkedin" width={20} height={20} />
              </a>
              <a
                href="https://profile.indeed.com/p/anandhakumarg-16xyzj0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Icon icon="simple-icons:indeed" width={20} height={20} />
              </a>
             <a
  href="mailto:mailtoanandhakumar@gmail.com"
  aria-label="Email"
  className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-primary hover:text-white transition-all duration-200"
>
  <Icon icon="tabler:mail" width={20} height={20} />
</a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <p className="text-white font-semibold text-base mb-6">Quick Links</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About", href: "/#about" },
                { label: "Experience", href: "/#experience" },
                { label: "Skills", href: "/#skills" },
                { label: "Education", href: "/#education" },
                { label: "Contact", href: "/#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary text-sm font-normal flex items-center gap-2 group transition-colors duration-200"
                  >
                    <Icon
                      icon="tabler:chevron-right"
                      width={14}
                      height={14}
                      className="text-primary opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact Info */}
          <div>
            <p className="text-white font-semibold text-base mb-6">Contact Info</p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <Icon icon="tabler:map-pin" width={20} height={20} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/60">Chennai, Tamil Nadu, India</p>
              </div>
              <div className="flex gap-3 items-center">
                <Icon icon="tabler:phone" width={20} height={20} className="text-primary flex-shrink-0" />
                <a
                  href="tel:7904113886"
                  className="text-sm text-white/60 hover:text-primary transition-colors duration-200"
                >
                  +91 7904113886
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Icon icon="tabler:mail" width={20} height={20} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:mailtoanandhakumar@gmail.com"
                  className="text-sm text-white/60 hover:text-primary transition-colors duration-200"
                >
                  mailtoanandhakumar@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-sm text-white/40">
            © {new Date().getFullYear()} Anandhakumar G. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
