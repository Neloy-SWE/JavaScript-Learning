// With named exports, the imported names must match exactly.
// import { msg, n, lang } from "./named_export.js";
// msg();
// console.log(n);
// console.log(lang);

import { message, name, language } from "./named_export.js";
message();
console.log(name);
console.log(language);