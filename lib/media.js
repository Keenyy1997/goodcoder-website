import { API_URL } from "./apollo";

function getStrapiURL(path = "") {
  return `${API_URL}${path}`;
}

export function getStrapiMedia(url) {
  const imageUrl = url.startsWith("/") ? 
    getStrapiURL(url) : 
      url.startsWith("https") ? 
      url: `/${url}`;
  return imageUrl;
}