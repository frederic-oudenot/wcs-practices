const regexMail = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;
const regexPassword = /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/


export function matchRegexEmail(value: string): boolean {
  const result = regexMail.test(value);
  return result;
}

export function matchRegexPassword(value: string): boolean {
  const result = regexPassword.test(value);
  return result;
}
