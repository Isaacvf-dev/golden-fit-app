export default function Button({ text, callFunction }) {
  return (
    <button onClick={callFunction} className="mx-auto px-8 py-4 rounded-md border-[2px] bg-slate-950 border-amber-400 border-solid goldenShadow duration-200">
      {text}
    </button>
  );
}
