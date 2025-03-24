class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Array.from(window.cartItems?.values() || []),
      orderPlaced: false,
    };
  }

  componentDidMount() {
    window.addEventListener("update", () => {
      this.setState({ 
        items: Array.from(window.cartItems.values()),
        orderPlaced: window.orderPlaced
       });
    });
  }

  itemStyle = {
    display: "flex",
    height: "15vh",
    marginLeft: "20px",
    marginBottom: "30px",
    justifyContent: "center",
    direction: "ltr",
  };

  textContainerStyle = {
    display: "flex",
    width: "60%",
    marginLeft: "20px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  removeItem = (index) => {
    window.cartItems.splice(index, 1);
    window.dispatchEvent(new Event("update"));
  };

  render() {
    return (
      <div style={{ padding: "10px" }}>
        {this.state.items.length === 0 ? (
          this.state.orderPlaced ? 
          <p style={{ color: "green", direction:"ltr" }}>Order placed !</p>
          :  <p style={{ color: "white" }}>Cart is empty</p>
        ) : (
          this.state.items.map((item, index) => (
            <div style={this.itemStyle} key={index}>
              <img src={item.src} alt="Cart Item" />
              <div style={this.textContainerStyle}>
                <p style={{ color: "white", margin: "0" }}>{item.desc}</p>
                <a
                  style={{
                    color: "red",
                    cursor: "pointer",
                    fontSize: "40px",
                  }}
                  onClick={() => this.removeItem(index)}
                >
                  Remove
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>,
  document.getElementById("cartInfo")
);
