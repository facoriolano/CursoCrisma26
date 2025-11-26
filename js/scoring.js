const store = {
  get(key, def) { try { return JSON.parse(localStorage.getItem(key)) ?? def; } catch { return def; } },
  set(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
};

export const scoring = {
  xp: () => store.get('xp', 0),
  addXP(amount) { store.set('xp', scoring.xp() + amount); },
  streak: () => store.get('streak', { count: 0, last: null }),
  pingStreak() {
    const s = scoring.streak();
    const today = new Date().toDateString();
    if (s.last !== today) {
      s.count = (s.last && (new Date(today) - new Date(s.last) <= 1000 * 60 * 60 * 48)) ? s.count + 1 : 1;
      s.last = today;
      store.set('streak', s);
      scoring.addXP(10);
    }
  },
  badges: () => store.get('badges', []),
  grantBadge(id) {
    const b = scoring.badges();
    if (!b.includes(id)) { b.push(id); store.set('badges', b); }
  }
};
