class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.galleryRef = React.createRef();
        this.state = { modalImage: "", modalCaption: "", isModalOpen: false, canScrollLeft: false,
            canScrollRight: false, fade: false };
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
    
    componentDidUpdate(prevProps) {
        if (prevProps.images !== this.props.images) {
            this.galleryRef.current.scrollLeft = 0;
            this.updateBtn();
            this.setState({ fade: false }, () => {
                setTimeout(() => this.setState({ fade: true }), 10);
            });
        }
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
            <div className={`gallery-container ${this.state.fade ? "fade-in" : ""}`}>
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

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGallery: foodGallery.images,
            currentDesc: foodGallery.desc,
            fade: false,
        };
    }

    switchGallery = (newGallery) => {
        if(this.state.currentDesc === newGallery.desc){
            return;
        }

        this.setState({ 
            currentGallery: newGallery.images, 
            currentDesc: newGallery.desc,
            fade: false,
        }, () => {setTimeout(()=>(this.setState({fade: true})),10)});
    };
    
    render(){
        return (
            <div>
                <div id="category">
                    <a onClick={() => this.switchGallery(foodGallery)}>Food</a>
                    <a onClick={() => this.switchGallery(catGallery)}>Cats</a>
                    <a onClick={() => this.switchGallery(randomGallery)}>Random stuff</a>
                </div>
                
                <Gallery images={this.state.currentGallery} />
                
                <p style={{ marginTop: "40px"}} className={`${this.state.fade ? "fade-in" : ""}`}>{this.state.currentDesc}</p>
            </div>
        );
    }
}

const foodGallery = {
    desc: "I like drawing faces on food",
    images: [
        {src:"./images/food/ginger.png", alt:"Gingerbreadman"},
        {src:"./images/food/lemon.png", alt:"Lemon"},
        {src:"./images/food/egg.png", alt:"Sunny side up"},
        {src:"./images/food/pancake.png", alt:"Fluffy pancake"},
        {src:"./images/food/pizza.png", alt:"Pizza slice"},
        {src:"./images/food/sushi.png", alt:"Sushi"},
        {src:"./images/food/pretzel.png", alt:"Pretzel"},
        {src:"./images/food/tomato.png", alt:"Tomato"},
        {src:"./images/food/ketchup.png", alt:"Ketchup"},
    ]
};

const catGallery = {
    desc: "Cats in random places",
    images: [
        {src:"./images/cat/roomba.png", alt:"Roomba"},
        {src:"./images/cat/moai.png", alt:"Moai"},
        {src:"./images/cat/potat.png", alt:"Cat in potato bag"},
        {src:"./images/cat/catpuccino.png", alt:"Catpuccino"},
        {src:"./images/cat/pool.png", alt:"Cat in pool"},
        {src:"./images/cat/harshbrown.png", alt:"Harshbrown"},
    ]
};

const randomGallery = {
    desc: "Random stuff with random captions",
    images: [
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
    ]
};

ReactDOM.render(
    <React.StrictMode>
        <Category />
    </React.StrictMode>,
    document.getElementById("gallery")
);