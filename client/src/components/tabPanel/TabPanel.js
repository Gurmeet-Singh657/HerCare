import * as React from "react";
import MultipleSelect from "../multipleSelect/MultipleSelect";
import SingleSelect from "../singleSelect/SingleSelect";

export default function BasicTabs() {
  return (
    <div className="tabpanels">
      <MultipleSelect index={0} heading={"Types of Assault"} />
      <SingleSelect index={1} heading={"Show Incidents From"} />
      <SingleSelect index={2} heading={"Time of the day"} />
    </div>
  );
}
