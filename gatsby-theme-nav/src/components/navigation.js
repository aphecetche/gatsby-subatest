import React, { useState } from "react";
import PrimaryNavigation from "./PrimaryNavigation";
import SecondaryNavigation from "./SecondaryNavigation";

const Navigation = ({ data, initialActive = "Recherche" }) => {
  const [active, setActive] = useState(initialActive);
  let primary = data.map((x) => {
    return { label: x.title, to: x.to };
  });

  return (
    <>
      <PrimaryNavigation
        links={primary}
        active={active}
        setActive={setActive}
      />
      <SecondaryNavigation
        aria-hidden="true"
        data={data}
        active={active}
        setActive={setActive}
      />
    </>
  );
};
export default Navigation;
