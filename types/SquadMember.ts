export interface SquadIntegrations {
  telegram?: string;
  twitch?: string;
  youtube?: string;
  twitter?: string;
  discord?: string;
}

export interface SquadMember {
  id: string;
  nickname: string;
  name?: string;
  avatar: string;
  role?: string;
  description?: string;
  bio?: string;
  integrations?: SquadIntegrations;
  achievements?: string[];
  joinDate?: string;
  favoriteGames?: string[];
  socialLinks?: SquadIntegrations;
  stats?: {
    playtime?: string;
    achievements?: number;
  };
}
