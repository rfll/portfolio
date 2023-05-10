import Technologies from "@/models/technologies";
import styles from "@/styles/Projects.module.css";

type TechnologyRowProps = {
  technology: Technologies;
};

const technologiesToImagesMapping = {
  [Technologies.MONGO_DB]: "techImages/MongoDB.svg",
  [Technologies.EXPRESS_JS]: "techImages/ExpressJS.svg",
  [Technologies.REACT_JS]: "techImages/React.svg",
  [Technologies.NODE_JS]: "techImages/NodeJS.svg",
  [Technologies.POSTGRESQL]: "techImages/PostgreSQL.svg",
  [Technologies.AXIOS]: "techImages/axios.png",
  [Technologies.JAVASCRIPT]: "techImages/JavaScript.svg",
};

const technologiesToNamesMapping = {
  [Technologies.MONGO_DB]: "MongoDB",
  [Technologies.EXPRESS_JS]: "ExpressJS",
  [Technologies.REACT_JS]: "ReactJS",
  [Technologies.NODE_JS]: "NodeJS",
  [Technologies.POSTGRESQL]: "PostgreSQL",
  [Technologies.AXIOS]: "Axios",
  [Technologies.JAVASCRIPT]: "JavaScript",
};

export default function TechnologyRow(props: TechnologyRowProps) {

  return (
    <div className={styles.techLogoLanguage} key={props.technology}>
      <img
        className={styles.tech}
        src={technologiesToImagesMapping[props.technology]}
        alt={technologiesToNamesMapping[props.technology]}
      />
      <div className={styles.techName}>
        {technologiesToNamesMapping[props.technology]}
      </div>
    </div>
  );
}
