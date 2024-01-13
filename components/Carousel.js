import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const content = {
  title: "Image Carousel",
  subtitle: "Subtitle",
  items: {
    item1: {
      url: "/img/1280x960.png",
      width: "1280",
      height: "960",
    },
    item2: {
      url: "/img/1280x960.png",
      width: "1280",
      height: "960",
    },
    item3: {
      url: "/img/1280x960.png",
      width: "1280",
      height: "960",
    },
    item4: {
      url: "/img/1280x960.png",
      width: "1280",
      height: "960",
    },
    item5: {
      url: "/img/1280x960.png",
      width: "1280",
      height: "960",
    },
    item6: {
      url: "/img/1280x960.png",
      width: "1280",
      height: "960",
    },
  }
};

const itemsArray = Object.keys(content.items).map(key => content.items[key]);

export default function ImageCarousel() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 1920,
        min: 1024,
      },
      items: 4,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: {
        max: 420,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 991,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <section className="section has-background-white">
      <div className="container">
        <div className="info has-text-centered mb-4">
          <h2 className="title">{content.title}</h2>
          <h4 className="subtitle mt-4">
            {content.subtitle}
          </h4>
        </div>
        <div id="carousel">
          <Carousel
            responsive={responsive}
            draggable
            swipeable
            infinite
            autoPlay={false}
            partialVisbile={true}
            arrows={true}
          >
            {itemsArray.map((item, index) => (
              <div className="column" key={index}>
                <Image
                  src={item.url}
                  alt=""
                  width={item.width}
                  height={item.height}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}