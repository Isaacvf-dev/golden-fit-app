import ExerciseCard from "./ExerciseCard"
import SectionWrapper from "./SectionWrapper"
export default function Workout({ workout }) {
  return (
    <SectionWrapper
      id='workout'
      header={"Welcome to"}
      title={["The", "Golden", "area"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, index) => {
          return (
            <ExerciseCard exercise={exercise} index={index} key={index} />
          )
        })}
      </div>
    </SectionWrapper>
  )
}
