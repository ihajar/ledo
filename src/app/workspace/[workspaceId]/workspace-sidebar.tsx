import { useCurrentMember } from "@/features/members/api/use-current-member";
import { UseGetChannels } from "@/features/channels/api/use-get-channels";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-worspace-id";

import { AlertTriangle, HashIcon, Loader, MessageSquareText, SendHorizonal } from "lucide-react";

import { WorkspaceHeader } from "./workspace-header";
import { SidebarItem } from "./sidebar-item";
import { WorkspaceSection } from "./workspace-section";



export const WorkspaceSidebar = () => {
    const workspaceId = useWorkspaceId();

    const { data: member, isLoading: memberLoading } = useCurrentMember({ workspaceId });
    const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({ id: workspaceId });
    const { data: channels, isLoading: channelsLoading  } = UseGetChannels({ workspaceId });

    if(workspaceLoading || memberLoading) {
        return (
            <div className="flex flex-col bg-[#1C1F22] text-white h-full items-center justify-center">
                <Loader className="size-5 animate-spin text-white" />
            </div>
        );
    }

    if(!workspace || !member) {
        return (
            <div className="flex flex-col gap-y-2 bg-[#1C1F22] text-white h-full items-center justify-center">
                <AlertTriangle className="size-5 text-white" />
                <p className="text-whote text-sm">Workspace not found</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col bg-[#1C1F22] text-white h-full">
            <WorkspaceHeader workspace={workspace}  isAdmin={member.role === "admin"} />
            <div className="flex flex-col gap-y-3 px-2 mt-5">
                <SidebarItem 
                    label="Threads"
                    icon={MessageSquareText}
                    id="threads"
                />
                <SidebarItem 
                    label="Draft & Sent"
                    icon={SendHorizonal}
                    id="drafts"
                />
            </div>
            <WorkspaceSection
                    label="Channels"
                    hint="New channel"
                    onNew={() => {}}
                >
                    {channels?.map((item) => (
                        <SidebarItem 
                            key={item._id}
                            icon={HashIcon}
                            label={item.name}
                            id={item._id}
                        />
                    ))}
            </WorkspaceSection>
        </div>
    )
};

