import { Link } from "react-router-dom";
interface LogoProps {
  logo?: string;
}
const Logo: React.FC<LogoProps> = ({ logo = "" }) => {
  return (
    <Link to="/" className="shrink-0">
      {logo ? (
        <img
          alt="clinic logo"
          src={logo || "/images/logo.png"}
          className="h-[44px]w-auto object-contain"
        />
      ) : (
        <h1 className="text-sm font-semibold text-primaryDarkGreen">logo</h1>
      )}
    </Link>
  );
};

export default Logo;
