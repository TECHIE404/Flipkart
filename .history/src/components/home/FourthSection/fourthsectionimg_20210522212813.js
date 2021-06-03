import React from "react";

function FourthSectionImage(props) {
  // console.log(props.data)
  let datas = props.data;

  return (
    <div style={{ display: "flex" }}>
      {datas.map((data) => {
        if (data.category === "Small banner two") {
          let urlImg = "http://206.189.124.254:9000" + data.image;
          return (
            <>
              {" "}
              <img key={data._id} src={urlImg} height/>{" "}
            </>
          );
        }
      })}
    </div>
  );
}

export default FourthSectionImage;
