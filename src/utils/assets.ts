/**
 * Utility function to get the correct asset path
 * Works with any base URL configuration
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

/**
 * Get image path specifically for images in the public/images folder
 */
export const getImagePath = (imageName: string): string => {
  return getAssetPath(`images/${imageName}`);
};

/**
 * Set CSS custom properties for base URL
 * Call this once in your app to make CSS background images work
 */
export const setBaseUrlCSS = (): void => {
  const root = document.documentElement;
  root.style.setProperty('--base-url', import.meta.env.BASE_URL);
};
