import ContactLinks from "./components/ContactLinks";

const Contact = () => {
  return (
    <section
      className="bg-section-a py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 animate-fade-in text-center">
          <h2
            id="contact-heading"
            className="text-text text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight"
          >
            Contact
          </h2>
          <p className="mt-3 text-muted text-lg">
            Feel free to reach out — I'm always open to discussing new projects
          </p>
        </header>
        <ContactLinks />
      </div>
    </section>
  );
};

export default Contact;