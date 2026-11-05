import PageLayout from "../../components/PageLayout/PageLayout";
import ContactHeader from "../../components/Contact/ContactHeader";
import ContactForm from "../../components/Contact/ContactForm";
import ContactInfo from "../../components/Contact/ContactInfo";
import OfficeMap from "../../components/Contact/OfficeMap";
import Reveal from "../../components/Home/sections/shared/Reveal";

// The form (left) and contact details (right) are the last component on this page.
function Contact() {
  return (
    <PageLayout>
      <ContactHeader />
      <OfficeMap />
      <section className="theme-light py-16 sm:py-24 px-5 sm:px-8 bg-bg-primary border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <ContactInfo />
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

export default Contact;
