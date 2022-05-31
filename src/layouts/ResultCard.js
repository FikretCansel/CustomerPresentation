import React from "react";

function ResultCard({isSuccess,message}) {
  return (
    <div className={`card  mb-3 mt-4 ${isSuccess?"bg-success":"bg-danger"}`}>
      <div className="card-header">İşlem Sonucu</div>
      <div className="card-body">
        <h5 className="card-title">{message}</h5>
      </div>
    </div>
  );
}

export default ResultCard;
