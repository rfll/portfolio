import styles from "@/styles/Nav.module.css";
import ContactMethods from "@/models/contactMethods";

type ContactMethodProps = {
  contactMethods: ContactMethods;
};

const contactMethodsToImagesMapping = {
  [ContactMethods.GITHUB]: "github.svg",
  [ContactMethods.LINKEDIN]: "linkedin.svg",
  [ContactMethods.EMAIL]: "mail.svg",
};

const contactMethodsToLinksMapping = {
  [ContactMethods.GITHUB]: "https://github.com/rfll",
  [ContactMethods.LINKEDIN]: "https://www.linkedin.com/in/ryanwfortin/",
  [ContactMethods.EMAIL]: "mailto:ryanwfortin@gmail.com",
};

export default function NavContactMethods(props: ContactMethodProps) {
  return (
    <a
      href={contactMethodsToLinksMapping[props.contactMethods]}
      target="_blank"
    >
      <img
        className={styles.icons}
        src={contactMethodsToImagesMapping[props.contactMethods]}
        alt="contactIcon"
      />
    </a>
  );
}
