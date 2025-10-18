import { Message, Channel, ChatRoom } from "./types";

export const MAIN_CHANNEL: Channel = {
  id: "main",
  name: "general-waiting-room",
  description: "The main chat for developers waiting on Claude",
};

export const SAMPLE_MESSAGES: Message[] = [
  {
    id: "1",
    userId: "user1",
    username: "dev_sarah",
    content: "anyone else just staring at their screen waiting?",
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: "2",
    userId: "user2",
    username: "code_monkey_42",
    content: "yep. been here 10 mins. grabbed coffee twice already",
    timestamp: new Date(Date.now() - 240000),
  },
  {
    id: "3",
    userId: "user3",
    username: "async_annie",
    content: "I started checking twitter. big mistake lol",
    timestamp: new Date(Date.now() - 180000),
  },
  {
    id: "4",
    userId: "user4",
    username: "terminal_tim",
    content: "pro tip: keep this tab open. makes the waiting social",
    timestamp: new Date(Date.now() - 120000),
  },
  {
    id: "5",
    userId: "user1",
    username: "dev_sarah",
    content: "honestly this is weirdly calming. like a dev lounge",
    timestamp: new Date(Date.now() - 60000),
  },
];

export const CHAT_ROOMS: ChatRoom[] = [
  {
    id: "1",
    slug: "general-waiting-room",
    title: "General Waiting Room",
    description: "The main lounge for all developers waiting",
    totalMessages: 1247,
    lastMessageAt: new Date(Date.now() - 60000),
    activeUsers: 42,
  },
  {
    id: "2",
    slug: "refactoring-support-group",
    title: "Refactoring Support Group",
    description: "Asked for a simple fix, got entire architecture redesign",
    totalMessages: 856,
    lastMessageAt: new Date(Date.now() - 120000),
    activeUsers: 28,
  },
  {
    id: "3",
    slug: "the-context-window",
    title: "The Context Window",
    description: "For when Claude is reading your entire codebase",
    totalMessages: 634,
    lastMessageAt: new Date(Date.now() - 300000),
    activeUsers: 19,
  },
  {
    id: "4",
    slug: "test-writers-anonymous",
    title: "Test Writers Anonymous",
    description: "Support group for those who asked Claude to add tests",
    totalMessages: 423,
    lastMessageAt: new Date(Date.now() - 900000),
    activeUsers: 15,
  },
  {
    id: "5",
    slug: "migration-survivors",
    title: "Migration Survivors",
    description: "You said 'migrate to TypeScript' didn't you?",
    totalMessages: 389,
    lastMessageAt: new Date(Date.now() - 1800000),
    activeUsers: 12,
  },
  {
    id: "6",
    slug: "late-night-coding",
    title: "Late Night Coding",
    description: "3am thoughts and Claude-powered productivity",
    totalMessages: 567,
    lastMessageAt: new Date(Date.now() - 3600000),
    activeUsers: 8,
  },
];
