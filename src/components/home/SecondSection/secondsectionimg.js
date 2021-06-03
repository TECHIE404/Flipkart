import React from "react";

function SecondSectionImage(props) {
  // console.log(props.data)
  let datas = props.data;

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      {datas.map((data) => {
        if (data.category === "Small banner one") {
          let urlImg = "http://206.189.124.254:9000" + data.image;
          return (
            <>
              {" "}
              <img
                key={data._id}
                src={urlImg}
                alt=""
                height="237.047px"
                width="436.28px"
                style={{ margin: "5px" }}
              />{" "}
            </>
          );
        }
      })}
    </div>
  );
}

export default SecondSectionImage;
