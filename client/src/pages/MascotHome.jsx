import React, { useState } from "react";
import "./MascotHome.css";

const dummyHomeItems = [
  { id: 1, type: "furniture", name: "Desk", img: "https://i.ibb.co/Tqk3pLp/desk.png", price: 50, sale: false },
  { id: 2, type: "furniture", name: "Chair", img: "https://i.ibb.co/3z5Lh8f/chair.png", price: 30, sale: true, discount: 20 },
  { id: 3, type: "decor", name: "Lamp", img: "https://i.ibb.co/w0R9tSn/lamp.png", price: 25, sale: false },
  { id: 4, type: "decor", name: "Rug", img: "https://i.ibb.co/GVxf6VZ/rug.png", price: 40, sale: false },
];

const dummyMascotParts = [
  { id: 1, type: "body", name: "Round Body", img: "https://i.ibb.co/sQF7d1V/body1.png", price: 50 },
  { id: 2, type: "head", name: "Round Head", img: "https://i.ibb.co/h9J2fjS/head2.png", price: 35 },
  { id: 3, type: "accessory", name: "Glasses", img: "https://i.ibb.co/4gqLzRf/glasses.png", price: 25 },
];

export default function MascotHome() {
  const [coins, setCoins] = useState(200);
  const [selectedTab, setSelectedTab] = useState("mascot");
  const [inventory, setInventory] = useState([]);
  const [selectedHomeItem, setSelectedHomeItem] = useState(null);
  const [selectedMascotPart, setSelectedMascotPart] = useState({});

  const buyItem = (item) => {
    const cost = item.sale ? item.price - item.discount : item.price;
    if (coins >= cost) {
      setCoins(coins - cost);
      setInventory([...inventory, item]);
      alert(`Purchased ${item.name}!`);
    } else {
      alert("Not enough coins!");
    }
  };

  const renderItems = () => {
    const items = selectedTab === "mascot" ? dummyMascotParts : dummyHomeItems;
    return items.map((item) => {
      const cost = item.sale ? item.price - item.discount : item.price;
      return (
        <div
          key={item.id}
          className="item-card"
          onClick={() =>
            selectedTab === "mascot"
              ? setSelectedMascotPart({ ...selectedMascotPart, [item.type]: item })
              : setSelectedHomeItem(item)
          }
        >
          <img src={item.img} alt={item.name} />
          <div className="item-info">
            <div>{item.name}</div>
            <div className="item-price">
              {item.sale && <span className="sale-badge">SALE -{item.discount}!</span>}
              {cost} 💰
            </div>
          </div>
          <button
            className="buy-btn"
            onClick={(e) => {
              e.stopPropagation();
              buyItem(item);
            }}
          >
            Buy
          </button>
        </div>
      );
    });
  };

  return (
    <div className="mascot-home-wrap">
      <header className="mascot-home-header">
        <h1>Mascot & Home Builder</h1>
        <div className="coin-balance">💰 Coins: {coins}</div>
      </header>

      <div className="mascot-home-main">
        {/* Left Column: Home Preview */}
        <div className="home-preview-panel">
          <h2>Home Preview</h2>
          <div className="home-preview">
            {selectedHomeItem ? (
              <img src={selectedHomeItem.img} alt="Selected Home" />
            ) : (
              <div className="placeholder">Select Home Item</div>
            )}
          </div>
          <h2>Mascot Preview</h2>
          <div className="mascot-preview">
            {["body", "head", "accessory"].map((type) =>
              selectedMascotPart[type] ? (
                <img key={type} src={selectedMascotPart[type].img} alt={type} className="mascot-part" />
              ) : null
            )}
          </div>
        </div>

        {/* Right Column: Tabs */}
        <div className="items-panel">
          <div className="tabs">
            <button
              className={`tab-btn ${selectedTab === "mascot" ? "active" : ""}`}
              onClick={() => setSelectedTab("mascot")}
            >
              Mascot Items
            </button>
            <button
              className={`tab-btn ${selectedTab === "home" ? "active" : ""}`}
              onClick={() => setSelectedTab("home")}
            >
              Home Items
            </button>
            <div
              className="tabs-underline"
              style={{ transform: `translateX(${selectedTab === "mascot" ? "0%" : "100%"})` }}
            />
          </div>

          <div className="items-grid">{renderItems()}</div>
        </div>
      </div>
    </div>
  );
}
