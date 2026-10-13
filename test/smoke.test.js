import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ERAS, ALBUMS, ARTISTS, TERMS, GUIDE, FAQ, LEVELS } from '../src/data.js';

const proj = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

test('project skeleton', () => {
  assert.ok(fs.existsSync(path.join(proj, 'capacitor.config.json')));
  assert.ok(fs.existsSync(path.join(proj, 'package.json')));
  assert.ok(fs.existsSync(path.join(proj, 'index.html')));
  const pkg = JSON.parse(fs.readFileSync(path.join(proj, 'package.json'), 'utf8'));
  assert.ok(pkg.scripts?.build, 'missing build script');
  assert.ok(pkg.scripts?.test, 'missing test script');
});

test('data integrity', () => {
  const eraIds = new Set(ERAS.map((e) => e.id));
  assert.ok(ERAS.length >= 8, 'too few eras');
  assert.equal(new Set(ERAS.map((e) => e.id)).size, ERAS.length, 'duplicate era ids');

  assert.ok(ALBUMS.length >= 15, 'too few albums');
  assert.equal(new Set(ALBUMS.map((a) => a.id)).size, ALBUMS.length, 'duplicate album ids');
  const levelIds = new Set(LEVELS.map((l) => l.id));
  for (const a of ALBUMS) {
    assert.ok(a.title && a.artist && a.year && a.why, `album ${a.id} missing fields`);
    assert.ok(eraIds.has(a.era), `album ${a.id} has unknown era ${a.era}`);
    assert.ok(levelIds.has(a.level), `album ${a.id} has unknown level ${a.level}`);
    assert.ok(Array.isArray(a.tracks) && a.tracks.length >= 3, `album ${a.id} needs tracks`);
  }

  assert.ok(ARTISTS.length >= 10, 'too few artists');
  assert.equal(new Set(ARTISTS.map((p) => p.id)).size, ARTISTS.length, 'duplicate artist ids');
  for (const p of ARTISTS) {
    assert.ok(p.name && p.role && p.story && p.tagline, `artist ${p.id} missing fields`);
    assert.ok(Array.isArray(p.start) && p.start.length >= 2, `artist ${p.id} needs start tracks`);
    if (p.album) assert.ok(ALBUMS.some((a) => a.id === p.album), `artist ${p.id} refs unknown album`);
  }

  assert.ok(LEVELS.length === 3);
  assert.ok(TERMS.length >= 8);
  for (const t of TERMS) assert.ok(t.en && t.zh && t.desc);
  assert.ok(GUIDE.length >= 4);
  assert.ok(FAQ.length >= 3);

  assert.ok(ALBUMS.some((a) => a.level === 'ru'), 'need entry-level albums');
  assert.ok(ALBUMS.some((a) => a.level === 'tiao'), 'need challenge albums');
});
