// Returns the current age in whole years for a given birth date, accounting
// for whether this year's birthday has already passed.
export const getAge = (birthDate: Date): number => {
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();
  const hasHadBirthdayThisYear =
    monthDiff > 0 ||
    (monthDiff === 0 && today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age -= 1;
  }

  return age;
};
