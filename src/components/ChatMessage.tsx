import { Message } from "@/types";

interface ChatMessageProps {
  message: Message;
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className="px-6 py-3 hover:bg-claude-beige transition-colors">
      <div className="flex items-baseline gap-3">
        <span className="font-semibold text-claude-orange">
          {message.username}
        </span>
        <span className="text-xs text-claude-gray">
          {formatTime(message.timestamp)}
        </span>
      </div>
      <p className="text-claude-dark mt-1">{message.content}</p>
    </div>
  );
}
