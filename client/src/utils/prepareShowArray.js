export default function prepareShowArray(response) {
  let ShowsArray = [];
  response.forEach((showObject) => {
    ShowsArray.push(showObject.show_id);
  });
  let flattenedShowsArray = ShowsArray.flat();
  return flattenedShowsArray.map((x) => +x);
}
