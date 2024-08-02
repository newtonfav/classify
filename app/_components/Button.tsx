export default function Button({
  text,
  bgColor,
  type,
  onClickItem,
  isDisabled,
}: {
  text: string;
  bgColor: string;
  type: string;
  isDisabled?: boolean;
  onClickItem?: () => void;
}) {
  return (
    <button
      onClick={isDisabled ? undefined : onClickItem}
      className={`px-4 py-1 ml-3 ${bgColor} ${
        type === "primary" ? "bg-accent-600" : "bg-primary-500"
      } transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
