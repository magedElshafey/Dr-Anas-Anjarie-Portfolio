// src/features/contact/pages/Contact.tsx (أو نفس المسار عندك)
import MainInput from "@/common/components/inputs/MainInput";
import MainBtn from "@/common/components/buttons/MainBtn";
import MainTextArea from "@/common/components/inputs/MainTextArea";
import useContactusLogic from "./logic/useContactusLogic";
import useGetContactSettings from "../../api/contact/useGetContactSettings";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/common/components/sections/SectionTitle";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const { register, errors, handleSubmit, onSubmit, isPending } =
    useContactusLogic();
  const queryResult = useGetContactSettings();

  const isRTL = i18n.dir() === "rtl";

  return (
    <main
      aria-label={t("Contact.pageAria", "Contact us page")}
      className="bg-[var(--page-bg,#f6f4ef)] text-[var(--page-text,#0f172a)]"
    >
      <div className="containerr py-8 md:py-10 lg:py-12">
        {/* Map section */}
        <FetchHandler queryResult={queryResult} skeletonType="slider">
          {queryResult?.data?.iframe && (
            <section
              className="w-full h-[250px] lg:h-[400px] overflow-hidden mb-8 rounded-2xl border border-softGray/70 bg-slate-100 relative"
              aria-label={t("Contact.mapAria", "Clinic location map")}
            >
              <div
                className="[&_iframe]:absolute [&_iframe]:top-0 [&_iframe]:left-0 [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:border-0"
                dangerouslySetInnerHTML={{
                  __html: queryResult.data.iframe,
                }}
              />
            </section>
          )}
        </FetchHandler>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Form */}
          <section
            aria-labelledby="contact-form-heading"
            className="rounded-2xl bg-[var(--section-bg,white)] border border-softGray/60 p-4 md:p-6 lg:p-7 shadow-sm"
          >
            <SectionTitle
              as="h1"
              id="contact-form-heading"
              text="Contact.title" /* حط key في الترانسليشن زى Contact.title = 'Contact us' */
            />

            <p className="mt-2 mb-5 text-xs md:text-sm text-slate-600">
              {t(
                "Contact.subtitle",
                "Send us a message and a member of the team will get back to you."
              )}
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full space-y-4"
              noValidate
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="col-span-2">
                  <MainInput
                    placeholder="subject"
                    label="subject"
                    enableAutocomplete
                    storageKey="contact_subject"
                    {...register("subject")}
                    error={errors.subject?.message}
                  />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <MainInput
                    required
                    placeholder="user name"
                    label="user name"
                    enableAutocomplete
                    storageKey="contact_name"
                    {...register("name")}
                    error={errors.name?.message}
                  />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <MainInput
                    required
                    type="email"
                    placeholder="email"
                    label="email"
                    enableAutocomplete
                    storageKey="contact_email"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <MainInput
                    placeholder="phone"
                    label="phone"
                    enableAutocomplete
                    storageKey="contact_phone"
                    {...register("phone")}
                    error={errors.phone?.message}
                  />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <MainInput
                    placeholder="address"
                    label="address"
                    enableAutocomplete
                    storageKey="contact_address"
                    {...register("address")}
                    error={errors.address?.message}
                  />
                </div>

                <div className="col-span-2">
                  <MainTextArea
                    placeholder="contact message"
                    label="contact message"
                    rows={5}
                    {...register("message")}
                    error={errors.message?.message}
                  />
                </div>
              </div>

              <div className="w-full flex justify-center pt-2">
                <div className="w-full md:w-[180px]">
                  <MainBtn
                    type="submit"
                    className="w-full flex justify-center"
                    text="send"
                    isPending={isPending}
                  />
                </div>
              </div>
            </form>
          </section>

          {/* Contact info */}
          <section
            aria-labelledby="contact-info-heading"
            className={`
              rounded-2xl bg-[var(--section-bg,white)] border border-softGray/60 p-4 md:p-6 lg:p-7 shadow-sm
              ${
                isRTL
                  ? "md:border-r-4 md:border-l-0"
                  : "md:border-l-4 md:border-r-0"
              }
              border-[var(--field-focus-border)]
            `}
          >
            <SectionTitle
              as="h2"
              id="contact-info-heading"
              text="Contact.infoTitle" /* مثال: 'Contact information' */
            />

            <div className="mt-4 space-y-4 text-sm md:text-base text-slate-700">
              {queryResult?.data?.contact_address && (
                <div>
                  <p className="font-semibold">{t("address")}</p>
                  <p className="mt-0.5">{queryResult.data.contact_address}</p>
                </div>
              )}

              {queryResult?.data?.contact_email && (
                <div>
                  <p className="font-semibold">{t("email")}</p>
                  <a
                    href={`mailto:${queryResult.data.contact_email}`}
                    className="mt-0.5 inline-block lowercase hover:underline"
                  >
                    {queryResult.data.contact_email}
                  </a>
                </div>
              )}

              {queryResult?.data?.contact_phone && (
                <div>
                  <p className="font-semibold">{t("phone")}</p>
                  <a
                    dir="ltr"
                    href={`https://wa.me/${queryResult.data.contact_phone}`}
                    className="mt-0.5 inline-block hover:underline"
                  >
                    {queryResult.data.contact_phone}
                  </a>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;
