import { contact } from "../data/contact";
import LinkBtn from "@/components/ui/LinkBtn";

const ContactLinks = () => {
  return (
    <div
      className="grid gap-4
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3"
      role="list"
      aria-label="Contact methods"
    >
      {contact.map((data) => (
        <LinkBtn
          key={data.name}
          href={data.link}
          icon={data.icon}
          iconAlt={data.name}
          variant="secondary"
          className="justify-center min-h-14 group"
        >
          <span className="text-text font-medium group-hover:text-accent transition-colors">
            {data.value}
          </span>
        </LinkBtn>
      ))}
    </div>
  );
};

export default ContactLinks;