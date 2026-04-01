import { Globe } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function LeaderboardTable({ data, leaderboardBtn }) {
  const timeSurvived = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds / 60) - hours * 60;
    const seconds = totalSeconds % 60;
    const formate = `${hours ? `${hours}h` : ""} ${
      minutes ? `${minutes}min` : ""
    } ${seconds ? `${seconds}sec` : ""}`;
    return formate;
  };
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-center">
            <th>Rank</th>
            <th>Player</th>
            <th>Time Survived</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {data?.map((player, idx) => (
            <tr key={player._id} className="text-center">
              {/* rank */}
              <th className="text-primary text-base font-bold">
                <span className="text-xl">{idx + 1 === 1 && "🥇"}</span>
                <span className="text-xl">{idx + 1 === 2 && "🥈"}</span>
                <span className="text-xl">{idx + 1 === 3 && "🥉"}</span>

                {idx + 1 > 3 && idx + 1}
              </th>
              {/* image, name, x, website */}
              <td className="flex items-center gap-2">
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="w-12 h-12 rounded-full bg-[#e8f5e9] border border-white/30"
                />
                <div className="text-left">
                  {player.username && (
                    <span
                      className="tooltip tooltip-top"
                      data-tip={player.name}
                    >
                      <a
                        href={`https://x.com/${player.username}`}
                        target="_blank"
                        className="blink link-hover block text-base font-medium text-base-content w-28 truncate"
                      >
                        {player.name}
                      </a>
                    </span>
                  )}
                  {player.username === null && (
                    <span
                      className="tooltip tooltip-top"
                      data-tip={player.name}
                    >
                      <span className="block text-base font-medium text-base-content w-28 truncate cursor-default">
                        {player.name}
                      </span>
                    </span>
                  )}
                  {player.websiteUrl && (
                    <a
                      href={player.websiteUrl}
                      target="_blank"
                      className="flex items-center gap-1 link link-hover text-sm font-medium text-base-content/60 group"
                    >
                      <Globe className="w-3 h-3 group-hover:animate-spin" />{" "}
                      <span
                        className="tooltip tooltip-bottom"
                        data-tip={player.websiteUrl}
                      >
                        <span className="block w-28 truncate">
                          {`${player.websiteUrl}`.split("//")[1]}
                        </span>
                      </span>
                    </a>
                  )}
                </div>
              </td>
              <td className="text-base font-bold text-accent">
                {timeSurvived(player.totalSeconds)}
              </td>
              <td>{player.gameOverReason}</td>
            </tr>
          ))}
        </tbody>
        {leaderboardBtn && (
          <tfoot>
            <tr>
              <td className="h-12">
                <div className="absolute mx-[1px] bottom-[1px] rounded-b-2xl bg-gradient-to-b from-base-transparent via-base-200 to-base-300 inset-x-0 h-22 flex justify-center items-end">
                  <Link
                    href="leaderboard"
                    className="block link text-accent text-xs hover:text-accent/80 pb-6"
                  >
                    See full leaderboard
                  </Link>
                </div>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}
