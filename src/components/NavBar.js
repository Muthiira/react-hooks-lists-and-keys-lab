import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
/* display an <a> tag for each link here */
const tag = links.map((link) => (
  <a key={link} href={"#" + link}>{link}</a>
))
  return <nav>{tag}</nav>;
}

export default NavBar;
