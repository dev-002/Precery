import PopularBundlePackCard from "./subcomponents/PopularBundlePackCard";

export default function PopularBundlePack() {
  const items = [
    {
      id: 0,
      name: "Big Pack",
      quantity: "Lemon, Tomato, Potato,+4",
      img: "https://i.imgur.com/Zm8Xo2j.png",
      price: 500,
    },
    {
      id: 1,
      name: "Large Pack",
      quantity: "Lemon, Tomato, Potato,+2",
      img: "https://i.imgur.com/vMA9mRm.jpg",
      price: 800,
    },
    {
      id: 2,
      name: "Small Pack",
      quantity: "Lemon, Tomato, Potato",
      img: "https://i.imgur.com/CeVqxe2.png",
      price: 300,
    },
    {
      id: 3,
      name: "Big Pack",
      quantity: "Lemon, Tomato, Potato,+4",
      img: "https://i.imgur.com/Zm8Xo2j.png",
      price: 900,
    },
    {
      id: 4,
      name: "Large Pack",
      quantity: "Lemon, Tomato, Potato,+2",
      img: "https://i.imgur.com/vMA9mRm.jpg",
      price: 700,
    },
    {
      id: 5,
      name: "Small Pack",
      quantity: "Lemon, Tomato, Potato",
      img: "https://i.imgur.com/CeVqxe2.png",
      price: 400,
    },
  ];

  return (
    <section id="popular-bundle-pack">
      <div className="product-heading">
        <h3>Popular Bundle Pack</h3>
      </div>
      <div className="product-container">
        <PopularBundlePackCard items={items} />
      </div>
    </section>
  );
}
