class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.galleryRef = React.createRef();
        this.state = { modalImage: "", modalCaption: "", isModalOpen: false, canScrollLeft: false,
            canScrollRight: false };
    }

    updateBtn = () => {
        const gallery = this.galleryRef.current;
        if (gallery) {
            this.setState({
                canScrollLeft: gallery.scrollLeft > 0,
                canScrollRight: gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth
            });
        }
    }

    scrollGallery = (direction) => {
        const gallery = this.galleryRef.current;
        if (gallery) {
            gallery.scrollBy({ left: direction * 1200, behavior: "smooth" });
            setTimeout(this.updateBtn, 600);
        }
    };

    componentDidMount(){
        setTimeout(this.updateBtn, 600);
    }

    openModal = (image) => {
        this.setState(
            { 
                modalImage: image.src, 
                modalCaption: image.alt, 
                isModalOpen: true 
            },
            () => {
                let modal = document.getElementById("modal");
                if (modal) {
                    modal.style.display = "block";
                }
            }
        );
    };
    

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        return (
            <div className="gallery-container">
                <div className="gallery" ref={this.galleryRef}>
                    {this.props.images.map((image, index) => (
                        <img 
                            key={index} 
                            src={image.src} 
                            alt={image.alt} 
                            onClick={() => this.openModal(image)} 
                        />
                    ))}
                </div>

                {this.state.isModalOpen && (
                    <div id="modal" className="modal">
                        <span className="close" onClick={this.closeModal}>X</span>
                        <img id="image" className="modal-content" src={this.state.modalImage} 
                            alt={this.state.modalCaption} />
                        <div id="caption">{this.state.modalCaption}</div>
                    </div>
                )}

                <a className={`prev ${!this.state.canScrollLeft ? "disabled" : ""}`}  onClick={() => this.scrollGallery(-1)}>&#10094;</a>
                <a className={`next ${!this.state.canScrollRight ? "disabled" : ""}`}  onClick={() => this.scrollGallery(1)}>&#10095;</a>
            </div>
        );
    }
}


const foodGallery = [
    {src:"./images/food/ginger.png", alt:"Gingerbreadman"},
    {src:"./images/food/lemon.png", alt:"Lemon"},
    {src:"./images/food/egg.png", alt:"Sunny side up"},
    {src:"./images/food/pancake.png", alt:"Fluffy pancake"},
    {src:"./images/food/pizza.png", alt:"Pizza slice"},
    {src:"./images/food/sushi.png", alt:"Sushi"},
    {src:"./images/food/pretzel.png", alt:"Pretzel"},
    {src:"./images/food/tomato.png", alt:"Tomato"},
    {src:"./images/food/ketchup.png", alt:"Ketchup"},
];

ReactDOM.render(
    <React.StrictMode>
        <Gallery images={foodGallery}/>
    </React.StrictMode>,
    document.getElementById("food-gallery")
);

const catGallery = [
    {src:"./images/cat/roomba.png", alt:"Roomba"},
    {src:"./images/cat/moai.png", alt:"Moai"},
    {src:"./images/cat/potat.png", alt:"Cat in potato bag"},
    {src:"./images/cat/catpuccino.png", alt:"Catpuccino"},
    {src:"./images/cat/pool.png", alt:"Cat in pool"},
    {src:"./images/cat/harshbrown.png", alt:"Harshbrown"},
];

ReactDOM.render(
    <React.StrictMode>
        <Gallery images={catGallery}/>
    </React.StrictMode>,
    document.getElementById("cat-gallery")
);

const randomGallery = [
    {src:"./images/random/share food.png", alt:"Share your food"},
    {src:"./images/random/debt.png", alt:"Generational debt"},
    {src:"./images/random/cactus.png", alt:"Cactus"},
    {src:"./images/random/sea urchin.png", alt:"Sea urchin"},
    {src:"./images/random/toothpaste.png", alt:"Toothpaste"},
    {src:"./images/random/i know.png", alt:"I know"},
    {src:"./images/random/not listening.png", alt:"Not listening"},
    {src:"./images/random/lock in.png", alt:"Lock in"},
    {src:"./images/random/posture.png", alt:"Posture reveal"},
    {src:"./images/random/i dont.png", alt:"I dont get it"},
    {src:"./images/random/i miss my brain.png", alt:"I miss my brain"},
];

ReactDOM.render(
    <React.StrictMode>
        <Gallery images={randomGallery}/>
    </React.StrictMode>,
    document.getElementById("random-gallery")
);