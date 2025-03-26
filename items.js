class ShopItems extends React.Component {
    constructor(props){
        super(props);
    }

    showDetails = (items) => {
        document.getElementById("detail").style.right = 0;
        document.getElementById("image").src = items.src;
        document.getElementById("caption").innerHTML = items.alt;
        document.getElementById("message").style.opacity = 0;
        document.getElementById("cart").style.right = "-500px";
        if(window.innerWidth >= 800){
            document.getElementById("main").style.marginRight = "500px";
        }
    }

    render(){
        return(
        <div className="items-container">
            {this.props.items.map((items, index) => (
                <div className="item" key={index}>
                    <img src={items.src} alt={items.alt} style={{marginBottom:"-80px"}} onClick={() => this.showDetails(items)} />
                    <p>{items.alt}</p>
                </div>
            ))}
        </div>
        );
    }
}

const bread = [
    {src:"https://i.postimg.cc/28j86QMc/bread.png", alt:"Bread"},
    {src:"https://i.postimg.cc/MGfGwzNz/butter-toast.png", alt:"Butter on toast"},
    {src:"https://i.postimg.cc/vBWH13Gj/avocado-toast.png", alt:"Avocado toast"},
    {src:"https://i.postimg.cc/hPGcgSQN/cheese-on-bread.png", alt:"Cheese on bread"},
    {src:"https://i.postimg.cc/9f564Vzm/egg-on-bread.png", alt:"Egg on bread"},
    {src:"https://i.postimg.cc/59gbZHyw/polo-bun.png", alt:"Polo bun"},
]

ReactDOM.render(
    <React.StrictMode>
        <ShopItems items={bread}/>
    </React.StrictMode>,
    document.getElementById("bread-items")
)

const snacks = [
    {src:"https://i.postimg.cc/qq4B2yR7/lemon.png", alt:"Lemon"},
    {src:"https://i.postimg.cc/3wXPm6Dg/chili.png", alt:"Chili"},
    {src:"https://i.postimg.cc/s2W38wGX/durian.png", alt:"Durian"},
    {src:"https://i.postimg.cc/2SZp83k9/egg.png", alt:"Sunny side up"},
    {src:"https://i.postimg.cc/NGkjBJJ2/pizza.png", alt:"Pizza slice"},
    {src:"https://i.postimg.cc/NFMShjC4/sushi.png", alt:"Sushi"},
    {src:"https://i.postimg.cc/zB5YQ51t/pretzel.png", alt:"Pretzel"},
    {src:"https://i.postimg.cc/W3PsPg07/nasi-lemak.png", alt:"Nasi Lemak"},
    {src:"https://i.postimg.cc/9M3QFvHZ/tomato.png", alt:"Tomato"},
    {src:"https://i.postimg.cc/TPnXQ1B5/nacho-chips.png", alt:"Nachos"},
    {src:"https://i.postimg.cc/1XBmBXnr/wasabi.png", alt:"Sushi with wasabi"},
    {src:"https://i.postimg.cc/y8bN2Dff/taco.png", alt:"Taco"},
    {src:"https://i.postimg.cc/kGg3ncGW/pasta-meatballs.png", alt:"Pasta with meatballs"},
    {src:"https://i.postimg.cc/1329JLt2/fried-pizza.png", alt:"Fried pizza"},
]

ReactDOM.render(
    <React.StrictMode>
        <ShopItems items={snacks}/>
    </React.StrictMode>,
    document.getElementById("snack-items")
)

const desert = [
    {src:"https://i.postimg.cc/0jVvm4Ft/ginger.png", alt:"Gingerbreadman"},
    {src:"https://i.postimg.cc/fTHW03hw/pancake.png", alt:"Fluffy pancake"},
    {src:"https://i.postimg.cc/gJ4QBZsj/fruit-cake.png", alt:"Fruit cake"},
    {src:"https://i.postimg.cc/CMcpcWr7/swissroll-matcha.png", alt:"Matcha swissroll"},
    {src:"https://i.postimg.cc/rmCMysJ2/swissroll-strawberry.png", alt:"Strawberry swissroll"},
    {src:"https://i.postimg.cc/8zJGJtHH/swissroll.png", alt:"Chocolate swissroll"},
    {src:"https://i.postimg.cc/cHmGyjxs/puff.png", alt:"Cream puff"},
    {src:"https://i.postimg.cc/zGsrnK21/mango-shaved-ice.png", alt:"Mango shaved ice"},
    {src:"https://i.postimg.cc/QxPG3c3W/candy-cane.png", alt:"Candy cane"},
    {src:"https://i.postimg.cc/Y0rkv7nG/cream-cone.png", alt:"Cream cone"},
    {src:"https://i.postimg.cc/7htvb2Jd/crepe.png", alt:"Crepe"},
    {src:"https://i.postimg.cc/63BF00dF/ice-cream.png", alt:"Ice cream"},
]

ReactDOM.render(
    <React.StrictMode>
        <ShopItems items={desert}/>
    </React.StrictMode>,
    document.getElementById("desert-items")
)