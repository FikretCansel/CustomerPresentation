import React from "react";
import "./selectCustomerType.css";

function SelectCustomerType({customerType,setCustomerType}) {
    



  return (
      <div className="d-flex justify-content-center CustomerTypeGeneralDiv">
        <div className={`customButton default ${customerType===14&&"customButtonActive"}`} onClick={()=>setCustomerType(14)}>Bireysel</div>
        <div className={`customButton default ${customerType===15&&"customButtonActive"}`}  onClick={()=>setCustomerType(15)}>Kurumsal</div>
      </div>
  );
}

export default SelectCustomerType;
