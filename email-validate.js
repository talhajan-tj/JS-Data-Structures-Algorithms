// function emailValidate(str) {
//   const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
//   return emailRegex.test(str);
// }

function emailValidate(email) {
  if (email.indexOf("@") === -1) {
    return false;
  }

  const [localName, domain] = email.split("@");

  if (localName.length === 0 || domain.length === 0) {
    return false;
  }
  const domainExtension = email.split(".");
  if (domainExtension < 2 || domainExtension[1] < 2) {
    return false;
  }
  return true;
}
console.log(emailValidate("talhajan@gmail.com"));
console.log(emailValidate("talhajangmailcom"));
