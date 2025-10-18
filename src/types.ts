export interface User {
  id: string;
  username: string;
  status: "waiting" | "watching" | "coding";
}

export interface Message {
  id: string;
  userId: string;
  username: string;
  content: string;
  timestamp: Date;
}

export interface Channel {
  id: string;
  name: string;
  description: string;
}

export interface ChatRoom {
  id: string;
  slug: string;
  title: string;
  description: string;
  totalMessages: number;
  lastMessageAt: Date;
  activeUsers: number;
}
