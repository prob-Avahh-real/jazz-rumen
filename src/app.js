import { ERAS, ALBUMS, ARTISTS, TERMS, GUIDE, FAQ, LEVELS } from './data.js';

const FAV_KEY = 'jazz-rumen.favs';
const $ = (s, el = document) => el.querySelector(s);

let favs = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]'));
let tab = 'home';
let levelFilter = 'all';

const saveFavs = () => localStorage.setItem(FAV_KEY, JSON.stringify([...favs]));
const hasFav = (id) => favs.has(id);
const toggleFav = (id) => {
  if (favs.has(id)) favs.delete(id);
  else favs.add(id);
  saveFavs();
};

const eraOf = (id) => ERAS.find((e) => e.id === id);
const albumOf = (id) => ALBUMS.find((a) => a.id === id);
const artistOf = (id) => ARTISTS.find((a) => a.id === id);
const levelOf = (id) => LEVELS.find((l) => l.id === id);

const dayOfYear = () => {
  const now = new Date();
  return Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 864e5);
};

const searchLinks = (q) => {
  const e = encodeURIComponent(q);
  return [
    { label: '网易云', url: `https://music.163.com/#/search/m/?s=${e}` },
    { label: 'QQ音乐', url: `https://y.qq.com/n/ryqq/search?w=${e}` },
    { label: 'Spotify', url: `https://open.spotify.com/search/${e}` },
    { label: 'YouTube', url: `https://www.youtube.com/results?search_query=${e}` },
  ];
};

const linksHtml = (q) =>
  `<div class="links">${searchLinks(q)
    .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
    .join('')}</div>`;

const ICONS = {
  home: '<svg viewBox="0 0 24 24"><path d="M4 13h3v7h4v-5h2v5h4v-7h3l2 1V5L12 2 2 5v9z" fill="currentColor"/></svg>',
  timeline: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 5h-2v6l5 3 1-1.7-4-2.3z" fill="currentColor"/></svg>',
  artist: '<svg viewBox="0 0 24 24"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4 0-8 2-8 5v3h16v-3c0-3-4-5-8-5z" fill="currentColor"/></svg>',
  album: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 13a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" fill="currentColor"/></svg>',
  guide: '<svg viewBox="0 0 24 24"><path d="M4 3h7a2 2 0 0 1 1 .3A2 2 0 0 1 13 3h7v16h-7a1.5 1.5 0 0 0-1 1 1.5 1.5 0 0 0-1-1H4zm2 4v2h4V7zm10 0v2h4V7zM6 11v2h4v-2zm10 0v2h4v-2zM6 15v2h4v-2zm10 0v2h4v-2z" fill="currentColor"/></svg>',
  fav: '<svg viewBox="0 0 24 24"><path d="M12 21s-8-5.3-10-10a5.5 5.5 0 0 1 10-3.2A5.5 5.5 0 0 1 22 11c-2 4.7-10 10-10 10z" fill="currentColor"/></svg>',
  heartOff: '<svg viewBox="0 0 24 24"><path d="M12 21s-8-5.3-10-10a5.5 5.5 0 0 1 10-3.2A5.5 5.5 0 0 1 22 11c-2 4.7-10 10-10 10z" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
};

const favBtn = (id, cls = 'fav-btn') =>
  `<button class="${cls}${hasFav(id) ? ' on' : ''}" data-fav="${id}" aria-label="收藏">${hasFav(id) ? ICONS.fav : ICONS.heartOff}</button>`;

const coverHtml = (title, seed) => {
  const hue = (seed * 47) % 360;
  const initials = title.replace(/^(The|A|An)\s+/i, '').slice(0, 2).toUpperCase();
  return `<div class="cover" style="background:linear-gradient(135deg,hsl(${hue} 45% 30%),hsl(${(hue + 60) % 360} 55% 18%))"><span>${initials}</span></div>`;
};

const albumCard = (a) => {
  const era = eraOf(a.era);
  return `<article class="card album-card" data-album="${a.id}">
    ${coverHtml(a.title, a.year)}
    <div class="album-body">
      <div class="album-title">${a.title}</div>
      <div class="album-artist">${a.artist} · ${a.year}</div>
      <div class="tags"><span class="tag level-${a.level}">${levelOf(a.level).name}</span><span class="tag era">${era ? era.en : ''}</span></div>
    </div>
    ${favBtn(a.id)}
  </article>`;
};

const artistCard = (p) =>
  `<article class="card artist-card" data-artist="${p.id}">
    <div class="avatar">${p.zh.slice(0, 1)}</div>
    <div class="artist-body">
      <div class="artist-name">${p.name}</div>
      <div class="artist-meta">${p.role} · ${p.tag}</div>
      <div class="artist-tagline">${p.tagline}</div>
    </div>
    ${favBtn(p.id)}
  </article>`;

const homeHtml = () => {
  const doy = dayOfYear();
  const album = ALBUMS[doy % ALBUMS.length];
  const track = album.tracks[doy % album.tracks.length];
  const era = eraOf(album.era);
  const starters = ALBUMS.filter((a) => a.level === 'ru').slice(0, 5);
  return `<section class="hero">
      <div class="hero-label">今日唱片</div>
      <div class="hero-album" data-album="${album.id}">
        ${coverHtml(album.title, album.year)}
        <div>
          <div class="album-title big">${album.title}</div>
          <div class="album-artist">${album.artist} · ${album.year} · ${era.name}</div>
        </div>
      </div>
      <p class="hero-why">${album.why}</p>
      <div class="row">
        <button class="btn primary" data-album="${album.id}">查看详情</button>
        ${favBtn(album.id, 'fav-btn big')}
      </div>
    </section>
    <section class="card">
      <h3>今日一曲</h3>
      <div class="track-pick">《${track}》 · ${album.artist}</div>
      ${linksHtml(`${album.artist} ${track}`)}
    </section>
    <section class="card">
      <h3>新手三步走</h3>
      ${GUIDE[0].body.map((s) => `<p class="step">${s}</p>`).join('')}
      <button class="btn ghost" data-goto="guide">查看完整聆听指南</button>
    </section>
    <section>
      <h3 class="section-title">入门必听</h3>
      ${starters.map(albumCard).join('')}
      <button class="btn ghost wide" data-goto="albums">浏览全部唱片</button>
    </section>`;
};

const timelineHtml = () =>
  ERAS.map((e) => {
    const albums = ALBUMS.filter((a) => a.era === e.id);
    return `<section class="card era-card">
      <div class="era-head">
        <div>
          <div class="era-name">${e.name}</div>
          <div class="era-en">${e.en} · ${e.years}</div>
        </div>
      </div>
      <p>${e.desc}</p>
      <p class="era-tip">${e.tip}</p>
      <div class="chips">${e.people.map((p) => `<span class="chip">${p}</span>`).join('')}</div>
      ${albums.length ? `<div class="mini-albums">${albums.map((a) => `<button class="mini-album" data-album="${a.id}">${a.title}<small>${a.year}</small></button>`).join('')}</div>` : ''}
    </section>`;
  }).join('');

const artistsHtml = () => ARTISTS.map(artistCard).join('');

const albumsHtml = () => {
  const chips = [{ id: 'all', name: '全部' }, ...LEVELS]
    .map((l) => `<button class="chip filter${levelFilter === l.id ? ' active' : ''}" data-level="${l.id}">${l.name}</button>`)
    .join('');
  const list = ALBUMS.filter((a) => levelFilter === 'all' || a.level === levelFilter);
  return `<div class="filter-row">${chips}</div>${list.map(albumCard).join('')}`;
};

const guideHtml = () =>
  GUIDE.map(
    (g) => `<section class="card"><h3>${g.title}</h3>${g.body.map((s) => `<p class="guide-p">${s}</p>`).join('')}</section>`
  ).join('') +
  `<section class="card"><h3>常用术语</h3><div class="terms">${TERMS.map(
    (t) => `<div class="term"><b>${t.en}</b> <i>${t.zh}</i><span>${t.desc}</span></div>`
  ).join('')}</div></section>` +
  `<section class="card"><h3>新手 FAQ</h3>${FAQ.map(
    (f) => `<div class="faq"><b>Q：${f.q}</b><p>A：${f.a}</p></div>`
  ).join('')}</section>`;

const favsHtml = () => {
  const albums = [...favs].filter((id) => albumOf(id)).map(albumOf);
  const people = [...favs].filter((id) => artistOf(id)).map(artistOf);
  if (!albums.length && !people.length)
    return `<section class="card empty"><h3>还没有收藏</h3><p>点唱片或人物卡片上的心形按钮，把它们存进你的爵士清单。</p></section>`;
  return `${albums.length ? `<h3 class="section-title">唱片</h3>${albums.map(albumCard).join('')}` : ''}${
    people.length ? `<h3 class="section-title">人物</h3>${people.map(artistCard).join('')}` : ''
  }`;
};

const TABS = {
  home: { icon: 'home', label: '推荐', sub: '每天一张入门唱片', render: homeHtml },
  timeline: { icon: 'timeline', label: '时间线', sub: '一百三十年，十个时代', render: timelineHtml },
  artists: { icon: 'artist', label: '人物', sub: '认识传奇乐手', render: artistsHtml },
  albums: { icon: 'album', label: '唱片', sub: '必听唱片单', render: albumsHtml },
  guide: { icon: 'guide', label: '指南', sub: '怎么听懂爵士', render: guideHtml },
  favs: { icon: 'fav', label: '收藏', sub: '你的爵士清单', render: favsHtml },
};

const renderNav = () =>
  Object.entries(TABS)
    .map(
      ([id, t]) =>
        `<button class="nav-item${tab === id ? ' active' : ''}" data-tab="${id}">${ICONS[t.icon]}<span>${t.label}</span></button>`
    )
    .join('');

const render = () => {
  $('#view').innerHTML = TABS[tab].render();
  $('#subtitle').textContent = TABS[tab].sub;
  $('#tabbar').innerHTML = renderNav();
  window.scrollTo({ top: 0 });
};

const albumModal = (a) => {
  const era = eraOf(a.era);
  const artist = ARTISTS.find((p) => p.album === a.id);
  return `<div class="modal-head">
    ${coverHtml(a.title, a.year)}
    <div>
      <div class="album-title big">${a.title}</div>
      <div class="album-artist">${a.artist} · ${a.year}</div>
      <div class="tags"><span class="tag level-${a.level}">${levelOf(a.level).name}</span><span class="tag era">${era ? era.name : ''}</span></div>
    </div>
  </div>
  <p class="modal-why">${a.why}</p>
  <h4>曲目（点开试听）</h4>
  <ol class="track-list">${a.tracks
    .map((t) => `<li><a href="${searchLinks(`${a.artist} ${t}`)[3].url}" target="_blank" rel="noopener">${t}</a></li>`)
    .join('')}</ol>
  ${linksHtml(`${a.artist} ${a.title}`)}
  ${artist ? `<h4>关于 ${artist.name}</h4><p class="modal-story">${artist.story}</p>` : ''}
  <div class="row"><button class="btn primary wide" data-fav="${a.id}">${hasFav(a.id) ? '已收藏 ✓' : '收藏这张唱片'}</button></div>`;
};

const artistModal = (p) =>
  `<div class="modal-head">
    <div class="avatar big">${p.zh.slice(0, 1)}</div>
    <div>
      <div class="album-title big">${p.name}</div>
      <div class="album-artist">${p.zh} · ${p.role}</div>
      <div class="tags"><span class="tag era">${p.years}</span><span class="tag era">${p.tag}</span></div>
    </div>
  </div>
  <p class="modal-why">${p.tagline}</p>
  <p class="modal-story">${p.story}</p>
  <h4>从这里听起</h4>
  <div class="chips">${p.start.map((s) => `<a class="chip link" href="${searchLinks(`${p.name} ${s}`)[3].url}" target="_blank" rel="noopener">${s}</a>`).join('')}</div>
  ${p.album && albumOf(p.album) ? `<h4>代表唱片</h4>${albumCard(albumOf(p.album))}` : ''}
  ${linksHtml(p.name)}
  <div class="row"><button class="btn primary wide" data-fav="${p.id}">${hasFav(p.id) ? '已收藏 ✓' : '收藏这位乐手'}</button></div>`;

const openModal = (html) => {
  $('#modal-content').innerHTML = html;
  $('#modal').hidden = false;
  document.body.classList.add('locked');
};

const closeModal = () => {
  $('#modal').hidden = true;
  document.body.classList.remove('locked');
};

document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-tab],[data-goto],[data-album],[data-artist],[data-fav],[data-level],[data-close]');
  if (!t) {
    if (e.target.id === 'modal') closeModal();
    return;
  }
  if (t.dataset.close !== undefined) return closeModal();
  if (t.dataset.fav) {
    toggleFav(t.dataset.fav);
    render();
    if (!$('#modal').hidden) {
      const a = albumOf(t.dataset.fav);
      const p = artistOf(t.dataset.fav);
      openModal(a ? albumModal(a) : artistModal(p));
    }
    return;
  }
  if (t.dataset.level) {
    levelFilter = t.dataset.level;
    return render();
  }
  if (t.dataset.tab || t.dataset.goto) {
    tab = t.dataset.tab || t.dataset.goto;
    return render();
  }
  if (t.dataset.album) return openModal(albumModal(albumOf(t.dataset.album)));
  if (t.dataset.artist) return openModal(artistModal(artistOf(t.dataset.artist)));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !$('#modal').hidden) closeModal();
});

render();
