import axios from "axios";
import React, { useState } from "react";
import SelectCustomerType from "../components/Step-3-SelectCustomerType/SelectCustomerType";
import TypesOfNeeds from "../components/Step-5-TypesOfNeeds/TypesOfNeeds";
import SelectRequirementNew2 from "../components/Step-4-SelectRequirement/SelectRequirement";
import SelectSector from "../components/Step1-SelectSector/SelectSector";
import "../css/home.css";
import ResultCard from "../layouts/ResultCard";
import GetUserInfos from "../components/Step-2-UserInfos/GetUserInfos";
import {
  faTruckRampBox,
  faMobileScreen,
  faBank,
  faTruck,
  faShop,
  faCartShopping,
  faTruckArrowRight,
  faCloudArrowUp,
  faPeopleGroup,
  faShopLock,
  faCircle,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { APIURL } from "../config";

export default function Home() {
  let history = useHistory();
  const stepSumCount = 5;
  const [stepNum, setStepNum] = useState(1);
  const [selectedSector, setSelectedSector] = useState({
    id: 1,
    name: "Otomobil",
  });
  const [customerType, setCustomerType] = useState(null);
  const [typesOfNeed, setTypesOfNeed] = useState(null);
  const [userInfos, setUserInfos] = useState({
    name: "",
    webAddress: "",
    authorizedName: "",
    phoneNumber: "",
    mailAddress: "",
    note:""
  });
  const [saveResult, setSaveResult] = useState({
    isSuccess: null,
    message: "",
  });

  const RequirementsHandleSave = () => {
    let saveData = [];
    requirementList.forEach((p) => {
      if (p.isChecked === true) {
        saveData.push({ tagId: p.id, name: p.name });
      }
    });
    return saveData;
  };

  const [requirementList, setRequirementList] = useState([
    {
      id: 17,
      icon: faTruckRampBox,
      name: "E-Ticaret Platformu",
      isChecked: false,
    },
    {
      id: 18,
      icon: faPeopleGroup,
      name: "Saha Ekibi",
      isChecked: false,
    },
    {
      id: 19,
      icon: faShopLock,
      name: "Bayi",
      isChecked: false,
    },
    {
      id: 20,
      icon: faCircle,
      name: "Crm",
      isChecked: false,
    },
    {
      id: 21,
      icon: faTruckRampBox,
      name: "Stok Yönetimi",
      isChecked: false,
    },
    {
      id: 22,
      icon: faMobileScreen,
      name: "Mobil Uygulama",
      isChecked: false,
    },
    {
      id: 23,
      icon: faTruck,
      name: "Kargo Yönetimi",
      isChecked: false,
    },
    {
      id: 24,
      icon: faBank,
      name: "Bankacılık Sistemi",
      isChecked: false,
    },
    {
      id: 25,
      icon: faCloudArrowUp,
      name: "E-hizmetler",
      isChecked: false,
    },
    {
      id: 27,
      icon: faTruckArrowRight,
      name: "Satış Sonrası Servis",
      isChecked: false,
    },
    {
      id: 28,
      icon: faShop,
      name: "Pazar Yeri",
      isChecked: false,
    },
    {
      id: 29,
      icon: faCartShopping,
      name: "Stok Takip Sistemi",
      isChecked: false,
    },
    {
      id: 30,
      icon: faShareNodes,
      name: "Connector ihtiyacı",
      isChecked: false,
    },
  ]);

  const isvalidateForm = () => {
    if (customerType !== null && typesOfNeed !== null) {
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (isvalidateForm()) {
      setSaveResult({ isSuccess: false, message: "Eksik Alanlar Mevcut" });
      return;
    }
    const saveJson = {
      customerTags: [
        ...RequirementsHandleSave(),
        {
          tagId: customerType,
        },
        {
          tagId: typesOfNeed,
        },
        {
          tagId: selectedSector.id,
        },
      ],
      ...userInfos,
    };

    console.log(saveJson);
    axios
      .post(
        APIURL+"/api/CustomerInfo/saveAndReturnCustomProduct",
        saveJson
      )
      .then(async (result) => {
        localStorage.clear();
        localStorage.setItem("ForYou", JSON.stringify(result.data.data));
        console.log("Kayıt Başarılı");

        history.push("/for-you-loading");
        await sleep(3000);
        history.push("/forYouProducts");

        console.log(saveJson);
      })
      .catch((err) => {
        console.log(saveJson);
        setSaveResult({ isSuccess: false, message: "Interval Error" });
      });
  };
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const nextButtonFuc = () => {
    if (stepNum < stepSumCount) {
      setStepNum(stepNum + 1);
    }
    if (stepNum === stepSumCount) {
      handleSave();
    }
    if (stepNum > stepSumCount) {
      setStepNum(1);
    }
  };

  return (
    <div className="container">
      <button
        className={`btn col-md-2 processBtn ${
          stepNum >= 1 && "btn btn-primary generalButtonColor"
        }`}
        onClick={() => setStepNum(1)}
      >
        Sektör seç
      </button>
      <button
        className={`btn col-md-2 processBtn ${
          stepNum >= 2 && "btn btn-primary generalButtonColor"
        }`}
        onClick={() => setStepNum(2)}
      >
        Kullanıcı Bilgileri
      </button>
      <button
        className={`btn col-md-2 processBtn ${
          stepNum >= 3 && "btn btn-primary generalButtonColor"
        }`}
        onClick={() => setStepNum(3)}
      >
        Müşteri Tipi
      </button>
      <button
        className={`btn col-md-2 processBtn ${
          stepNum >= 4 && "btn btn-primary generalButtonColor"
        }`}
        onClick={() => setStepNum(4)}
      >
        İhtiyaç Tipi belirle
      </button>
      <button
        className={`btn col-md-2 processBtn ${
          stepNum >= 5 && "btn btn-primary generalButtonColor"
        }`}
        onClick={() => setStepNum(5)}
      >
        Gereksinim
      </button>

      <div style={{ marginTop: 50 }}></div>
      {/* onClick={() => setStepNum(3)} */}

      {stepNum === 1 && (
        <SelectSector
          selectedSector={selectedSector}
          setSelectedSector={setSelectedSector}
        />
      )}

      {stepNum === 2 && (
        <div className="col-md-8 mx-auto card p-3 generalCardHeight">
          <GetUserInfos setUserInfos={setUserInfos} userInfos={userInfos} />
        </div>
      )}
      {stepNum === 3 && (
        <div className="col-md-8 mx-auto card p-3 generalCardHeight">
          <SelectCustomerType
            customerType={customerType}
            setCustomerType={setCustomerType}
          />
        </div>
      )}
      {stepNum === 4 && (
        <div className="col-md-8 mx-auto card p-3 align-items-center  generalCardHeight">
          <TypesOfNeeds
            typesOfNeed={typesOfNeed}
            setTypesOfNeed={setTypesOfNeed}
          />
        </div>
      )}
      {stepNum === 5 && (
        <SelectRequirementNew2
          // selectedRequirementList={selectedRequirementList}
          // setSelectedRequirementList={setSelectedRequirementList}
          requirementList={requirementList}
          setRequirementList={setRequirementList}
        />
      )}

      <div className="FooterContainer">
        <button
          onClick={() => nextButtonFuc()}
          className="btn btn-primary col-3 generalButtonColor"
        >
          {stepNum === stepSumCount ? "Herşeyi Kaydet" : "İleri"}
        </button>
      </div>
      {saveResult.isSuccess !== null && (
        <ResultCard
          isSuccess={saveResult.isSuccess}
          message={saveResult.message}
        />
      )}

      <div style={{ marginTop: 200 }}></div>
    </div>
  );
}
