import test from 'node:test';
import assert from 'node:assert/strict';
import { ERAS, ALBUMS, ARTISTS } from '../src/data.js';

const makeEl = () => ({
  innerHTML: '',
  textContent: '',
  hidden: false,
  classList: { add() {}, remove() {} },
});

const setupDom = () => {
  const els = {
    '#view': makeEl(),
    '#subtitle': makeEl(),
    '#tabbar': makeEl(),
    '#modal': makeEl(),
    '#modal-body': makeEl(),
    '#modal-content': makeEl(),
  };
  globalThis.localStorage = {
    _d: {},
    getItem(k) { return this._d[k] ?? null; },
    setItem(k, v) { this._d[k] = String(v); },
  };
  globalThis.window = { scrollTo() {} };
  globalThis.document = {
    querySelector: (s) => els[s] ?? makeEl(),
    addEventListener() {},
    body: { classList: { add() {}, remove() {} } },
  };
  return els;
};

test('app module renders home tab without throwing', async () => {
  const els = setupDom();
  await import('../src/app.js');
  assert.ok(els['#view'].innerHTML.length > 200, 'home view should render content');
  assert.ok(els['#tabbar'].innerHTML.includes('data-tab'), 'tabbar should render nav');
  assert.ok(els['#subtitle'].textContent.length > 0, 'subtitle should be set');
});

test('every album and artist referenced in data resolves', () => {
  for (const a of ALBUMS) {
    assert.ok(ERAS.some((e) => e.id === a.era), `album ${a.id} era resolves`);
  }
  for (const p of ARTISTS) {
    if (p.album) assert.ok(ALBUMS.some((a) => a.id === p.album), `artist ${p.id} album resolves`);
  }
});
