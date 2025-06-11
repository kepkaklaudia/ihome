import { useTranslations } from "next-intl";

export const Links = () => {
  const t = useTranslations("common.footer");

  const sections = [
    {
      title: "Services",
      links: [
        "Interior Design",
        "Photovoltaics",
        "Heat Pumps",
        "Heat Recovery Ventilation",
        "Smart home",
        "Interior Finishing",
        "Audio",
        "Home staging",
        "FAQ",
      ],
    },
    {
      title: "Shop",
      links: ["Lamps", "Fireplaces", "Automation", "Furniture"],
    },
    {
      title: "Blog",
      links: ["#decorating", "#news", "#inspirations"],
    },
  ];

  return (
    <div className="w-11/12 flex flex-col md:flex-row mx-auto justify-between my-10 md:my-20">
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold mb-4">{t("Contact")}</h2>
        <a className="text-2xl tracking-wide">design@ihome.pl</a>
      </div>

      <div className="w-2/3 flex gap-10 md:gap-24 mt-10 md:mt-0 flex-col md:flex-row">
        {sections.map(({ title, links }) => (
          <div key={title} className="flex flex-col gap-1">
            <h2 className="font-semibold mb-4">{t(title)}</h2>
            {links.map((link) => (
              <a key={link}>{t(link)}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
