export default function capitalize(str) {
  const [firstChar, ...rest] = str;
  return `${firstChar.toUpperCase()}${rest.join("").toLowerCase()}`;
}
function test(){
console.log(capitalize("foBar"));
console.log(capitalize("nodeJs"));
}
