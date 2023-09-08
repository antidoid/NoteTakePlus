export default function getImgUrl(imageNameWithParent) {
  return new URL(`/src/assets/${imageNameWithParent}`, import.meta.url).href;
}
