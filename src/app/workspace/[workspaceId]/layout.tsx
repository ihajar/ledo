"use client";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar"; 
import { WorkspaceSidebar } from "./workspace-sidebar";

interface WokspaceIdLayoutProps {
    children: React.ReactNode;
}


const WorkspaceIdLayout = ({ children }: WokspaceIdLayoutProps) => {
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
                    
                </ResizablePanelGroup>
                
            </div>
        </div>
    );
};
 
export default WorkspaceIdLayout;