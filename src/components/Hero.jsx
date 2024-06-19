import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] mx-auto w-full p-4">
      <div className="flex flex-col gap-4">
        <p>NOW IT&apos;S YOUR TIME. START YOUR</p>
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-amber-400">GOLDEN</span> FITNESS JOURNEY!
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        Ready to turn those &quot;maybe laters&quot; into &quot;today&apos;s
        gains&quot;? It&apos;s time to <span className="text-amber-400 font-medium">level up</span> your fitness game
        and crush those goals you didn&apos;t even know you had. <br/>Let the{" "}
        <span className="text-amber-400 font-medium">gains</span> begin!
      </p>

      <Button text='Accept & Begin'/>
    </div>
  );
}
