import ContactLinks from "./components/ContactLinks";
// import ContactList from "./components/ContactList";

const Contact = () => {
  return (
    <div className="bg-section-a min-h-40 max-w-full p-4" id="contact">
      <span className="text-text text-2xl font-bold sm:text-3xl">Contact</span>
      <ContactLinks />
    </div>
  );
};

export default Contact;
