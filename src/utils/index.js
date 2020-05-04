
const EXP = "exp"


export const setExp = (value, exp = EXP) => {
  if (localStorage) {
    localStorage.setItem(exp, JSON.stringify(value));
  }
};

export const getExp = (exp = EXP) => {
  if (localStorage && localStorage.getItem(exp)) {
    return JSON.parse(localStorage.getItem(exp));
  }
  console.log(localStorage);
  return [];
};
