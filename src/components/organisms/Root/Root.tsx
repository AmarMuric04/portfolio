import { useEffect } from "react";
import { Outlet } from "@tanstack/react-router";
import useLocalStorage from "use-local-storage";
import Header from "@/components/organisms/Header";

const Root = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isLight, setIsLight] = useLocalStorage("isLight", prefersDark);

  // Drive the theme from the <html> element so portaled UI (shadcn dialogs,
  // which render outside this tree) inherits the dark tokens too.
  useEffect(() => {
    const root = document.documentElement;

    if (isLight) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [isLight]);

  return (
    <div className="min-h-screen bg-background pb-32 transition-all">
      <main className="flex w-full justify-center text-foreground transition-all">
        <div className="w-[95%] md:w-[40rem]">
          <Header
            changeTheme={() => setIsLight(!isLight)}
            isCorrectTheme={isLight}
          />

          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Root;
