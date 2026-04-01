"use client";

import { useValue } from "@/lib/provider";
import React from "react";

export default function RulesModal() {
  const { gameStartHandler } = useValue();

  return (
    <dialog
      data-theme="forest"
      id="rules_modal"
      className="modal modal-bottom sm:modal-middle font-inter"
    >
      <div className="modal-box lg:max-w-sm flex flex-col items-center gap-4">
        <span className="badge badge-accent badge-lg badge-soft">
          Level: Impossible
        </span>
        <h3 className="font-bold text-xl text-base-content text-center mt-1">
          Don&apos;t. Touch. Anything.
        </h3>
        <p className="text-sm mt-2 leading-relaxed max-w-md text-center text-base-content/80">
          The moment you move your mouse, click, press a key, or leave
          fullscreen, the run is over.
        </p>
        <ul className="mt-2 text-sm text-base-content/70 space-y-1 text-left w-full list-disc list-inside">
          <li>Keep your hands off the mouse and keyboard.</li>
          <li>Stay in fullscreen the whole time.</li>
          <li>Let the timer climb and flex on the leaderboard later.</li>
        </ul>
        <p className="text-xs text-base-content/60 mt-2 text-center italic">
          Pro tip: blink, breathe, overthink life choices — just don&apos;t
          move.
        </p>
        <div className="modal-action w-full justify-center mt-3">
          <button
            onClick={() => {
              gameStartHandler();
              document.getElementById("rules_modal").close();
            }}
            className="btn btn-lg btn-primary btn-wide rounded-full font-fredoka"
          >
            I&apos;ll do nothing
          </button>
        </div>
      </div>
    </dialog>
  );
}
