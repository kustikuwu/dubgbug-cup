export interface SquadIntegrations {
  telegram?: string;
  twitch?: string;
  youtube?: string;
}

export interface SquadMember {
  id: string;
  nickname: string;
  name: string;
  avatar: string;
  role?: string;
  description: string;
  integrations: SquadIntegrations;
}
