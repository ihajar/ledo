import dynamic from "next/dynamic";

import { useRef } from "react";

import Quill from "quill";

import { useCreateMessage } from "@/features/messages/api/use-create-message";

import { useWorkspaceId } from "@/hooks/use-worspace-id";
import { useChannelId } from "@/hooks/use-channel-id";


const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

interface ChatInputProps {
    placeholder: string;
};

export const ChatInput = ({ placeholder }: ChatInputProps) => {
    const editorRef = useRef<Quill | null>(null);

    const channelId = useChannelId();
    const workspaceId = useWorkspaceId();
    const { mutate: createMessage } = useCreateMessage();

    const handleSubmit = ({
        body,
        image
    }: {
        body: string;
        image: File | null;

    }) => {
        console.log({ body, image });

        createMessage({
            workspaceId,
            channelId,
            body,
        });
    };

    return (
        <div className="px-5 w-full">
            <Editor
                placeholder={placeholder}
                onSubmit={handleSubmit}
                disabled={false}
                innerRef={editorRef}
            />
        </div>
    );
};