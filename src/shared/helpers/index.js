const ligthTheme = {
  backgroundColor: "white",
  color: "#646777",
};

const darkTheme = {
  backgroundColor: "#2e2c34",
  color: "#dddddd",
};

export const themes = {
  ligthTheme,
  darkTheme,
};

export const toPercent = (decimal, fixed = 0) => `${decimal.toFixed(fixed)}%`;

export const toExtension = (source) =>
  source ? source.split(".").pop() : null;

export const sourceToTag = (source) => {
  const images = ["jpg", "gif", "png"];
  const videos = ["mp4", "3gp", "ogg", "webm"];
  const extension = toExtension(source);

  if (videos.includes(extension)) {
    return "video";
  } else if (images.includes(extension)) {
    return "img";
  }
  return "all";
};

function getTooltipStyles(themeName, type) {
  switch (themeName) {
    case "theme-dark": {
      const { backgroundColor, color } = darkTheme;
      return {
        contentStyle: { backgroundColor },
        itemStyle: type === "defaultItems" ? null : { color },
      };
    }
    case "theme-light": {
      return ligthTheme;
    }
    default:
      return ligthTheme;
  }
}

export default getTooltipStyles;
