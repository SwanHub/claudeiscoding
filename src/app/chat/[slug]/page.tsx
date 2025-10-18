"use client";

import ChatHeader from "@/components/ChatHeader";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { SAMPLE_MESSAGES, MAIN_CHANNEL } from "@/constants";

export default function ChatDetailPage() {
  return (
    <div className="h-full flex flex-col">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto">
        <div className="py-4">
          <div className="px-6 py-4 bg-claude-beige border-l-4 border-claude-orange mx-6 mb-4 rounded">
            <h2 className="font-semibold text-claude-dark mb-1">
              #{MAIN_CHANNEL.name}
            </h2>
            <p className="text-sm text-claude-gray">
              {MAIN_CHANNEL.description}
            </p>
          </div>

          {SAMPLE_MESSAGES.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </div>

      <ChatInput />
    </div>
  );
}
