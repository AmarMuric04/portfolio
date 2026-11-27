import React, { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";
import { ContactSVG, EducationSVG, FolderSVG, HomeSVG } from "@/assets/svgs";
import NavBarItem from "@/components/molecules/NavBarItem";
import Toggle from "@/components/atoms/ToggleTheme";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { cw } from "@/utils/cw";

interface HeaderProps {
  changeTheme: () => void;
  isCorrectTheme: boolean;
}

const Header: React.FC<HeaderProps> = ({ changeTheme, isCorrectTheme }) => {
  const { targetRef, isIntersecting } = useIntersectionObserver<HTMLElement>();
  const [scrollY, setScrollY] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > scrollY);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <>
      <header className="mb-28" ref={targetRef}>
        <nav
          className={cw(
            "fixed left-1/2 top-4 z-50 h-[3.5rem] -translate-x-1/2 select-none overflow-hidden rounded-full border border-white/10 bg-card pr-4 shadow-md backdrop-blur-sm transition-all",
            !isIntersecting ? "w-[80%] md:w-[38rem]" : "w-[95%] md:w-[45rem]"
          )}
        >
          <div className="flex h-full w-full items-center justify-between">
            <ul className="flex h-full w-full gap-4 rounded-full transition-all duration-300 sm:w-auto">
              <Toggle
                handleChange={changeTheme}
                isChecked={isCorrectTheme}
                classes="hidden h-full w-[3.5rem] sm:grid"
              />
              <NavBarItem to="/">
                <HomeSVG />
                <p className="hidden sm:flex">Home</p>
              </NavBarItem>
              <NavBarItem to="/projects">
                <FolderSVG />
                <p className="hidden sm:flex">Projects</p>
              </NavBarItem>
              <NavBarItem to="/education">
                <EducationSVG />
                <p className="hidden sm:flex">Education</p>
              </NavBarItem>
              <NavBarItem to="/experience">
                <Briefcase />
                <p className="hidden sm:flex">Experience</p>
              </NavBarItem>
            </ul>

            <a
              href="mailto:muricamar2004@gmail.com"
              aria-label="Say hi through an email"
              className="hidden items-center gap-2 sm:flex"
            >
              <ContactSVG />
              <p>Say Hi</p>
            </a>
          </div>
        </nav>
      </header>

      <Toggle
        handleChange={changeTheme}
        isChecked={isCorrectTheme}
        classes="fixed bottom-5 left-5 z-50 flex h-[4rem] w-[4rem] items-center justify-center transition-all sm:hidden"
      />

      <a
        href="mailto:muricamar2004@gmail.com"
        className={cw(
          "fixed bottom-5 right-5 z-50 flex h-[3rem] items-center justify-center gap-2 rounded-full bg-background text-foreground shadow-xl transition-all sm:hidden",
          isVisible ? "w-[3rem]" : "w-[6rem] rounded-br-none"
        )}
      >
        <ContactSVG />
        {!isVisible && <p className="flex-shrink-0">Say Hi</p>}
      </a>
    </>
  );
};

export default Header;
