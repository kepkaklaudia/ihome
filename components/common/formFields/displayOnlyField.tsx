import { ReactNode } from "react";
import { PencilLine } from "lucide-react";
import { cn } from "@/lib/utils";

interface DisplayOnlyFieldProps {
  label: string;
  defaultValue: string;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
}
export const DisplayOnlyField = ({
  label,
  defaultValue,
  className,
  icon,
  onClick
}: DisplayOnlyFieldProps) => {
  return (
    <label className="text-xs mini:text-base w-full flex flex-col mx-auto gap-2">
      {label}
      <div className="relative w-full">
        <input
          type="text"
          readOnly
          disabled
          value={defaultValue || undefined}
          className={cn(
            "border border-alto bg-white rounded-md text-xs w-[calc(100%-20px)] mini:text-base p-2 focus:outline-alto mini:w-[calc(100%-20px)] pointer-events-none",
            icon !== undefined && "mini:pl-10 mini:w-[calc(100%-50px)]",
            className
          )}
        />
        {icon}
        {onClick ? (
          <PencilLine
            onClick={onClick}
            className={cn(
              "cursor-pointer absolute top-1/2 transform scale-90 -translate-y-1/2 right-2 text-boulder hover:text-red transition-colors"
            )}
          />
        ) : null}
      </div>
    </label>
  );
};
