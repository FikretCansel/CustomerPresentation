import React from "react";

function GetUserInfos({ userInfos, setUserInfos }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfos({
      ...userInfos,
      [name]: value,
    });
  };

  return (
    <form>
      <div className="row">
        <div className="form-group col-md-6 p-3">
          <label htmlFor="exampleInputEmail1">Firma Adı</label>
          <input
            type="text"
            className="form-control"
            placeholder="Firma Adı"
            name="name"
            value={userInfos.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group col-md-6 p-3">
          <label htmlFor="exampleInputEmail1">Yetkili Adı</label>
          <input
            type="text"
            className="form-control"
            placeholder="Yetkili Adı"
            name="authorizedName"
            value={userInfos.authorizedName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        
      </div>
      <div className="row">
      <div className="form-group col-md-6 p-3">
          <label htmlFor="exampleInputEmail1">Web Adress</label>
          <input
            type="text"
            className="form-control"
            placeholder="Web Adress"
            name="webAddress"
            value={userInfos.webAddress}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group p-3 col-md-6">
          <label htmlFor="exampleInputEmail1">Mail Adress</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email Adres"
            value={userInfos.mailAddress}
            name="mailAddress"
            onChange={(e) => handleChange(e)}
          />
        </div>
        
      </div>
      <div className="row">
      <div className="form-group col-md-6 p-3">
          <label htmlFor="exampleInputEmail1">Telefon Numarası</label>
          <input
            type="text"
            className="form-control"
            placeholder="05XXXXXXXXX"
            value={userInfos.phoneNumber}
            name="phoneNumber"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group col-md-6 p-3">
          <label htmlFor="exampleInputEmail1">Not</label>
          <input
            type="text"
            className="form-control"
            placeholder="Not"
            value={userInfos.note}
            name="note"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      
    </form>
  );
}

export default GetUserInfos;
