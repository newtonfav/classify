export default function extractNameFromPrompt(text: string) {
  // Define the regex pattern to match the text inside square brackets
  const regex = /\[([^\]]+)\]/;

  if (!text) return { mainText: "", name: "" };

  // Apply the regex pattern to the input text
  const match = text.match(regex);

  // Extract the name from the match (if found) and remove the brackets from the main text
  const name = match ? match[1] : "";
  const mainText = text.replace(regex, "").trim();

  return {
    mainText,
    name,
  };
}
