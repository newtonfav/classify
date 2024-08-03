export default function Button({
  text,
  bgColor,
  type,
  onClickItem,
  isDisabled,
  id,
}: {
  text: string;
  bgColor: string;
  type: string;
  id: string;
  isDisabled?: boolean;
  onClickItem?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      onClick={isDisabled ? undefined : onClickItem}
      id={id}
      className={`px-4 py-1 ml-3 ${bgColor} ${
        type === "primary" ? "bg-accent-600" : "bg-primary-500"
      } transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
