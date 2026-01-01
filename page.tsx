import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gradient-to-b from-zinc-950 to-zinc-900 px-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-white mb-2 tracking-tight">
          Dungbug Hub
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          Турнирный сайт со статистикой и их результатами!
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/tournaments"
          className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-blue-600/50 hover:scale-105"
        >
          Турниры
        </Link>

        <Link
          href="/teams"
          className="px-8 py-4 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-all duration-200 font-semibold border border-zinc-700 hover:scale-105"
        >
          Команды
        </Link>

        <a
          href="https://discord.gg/gDZJWk7HmV"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-indigo-600/50 hover:scale-105 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
          Discord
        </a>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl w-full">
        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
          <div className="text-3xl mb-2">🏆</div>
          <h3 className="text-lg font-semibold text-white mb-2">Турниры</h3>
          <p className="text-sm text-zinc-400">
            Актуальная информация о проходящих и предстоящих турнирах
          </p>
        </div>

        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
          <div className="text-3xl mb-2">👥</div>
          <h3 className="text-lg font-semibold text-white mb-2">Команды</h3>
          <p className="text-sm text-zinc-400">
            Полная база команд и их составов
          </p>
        </div>

        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
          <div className="text-3xl mb-2">📊</div>
          <h3 className="text-lg font-semibold text-white mb-2">Статистика</h3>
          <p className="text-sm text-zinc-400">
            Результаты матчей и турнирная таблица
          </p>
        </div>
      </div>
    </main>
  );
}