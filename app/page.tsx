"use client";

import { useRef } from "react";

export default function Home() {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const textRef2 = useRef<HTMLTextAreaElement>(null);
  const responseRef = useRef<HTMLTextAreaElement>(null);
  const responseRef2 = useRef<HTMLTextAreaElement>(null);

  const ChineseWords = [
    "ding",
    "dong",
    "bing",
    "bong",
    "chao",
    "niha",
    "hao",
    "boom",
    "gang",
    "bang",
    "dang",
    "doom",
    "ching",
    "chang",
    "choong",
    "shang",
    "mang",
    "tang",
    "mong",
    "shong",
    "beng",
    "sheng",
    "neng",
    "shoom",
    "cheng",
    "mung",
    "koon",
  ];
  const EnglishLetters = "abcdefghijklmnopqrstuvwzyz ".split("");

  function TranslateEnglishToChinese(phrase: string) {
    phrase = phrase.toLowerCase();
    let chinesePhrase = "";
    phrase.split("").forEach((letter) => {
      const index = EnglishLetters.indexOf(letter);
      if (!ChineseWords[index]) return (chinesePhrase += letter);
      chinesePhrase += ChineseWords[index] + " ";
    });
    return chinesePhrase;
  }

  function TranslateChineseToEnglish(phrase: string) {
    phrase = phrase.toLowerCase();
    let englishPhrase = "";
    phrase.split(" ").forEach((letter) => {
      const index = ChineseWords.indexOf(letter);
      if (!EnglishLetters[index]) return (englishPhrase += letter);
      englishPhrase += EnglishLetters[index];
    });
    return englishPhrase;
  }
  return (
    // container
    <div className="mx-auto max-w-[90%] py-24">
      <div className="border border-slate-300 shadow-sm rounded-md p-4 max-w-[700px] mx-auto mb-12">
        <h2 className="mb-2 text-lg text-slate-600">English to Chinese</h2>
        <div className="flex justify-between h-full mb-4">
          <textarea
            onChange={() => {
              if (!textRef.current) return;
              const phrase: string = textRef.current.value;
              if (!responseRef.current) return;
              responseRef.current.value = TranslateEnglishToChinese(phrase);
            }}
            ref={textRef}
            className="bg-slate-200 h-32 border py-2 px-3 border-slate-300 w-[48%] rounded-md resize-none outline-none"
          />
          <textarea
            ref={responseRef}
            className="bg-slate-200 border h-32 py-2 px-3 border-slate-300 w-[48%] rounded-md resize-none outline-none"
            disabled
          />
        </div>
      </div>

      <div className="border border-slate-300 shadow-lg rounded-md p-4 max-w-[700px] mx-auto">
        <h2 className="mb-2 text-lg text-slate-600">Chinese to English</h2>
        <div className="flex justify-between h-full mb-4">
          <textarea
            onChange={() => {
              if (!textRef2.current) return;
              const phrase: string = textRef2.current.value;
              if (!responseRef2.current) return;
              responseRef2.current.value = TranslateChineseToEnglish(phrase);
            }}
            ref={textRef2}
            className="bg-slate-200 h-32 border py-2 px-3 border-slate-300 w-[48%] rounded-md resize-none outline-none"
          />
          <textarea
            ref={responseRef2}
            className="bg-slate-200 border h-32 py-2 px-3 border-slate-300 w-[48%] rounded-md resize-none outline-none"
            disabled
          />
        </div>
      </div>
    </div>
  );
}
