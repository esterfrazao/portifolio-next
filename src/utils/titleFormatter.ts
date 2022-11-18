export default function titleFormatter(title: string) {
  const formattedTitle = title
    .split("-")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");

  return formattedTitle;
}
