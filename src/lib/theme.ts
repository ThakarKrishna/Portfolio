export type Theme = "dark" | "light";

export const themes: Theme[] = ["dark", "light"];

export function getSystemTheme(): Theme {
    if (typeof window === "undefined") return "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getStoredTheme(): Theme | null {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem("theme");
    return (stored as Theme) || null;
}

export function setStoredTheme(theme: Theme) {
    if (typeof window === "undefined") return;
    localStorage.setItem("theme", theme);
}

export function applyTheme(theme: Theme) {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute("content", theme === "dark" ? "#0C0524" : "#ffffff");
    }
}
