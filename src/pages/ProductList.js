import axios from "axios";
import React, { useState,useEffect } from "react";
import "../css/productList.css";
import BayiPortali from "../images/BayiPortali.png";
import CrmImage from "../images/crmImage.png";
import RenitaImage from "../images/renitaImage.png";
import PreviewModule from "../components/ProductList-PreviewModule/PreviewModule";
import { APIURL } from "../config";

function ProductList() {
  const [productList, setProductList] = useState([
    {
      name: "Bayi Portalı",
      description:
        "Bayi Portalı çözümü, birden fazla bayisi olan fazla bayisi olan fazla bayisi",
      imageUrl: BayiPortali,
    },
    {
      name: "Crm",
      description:
        "Bayi Portalı çözümü, birden fazla bayisi olan şirketlerin fazla bayisi olan",
      imageUrl: CrmImage,
    },
    {
      name: "Renita",
      description:
        "Bayi Portalı çözümü, birden fazla bayisi olan şirketlerin fazla bayisi olan",
      imageUrl: RenitaImage,
    },
    {
      name: "Bayi Portalı",
      description:
        "Bayi Portalı çözümü, birden fazla bayisi olan fazla bayisi olan fazla bayisi",
      imageUrl: BayiPortali,
    },
    {
      name: "Crm",
      description:
        "Bayi Portalı çözümü, birden fazla bayisi olan fazla bayisi olan fazla bayisi",
      imageUrl: CrmImage,
    },
    {
      name: "Renita",
      description:
        "Bayi Portalı çözümü, birden fazla bayisi olan fazla bayisi olan fazla bayisi",
      imageUrl: RenitaImage,
    },
    {
      name: "Bayi Portalı",
      description:
        "Bayi Portalı çözümü, birden fazla bayisi olan fazla bayisi olan fazla bayisi",
      imageUrl: BayiPortali,
    },
    {
      name: "Crm",
      description:
        "Bayi Portalı çözümü, birden fazla bayisi olan fazla bayisi olan fazla bayisi",
      imageUrl: CrmImage,
    },
    {
      name: "Renita",
      description:
        "Bayi Portalı çözümü, birden fazla bayisi olan fazla bayisi olan fazla bayisi",
      imageUrl: RenitaImage,
    },
  ]);


  useEffect(() => {
    const forYou = localStorage.getItem('ForYou');
    console.log(JSON.parse(forYou));
    setProductList(JSON.parse(forYou));


  }, [])
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const [modulePictures, setModulePictures] = useState([]);
  const [productTags, setProductTags] = useState([]);
  
  const handlePreviewModule=(product)=>{
    setSelectedProduct(product);
    setModalShow(true);
    axios.get(APIURL+"/api/ImageUpload/getAllByUsProductId?usProductId="+product.id).then((result)=>{
      setModulePictures(result.data.data)
    }).catch(err=>console.log(err));
    axios.get(APIURL+"/api/Tag/getAllProductTagsByProductId?productId="+product.id).then((result)=>{
      setProductTags(result.data.data)
      console.log(result.data.data)
    }).catch(err=>console.log(err));
  }

  return (
    <div class="ProductContainer">
      <div class="ProductBody">
        {
          modalShow&&<PreviewModule setModalShow={setModalShow} selectedProduct={selectedProduct} modulePictures={modulePictures} setModulePictures={setModulePictures} productTags={productTags}/>
        }
      
        <div class="ProductListProducts">
          {productList.map((product) => (
            <div class="ProductListProduct">
              <div class="ProductListProductBody">
                <img class="ProductProductImage" src={`${APIURL}${product.imageUrl}`} alt="Resim Bulunamadı" />
                <div className="ProductProductTexts">
                <span class="ProductListProductTitle">{product.name}</span>
                <p class="ProductListDescription">{product.description}</p>
                </div>
              </div>
              <div className="ProductListProductFooter">
                <button className="btn btn-light ProductListButton" onClick={()=>handlePreviewModule(product)}>Ön izleme</button>
                <button className="generalButtonColor ProductListButton">Detay</button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
