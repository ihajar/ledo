"use client";

import { Loader } from "lucide-react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

import { Thread } from "@/features/messages/components/thread";
import { Profile } from "@/features/members/components/profile";

import { usePanel } from "@/hooks/use-panel";

import { Id } from "../../../../convex/_generated/dataModel";

import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar"; 
import { WorkspaceSidebar } from "./workspace-sidebar";




interface WokspaceIdLayoutProps {
    children: React.ReactNode;
}


const WorkspaceIdLayout = ({ children }: WokspaceIdLayoutProps) => {
    const { parentMessageId, profileMemberId, onClose } = usePanel();

    const showPanel = !!parentMessageId || !!profileMemberId;
    
    return ( 
        <div className="h-ful">
            <Toolbar />
            <div className="flex h-[calc(100vh-40px)]">
                <Sidebar />
                <ResizablePanelGroup 
                    direction="horizontal"
                    autoSaveId="ledo-workspace-layout"
                >
                    <ResizablePanel
                        defaultSize={20}
                        minSize={11}
                        className="bg-[#1C1F22] text-white"
                    >
                        <WorkspaceSidebar />
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel minSize={20}>
                        {children}
                    </ResizablePanel>
                    {showPanel && (
                        <>
                            <ResizableHandle withHandle />
                            <ResizablePanel minSize={20} defaultSize={29}>
                                {parentMessageId ? (
                                    <Thread
                                        messageId={parentMessageId as Id<"messages">}
                                        onClose={onClose}
                                    />
                                ) : profileMemberId ? (
                                    <Profile
                                        memberId={profileMemberId as Id<"members">}
                                        onClose={onClose}
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center">
                                        <Loader className="size-5 animate-spin text-muted-foreground" />
                                    </div>
                                )}
                            </ResizablePanel>
                        </>
                    )}
                </ResizablePanelGroup>
                
            </div>
        </div>
    );
};
 
export default WorkspaceIdLayout;