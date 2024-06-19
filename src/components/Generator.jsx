import { useState } from "react";
import { SCHEMES, WORKOUTS } from "../utils/golden";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

function Header({ index, title, description }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base text-center">{description}</p>
    </div>
  );
}

export default function Generator({
  muscles,
  setMuscles,
  style,
  setStyle,
  goal,
  setGoal,
  updateWorkout,
}) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function toggleStyle(type) {
    setMuscles([]);
    setStyle(type);
  }

  function toggleGoal(scheme) {
    setGoal(scheme);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((item) => item !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (style !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }
  return (
    <SectionWrapper
      header={"create your workout"}
      title={["It's", "Golden", "hour!"]}
    >
      <Header
        index={"01"}
        title={"Choose your style"}
        description={"Select the muscles to be killed."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => toggleStyle(type)}
              className={`bg-slate-950 border px-4 py-3 rounded-lg duration-200 hover:border-amber-600 ${
                type === style ? "border-amber-600" : "border-amber-400"
              }`}
              key={typeIndex}
            >
              <p className="capitalize">{type.replace("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title={"Picking targets"}
        description={"Select the muscles for complete destruction."}
      />
      <div className="bg-slate-950 border border-solid border-amber-400 rounded-lg flex flex-col">
        <button
          onClick={() => toggleModal()}
          className="relative p-3 flex items-center justify-center"
        >
          <p className="capitalize">
            {muscles.length === 0 ? "Select muscle groups" : muscles.join(" ")}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2 "></i>
        </button>
        {showModal && (
          <div className="px-3 pb-3 flex flex-col">
            {(style === "individual"
              ? WORKOUTS[style]
              : Object.keys(WORKOUTS[style])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => updateMuscles(muscleGroup)}
                  className={`hover:text-amber-400 duration-200 ${
                    muscles.includes(muscleGroup) ? "text-amber-400" : ""
                  }`}
                  key={muscleGroupIndex}
                >
                  <p className="uppercase">{muscleGroup.replace("_", " ")}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title={"Get your level up"}
        description={"Select your main goal."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => toggleGoal(scheme)}
              className={`bg-slate-950 border px-4 py-3 rounded-lg duration-200 hover:border-amber-600 ${
                scheme === goal ? "border-amber-600" : "border-amber-400"
              }`}
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replace("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Button callFunction={updateWorkout} text="Generate" />
    </SectionWrapper>
  );
}
