import React from "react";

function SixthSectionImage(props) {
  // console.log(props.data)
  let datas = props.data;

  return (
    <div>
      {datas.map((data) => {
        if (data.category === "Small banner three") {
          let urlImg = "http://206.189.124.254:9000" + data.image;
          return (
            <>
              {" "}
              <img key={data._id} src={urlImg} />{" "}
            </>
          );
        }
      })}
    </div>
  );
}

export default SixthSectionImage;
