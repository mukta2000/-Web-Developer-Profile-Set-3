import React from "react";

function Bottom() {
  return (
    <div>
      <div style={{ padding: "padding: 30px 40px;" }}>
        <table className="head">
          <tr>
            <th className="corner-left">#</th>
            <th>Platform</th>
            <th>Last Traded Price</th>
            <th>Buy/Sell Price</th>
            <th>Difference</th>
            <th className="corner-right">Savings</th>
          </tr>
        </table>
        <table>
          <tr>
            <td className="corner-left">1</td>
            <td>WazirX</td>
            <td>₹ 75.93</td>
            <td>₹ 75.92/₹ 75.93</td>
            <td style={{ color: "#56bdbb" }}>1.69%</td>
            <td className="corner-right" style={{ color: "#56bdbb" }}>
              ▲₹ 1.25
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td className="corner-left">2</td>
            <td>Bitbns</td>
            <td>₹ 75.70</td>
            <td>₹ 75.69/₹ 75.70</td>
            <td style={{ color: "#56bdbb" }}>1.38%</td>
            <td className="corner-right" style={{ color: "#56bdbb" }}>
              ▲₹1.03
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td className="corner-left">3</td>
            <td>Giotus</td>
            <td>₹ 75.70</td>
            <td>₹ 75.50/₹ 75.50</td>
            <td style={{ color: "#56bdbb" }}>1.38%</td>
            <td className="corner-right" style={{ color: "#56bdbb" }}>
              ▲₹1.03
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td className="corner-left">4</td>
            <td>Colodax </td>
            <td>₹ 73.44</td>
            <td>₹ 73.44/₹ 74.36</td>
            <td style={{ color: "red" }}>-1.65%</td>
            <td className="corner-right" style={{ color: "red" }}>
              ▼ ₹1.23
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td className="corner-left">5</td>
            <td>Zebpay</td>
            <td>₹ 75.85</td>
            <td>₹ 76.00/₹ 75.85 </td>
            <td style={{ color: "#56bdbb" }}>1.58%</td>
            <td className="corner-right" style={{ color: "#56bdbb" }}>
              ▲ ₹1.18
            </td>
          </tr>
        </table>

        <img
          src="https://hodlinfo.com/static/media/BannerFTXNews.d0cd974b.png"
          alt=""
          style={{ width: "1260px", paddingLeft: "30px", paddingRight: "30px" }}
        />
      </div>
      <div>
        <p className="mt-5 mb-3 text-muted">
          &copy; 2019 HodlInfo.com Developed By QuadBTech
        </p>
      </div>
    </div>
  );
}

export default Bottom;
