import type { SetStateAction, Dispatch } from "react";

export const handleToggleInclusion = (
  key: string,
  setMustInclude: Dispatch<SetStateAction<string[]>>,
  setMustNotInclude: Dispatch<SetStateAction<string[]>>,
  notIncluded: boolean
) => {
  setMustInclude((prevMustInclude) => {
    if (prevMustInclude.includes(key)) {
      return prevMustInclude.filter((prev) => prev !== key);
    } else if (notIncluded) {
      setMustNotInclude((prev) => prev.filter((item) => item !== key));
      return prevMustInclude.filter((prev) => prev !== key);
    } else {
      setMustNotInclude((prev) => prev.filter((item) => item !== key));
      return [...prevMustInclude, key];
    }
  });
};

export const handleDoubleClickInclusion = (
  key: string,
  setMustInclude: Dispatch<SetStateAction<string[]>>,
  setMustNotInclude: Dispatch<SetStateAction<string[]>>
) => {
  setMustInclude((prev) => prev.filter((item) => item !== key));

  setMustNotInclude((prev) => {
    if (prev.includes(key)) {
      return prev.filter((item) => item !== key);
    } else {
      return [...prev, key];
    }
  });
};

export const handleToggleCategory = (
  category: string,
  setSelectedCategories: Dispatch<SetStateAction<string[]>>,
  setExcludedCategories: Dispatch<SetStateAction<string[]>>
) => {
  setSelectedCategories((prevSelected) => {
    if (prevSelected.includes(category)) {
      return prevSelected.filter((prev) => prev !== category);
    } else {
      setExcludedCategories((prev) => prev.filter((item) => item !== category));
      return [...prevSelected, category];
    }
  });
};

export const handleDoubleClickCategory = (
  category: string,
  setSelectedCategories: Dispatch<SetStateAction<string[]>>,
  setExcludedCategories: Dispatch<SetStateAction<string[]>>
) => {
  setSelectedCategories((prev) => prev.filter((item) => item !== category));
  setExcludedCategories((prev) => {
    if (prev.includes(category)) {
      return prev.filter((item) => item !== category);
    } else {
      return [...prev, category];
    }
  });
};
