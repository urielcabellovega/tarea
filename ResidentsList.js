import React from "react";
import ResidentInfo from "./ResidentInfo"

const ResidentsList = ({ residents }) => {
    console.log(residents);
  return (
    <div id="Residentlist">
      {residents?.map((resident) => (
          <ResidentInfo
          residentUrl={resident}
          key={resident}
          />
      ))}
    </div>
  );
};

export default ResidentsList;
