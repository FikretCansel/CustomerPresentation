import React from "react";
import { APIURL } from "../../config";
import "./previewmodule.css";

function PreviewModule({
  setModalShow,
  selectedProduct,
  modulePictures,
  setModulePictures,
  productTags,
}) {
  return (
    <div className="PreviewModuleModal">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Detay</h5>
            <button
              class="btn btn-light close"
              onClick={() => {
                setModalShow(false);
                setModulePictures([]);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="PreviewModelImagesRow">
              {modulePictures.map((picture) => (
                <div className="PreviewModelImagesCol">
                  <img
                    className="PreviewModelImagesCol"
                    src={`${APIURL}${picture.imagePath}`}
                    alt="Resim Bulunamadı"
                  />
                </div>
              ))}
            </div>
            <div className="PreviewModuleTextDiv">
              <h3>{selectedProduct.name}</h3>
              <p>
                {selectedProduct.descripiton}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
              </p>
            </div>
          </div>
          <div className="modal-footer">
            {productTags.map((tag) => (
              <button
                type="button"
                className="btn btn-primary generalButtonColor"
              >
                {tag.productName}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewModule;
