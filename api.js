// api.js
export async function getPlaceId(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network error');
    const text = await response.text();
    const placeId = text.trim();

    if (/^\d+$/.test(placeId)) {
      return { status: 'online', placeId };
    } else {
      return { status: 'offline' };
    }
  } catch (error) {
    return { status: 'error', error };
  }
}
