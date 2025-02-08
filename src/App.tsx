"use client";
import { useState } from "react";

import churroImage from "../images/IMG_2075.jpg";
import NakedOne from "../images/IMG_1941.jpg";
import NakedTwo from "../images/IMG_1931.jpg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "What if I buy you yakult?",
      "What about a matcha latte",
      "PLEASE POOKIE",
      "I am going to die",
      "Yep im dead",
      ":((((",
      "I WILL DO ALL THE DISHES!",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center gap-2">
              <img
                className="h-[200px] rotate-90"
                src={NakedOne}
                alt="Naked One"
              />
              <img
                className="h-[200px] my-7"
                src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                alt="Bear Kiss"
              />
              <img
                className="h-[200px] rotate-90"
                src={NakedTwo}
                alt="Naked Two"
              />
            </div>

            <div className="my-10 text-4xl font-bold text-center">
              WOOOOOO!!! Let's go grab matcha and fuck raw!! ;))
            </div>
          </div>
        </>
      ) : (
        <>
          <img className="h-[300px]" src={churroImage} />
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <h6 className="my-4 text-2xl">From Calvin to Jio (my Pogi)</h6>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
