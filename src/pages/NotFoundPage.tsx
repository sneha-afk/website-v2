import { useState } from "react";

const EMOJIS = [
  "🛸",
  "👾",
  "🚀",
  "🤖",
  "🌌",
  "🪐",
  "⭐",
  "🌠",
  "🛰️",
  "☄️",
  "👽",
  "🧑‍🚀",
  "🌟",
  "✨",
  "💫",
];

export function NotFoundPage() {
  const [emoji, setEmoji] = useState("🛸");

  function randomizeEmoji() {
    let next = emoji;

    while (next === emoji) {
      next = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    }

    setEmoji(next);
  }

  return (
    <main className="not-found">
      <h2>oops, that doesn't exist :(</h2>

      <button
        className="not-found__emoji"
        onClick={randomizeEmoji}
        aria-label="Change emoji"
      >
        {emoji}
      </button>

      <p className="not-found__hint">you can click that</p>

      <p className="not-found__home">
        let's <a href="/">head back home</a>
      </p>
    </main>
  );
}
