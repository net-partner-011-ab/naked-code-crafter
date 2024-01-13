import Image from "next/image";

const items = {
  firstItem: {
    image: {
      url: "/img/1280x960.png",
      width: "1280",
      height: "960",
    },
    title: "First Title",
    subtitle: "subtitle",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
  },
  secondItem: {
    image: {
      url: "/img/1280x960.png",
      width: "1280",
      height: "960",
    },
    title: "Second Title",
    subtitle: "subtitle",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
  },
  thirdItem: {
    image: {
      url: "/img/1280x960.png",
      width: "1280",
      height: "960",
    },
    title: "Third Title",
    subtitle: "subtitle",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
  }
};

const itemsArray = Object.keys(items).map(key => items[key]);

export default function Cards() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          {itemsArray.map((item, index) => (
            <div className="column card m-4" key={index}>
              <div className="card-image">
                <figure className="image is-4by3">
                  <Image
                    src={item.image.url}
                    alt=""
                    width={item.image.width}
                    height={item.image.height}
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{item.title}</p>
                    <p className="subtitle is-6">{item.subtitle}</p>
                  </div>
                </div>
                <div className="content">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}