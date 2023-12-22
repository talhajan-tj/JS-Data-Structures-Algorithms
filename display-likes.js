function displayLikes(arr) {
  const arrLength = arr.length;
  const arrFirst = arr[0];
  const arrSecond = arr[1];

  if (arrLength === 1) {
    return `${arrFirst} liked this post`;
  } else if (arrLength === 2) {
    return `${arrFirst} and ${arrSecond} liked your post`;
  } else if (arrLength >= 3) {
    return `${arrFirst}, ${arrSecond} and ${arrLength - 2} liked your post`;
  } else {
    return "no one liked this post";
  }
}

console.log(displayLikes(["Talha", "Jan"]));
console.log(displayLikes([]));
console.log(displayLikes(["Usman", "TJ", "Mehran", "Faisal"]));
