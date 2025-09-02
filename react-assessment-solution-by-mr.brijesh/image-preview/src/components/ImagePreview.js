import React from "react";
import HiddenImageDiv from "./HiddenImageDiv";
const ImagePreview = (props) => {
  return (
    <div className="layout align-items-center mt-100">
      <div className="card ma-20 pa-50">
        <section>
          <div
            className="layout-row justify-content-around"
            data-testid="images-div"
          >
            <img key={"1"} src={""} height={200} width={300} alt={""} />

            <HiddenImageDiv key={"1"} />
          </div>
        </section>
        <section className="card-actions justify-content-center">
          <button data-testid="show-all-btn">Show all</button>
          <button className="danger" data-testid="hide-all-btn">
            Hide all
          </button>
        </section>
      </div>
    </div>
  );
};

export default ImagePreview;
