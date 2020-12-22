import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { renderMedia } from "../../../../shared/helpers";

// const items = [
//   {
//     id: 1,
//     altText: "Slide 1",
//     title: "Slide 1",
//     description: "Slide 1",
//   },
//   {
//     id: 2,
//     altText: "Slide 2",
//     title: "Slide 2",
//     description: "Slide 2",
//   },
//   {
//     id: 3,
//     altText: "Slide 3",
//     title: "Slide 3",
//     description: "Slide 3",
//   },
// ];

const CarouselGallery = (props) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const { items, onChange, activeIndex } = props;

  console.log(items);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    onChange(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    onChange(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    onChange(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag carousel-item--custom"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        
        {renderMedia(item.source, item.title)}
        <CarouselCaption
          // className="text-danger"
          captionText={item.title}
          captionHeader={item.description}
          className="carousel-caption--custom"
        />
      </CarouselItem>
    );
  });

  return (
    <div style={{ width: "100%" }}>
      <Carousel
        interval={false}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default CarouselGallery;
