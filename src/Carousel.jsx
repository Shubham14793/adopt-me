import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  }
  static defaultProps = {
    images: ["https://pets-images.dev-apis.com/pets/none.jpgs"],
  }

  render () {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={(e) => {
                e.preventDefault();
                this.setState({active: +e.target.dataset.index});
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;