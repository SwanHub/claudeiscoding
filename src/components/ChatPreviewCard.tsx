import Link from "next/link";
import { ChatRoom } from "@/types";

interface ChatPreviewCardProps {
  room: ChatRoom;
}

function formatTimeAgo(date: Date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export default function ChatPreviewCard({ room }: ChatPreviewCardProps) {
  return (
    <Link href={`/chat/${room.slug}`}>
      <div className="bg-white border border-border rounded-lg p-4 hover:border-claude-orange hover:shadow-sm transition-all cursor-pointer">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-claude-dark text-base">
            {room.title}
          </h3>
          <span className="text-xs text-claude-gray whitespace-nowrap ml-2">
            {formatTimeAgo(room.lastMessageAt)}
          </span>
        </div>

        <p className="text-sm text-claude-gray mb-3 line-clamp-2">
          {room.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-claude-gray">
          <span className="flex items-center gap-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            {room.totalMessages}
          </span>
          <span className="flex items-center gap-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            {room.activeUsers} online
          </span>
        </div>
      </div>
    </Link>
  );
}
