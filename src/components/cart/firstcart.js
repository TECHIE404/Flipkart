import React from "react";
import location from "../../images/cartPage/location.svg";
import shield from "../../images/cartPage/shield.png";
import "./firstcart.css";

class FirstCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: this.props.id,
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  async componentWillMount() {
    let url = await fetch(
      `http://206.189.124.254:9000/product/${this.state.id}`
    );
    let datas = await url.json();
    let data = (await localStorage.cartItem)
      ? JSON.parse(localStorage.cartItem)
      : [];
    data.push(datas);
    localStorage.setItem("cartItem", JSON.stringify(data));
    this.setState({ data });
    // console.log(data)
  }

  deleteItem(e) {
    let index = e.target.value;
    let data = this.state.data;
    data.splice(index, 1);
    localStorage.setItem("cartItem", JSON.stringify(data));
    this.setState({ data });
  }

  render() {
    // console.log(this.state.data)
    let getData = this.state.data;
    let total = 0;
    // console.log(getData)
    getData.map((data) => {
      let price = parseFloat(data.price);
      total += price;
      // console.log(total)
    });
    return (
      <div className="layer1">
        <div className="width1500">
          <div className="row">
            <div className="col-7 cart_header_background">
              <div
                className="cart_header flex space-btw"
                style={{ display: "flex", margin: "30px" }}
              >
                <h3>My Cart ({getData.length})</h3>
                <div
                  className="cart_header_links"
                  style={{
                    listStyleType: "none",
                    marginLeft: "35%",
                    display: "flex",
                  }}
                >
                  <li style={{ marginRight: "5px" }}>
                    <img src={location} />
                  </li>
                  <li style={{ marginRight: "5px" }}>Deliver to</li>
                  <li className="check" style={{ marginRight: "5px" }}>
                    <input
                      type="text"
                      placeholder="Enter delivery pincode     Check"
                    />
                  </li>
                </div>
              </div>
              <hr />

              {getData.map((data, index) => {
                // console.log(index)
                let urlImg = "http://206.189.124.254:9000" + data.image;
                return (
                  <>
                    <div className="cart_product">
                      <div
                        className="cart_product_flex_one flex space-btw"
                        style={{ display: "flex", marginLeft: "5%" }}
                      >
                        <div
                          className="cart_product_details flex space-btw"
                          style={{ display: "flex", margin: "5%" }}
                        >
                          <div>
                            <img
                              src={urlImg}
                              alt="img1"
                              width="100"
                              height="100"
                            />
                          </div>
                          <div
                            className="cart_product_details_links"
                            style={{ listStyleType: "none" }}
                          >
                            <li className="one">{data.description}</li>
                            <li className="two">
                              <small>Size: 42</small>
                            </li>
                            <li className="three">
                              <small>Seller: {data.name}</small>
                            </li>
                            <li className="four">
                              <span>
                                <b>₹{data.price}</b>
                              </span>{" "}
                              <span id="line-through">
                                <small>₹1,799</small>
                              </span>{" "}
                              <span id="percent">
                                <small>61% Off</small>
                              </span>{" "}
                              <span id="offers">
                                <small>2 offers applied</small>
                              </span>
                              <svg
                                width="14"
                                height="14"
                                xmlns="http://www.w3.org/2000/svg"
                                class="_3p6_km"
                              >
                                <g fill="none">
                                  <path d="M-1-1h16v16H-1"></path>
                                  <path
                                    d="M7 0C3.136 0 0 3.136 0 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm.7 10.5H6.3V6.3h1.4v4.2zm0-5.6H6.3V3.5h1.4v1.4z"
                                    fill="#388e3c"
                                    class=""
                                  ></path>
                                </g>
                              </svg>
                            </li>
                          </div>
                        </div>
                        <span style={{ marginTop: "30px" }}>
                          <small>
                            Delivery by Thu Oct 8 |{" "}
                            <b style={{ color: "green" }}>Free</b>{" "}
                            <b style={{ textDecoration: "line-through" }}>
                              ₹30
                            </b>
                          </small>
                        </span>
                      </div>
                      <div
                        className="cart_product_flex_two flex space-btw"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          className="cart_product_action flex space-btw"
                          style={{ display: "flex", marginLeft: "5%" }}
                        >
                          <div
                            className="qty"
                            style={{ listStyleType: "none", display: "flex" }}
                          >
                            <li>
                              <span id="minus">
                                <button
                                  style={{
                                    borderRadius: "50%",
                                    boxShadow: "none",
                                    marginRight: "10px",
                                  }}
                                >
                                  -
                                </button>
                              </span>
                            </li>
                            <li>
                              <span id="value">
                                <button>0</button>
                              </span>
                            </li>
                            <li>
                              <span id="plus">
                                <button
                                  style={{
                                    borderRadius: "50%",
                                    boxShadow: "none",
                                    marginLeft: "10px",
                                    marginRight: "10px",
                                  }}
                                >
                                  +
                                </button>
                              </span>
                            </li>
                          </div>
                          <div
                            className="remove"
                            style={{ listStyleType: "none", display: "flex" }}
                          >
                            <li id="save" style={{ marginRight: "10px" }}>
                              <span>
                                <button>SAVE FOR LATER</button>
                              </span>
                            </li>
                            <li id="remove">
                              <span>
                                <button
                                  value={index}
                                  onClick={(e) => this.deleteItem(e)}
                                >
                                  REMOVE
                                </button>
                              </span>
                            </li>
                          </div>
                        </div>
                        <div>
                          <p></p>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </>
                );
              })}

              <div className="order">
                <button>PLACE ORDER</button>
              </div>
            </div>

            <div className="col-5">
              <div className="cart_product_price_background">
                <div
                  className="cart_product_price_header"
                  style={{ margin: "20px" }}
                >
                  <h4 style={{ textAlign: "left", marginLeft: "10px" }}>
                    PRICE DETAILS
                  </h4>
                </div>
                <hr style={{ margin: "30px", height: "2px" }} />
                <div
                  className="price_items flex space-btw"
                  style={{ display: "flex", marginLeft: "30px" }}
                >
                  <p>Price ({getData.length} items)</p>
                  <p
                    style={{
                      textAlign: "right",
                      marginLeft: "60%",
                      color: "bleu",
                      fontWeight: "light",
                    }}
                  >
                    ₹{total}
                  </p>
                </div>

                <div
                  className="delivery_charges flex space-btw"
                  style={{ display: "flex", marginLeft: "30px" }}
                >
                  <p>Delivery Charges</p>
                  <p
                    style={{
                      color: "green",
                      fontWeight: "bold",
                      marginLeft: "60%",
                      textAlign: "right",
                    }}
                  >
                    FREE
                  </p>
                </div>
                <hr />
                <div
                  className="total_amt flex space-btw"
                  style={{ display: "flex", marginLeft: "30px" }}
                >
                  <p>Total Amount</p>
                  <p
                    style={{
                      color: "green",
                      fontWeight: "bold",
                      marginLeft: "65%",
                      textAlign: "right",
                    }}
                  >
                    ₹{total}
                  </p>
                </div>
                <hr />
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "green",
                      fontWeight: "bold",
                      textAlign: "left",
                      marginLeft: "30px",
                    }}
                  >
                    You will save ₹3,866 on this order
                  </p>
                  <button
                    style={{
                      backgroundColor: "rgb(251,100,27)",
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "28%",
                    }}
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>

              <ul
                className="shield"
                style={{
                  listStyleType: "none",
                  display: "flex",
                  fontSize: "13px",
                  fontWeight: "bolder",
                  color: "lightgray",
                }}
              >
                <li style={{ marginRight: "10px" }}>
                  <img src={shield} alt="shield" width="25" />
                </li>
                <li id="save">
                  Safe and Secure Payments.Easy returns.100% <br />
                  Authentic products.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstCart;
