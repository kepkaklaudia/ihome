import { cn } from "@/lib/utils";
import Image from "next/image";

export const Payments = () => {
  const paymentMethods = [
    { src: "/visa.svg", alt: "visa", className: "w-14" },
    { src: "/paypal.svg", alt: "paypal", className: "w-12" },
    { src: "/applepay.svg", alt: "applepay", className: "w-10" },
    { src: "/mastercard.svg", alt: "mastercard", className: "w-9" },
  ];

  return (
    <div className="flex gap-4 mt-2 md:mt-0">
      {paymentMethods.map(({ src, alt, className }) => (
        <Image
          key={alt}
          className={cn(
            "h-auto border border-boulder p-2 rounded-sm",
            className
          )}
          src={src}
          alt={alt}
          width={80}
          height={80}
        />
      ))}
    </div>
  );
};
