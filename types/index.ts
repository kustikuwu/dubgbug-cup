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
