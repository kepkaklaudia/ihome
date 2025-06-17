import { cn } from "@/lib/utils";
import "./styles.css";
import Image from "next/image";

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-md z-50">
      <div className="w-full h-full flex justify-center align-middle items-center align">
        <div
          className={cn(
            "loader animate-loader text-transparent w-fit font-bold text-6xl mx-auto",
            className
          )}
        >
          <Image width={200} height={200} alt="loader" src="/logo-black.png" />
        </div>
      </div>
    </div>
  );
};
