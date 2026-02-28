// How long PokeAPI responses are cached before revalidating (in seconds).
// The data changes very rarely, so 7 days is a reasonable default.
export const REVALIDATE_SECONDS = 7 * 24 * 60 * 60; // 7 days

// Same duration in milliseconds, for TanStack Query options.
export const REVALIDATE_MS = REVALIDATE_SECONDS * 1000;
