import { ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "subheading",
            "footer",
            "caption",
            "paragraph-1",
            "paragraph-2",
            "paragraph-3",
            "display-1",
            "display-2",
            "heading-1",
            "heading-1",
            "heading-1-sm",
            "heading-2",
            "heading-2-sm",
            "heading-3",
            "heading-3-sm",
            "heading-4",
            "heading-4-sm",
            "heading-5",
            "heading-5-sm",
            "heading-6",
            "heading-6-sm",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isEven(num: number) {
  return num % 2 === 0;
}

export function initializeTheme() {
  const persistedTheme = localStorage.getItem("theme");

  if (persistedTheme) {
    document.documentElement.setAttribute("data-theme", persistedTheme);
  } else {
    const isDarkColorSheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (isDarkColorSheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }

    localStorage.setItem("theme", isDarkColorSheme ? "dark" : "light");
  }
}
