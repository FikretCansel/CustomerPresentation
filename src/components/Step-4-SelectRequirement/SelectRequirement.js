import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./SelectRequirement.css";

function SelectRequirementNew2({
  requirementList,
  setRequirementList
}) {
  

  
  const onAddingItem = (i) => {
    const requirement = requirementList[i];
    requirement.isChecked = !requirementList[i].isChecked;

    requirementList[i] = requirement;

    setRequirementList([...requirementList]);
  };

  return (
    <div>
      <div className="row">
        {requirementList.map((requirement, i) => {
          return (
            <div key={requirement.id} className="col-md-2 mb-4">
              <input
                type="checkbox"
                className="btn-check"
                name="options"
                id={requirement.id}
                value={requirement.name}
                checked={requirement.isChecked}
                onChange={() => onAddingItem(i)}
              />
              <label
                className={`col-12 PreviewModelBtn ${
                  requirement.isChecked === true
                    ? "activeRequirementBtn"
                    : "notActiveRequirementBtn"
                }`}
                htmlFor={requirement.id}
              >
                <div>
                  <FontAwesomeIcon size="5x" icon={requirement.icon} />
                </div>
                {requirement.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectRequirementNew2;
