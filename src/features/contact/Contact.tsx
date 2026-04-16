import ContactLinks from "./components/ContactLinks";
// import ContactList from "./components/ContactList";

const Contact = () => {
  return (
    <section className="bg-section-a min-h-40 max-w-full p-4 pb-8" id="contact">
      <span className="text-text text-2xl font-bold sm:text-3xl">Contact</span>
      <ContactLinks />
    </section>
  );
};

export default Contact;
