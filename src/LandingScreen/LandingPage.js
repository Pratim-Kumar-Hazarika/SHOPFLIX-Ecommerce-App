import { Link } from "react-router-dom";
import "./LandingPage.css";
export function LandingPage() {
  return (
    <div className="banner_div">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
        </ul>
      </div>
      <img
        className="banner-image"
        src="https://lp2.hm.com/hmgoepprod?set=width[1920],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/kids_s03/march_2021/4093l/4093L-3x2-online-deal-kids-spring-styles.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]"
        alt="banner"
      />
      <img
        className="banner-image"
        src="https://lp2.hm.com/hmgoepprod?set=width[1920],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/kids_s03/march_2021/4093k/4093K-3x2-online-deal-baby-spring-sets.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]"
        alt="banner"
      />

      <div className="shop-btn">
        <Link to="/products">
          <button className="add-to-chart-btn move-to-bag-btn btn-lg">
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
}
