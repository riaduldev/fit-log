
import ExerciseCard from "./ExerciseCard";

const getLibraryData = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch library data");
  }

  return res.json();
};

const Library = async () => {
  const libraryData = await getLibraryData();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-white">
        THE LIBRARY
      </h1>

      <p className="text-gray-400">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 gap-6 py-5 sm:grid-cols-2 lg:grid-cols-3">
        {libraryData.map((exercise: IExercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
