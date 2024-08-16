// utils.js
export const addBreaksAfterTags = (htmlContent) => {
  return htmlContent.replace(/<\/[^>]+>/g, (match) => `${match}<br>`);
};
