import { useMemo } from "react";
import Logo from "../../../../../../components/logo/Logo";
import FooterLinkList from "./FooterLinkList";
import NewsLetter from "../../newsletter/NewsLetter";
import useGetAllStaticPages from "@/features/static-pages/api/all/useGetAllStaticPages";
// import { myAccount } from "../../../../../../../data/data";
import type { Nav } from "@/types/Nav";
import type { NavbarType } from "@/types/navbar.types";
import { useTranslation } from "react-i18next";
import SocialLinks from "../copyrights/SocialLinks";
// to do  : fav icon and slogan
interface SiteMapProps extends NavbarType {
  contact_address: string;
  contact_email: string;
  contact_phone: string;
  slogan?: string;
  social_facebook: string | null;
  social_twitter: string | null;
  social_instagram: string | null;
  phone: string;
}
const SiteMap: React.FC<SiteMapProps> = ({
  logo,
  contact_address,
  contact_email,
  contact_phone,
  slogan,
  social_facebook,
  social_twitter,
  social_instagram,
  phone,
}) => {
  const { t } = useTranslation();
  const { data } = useGetAllStaticPages();

  const allowedSlugs = ["about-us", "faq"];

  const usefulLinks: Nav[] = useMemo(() => {
    if (!data) return [];
    return data
      .filter((item: any) => !allowedSlugs.includes(item.slug))
      .map((item: any) => ({
        name: item.name,
        link: `static/${item?.id}-${item.slug}`,
      }));
  }, [data]);
  return (
    <section
      className="py-4 border-b border-t"
      aria-labelledby="sitemap-heading"
    >
      <div className="containerr">
        <h2 id="sitemap-heading" className="sr-only">
          Site Map
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-4">
          {/* ✅ Logo + Description */}
          <div>
            <Logo logo={logo} />
            <p className="my-4 text-xs text-gray-500 leading-relaxed">
              {slogan || ""}
            </p>
            <ul>
              {contact_address && (
                <li className="text-transition mb-3">{contact_address}</li>
              )}
              {contact_phone && (
                <li className="text-transition mb-3">
                  <a
                    href={`tel:${contact_phone}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    dir="ltr"
                  >
                    {contact_phone}
                  </a>
                </li>
              )}
              {contact_email && (
                <li className="text-transition lowercase">
                  <a
                    href={`mailto:${contact_email}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {contact_email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {usefulLinks.length > 0 && (
            <FooterLinkList
              links={[
                ...usefulLinks,
                {
                  link: "contact-us",
                  name: "contact us",
                },
              ]}
              title="useful links"
            />
          )}

          <div>
            <h3 className="font-semibold mb-4 text-md lg:text-lg xl:text-xl">
              {t("follow us")}
            </h3>
            <SocialLinks
              social_facebook={social_facebook}
              social_twitter={social_twitter}
              social_instagram={social_instagram}
              phone={phone}
            />
          </div>
          <NewsLetter />
          {/* <FooterLinkList links={myAccount} title="my account" /> */}
        </div>
      </div>
    </section>
  );
};

export default SiteMap;
