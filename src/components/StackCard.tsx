import type { IStacks } from "../Types/types";
import { Bounce, toast } from "react-toastify";

interface IStackProps {
  stack: IStacks;
  indx: number;
  selectedStack: IStacks[];
  setSelectedstack: React.Dispatch<React.SetStateAction<IStacks[]>>;
}

const StackCard = ({ stack, selectedStack, setSelectedstack }: IStackProps) => {
  const isSelected = selectedStack.some((selected) => selected.id === stack.id);

  const handleSelected = () => {
    setSelectedstack([...selectedStack, stack]);

    toast.success("Stack added susscessfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div
      key={stack.id}
      className={
        isSelected
          ? `group min-h-107.5 rounded-3xl border border-pink-600 bg-white/70 p-5 shadow-md backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-pink-400 hover:shadow-2xl sm:p-6 lg:min-h-100`
          : `group min-h-107.5 rounded-3xl border border-slate-200/60 bg-white/70 p-5 shadow-md backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-pink-400 hover:shadow-2xl sm:p-6 lg:min-h-100`
      }
    >
      {/* Logo + Rating */}
      <div className="mb-6 flex items-center justify-between">
        <div className="rounded-2xl bg-slate-100 p-3 transition duration-300 group-hover:scale-110 group-hover:bg-pink-50">
          <img
            src={stack.logo}
            alt={stack.name}
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
          />
        </div>

        <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1.5 text-xs font-semibold text-yellow-700">
          ⭐ {stack.rating}
        </span>
      </div>

      {/* Name */}
      <h2 className="mb-3 text-xl font-bold text-slate-900">{stack.name}</h2>

      {/* Description */}
      <p className="mb-6 min-h-30 text-sm leading-6 text-slate-500">
        {stack.description}
      </p>

      {/* Category & Difficulty */}
      <div className="mb-6 flex flex-wrap gap-2">
        <span className="rounded-full bg-pink-100 px-3 py-1.5 text-xs font-medium text-pink-600">
          {stack.category}
        </span>

        <span
          className={`rounded-full px-3 py-1.5 text-xs font-medium ${
            stack.difficulty === "Beginner"
              ? "bg-green-100 text-green-700"
              : stack.difficulty === "Intermediate"
                ? "bg-orange-100 text-orange-700"
                : "bg-red-100 text-red-700"
          }`}
        >
          {stack.difficulty}
        </span>
      </div>

      {/* Tag */}
      <div className="border-t border-slate-200 pt-5">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-widest text-slate-400">
              Best For
            </p>

            <p className="mt-1 truncate text-sm font-semibold text-slate-700">
              {stack.tag}
            </p>
          </div>

          <button
            onClick={handleSelected}
            className={
              isSelected
                ? `btn shrink-0 rounded-2xl bg-pink-500 px-4 text-white`
                : `btn shrink-0 rounded-2xl btn-neutral px-4`
            }
            disabled={isSelected}
          >
            {isSelected === true ? `✓Stack Added` : `Add to Stack`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StackCard;
