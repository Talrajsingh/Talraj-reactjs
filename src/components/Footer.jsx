export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-[6%] sm:px-[12%] py-12">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + email */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <a href="#top">
              <img src="/assets/logo.png"      alt="Logo" className="w-28 dark:hidden" />
              <img src="/assets/logo_dark.png" alt="Logo" className="w-28 hidden dark:block" />
            </a>
            <a
              href="mailto:talrajsingh13@gmail.com"
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/50 hover:text-violet-500 dark:hover:text-violet-400 transition-colors font-Space"
            >
              <img src="./assets/mail_icon.png"      alt="" className="w-4 dark:hidden" />
              <img src="./assets/mail_icon_dark.png" alt="" className="w-4 hidden dark:block" />
              Talrajsingh13@gmail.com
            </a>
          </div>

          {/* Links */}
          <ul className="flex items-center gap-6 font-Space text-sm text-gray-500 dark:text-white/50">
            {[
              { label: 'GitHub',   href: 'https://github.com/Talrajsingh' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/talraj-bhatia' },
              { label: 'Contact',  href: '#contact' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center mt-10 text-xs text-gray-400 dark:text-white/25 font-Space">
          © {new Date().getFullYear()} Talraj Bhatia. Designed & built with ♥ in Indore.
        </p>
      </div>
    </footer>
  )
}
