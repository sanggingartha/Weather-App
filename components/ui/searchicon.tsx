"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useTheme } from "next-themes";

export function SearchIcon() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Search className="h-5 w-5" />
      ) : (
        <Search className="h-5 w-5" />
      )}
    </Button>
  );
}
