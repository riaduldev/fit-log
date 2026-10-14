
import Image from "next/image";


interface ExerciseCardProps {
  exercise: IExercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
  } = exercise;

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#222630] text-white">
      {/* Exercise Image */}
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />

        <span className="absolute left-3 top-3 rounded-full bg-[#C2F800] px-3 py-1 text-xs font-semibold text-black">
          {difficulty}
        </span>

        <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-sm font-medium text-white">
          ★ {rating}
        </span>
      </div>

      {/* Exercise Information */}
      <div className="space-y-4 p-4 sm:p-5">
        <div>
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            {name}
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            {description}
          </p>
        </div>

        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-md bg-white/10 px-3 py-1 text-xs text-gray-200"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-[#2B303B] p-3">
            <p className="text-xs text-gray-400">Duration</p>
            <p className="mt-1 font-semibold">{duration} min</p>
          </div>

          <div className="rounded-lg bg-[#2B303B] p-3">
            <p className="text-xs text-gray-400">Calories Burned</p>
            <p className="mt-1 font-semibold">{caloriesBurned} kcal</p>
          </div>

          <div className="rounded-lg bg-[#2B303B] p-3">
            <p className="text-xs text-gray-400">Sets</p>
            <p className="mt-1 font-semibold">{sets} sets</p>
          </div>

          <div className="rounded-lg bg-[#2B303B] p-3">
            <p className="text-xs text-gray-400">Reps</p>
            <p className="mt-1 font-semibold">{reps}</p>
          </div>
        </div>

        {/* Equipment */}
        <div className="border-t border-white/10 pt-3">
          <p className="text-xs text-gray-400">Equipment</p>
          <p className="mt-1 text-sm font-medium">{equipment}</p>
        </div>
      </div>
    </article>
  );
};

export default ExerciseCard;
