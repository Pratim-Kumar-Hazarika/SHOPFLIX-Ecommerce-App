import "./Address.css";
export function AddressPage() {
  return (
    <div className="addressScreen">
      <form>
        <div style={{ borderBottom: "1px solid #eaeaec" }}>
          <h1 style={{ fontWeight: "lighter", color: "#282C3F" }}>
            Saved Address
          </h1>
        </div>

        <div className="userContent">
          <div>Pratim Hazarika</div>

          <div className="text_bold" style={{ marginLeft: "10px" }}>
            HOME
          </div>
        </div>
        <div className="userContent">
          <div>
            <span>Bx503, Los Angles, California, Vancovour,531 Street</span>
          </div>
        </div>
        <div className="userContent">
          <div>Mumbai-410210, INDIA</div>
        </div>
        <div className="userContent">
          <div>Phone no :98291980</div>
        </div>
        <div style={{ display: "flex" }}>
          <button
            className="add-to-chart-btn "
            style={{ fontWeight: "bold", marginTop: "1rem" }}
          >
            UPDATE
          </button>
          <button
            className="add-to-chart-btn "
            style={{
              fontWeight: "bold",
              marginTop: "1rem",
              marginLeft: "10px"
            }}
          >
            REMOVE
          </button>
        </div>
      </form>
    </div>
  );
}
