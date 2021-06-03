import React from "react";
export const URLLink = fetch("http://206.189.124.254:9000/products");
export const dataFetch = URLLink.map((respons) => respons.json()).then(
  Response
);
