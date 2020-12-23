//reference: https://stackoverflow.com/questions/44820568/set-default-header-for-every-fetch-request
import Cookies from "universal-cookie";
const cookies = new Cookies();

function updateOptions(options) {
  const update = { ...options };
  const tokenId = cookies.get("auth-token-id");
  if (tokenId) {
    update.headers = {
      ...update.headers,
      Authorization: tokenId,
    };
  }
  return update;
}

export default function fetcher(url, options) {
  return fetch(url, updateOptions(options));
}