import { useTranslations } from "next-intl";
import Image from "next/image";
import InstagramSVG from "../../../public/instagram.svg";
import YoutubeSVG from "../../../public/youtube.svg";

export const FollowUs = () => {
  const t = useTranslations("common.footer");

  const socialLinks = [
    {
      name: "Instagram",
      href: "/",
      icon: InstagramSVG,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@ihome.wedesign",
      icon: YoutubeSVG,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-semibold">{t("Follow us")}</h2>
      <div className="flex gap-4">
        {socialLinks.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            title={name}
            rel="noopener noreferrer"
          >
            <Image src={icon} alt={name} width={24} height={24} />
          </a>
        ))}
      </div>
    </div>
  );
};
