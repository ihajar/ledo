import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

import { useWorkspaceId } from "@/hooks/use-worspace-id";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Id } from "../../../../convex/_generated/dataModel";


const userItemVariants = cva(
    "flex items-center gap-1.5 justify-start font-normal h-7 px-4 text-sm overflow-hidden",
    {
        variants: {
            variant: {
                default: "text-[#F2F7FC]",
                active: "text-[#090A0B] bg-[#FAFBC7]/90 hover:bg-white/90",
            },
        },
        defaultVariants: {
            variant: "default",
        }, 
    },
);

interface UserItemProps {
    id: Id<"members">;
    label?: string;
    image?: string;
    variant?: VariantProps<typeof userItemVariants>["variant"];
};

export const UserItem = ({
    id,
    image,
    label = "Member",
    variant,
}: UserItemProps) => {
    const workspaceId = useWorkspaceId();
    const avatarFallback = label.charAt(0).toUpperCase();


    return (
        <Button
           variant="transparent"
           className={cn(userItemVariants({ variant: variant }))} 
           size="sm"
           asChild
        >
            <Link href={`/workspace/${workspaceId}/member/${id}`}>
                <Avatar className="size-5 rounded-md mr-1">
                    <AvatarImage className="rounded-md" src={image} />
                    <AvatarFallback className="rounded-md bg-[#CEC7FB] text-black text-xs">
                        {avatarFallback}
                    </AvatarFallback>
                </Avatar>
                <span className="text-sm truncate">{label}</span>
            </Link>
        </Button>
    );
};