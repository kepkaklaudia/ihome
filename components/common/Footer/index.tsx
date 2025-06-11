import { Payments } from "@/components/common/Footer/payments";
import { Terms } from "@/components/common/Footer/terms";
import { Links } from "@/components/common/Footer/links";
import { Showrooms } from "@/components/common/Footer/showrooms";
import { FollowUs } from "@/components/common/Footer/followUs";

export const Footer = () => {
  return (
    <footer className="w-full py-6">
      <div className="w-11/12 flex flex-col md:flex-row mx-auto justify-between">
        <FollowUs />
        <Showrooms />
      </div>
      <Links />
      <div className="w-11/12 flex flex-col md:flex-row mx-auto justify-between border-t border-boulder pt-6 gap-4">
        <Terms />
        <Payments />
      </div>
    </footer>
  );
};
