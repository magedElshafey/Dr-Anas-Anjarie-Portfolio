import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="
        mt-10
        pt-12 pb-6
        bg-[var(--footer-bg)]
        text-[var(--footer-text)]
        transition-colors duration-300
      "
    >
      {/* Top section */}
      <div
        className="
          containerr
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10
          text-sm
          leading-[calc(1.6*var(--a11y-line-height-scale))]
        "
      >
        {/* Logo + About */}
        <div>
          <img
            src="/images/logo.png"
            alt="clinic logo"
            className="h-12 w-auto mb-3"
          />

          <p className="text-[var(--footer-muted)]">
            {t("Footer.desc", {
              defaultValue:
                "Providing world-class eye care, advanced procedures and trusted specialists to help you see life clearly.",
            })}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="#"
              className="
                w-9 h-9 flex items-center justify-center rounded-full
                bg-[var(--footer-icon-bg)]
                hover:bg-softYellowLight hover:text-primaryGreen
                transition
              "
              aria-label="facebook"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="#"
              className="
                w-9 h-9 flex items-center justify-center rounded-full
                bg-[var(--footer-icon-bg)]
                hover:bg-softYellowLight hover:text-primaryGreen
                transition
              "
              aria-label="instagram"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="#"
              className="
                w-9 h-9 flex items-center justify-center rounded-full
                bg-[var(--footer-icon-bg)]
                hover:bg-softYellowLight hover:text-primaryGreen
                transition
              "
              aria-label="youtube"
            >
              <FaYoutube size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-softYellowLight text-[0.78rem] font-semibold mb-4 tracking-wide uppercase">
            {t("Footer.quick")}
          </h4>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-softYellowLight">
                {t("Navbar.Home")}
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-softYellowLight">
                {t("Navbar.About us")}
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-softYellowLight">
                {t("Navbar.contact us")}
              </Link>
            </li>
            <li>
              <Link
                to="/vision-simulator"
                className="hover:text-softYellowLight"
              >
                {t("Navbar.vision simulator")}
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:text-softYellowLight">
                {t("Footer.book")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Procedures */}
        <div>
          <h4 className="text-softYellowLight text-[0.78rem] font-semibold mb-4 tracking-wide uppercase">
            {t("Navbar.Procedures")}
          </h4>

          <ul className="space-y-2">
            <li>
              <Link
                to="/procedures/cosmetic-oculoplastic"
                className="hover:text-softYellowLight"
              >
                {t("Navbar.Cosmetic & Oculoplastic")}
              </Link>
            </li>

            <li>
              <Link
                to="/procedures/corneal"
                className="hover:text-softYellowLight"
              >
                {t("Navbar.Corneal")}
              </Link>
            </li>

            <li>
              <Link
                to="/procedures/glaucoma"
                className="hover:text-softYellowLight"
              >
                {t("Navbar.Glaucoma")}
              </Link>
            </li>

            <li>
              <Link
                to="/procedures/retinal"
                className="hover:text-softYellowLight"
              >
                {t("Navbar.Retinal")}
              </Link>
            </li>

            <li>
              <Link
                to="/procedures/cataracts"
                className="hover:text-softYellowLight"
              >
                {t("Navbar.Cataracts")}
              </Link>
            </li>

            <li>
              <Link
                to="/procedures/lens-replacement-surgery"
                className="hover:text-softYellowLight"
              >
                {t("Navbar.Lens Replacement Surgery")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-softYellowLight text-[0.78rem] font-semibold mb-4 tracking-wide uppercase">
            {t("Footer.contact")}
          </h4>

          <ul className="space-y-2">
            <li>
              {t("Footer.hotline")}:{" "}
              <span className="text-softYellowLight">123-456-789</span>
            </li>
            <li>{t("Footer.address")}: Cairo, Egypt</li>
            <li>Email: info@eyeclinic.com</li>
            <li>{t("Footer.hours")}: 9:00am – 8:00pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        className="
          mt-12 pt-4
          border-t border-[var(--footer-border)]
          text-center text-xs
          text-[var(--footer-muted)]
        "
      >
        © 2025 Eye Clinic —{" "}
        {t("Footer.rights", { defaultValue: "All rights reserved." })}
      </div>
    </footer>
  );
}
