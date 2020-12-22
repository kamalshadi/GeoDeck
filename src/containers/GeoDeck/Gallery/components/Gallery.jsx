import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";
import { Card, CardBody, Modal } from "reactstrap";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import { DownloadOutlined } from "@ant-design/icons";
import "@brainhubeu/react-carousel/lib/style.css";
// import "@brainhubeu/react-carousel/lib/style.css";
import CardGallery from "./CardGallery";
import { fetchGalleryItems } from "../../../../redux/actions/galleryAction";
import { renderMedia, sourceToTag } from "../../../../shared/helpers";
import { CardMedia } from "@material-ui/core";
import CarouselGallery from "./CarsouselGallery";
import { baseUrl, defaultImage } from "../../../../baseUrl";

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

  renderThumbnail = (source, title) => {
    const defaultImage = `${process.env.PUBLIC_URL}/img/co2.png`;
    const imageUrl = `${process.env.PUBLIC_URL}/img/gallery/`;
    const sourceTag = sourceToTag(source);

    if (sourceTag === "img" || !source) {
      return (
        <CardMedia
          component="img"
          src={source ? `${imageUrl}${source}` : defaultImage}
          style={{ width: "50px", height: "35px" }}
          // style={{ minHeight: "auto" }}
          // className={
          //   source
          //     ? "project-card__thumbnail project-card__thumbnail--valid"
          //     : " project-card__thumbnail project-card__thumbnail--default"
          // }
          title={title}
        />
      );
    } else if (sourceTag === "video") {
      return (
        <CardMedia
          src={`${imageUrl}${source}`}
          autoPlay={true}
          loop={true}
          style={{ width: "50px", height: "50px" }}
          // style={{ height: "150px" }}
          component="video"
          // style={{ minHeight: "auto" }}
          // className={"project-card__thumbnail project-card__thumbnail--valid"}
          title={title}
        />
      );
    } else {
      return <div>NO IMAGE OR VIDEO!!!!</div>;
    }
  };

  renderCarousel = () => {
    // console.log(this.state.carouselItems);
    return (
      <Carousel
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
    );
  };

  renderDots = () => {
    return (
      <div
        style={{
          marginTop: "24px",
          // width: "300px",
          height: "60px",
          overflow: "hidden",
        }}
        className="d-flex justify-content-between"
      >
        <div
          style={{
            height: "90px",
            /* 40px - more place for scrollbar, is hidden under parent box */
            // padding: "5px",
            whiteSpace: "nowrap",
            overflowX: "scroll",
            overflowY: "hidden",
            "-webkit-overflow-scrolling": "touch",
          }}
        >
          <Dots
            value={this.state.currentItem}
            number={this.state.carouselItems.length}
            thumbnails={this.state.carouselItems.map(({ source, title }) =>
              this.renderThumbnail(source, title)
            )}
            // console.log(source);
            // <div className="card-header" style={{width: "50px", height: "50px"}}>{renderMedia(source, title)}</div>

            value={this.state.currentItem}
            onChange={this.onChange}
          />
        </div>

        <p
          className="modal__footer"
          style={{ margin: "0 24px", alignItems: "center", flex: "1 0 auto" }}
        >
          {this.state.currentItem + 1} of {_.size(this.state.carouselItems)}
        </p>
      </div>
    );
  };

  renderModal = () => {
    const { currentItem, lightboxIsOpen, carouselItems } = this.state;
    const item = carouselItems[currentItem];
    const itemSource = item?.source;
    // console.log(this.state);
    return (
      <Modal
        isOpen={lightboxIsOpen}
        toggle={this.closeLightbox}
        className="modal-dialog--primary modal-dialog--carousel"
        style={{ margin: 0 }}
      >
        <div className="modal__body" style={{ width: "60%", maxWidth: "60%" }}>
          <div className="modal__header">
            <button
              className="lnr lnr-cross modal__close-btn"
              type="button"
              onClick={this.closeLightbox}
            />
          </div>
          {/* {this.renderCarousel()}
          {this.renderDots()} */}

          <CarouselGallery
            items={carouselItems}
            activeIndex={currentItem}
            onChange={this.onChange}
          />

          <div className="modal__footer gallery-modal-footer">
            <a
              // target="_blank"
              href={itemSource ? `${baseUrl}${itemSource}` : defaultImage}
              download
            >
              <DownloadOutlined className="gallery-download" />
            </a>
            <p>
              {currentItem + 1} of {_.size(carouselItems)}
            </p>
          </div>
        </div>
      </Modal>
    );
  };

  render() {
    const { items, carouselItems, currentItem } = this.state;

    console.log(this.state);
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
