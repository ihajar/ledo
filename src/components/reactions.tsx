import { useWorkspaceId } from "@/hooks/use-worspace-id";

import { useCurrentMember } from "@/features/members/api/use-current-member";

import { Doc, Id } from "../../convex/_generated/dataModel";

import { Hint } from "@/components/hint";
import { EmojiPopover } from "@/components/emoji-popover";

import { cn } from "@/lib/utils";
import { MdOutlineAddReaction } from "react-icons/md";



interface ReactionsProps {
    data: Array<
        Omit<Doc<"reactions">, "memberId"> & {
            count: number;
            memberIds: Id<"members">[]
        }
    >;
    onChange: (value: string) => void;
};

export const Reactions = ({ data, onChange }: ReactionsProps) => {
    const workspaceId = useWorkspaceId();
    const { data: curentMember } = useCurrentMember({workspaceId});

    const curentMemberId = curentMember?._id;

    if(data.length === 0 || !curentMemberId) {
        return null;
    }

    return (
        <div className="flex items-center gap-1 mt-1 mb-1">
            {data.map((reaction) => (
                <Hint 
                    key={reaction._id}
                    label={`${reaction.count} ${reaction.count === 1 ? "person" : "people"} reacted with ${reaction.value}`}
                >
                    <button 
                        onClick={() => onChange(reaction.value)}
                        className={cn(
                            "h-6 px-2 rounded-full bg-slate-200/70 border border-transparent text-slate-800 flex items-center gap-x-1",
                            reaction.memberIds.includes(curentMemberId) && 
                            "bg-blue-100/70 border-[#6953F3] text-[#6953F3]"
                    )}>
                        {reaction.value}
                        <span
                            className={cn(
                                "text-xs font-semibold text-muted-foreground",
                                reaction.memberIds.includes(curentMemberId) && "text-[#6953F3]"
                            )}
                        >
                            {reaction.count}
                        </span>
                    </button>
                </Hint>
            ))}
            <EmojiPopover
                hint="Add reaction"
                onEmojiSelect={(emoji) => onChange(emoji)}
            >
                <button className="h-7 px-3 rounded-full bg-slate-200/70 border border-transparent hover:border-slate-500 text-slate-800 flex items-center gap-x-1">
                    <MdOutlineAddReaction className="size-4" />
                </button>
            </EmojiPopover>
        </div>
    )
};