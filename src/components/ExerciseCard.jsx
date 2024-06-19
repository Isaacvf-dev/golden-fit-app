export default function ExerciseCard({ exercise, index }) {
  console.log()
  return (
    <div className="flex flex-col gap-4 sm:flex-wrap p-4 rounded-md bg-slate-950">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
          0{index + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full flex-1 text-lg sm:text-xl md:text-2xl md:text-center">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-slate-400 capitalize">
          {exercise.type}
        </p>
      </div>
    </div>
  );
}
