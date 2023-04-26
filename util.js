export const grpahCMSImageLoader = ({ src, width, quality }) => {
  return `https://media.graphassets.com/${src}?h=${width}&q=${quality || 75}`
}