import SpinnerMini from "./SpinnerMini";

export default function Button({
  text,
  bgColor,
  type,
  onClickItem,
  isDisabled,
  isLoading,
  id,
}: {
  text: string;
  bgColor: string;
  type: string;
  id: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClickItem?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      onClick={isDisabled ? undefined : onClickItem}
      id={id}
      className={`px-4 midPhone:text-[0.8rem] py-1 ml-3 midPhone:ml-0 midPhone:px-2  ${bgColor} ${
        type === "primary" ? "bg-accent-600" : "bg-primary-500"
      } transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? <SpinnerMini /> : text}
    </button>
  );
}
