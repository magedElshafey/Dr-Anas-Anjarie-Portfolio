// src/common/components/logo/Logo.tsx
import { Link } from "react-router-dom";

interface LogoProps {
  logo?: string;
}

const Logo: React.FC<LogoProps> = ({ logo }) => {
  const src = logo || "/images/logo.png";

  return (
    <Link to="/" className="shrink-0" aria-label="Go to homepage">
      {src ? (
        <img
          alt="Clinic logo"
          src={src}
          loading="lazy"
          className="h-[44px] w-auto object-contain"
        />
      ) : (
        <h1 className="text-sm font-semibold text-primaryDarkGreen">
          Eye Clinic
        </h1>
      )}
    </Link>
  );
};

export default Logo;
