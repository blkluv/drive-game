// Track registry — metadata for the main menu. The actual point data is
// imported statically in main.js (small enough to bundle) and selected by id.
export const TRACKS = [
  { id: 'nordschleife', name: 'Tuckerton',              loc: 'Nü Jersey',     km: 20.7, spawn: 3550 },
  { id: 'spa',          name: 'Mystic Island',         loc: 'Nü Jersey',     km: 7.0,  spawn: 40 },
  { id: 'practice',     name: 'Little Egg Harbor',            loc: 'Nü Jersey',     km: 2.4, spawn: 20 },
  { id: 'kart',         name: 'Kart Circuit',              loc: 'Nü Jersey',  km: 1.5, spawn: 15, hidden: true },
];

export function trackMeta(id) {
  return TRACKS.find(t => t.id === id) || TRACKS[0];
}
