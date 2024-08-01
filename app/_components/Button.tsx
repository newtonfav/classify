export default function Button({
  text,
  bgColor,
  type,
}: {
  text: string;
  bgColor: string;
  type: string;
}) {
  return (
    <button
      className={`${bgColor} px-4 py-1 ml-3 ${
        type === "primary" ? "hover:bg-accent-500" : "hover:bg-primary-800"
      } transition-colors`}
    >
      {text}
    </button>
  );
}
