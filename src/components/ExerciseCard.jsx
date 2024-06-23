import { useEffect, useState } from "react";

export default function ExerciseCard({ exercise, index }) {
  const [setsCompleted, setSetsCompleted] = useState(0);

  useEffect(() => {
    setSetsCompleted(0)
  },[exercise])

  function handleSetIncrement() {
    setSetsCompleted((setsCompleted + 1) % 6)
  }
  

  return (
    <div className="flex flex-col gap-4 sm:flex-wrap p-4 rounded-md bg-slate-950">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
          0{index + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full flex-1 text-lg sm:text-xl md:text-2xl sm:text-center">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-slate-400 capitalize">{exercise.type}</p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-slate-400 text-sm">Muscle Groups</h3>
        <p className="capitalize">{exercise.muscles.join(" & ")}</p>
      </div>

      <div className="flex flex-col bg-slate-950 rounded gap-2">
        {exercise.description.split('___').map((item) => {
          return (
            <div key={item} className="text-sm">
              {item}
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className="flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full"
            >
              <h3 className="capitalize text-slate-400 text-sm">
                {info === "reps" ? `${exercise.unit}` : info}
              </h3>
              <p className="font-medium">{exercise[info]}</p>
            </div>
          );
        })}
        <button 
          onClick={handleSetIncrement}
          className="flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-amber-400 hover:border-amber-600 w-full">
          <h3 className="capitalize text-slate-400 text-sm text-left">Sets completed</h3>
          <p className="font-medium">{setsCompleted} / 5</p>
        </button>
      </div>
    </div>
  );
}
