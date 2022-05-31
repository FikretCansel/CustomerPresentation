import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIURL } from "../../config";
import "./selectSector.css";

function SelectSector({selectedSector,setSelectedSector}) {
  const [sectors, setSectors] = useState([]);
  const [filterSectors,setFilterSectors]=useState([]);

  useEffect(() => {
    axios.get(APIURL+"/api/Tag/getAllSectors")
    .then((result) => {
      setSectors(result.data.data);
      setFilterSectors(result.data.data);
    })
    .catch((err) => {
      console.log("Hata Sektörler gelmedi");
    });
  }, [])
  



  const getIsSelected=(item)=>{
    return item.id===selectedSector.id&&"generalButtonColor";
  }


  const handleFilter=(e)=>{
    let txtValue=e.target.value.toLowerCase();
    var newSectorList=[];

    for (let i = 0; i < sectors.length; i++) {
      if (sectors[i].name.toLowerCase().indexOf(txtValue) > -1) {
        newSectorList.push(sectors[i]);
      }
    }
    
    setFilterSectors(newSectorList);
  }


  return (
    <div className="row">
      <div className="dropdown d-flex justify-content-center">
        <div id="myDropdown" className="dropdown-content">
          <input
            type="text"
            placeholder="Search.."
            id="myInput"
            onChange={(e)=>handleFilter(e)}
          />
          {
            filterSectors.map((item)=>(
              <p key={item.id} className={`dropDownItem ${getIsSelected(item)}`} onClick={()=>setSelectedSector(item)}>{item.name}</p>
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default SelectSector;
