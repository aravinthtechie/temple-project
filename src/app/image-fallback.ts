export const FALLBACK_IMAGE_PATH = 'assets/images/navagraha/fallback.svg';

export function useTempleImageFallback(event: Event, templeName: string, unavailableLabel: string): void {
  const image = event.currentTarget;
  if (!(image instanceof HTMLImageElement)) {
    throw new Error('Temple image error event did not originate from an image element.');
  }

  if (image.src.endsWith(FALLBACK_IMAGE_PATH)) {
    image.hidden = true;
    return;
  }

  image.src = FALLBACK_IMAGE_PATH;
  image.alt = `${unavailableLabel}: ${templeName}`;
}
