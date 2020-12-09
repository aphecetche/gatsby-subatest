import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import moment from "moment";
import "moment/locale/fr";
import { useTranslation } from "gatsby-theme-intl";
import PropTypes from "prop-types";

const SeminarHeader = ({ seminar }) => {
  const { date, type, slug, title, title2 } = seminar;
  const { t } = useTranslation();
  const formattedDate = moment(date, "YYYY-MM-DD HH:mm:ss Z").format(
    "DD-MM-YYYY"
  );
  return (
    <div>
      <span>{formattedDate}</span>
      <span>{t(type)}</span>
      <Link to={slug}>
        {title}
        {title && title2 ? " & " : ""}
        {title2}
      </Link>
    </div>
  );
};

SeminarHeader.propTypes = {
  seminar: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.string,
    title2: PropTypes.string,
    slug: PropTypes.string,
    type: PropTypes.string,
  }),
};
const Seminars = ({ plusMonth = 3, minusMonth = 1 }) => {
  // store the dates between which we show seminars
  const earlydate = moment().subtract(minusMonth, "M");
  const latedate = moment().add(plusMonth, "M");
  const data = useStaticQuery(
    graphql`
      query {
        allSeminar(sort: { order: DESC, fields: date }) {
          nodes {
            title
            title2
            date
            location
            type
            slug
            id
            body
          }
        }
      }
    `
  );
  const selectedSeminars = data.allSeminar.nodes.filter(
    (seminar) =>
      moment(seminar.date, "YYYY-MM-DD HH:mm:ss Z").isAfter(earlydate) &&
      moment(seminar.date, "YYYY-MM-DD HH:mm:ss Z").isBefore(latedate)
  );

  const seminars = selectedSeminars.map((seminar) => (
    <li key={seminar.id}>
      <SeminarHeader seminar={seminar} />
    </li>
  ));

  return (
    <div>
      <ul>{seminars}</ul>
    </div>
  );
};

export default Seminars;
