import TopSevenLeaderboardUi from "@/components/top-seven-leaderboard-ui";
import { Play } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/leaderboard/all-time?limit=7`,
    {
      cache: "no-cache",
    }
  );
  const data = await result.json();
  return (
    <>
      <div data-theme="forest" className="font-inter bg-base-200">
        <div className="max-w-7xl min-h-screen mx-auto px-5 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12 lg:gap-0 py-8">
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-base-100/60 px-4 py-1 text-xs font-medium text-base-content/70">
              <span className="size-2 rounded-full bg-primary" /> A brutally
              simple game about doing… absolutely nothing.
            </span>
            <h1 className="font-fredoka text-base-content text-4xl md:text-5xl lg:text-6xl font-semibold max-w-[700px] tracking-tight leading-none">
              The hardest game you’ll ever play… by doing nothing
            </h1>
            <p className="text-base md:text-lg text-base-content/70 max-w-xl">
              Go fullscreen, take your hands off the controls, and see how long
              you can resist every urge to move. One twitch, one click, one key
              press — and it&apos;s over.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="/play"
                className="btn btn-primary rounded-full btn-lg lg:btn-xl btn-wide font-fredoka lg:text-xl"
              >
                <Play className="w-5 h-5 fill-primary-content" /> Play Now
              </Link>
              <Link
                href="/leaderboard"
                className="btn btn-lg lg:btn-xl btn-ghost rounded-full text-sm"
              >
                View the legends of doing nothing
              </Link>
            </div>
          </div>
          {/* all time top 7 players leaderboard */}
          <div>
            <TopSevenLeaderboardUi players={data.allTimeTopPlayers} />
          </div>
        </div>
        <div class="fixed -bottom-1 -right-1 max-w-44 flex items-center gap-2 p-3 bg-base-200 outline-2 outline-dashed outline-white/70 rounded-lg ">
          <span>
            <span class="text-sm text-base-content">By </span>
            <a
              href="https://twitter.com/muhd_durjoy"
              class="link text-sm text-base-content font-medium"
              target="_blank"
            >
              Md Durjoy
            </a>
          </span>
          <img class="max-w-8 rounded-full" src="./pfp.jpeg" alt="durjoy" />
        </div>
      </div>
    </>
  );
}
