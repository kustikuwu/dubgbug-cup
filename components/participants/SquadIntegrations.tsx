import { SquadIntegrations as Integrations } from "@/types/SquadMember";

interface Props {
  integrations: Integrations;
}

export default function SquadIntegrations({ integrations }: Props) {
  return (
    <div className="flex gap-4 mt-6">
      {integrations.twitch && (
        <a
          href={integrations.twitch}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 transition"
        >
          Twitch
        </a>
      )}

      {integrations.telegram && (
        <a
          href={integrations.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-300 transition"
        >
          Telegram
        </a>
      )}

      {integrations.youtube && (
        <a
          href={integrations.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-400 transition"
        >
          YouTube
        </a>
      )}
    </div>
  );
}
