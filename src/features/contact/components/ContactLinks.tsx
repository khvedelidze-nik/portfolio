import { contact } from "../data/contact";
import LinkBtn from "./LinkBtn";

const ContactLinks = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 gap-2 p-1 sm:grid-cols-2">
      {contact.map((data) => (
        <LinkBtn href={data.link} name={data.value} icon={data.icon} />
      ))}
    </div>
  );
};

export default ContactLinks;
