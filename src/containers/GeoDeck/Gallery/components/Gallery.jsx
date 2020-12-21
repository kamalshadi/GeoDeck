import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";
import { Card, CardBody, Modal } from "reactstrap";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import "@brainhubeu/react-carousel/lib/style.css";
// import "@brainhubeu/react-carousel/lib/style.css";
import CardGallery from "./CardGallery";
import { fetchGalleryItems } from "../../../../redux/actions/galleryAction";
import { renderMedia, sourceToTag } from "../../../../shared/helpers";

const defaultImage = `${process.env.PUBLIC_URL}/img/co2.png`;
const baseUrl = `${process.env.PUBLIC_URL}/img/gallery/`;

class Gallery extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
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
      items: props.items,
      currentTag: "all",
      tags: props.tags,
      lightboxIsOpen: false,
      currentItem: 0,
      carouselItems: [],
    };
  }

  componentDidMount() {
    this.props.fetchGalleryItems();
  }

  onFilter = (tag) => {
    const { items } = this.props;
    if (tag === "all") {
      this.setState({
        items: items,
        currentTag: "all",
      });
    } else {
      this.setState({
        items: items.filter((item) => {
          const itemTag = sourceToTag(item.source);
          return itemTag === tag;
        }),
        currentTag: tag,
      });
    }
  };

  openLightbox = (index, event) => {
    event.preventDefault();
    this.carouselItems();
    this.setState({
      currentItem: index,
      lightboxIsOpen: true,
    });
  };

  closeLightbox = () => {
    this.setState({
      currentItem: 0,
      lightboxIsOpen: false,
    });
  };

  onChange = (value) => {
    // console.log(value);
    this.setState({ currentItem: value });
  };

  carouselItems = () => {
    const { items } = this.state;
    // console.log(items);
    this.setState({
      carouselItems: items.map((item) => item),
      // carouselItems: items.map((item) => item.source),
    });
  };

  renderFilters = () => {
    const { tags, currentTag } = this.state;
    return (
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
        {tags.map((btn, index) => (
          <button
            type="button"
            className={`gallery__btn${
              btn.tag === currentTag ? " gallery__btn--active" : ""
            }`}
            key={index}
            onClick={(e) => this.onFilter(btn.tag, e)}
          >
            {btn.title}
          </button>
        ))}
      </div>
    );
  };

  renderCarousel = () => {
    // console.log(this.state.carouselItems);
    return (
      <div>
        <Carousel
          // plugins={["arrows"]}
          value={this.state.currentItem}
          // slides={this.state.slides}
          onChange={this.onChange}
        >
          {this.state.carouselItems.map(({ source, title }) => {
            // console.log(source);
            return (
              <div className="card-header">{renderMedia(source, title)}</div>
            );
          })}
        </Carousel>
        <Dots
          number={this.state.carouselItems.length}
          thumbnails={this.state.carouselItems.map(({ source, title }) => {
            // console.log(source);
            return (
              <div className="card-header">{renderMedia(source, title)}</div>
            );
          })}
          value={this.state.currentItem}
          onChange={this.onChange}
        />
      </div>
    );
  };

  renderModal = () => {
    const { currentItem, lightboxIsOpen, carouselItems } = this.state;
    // console.log(this.state);
    return (
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
          {this.renderCarousel()}
          {/* <Carousel
            value={currentItem}
            onChange={this.onChange}
            // slides={carouselItems?.map((item) => (
            //   <img src={item ? `${baseUrl}${item}` : defaultImage} alt="" />
            // ))}
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
          >
            {carouselItems?.map((item) => (
              <img
                src={item ? `${baseUrl}${item}` : defaultImage}
                alt={item}
                width="100%"
                height="auto"
              />
            ))}
            <Dots
              number={_.size(carouselItems)}
              thumbnails={carouselItems?.map((item) => (
                <img
                  src={item ? `${baseUrl}${item}` : defaultImage}
                  alt={item}
                  width="100%"
                  height="auto"
                />
              ))}
              value={currentItem}
              onChange={this.onChange}
              // number={}
            />
          </Carousel> */}
          <div className="modal__footer">
            <p>
              {currentItem + 1} of {_.size(carouselItems)}
            </p>
          </div>
        </div>
      </Modal>
    );
  };

  render() {
    const { items } = this.state;

    if (!this.props.items) {
      return null;
    }

    return (
      <div className="gallery">
        {this.renderFilters()}

        {items.map((item, index) => (
          <button
            className="gallery__img-wrap"
            key={`gallery-item-${index} `}
            onClick={(event) => this.openLightbox(index, event)}
          >
            <CardGallery item={item} />
          </button>
        ))}
        {this.renderModal()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: Object.values(state.galleries) };
};

export default connect(mapStateToProps, { fetchGalleryItems })(Gallery);
