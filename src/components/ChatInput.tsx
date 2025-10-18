export default function ChatInput() {
  return (
    <div className="border-t border-border bg-white px-6 py-4">
      <input
        type="text"
        placeholder="Share your waiting experience..."
        className="w-full px-4 py-3 rounded-lg border border-border bg-claude-beige focus:outline-none focus:border-claude-orange focus:ring-1 focus:ring-claude-orange transition-all"
      />
    </div>
  );
}
