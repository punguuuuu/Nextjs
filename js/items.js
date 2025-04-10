class ShopItems extends React.Component {
  constructor(props) {
    super(props);
  }

  showDetails = (items) => {
    document.getElementById("detail").style.right = 0;
    document.getElementById("image").src = items.src;
    document.getElementById("caption").innerHTML = items.alt;
    document.getElementById("message").style.opacity = 0;
    document.getElementById("cart").style.right = "-800px";
    if (window.innerWidth >= 800 && window.innerWidth <= 1000) {
      document.getElementById("main").style.marginRight = "350px";
    } else if (window.innerWidth >= 800) {
      document.getElementById("main").style.marginRight = "500px";
    }
  };

  render() {
    return (
      <div className="items-container">
        {this.props.items.map((items, index) => (
          <div className="item" key={index}>
            <img
              src={items.src}
              alt={items.alt}
              style={{ marginBottom: "-80px" }}
              onClick={() => this.showDetails(items)}
            />
            <p>{items.alt}</p>
          </div>
        ))}
      </div>
    );
  }
}

const bread = [
  { src: "https://iili.io/3un9UWg.png", alt: "Bread" },
  {
    src: "https://iili.io/3un94qJ.png",
    alt: "Butter on toast",
  },
  { src: "https://iili.io/3un9gsa.png", alt: "Avocado toast" },
  {
    src: "https://iili.io/3un9QeI.png",
    alt: "Cheese on bread",
  },
  {
    src: "https://iili.io/3unHddl.png",
    alt: "Egg on bread",
  },
  { src: "https://iili.io/3unHMkN.png", alt: "Polo bun" },
];

ReactDOM.render(
  <React.StrictMode>
    <ShopItems items={bread} />
  </React.StrictMode>,
  document.getElementById("bread-items")
);

const snacks = [
  { src: "https://iili.io/3unHT7V.png", alt: "Lemon" },
  { src: "https://iili.io/3un9DzX.png", alt: "Chili" },
  { src: "https://iili.io/3unH91f.png", alt: "Durian" },
  { src: "https://iili.io/3unH272.png", alt: "Sunny side up" },
  { src: "https://iili.io/3unHG7p.png", alt: "Pizza slice" },
  { src: "https://iili.io/3unHjQn.png", alt: "Sushi" },
  { src: "https://iili.io/3unHVpI.png", alt: "Pretzel" },
  { src: "https://iili.io/3unHYLg.png", alt: "Nasi Lemak" },
  { src: "https://iili.io/3unHUpS.png", alt: "Tomato" },
  { src: "https://iili.io/3unH5I1.png", alt: "Nachos" },
  { src: "https://iili.io/3unH6Qe.png", alt: "Sushi with wasabi" },
  { src: "https://iili.io/3unHSv2.png", alt: "Taco" },
  {
    src: "https://iili.io/3unH0rv.png",
    alt: "Pasta with meatballs",
  },
  { src: "https://iili.io/3unHFm7.png", alt: "Fried pizza" },
];

ReactDOM.render(
  <React.StrictMode>
    <ShopItems items={snacks} />
  </React.StrictMode>,
  document.getElementById("snack-items")
);

const desert = [
  { src: "https://iili.io/3unHqXe.png", alt: "Gingerbreadman" },
  { src: "https://iili.io/3unHcBa.png", alt: "Fluffy pancake" },
  { src: "https://iili.io/3unHfI9.png", alt: "Fruit cake" },
  {
    src: "https://iili.io/3unHOEG.png",
    alt: "Matcha swissroll",
  },
  {
    src: "https://iili.io/3unHe4f.png",
    alt: "Strawberry swissroll",
  },
  {
    src: "https://iili.io/3unHv24.png",
    alt: "Chocolate swissroll",
  },
  { src: "https://iili.io/3unHXIt.png", alt: "Cream puff" },
  {
    src: "https://iili.io/3unHAmP.png",
    alt: "Mango shaved ice",
  },
  { src: "https://iili.io/3un960v.png", alt: "Candy cane" },
  { src: "https://iili.io/3un9mss.png", alt: "Cream cone" },
  { src: "https://iili.io/3unHHg4.png", alt: "Crepe" },
  { src: "https://iili.io/3unHnqb.png", alt: "Ice cream" },
];

ReactDOM.render(
  <React.StrictMode>
    <ShopItems items={desert} />
  </React.StrictMode>,
  document.getElementById("desert-items")
);
