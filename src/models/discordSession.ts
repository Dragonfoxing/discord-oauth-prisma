import { prisma } from '../lib/prism';

interface DiscordSessionData {
    access_token: string,
    refresh_token: string,
    token_type: string,
    expiration: Date
}

// TODO: For safety & compliance WRITE THIS CODE OUT ASAP.
const invalidateUserSessions = async (user_id: string) => {

}

const upsertSessionData = async (data: DiscordSessionData): Promise<string> => {
    const upserted = await prisma.session.create({
        data: {
            data: JSON.stringify(data),
            expiresAt: data.expiration
        }
    });

    return upserted.id || "";
};

const getSessionData = async (session_id: string) => {
    const entry = await prisma.session.findUnique({
        where: {
            id: session_id
        }
    });

    if (entry) return JSON.parse(entry.data) as DiscordSessionData;
    else return null;
}

export type { DiscordSessionData };
export { upsertSessionData, getSessionData };