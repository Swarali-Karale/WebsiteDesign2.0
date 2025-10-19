import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// ------------------ CSS INJECTED ------------------
const styles = `
.item-container {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  height: 140px; /* make all containers same height */
}
.item-name {
  font-weight: bold;
  margin-bottom: 5px;
}
.item-price {
  color: gray;
}

/* Shared grid for items */
.item-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* mobile default */
  gap: 10px;
}

/* Tablet screens */
@media (min-width: 600px) {
  .item-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop screens */
@media (min-width: 900px) {
  .item-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
`;

// inject styles
function StyleInject() {
  return <style>{styles}</style>;
}

// ------------------ Container Component ------------------
function Container({ itemName, price }) {
  return (
    <div className="item-container">
      <div style={{ width: "80px", height: "80px", backgroundColor: "#ccc", borderRadius: "4px" }}></div>
      <div className="item-name">{itemName}</div>
      <div className="item-price">{price}</div>
    </div>
  );
}

// ------------------ Page ------------------
function MascotPage() {
  return (
    <>
      <StyleInject />

      <div className="container-fluid" style={{ padding: "20px" }}>
        <div className="row">

          {/* LEFT — Avatar/Home */}
          <div className="col-md-8" style={{ height: "500px", border: "2px solid #ccc", marginBottom: "10px" }}>
            <h4 className="text-center mt-2">Mascot Home</h4>
            <div style={{ width: "100%", height: "100%", backgroundColor: "#f0f0f0", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <p>Avatar + House Preview</p>
            </div>
          </div>

          {/* RIGHT — Clothing items */}
          <div className="col-md-4" style={{ border: "2px solid #ccc", padding: "10px", height: "500px", overflowY: "auto" }}>
            <h5>Clothing Items</h5>
            <div className="item-grid">
              <Container itemName="Jacket" price="$80" />
              <Container itemName="Cap" price="$25" />
              <Container itemName="Sneakers" price="$60" />
              <Container itemName="Backpack" price="$40" />
              <Container itemName="Socks" price="$5" />
              <Container itemName="Gloves" price="$10" />
            </div>
          </div>
        </div>

        {/* BOTTOM — Housing items */}
        <div className="row mt-3" style={{ border: "2px solid #ccc", padding: "10px" }}>
          <h5>Housing Items</h5>
          <div className="item-grid">
            <Container itemName="Couch" price="$200" />
            <Container itemName="Table" price="$150" />
            <Container itemName="Lamp" price="$50" />
            <Container itemName="Rug" price="$80" />
            <Container itemName="Painting" price="$60" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MascotPage;
