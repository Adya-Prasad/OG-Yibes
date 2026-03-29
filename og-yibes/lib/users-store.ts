import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type UserRecord = {
  id: string;
  email: string;
  passwordHash: string;
  displayName: string;
  createdAt: string;
};

export type EventRegistrationRecord = {
  id: string;
  userId: string;
  eventId: string;
  teamName?: string;
  notes?: string;
  createdAt: string;
};

type StoreShape = {
  users: UserRecord[];
  registrations: EventRegistrationRecord[];
};

const DATA_DIR = path.join(process.cwd(), "data");
const STORE_FILE = path.join(DATA_DIR, "store.json");

async function ensureStore(): Promise<StoreShape> {
  try {
    const raw = await readFile(STORE_FILE, "utf8");
    const parsed = JSON.parse(raw) as StoreShape;
    if (!parsed.users) parsed.users = [];
    if (!parsed.registrations) parsed.registrations = [];
    return parsed;
  } catch {
    console.warn("[users-store] No store yet — creating empty store.");
    return { users: [], registrations: [] };
  }
}

async function writeStore(store: StoreShape): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(STORE_FILE, JSON.stringify(store, null, 2), "utf8");
  console.log("[users-store] Persisted store to disk.");
}

export async function findUserByEmail(
  email: string,
): Promise<UserRecord | undefined> {
  const store = await ensureStore();
  const normalized = email.trim().toLowerCase();
  return store.users.find((u) => u.email.toLowerCase() === normalized);
}

export async function findUserById(id: string): Promise<UserRecord | undefined> {
  const store = await ensureStore();
  return store.users.find((u) => u.id === id);
}

export async function createUser(user: UserRecord): Promise<void> {
  const store = await ensureStore();
  const exists = store.users.some(
    (u) => u.email.toLowerCase() === user.email.toLowerCase(),
  );
  if (exists) {
    console.warn("[users-store] Duplicate email blocked:", user.email);
    throw new Error("EMAIL_TAKEN");
  }
  store.users.push(user);
  await writeStore(store);
  console.log("[users-store] User created:", user.id);
}

export async function addEventRegistration(
  row: EventRegistrationRecord,
): Promise<void> {
  const store = await ensureStore();
  const dup = store.registrations.some(
    (r) => r.userId === row.userId && r.eventId === row.eventId,
  );
  if (dup) {
    console.warn(
      "[users-store] Duplicate registration blocked:",
      row.userId,
      row.eventId,
    );
    throw new Error("ALREADY_REGISTERED");
  }
  store.registrations.push(row);
  await writeStore(store);
  console.log("[users-store] Event registration saved:", row.id);
}

export async function listRegistrationsForUser(
  userId: string,
): Promise<EventRegistrationRecord[]> {
  const store = await ensureStore();
  return store.registrations.filter((r) => r.userId === userId);
}
