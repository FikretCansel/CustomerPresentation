import React from 'react';
import "./typesOfNeed.css"

function TypesOfNeeds({typesOfNeed,setTypesOfNeed}) {
  return (
        <div id="sectors" className="d-flex justify-content-center flex-wrap">
            <div className={`customButtonTypesOfNeed default ${typesOfNeed===1&&"customButtonActive"}`} onClick={()=>setTypesOfNeed(1)}>Yeni ve Sistemi Olmayan Firma</div>
            <div className={`customButtonTypesOfNeed default ${typesOfNeed===4&&"customButtonActive"}`} onClick={()=>setTypesOfNeed(4)}>Küçük Orta Ölçekte gelişmekte Olan firma</div>
            <div className={`customButtonTypesOfNeed default ${typesOfNeed===5&&"customButtonActive"}`} onClick={()=>setTypesOfNeed(5)}>Orta Büyük Ölçekli, yeni sistemlere ihtiyacı olan firma</div>
        </div>
  )
}

export default TypesOfNeeds