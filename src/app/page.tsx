import ChatHeader from "@/components/ChatHeader";
import ChatPreviewCard from "@/components/ChatPreviewCard";
import { CHAT_ROOMS } from "@/constants";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-claude-dark mb-2">
              Active Chat Rooms
            </h2>
            <p className="text-sm text-claude-gray">
              Join a conversation while you wait
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHAT_ROOMS.map((room) => (
              <ChatPreviewCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
