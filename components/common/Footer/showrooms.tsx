import { useTranslations } from "next-intl";
import Image from "next/image";

export const Showrooms = () => {
  const t = useTranslations("common.footer");

  const showrooms = [
    {
      city: "Radom",
      phone: "+48 500 750 900",
      phoneLink: "tel:+48500750900",
      address: "Słowackiego 98",
      image: "/radom.png",
      alt: "showroom-radom",
    },
    {
      city: "Gdynia",
      phone: "+48 500 750 320",
      phoneLink: "tel:+48500750320",
      address: "Al. Zwycięstwa 239/3",
      image: "/gdynia.png",
      alt: "showroom-gdynia",
    },
  ];

  return (
    <div className="flex flex-col gap-6 md:w-2/3">
      <h2 className="font-semibold mt-8 md:mt-0">{t("Our Showrooms")}</h2>
      <div className="flex gap-6 flex-col sm:flex-row md:flex-col lg:flex-row ">
        {showrooms.map(({ city, phone, phoneLink, address, image, alt }) => (
          <div key={city} className="flex gap-6">
            <Image
              className="w-20 h-20"
              src={image}
              alt={alt}
              width={80}
              height={80}
            />
            <div className="flex flex-col">
              <h2 className="font-semibold mb-2 text-lg">{city}</h2>
              <a href={phoneLink}>{phone}</a>
              <p>{address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
