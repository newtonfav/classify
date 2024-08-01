// "use client";

export default function Button({
  text,
  bgColor,
  type,
  onClickItem,
}: {
  text: string;
  bgColor: string;
  type: string;
  onClickItem?: () => void;
}) {
  return (
    <button
      onClick={onClickItem}
      className={`${bgColor} px-4 py-1 ml-3 ${
        type === "primary" ? "hover:bg-accent-500" : "hover:bg-primary-800"
      } transition-colors`}
    >
      {text}
    </button>
  );
}
