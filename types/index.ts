export interface Person {
  id: string;
  name: string;
  role: string;
  nickname: string | null;
  teams?: string[];
  tournaments?: string[];
  isSquadMember?: boolean;
  twitch?: string;
}

export interface Team {
  id: string;
  name: string;
  tag: string;
  logo: string;
  players: string[];
}

export interface TournamentResult {
  place: number;
  teamId: string;
  points: number | null;
}

export interface Tournament {
  id: string;
  name: string;
  description: string;
  game: string;
  startDate: string;
  endDate: string;
  status: string;
  discord: string;
  teams: string[];
  results: TournamentResult[];
}

export interface Squad {
  id: string;
  nickname: string;
  role: string;
  avatar?: string;
  joinDate?: string;
  bio?: string;
  description?: string;
  achievements?: string[];
  favoriteGames?: string[];
  socialLinks?: {
    twitch?: string;
    twitter?: string;
    youtube?: string;
    discord?: string;
  };
  stats?: {
    playtime?: string;
    achievements?: number;
  };
}

export interface MinecraftServer {
  id: string;
  name: string;
  description: string;
  ip: string;
  version: string;
  maxPlayers: number;
  currentPlayers: number;
  image?: string;
  features?: string[];
  events?: ServerEvent[];
  requirements?: {
    licensed?: boolean;
    launcher?: string;
    mainMod?: string;
  };
  howToJoin?: string;
  contactTelegram?: string;
  modpackInfo?: string;
}

export interface ServerEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  participants: string[];
  image?: string;
}

export interface SquadInfo {
  founded: string;
  description: string;
  mission: string;
  memberCount: number;
  image?: string;
}
