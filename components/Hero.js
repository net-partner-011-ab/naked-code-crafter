import Image from "next/image";

const content = {
  title: "Code Crafter Starter Template",
  subtitle: "A badass template based on Bulma CSS framework.",
  heroLogo: "/android-chrome-512x512.png",
  heroClass: "is-medium is-black",
}

export default function Hero() {
  return (
    <section className={`hero ${content.heroClass}`}>
      <div className="container">
        <div className="hero-body">
          {content.heroLogo && (
            <Image
              src={content.heroLogo}
              alt="Hero logo"
              width={120}
              height={68}
            />
          )}
          <p className="title pb-4 pt-4 has-text-centered-mobile">{content.title}</p>
          <p className="subtitle has-text-centered-mobile">
            {content.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
