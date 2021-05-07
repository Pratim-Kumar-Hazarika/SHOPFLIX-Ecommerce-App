import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
export function LandingPage() {
  const navigate = useNavigate();
  function buttonhandler() {
    navigate("/products");
  }
  return (
    <div className="banner_div">
      <div className="section_div">
        <section className="vertical_section">
          <div className="horizontal_div">
            <div className="text_div">
              <span className="txt">Get upto 50% off</span>
            </div>
          </div>
          <div className="horizontal_div2">
            <div className="text_div_bg">
              <span className="txt2">Sale on kids collection</span>
            </div>
          </div>
        </section>
        <section className="vertical_section2">
          <div className="horizontal_div2_2">
            <div className="text_div_bg_2">
              <h1 className="txt2_2">Graphic Tees From Rs799</h1>
              <div>
                <h3 className="txt2_2">Best in Comfort</h3>
              </div>
              <div>
                <button onClick={buttonhandler} className="shopNowBtn">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        className="vertical_section2 section_two_div"
        style={{ width: "100%" }}
      >
        <div
          className="horizontal_div2_2 hz_div_two_md"
          style={{ marginLeft: "2.7rem" }}
        >
          <div className="text_div_bg_2">
            <h1 className="txt2_2">Most Trending in the hood</h1>
            <div>
              <h3 className="txt2_2">Only Rs1299</h3>
            </div>
            <div>
              <button onClick={buttonhandler} className="shopNowBtn">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="section_div">
        <section className="vertical_section2 section_two_div">
          <div className="horizontal_div2_2 hz_div_two">
            <div className="text_div_bg_2">
              <h1 className="txt2_2">Trend Forcast Printed Tees</h1>
              <div>
                <h3 className="txt2_2">Only Rs799</h3>
              </div>
              <div>
                <button onClick={buttonhandler} className="shopNowBtn">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="vertical_section section_two_horizontal">
          <div className="horizontal_div sec_two_horizontal ">
            <div className="text_div">
              <span style={{fontSize:"1.5rem"}}>Best in comfort</span>
            </div>
          </div>
          <div className="horizontal_div2 sec_two_horizontal2">
            <div className="text_div_bg22">
            <span style={{fontSize:"2rem",color:"white"}}>BFF Collections</span>
             
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
