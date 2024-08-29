import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react"
import { IconType } from "react-icons/lib"

interface SidebarButtonProps {
    icon: LucideIcon | IconType;
    label: string;
    isActive?: boolean;
};

export const SidebarButton = ({
    icon: Icon,
    label,
    isActive,
}: SidebarButtonProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-0.5 cursor-pointer group">
            <Button
                variant="transparent"
                className={cn("size-9 p-2 group-hover:bg-[#C6FACC]",
                    isActive && "bg-[#C6FACC]/40 text-[#C6FACC]"
                )}
            >
                <Icon className="size-5 text-white group-hover:scale-110 transition-all" />
            </Button>
            <span className="text-[11px] text-white group-hover:text-[#C6FACC]/90 ">
                {label}
            </span>
        </div>
    )
}