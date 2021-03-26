import React from "react";
import Button from "./Button";
import Count from "./Count";
import Icon from "./Icon";

function Top() {
  const stylesheet = {
    width: "390px",
    height: "100px",
    float: "left",
    padding: "10px"
  };

  const stylesheet2 = {
    width: "180px",
    height: "200px",
    float: "left",
    paddingTop: "105px"
  };
  const stylesheet3 = {
    width: "400px",
    height: "200px",
    float: "left",
    padding: "10px"
  };
  return (
    <div>
      <div className="top">
        <div style={stylesheet}>
          <Icon />
        </div>

        <div style={stylesheet}>
          <Button />
        </div>

        <div style={stylesheet}>
          <Count />
        </div>
      </div>
      <div className="middle">
        <div style={{ padding: "25px" }}>
          <div style={stylesheet2}>
            <h1 style={{ color: "#56bdbb", textAlign: "center" }}>3.89%</h1>
            <p
              style={{
                color: "#6e6e72",
                textAlign: "center",
                fontSize: "20px"
              }}
            >
              1 Day
            </p>
          </div>
          <div style={stylesheet2}>
            <h1 style={{ color: "#56bdbb", textAlign: "center" }}>0.04%</h1>
            <p
              style={{
                color: "#6e6e72",
                textAlign: "center",
                fontSize: "20px"
              }}
            >
              4 Mins
            </p>
          </div>
          <div style={stylesheet3}>
            <div style={{ paddingBottom: "20px" }}>
              <h1 style={{ color: "#6e6e72", fontSize: "28px" }}>
                Best Price to Trade
              </h1>
            </div>
            <h1
              style={{
                color: "#56bdbb",
                textAlign: "center",
                fontSize: "80px",
                color: "white",
                fontWeight: "20px"
              }}
            >
              $ 74.67
            </h1>
          </div>
          <div style={stylesheet2}>
            <h1 style={{ color: "#56bdbb", textAlign: "center" }}>0.5%</h1>
            <p
              style={{
                color: "#6e6e72",
                textAlign: "center",
                fontSize: "20px"
              }}
            >
              7 Mins
            </p>
          </div>
          <div style={stylesheet2}>
            <h1 style={{ color: "#56bdbb", textAlign: "center" }}>12.35%</h1>
            <p
              style={{
                color: "#6e6e72",
                textAlign: "center",
                fontSize: "20px"
              }}
            >
              7 Days
            </p>
          </div>
        </div>

        <p style={{ color: "#6e6e72", fontSize: "18px" }}>
          Average USDT/INR net price including commission
        </p>

        <img
          src="https://hodlinfo.com/static/media/cryptonews.54869ee3.png"
          alt="hj"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Top;
