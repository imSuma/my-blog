"use client"

import { useEffect, useMemo, useState } from "react"

type Theme = "light" | "dark"

const STORAGE_KEY = "theme"

const themes: Theme[] = ["light", "dark"]

const labelMap: Record<Theme, string> = {
  light: "Switch to dark mode",
  dark: "Switch to light mode",
}

const symbolMap: Record<Theme, string> = {
  light: "🌞",
  dark: "🌙",
}

function applyTheme(nextTheme: Theme) {
  const root = document.documentElement
  themes.forEach((theme) => root.classList.remove(theme))
  root.classList.add(nextTheme)
  root.style.colorScheme = nextTheme
  root.setAttribute("data-theme", nextTheme)
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? "light"
    const initialTheme: Theme = themes.includes(stored) ? stored : "light"
    setTheme(initialTheme)
    applyTheme(initialTheme)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    applyTheme(theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme, mounted])

  const buttonLabel = useMemo(() => labelMap[theme], [theme])
  const buttonSymbol = useMemo(() => symbolMap[theme], [theme])

  return (
    <button
      type="button"
      aria-label={buttonLabel}
      title={buttonLabel}
      onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
      style={{
        alignItems: "center",
        background: "transparent",
        border: "1px solid currentColor",
        borderRadius: "9999px",
        color: "inherit",
        cursor: "pointer",
        display: "inline-flex",
        fontSize: "1rem",
        height: "2.25rem",
        justifyContent: "center",
        padding: "0 0.75rem",
        transition: "opacity 0.2s ease",
        opacity: mounted ? 1 : 0,
      }}
      disabled={!mounted}
    >
      <span aria-hidden>{buttonSymbol}</span>
    </button>
  )
}

export default ThemeSwitcher
