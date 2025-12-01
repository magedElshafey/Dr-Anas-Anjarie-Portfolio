import AboutAffiliationsPreviewSection from "../components/about-affiliations/AboutAffiliationsPreviewSection";
import FaqSection from "../components/faq/FaqSection";
import HomeHero from "../components/hero/HomeHero";
import PatientEducationSection from "../components/patient-education/PatientEducationSection";
import PreparingForVisitSection from "../components/pre-visit/PreparingForVisitSection";
import OurMainProceduresSection from "../components/producers/OurMainProceduresSection";
import TechnologySection from "../components/technology/TechnologySection";
import WhyChooseUsSection from "../components/why-choose-us/WhyChooseUsSection";

const Home = () => {
  return (
    <>
      <HomeHero />
      <WhyChooseUsSection />
      <AboutAffiliationsPreviewSection />
      <OurMainProceduresSection />
      <PatientEducationSection />
      <PreparingForVisitSection />
      <TechnologySection />
      <FaqSection />
    </>
  );
};

export default Home;
