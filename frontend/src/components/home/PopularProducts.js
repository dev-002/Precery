import PopularProductCard from "./subcomponents/PopularProductCard";

export default function PopularProducts() {
  const items = [
    {
      name: "apple",
      quantity: 1,
      price: 100,
      img: "https://i.imgur.com/vUJ2JKU.png",
      id: 0,
    },
    {
      name: "chili",
      quantity: 1,
      price: 80,
      img: "https://i.imgur.com/rFhSMZN.png",
      id: 1,
    },
    {
      name: "onion",
      quantity: 1,
      price: 50,
      img: "https://i.imgur.com/sGLggWL.jpg",
      id: 2,
    },
    {
      name: "potato",
      quantity: 1,
      price: 60,
      img: "https://i.imgur.com/WFjH6ui.png",
      id: 3,
    },
    {
      name: "garlic",
      quantity: 1,
      price: 50,
      img: "https://i.imgur.com/XVLuy2J.png",
      id: 4,
    },
    {
      name: "tomato",
      quantity: 1,
      price: 80,
      img: "https://i.imgur.com/8l5hDhS.png",
      id: 5,
    },
  ];

  return (
    <section id="popular-product">
      <div className="product-heading">
        <h3>Popular Product</h3>
        <span>All</span>
      </div>

      <div className="product-container">
        <PopularProductCard items={items} />
      </div>
    </section>
  );
}
