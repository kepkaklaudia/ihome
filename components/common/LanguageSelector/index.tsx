import { useLocale } from "next-intl";
import { StyledLink } from "@/components/common/LanguageSelector/StyledLink";

export const LanguageSelector = ({ isNavbar }: { isNavbar: boolean }) => {
  const locale = useLocale();

  return (
    <>
      {locale === "pl" ? (
        <StyledLink
          newLocale="en"
          alt="Switch to english language"
          flagCode="pl"
          isNavbar={isNavbar}
        />
      ) : (
        <StyledLink
          newLocale="pl"
          alt="Przełącz na polski język"
          flagCode="gb"
          isNavbar={isNavbar}
        />
      )}
    </>
  );
};
