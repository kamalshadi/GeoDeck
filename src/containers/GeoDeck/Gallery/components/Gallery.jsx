import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "reactstrap";
import Carousel from "@brainhubeu/react-carousel";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import "@brainhubeu/react-carousel/lib/style.css";
import "@brainhubeu/react-carousel/lib/style.css";
import CardProject from "../../Projects/components/CardProject";
import { CardMedia } from "@material-ui/core";
import CardGallery from "./CardGallery";

const getGallery = [
  {
    id: 1,
    title: "USA Geothermal",
    time: "09/09/2020",
    url: "http://test.com",
    username: "test project",
    collaborationGroup: "Lab Internal",
    description: "this is a test project",
    source: "01.jpg",
  },
  {
    id: 2,
    title: "Well Optimization",
    time: "10/21/2020",
    url: "http://web.com",
    username: "web project",
    collaborationGroup: "Lab Internal",
    description: "this is a web project",
    source: "02.jpg",
  },
  {
    id: 3,
    title: "USA Geothermal",
    time: "11/27/2020",
    url: "http://mail.com",
    username: "mail project",
    collaborationGroup: "Lab Internal",
    description: "this is a mail project",
    source: "03.jpg",
  },
  {
    id: 4,
    title: "Well Optimization",
    time: "12/01/2020",
    url: "http://example.com",
    username: "example project",
    collaborationGroup: "Lab Internal",
    description: "this is a example project",
    source: "video.webm",
  },
  {
    id: 5,
    title: "USA Geothermal",
    time: "12/18/2020",
    url: "http://archive.com",
    username: "archive project",
    collaborationGroup: "Lab Internal",
    description: "this is a archive project",
    source: null,
  },
];

export default class Gallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        type: PropTypes.string,
        alt: PropTypes.string,
      })
    ).isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        tag: PropTypes.string,
        title: PropTypes.string,
      })
    ).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      currentTag: "all",
      tags: props.tags,
      lightboxIsOpen: false,
      currentImage: 0,
      carouselImages: [],
    };
  }

  onFilter = (tag) => {
    const { images } = this.props;
    const image = images;
    if (tag === "all") {
      this.setState({
        images: image,
        currentTag: "all",
      });
    } else {
      this.setState({
        images: image.filter((t) => t.type === tag),
        currentTag: tag,
      });
    }
  };

  openLightbox = (index, event) => {
    event.preventDefault();
    this.carouselImages();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  };

  onChange = (value) => {
    this.setState({ currentImage: value });
  };

  carouselImages = () => {
    const { images } = this.state;
    this.setState({
      carouselImages: images.map((item) => item.src),
    });
  };

  render() {
    const {
      currentImage,
      lightboxIsOpen,
      tags,
      images,
      currentTag,
      carouselImages,
    } = this.state;

    return (
      <div className="gallery">
        <div className="gallery__btns">
          <button
            type="button"
            className={`gallery__btn${
              currentTag === "all" ? " gallery__btn--active" : ""
            }`}
            onClick={(e) => this.onFilter("all", e)}
          >
            all
          </button>
          {tags.map((btn) => (
            <button
              type="button"
              className={`gallery__btn${
                btn.tag === currentTag ? " gallery__btn--active" : ""
              }`}
              key={btn}
              onClick={(e) => this.onFilter(btn.tag, e)}
            >
              {btn.title}
            </button>
          ))}
        </div>
        {getGallery.map((gallery, index) => (
          <button
            className="gallery__img-wrap"
            key={index}
            onClick={(event) => this.openLightbox(index, event)}
          >
            <CardGallery item={gallery} />
          </button>
        ))}
        <Modal
          isOpen={lightboxIsOpen}
          toggle={this.closeLightbox}
          className="modal-dialog--primary modal-dialog--carousel"
        >
          <div className="modal__body">
            <div className="modal__header">
              <button
                className="lnr lnr-cross modal__close-btn"
                type="button"
                onClick={this.closeLightbox}
              />
            </div>
            <Carousel
              value={currentImage}
              onChange={this.onChange}
              slides={carouselImages.map((item) => (
                <img src={item} alt="" />
              ))}
              addArrowClickHandler
              arrowLeft={
                <div className="modal__btn">
                  <ChevronLeftIcon className="modal__btn_left" />
                </div>
              }
              arrowRight={
                <div className="modal__btn">
                  <ChevronRightIcon className="modal__btn_right" />
                </div>
              }
            ></Carousel>
            <div className="modal__footer">
              <p>
                {currentImage + 1} of {carouselImages.length}
              </p>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
