import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ImgLogo from "./img-logo"
import PropTypes from "prop-types"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  logo: {
    margin: theme.spacing(0, 2, 0, 0),
    maxWidth: "180px",
    width: "20%",
  },
}))

const LogoGroup = ({ logos }) => {
  const classes = useStyles()
  const logoImages = logos.map((n) => (
    <div key={n.img} className={classes.logo}>
      <ImgLogo img={n.img} alt={n.alt} href={n.href} />
    </div>
  ))
  return <div className={classes.root}>{logoImages}</div>
}

LogoGroup.propTypes = {
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      alt: PropTypes.string,
      href: PropTypes.string,
    })
  ),
}
export default LogoGroup
