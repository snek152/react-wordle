import {
  ChartBarIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";

const size = "h-12 w-12";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5">
      <QuestionMarkCircleIcon className={size} />
      <h1 className="font-serif font-semibold text-5xl">Wordle</h1>
      <div className="flex gap-3">
        <ChartBarIcon className={size} />
        <CogIcon className={size} />
      </div>
    </nav>
  );
}
