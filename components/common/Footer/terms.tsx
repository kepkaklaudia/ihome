import { useTranslations } from "next-intl";

export const Terms = () => {
  const t = useTranslations("common.footer");

  const links = [
    { href: "/regulaminy", key: "Regulations" },
    { href: "/polityka-prywatnosci", key: "Privacy Policy" },
    { href: "/ustawienia-prywatnosci", key: "Privacy settings" },
  ];

  return (
    <>
      {links.map(({ href, key }) => (
        <a
          key={key}
          href={href}
          title={t(key)}
          target="_blank"
          className="text-black"
        >
          {t(key)}
        </a>
      ))}
    </>
  );
};
