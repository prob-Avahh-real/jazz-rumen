export const ERAS = [
  { id: 'ragtime', name: '拉格泰姆与早期爵士', en: 'Ragtime', years: '约 1895–1920', desc: '爵士的前身：切分节奏的钢琴音乐，把欧洲进行曲的骨架与非洲节奏的律动结合，为爵士打下节奏基因。', tip: '先听 Scott Joplin《Maple Leaf Rag》：左手稳定低音，右手切分旋律，感受"错位"的趣味。', people: ['Scott Joplin', 'Jelly Roll Morton'] },
  { id: 'neworleans', name: '新奥尔良 / 迪克西兰', en: 'New Orleans / Dixieland', years: '约 1910–1935', desc: '爵士正式诞生：小号领奏、单簧管与长号环绕即兴，集体即兴是这一时期的标志。', tip: '从 Louis Armstrong 的 Hot Fives 录音听起，注意独奏如何从集体即兴中脱颖而出。', people: ['Louis Armstrong', 'King Oliver', 'Kid Ory'] },
  { id: 'swing', name: '摇摆乐大乐队', en: 'Swing', years: '约 1930–1945', desc: '大乐队时代：整齐编排 + 摇摆律动，让全美跳舞的流行音乐，爵士的黄金商业期。', tip: '听 Duke Ellington 与 Benny Goodman，跟着 2、4 拍点头，身体想动就对了。', people: ['Duke Ellington', 'Count Basie', 'Benny Goodman', 'Ella Fitzgerald'] },
  { id: 'bebop', name: '比波普', en: 'Bebop', years: '约 1943–1950', desc: '爵士从舞曲变为艺术：速度飞快、和声复杂、以个人即兴为核心，小乐队编制登场。', tip: '觉得太快就跟住旋律线哼唱；Charlie Parker 的每个乐句都在重新发明语言。', people: ['Charlie Parker', 'Dizzy Gillespie', 'Thelonious Monk', 'Bud Powell'] },
  { id: 'cool', name: '酷派爵士', en: 'Cool Jazz', years: '约 1948–1958', desc: '对 Bebop 的降温：音色柔和、编曲精致、情绪内敛，带西海岸的松弛气质。', tip: '适合夜晚与独处；Chet Baker 的唱腔与小号一样轻，像一层薄雾。', people: ['Miles Davis', 'Chet Baker', 'Gerry Mulligan', 'Dave Brubeck'] },
  { id: 'hardbop', name: '硬波普', en: 'Hard Bop', years: '约 1954–1965', desc: 'Bebop 回魂并接上蓝调与福音音乐的根：律动更重、更接地气，成为爵士乐手的通用语。', tip: '感受鼓的推动力与管乐的呼喊应答；Art Blakey 的乐队是硬波普的黄埔军校。', people: ['Art Blakey', 'Horace Silver', 'Sonny Rollins', 'Lee Morgan'] },
  { id: 'modal', name: '调式爵士', en: 'Modal Jazz', years: '约 1958–1965', desc: '放弃频繁换和弦，在一个调式上长时间即兴，空间感与冥想感极强。', tip: '必听《Kind of Blue》：公认的最佳爵士入门唱片，安静、开阔、百听不厌。', people: ['Miles Davis', 'John Coltrane', 'Bill Evans'] },
  { id: 'free', name: '自由爵士', en: 'Free Jazz', years: '约 1959–1970', desc: '打破和声、节拍甚至结构的一切规则，追求纯粹的情绪与能量释放。', tip: '不必强求听完：从 Ornette Coleman 的《Lonely Woman》入手，先感受旋律本身的美。', people: ['Ornette Coleman', 'Albert Ayler', 'Cecil Taylor'] },
  { id: 'fusion', name: '融合爵士', en: 'Fusion', years: '约 1968–1978', desc: '爵士 + 摇滚 + 放克：电声乐器、强劲节奏、长篇即兴，为爵士打开现代大门。', tip: '顺序推荐：Miles《In a Silent Way》→ Herbie Hancock《Head Hunters》→ Weather Report《Birdland》。', people: ['Miles Davis', 'Weather Report', 'Herbie Hancock', 'Chick Corea'] },
  { id: 'contemporary', name: '当代爵士', en: 'Contemporary', years: '1980 至今', desc: '传统回归与多元并存：新古典、爵士嘻哈、欧洲 ECM 美学、人声跨界，爵士仍在生长。', tip: 'Wynton Marsalis 听传统，Norah Jones 听人声，Kamasi Washington 听新派史诗。', people: ['Wynton Marsalis', 'Pat Metheny', 'Norah Jones', 'Kamasi Washington'] },
];

export const LEVELS = [
  { id: 'ru', name: '入门' },
  { id: 'jin', name: '进阶' },
  { id: 'tiao', name: '挑战' },
];

export const ALBUMS = [
  { id: 'hot-fives', title: 'The Best of the Hot Fives & Sevens', artist: 'Louis Armstrong', year: 1926, era: 'neworleans', level: 'ru', why: '爵士即兴的源头：阿姆斯特朗在这里定义了什么是"独奏"，听他如何用小号讲故事。', tracks: ['Heebie Jeebies', 'Potato Head Blues', 'West End Blues', 'Hotter Than That', 'Muskrat Ramble'] },
  { id: 'ellington-newport', title: 'Ellington at Newport', artist: 'Duke Ellington Orchestra', year: 1956, era: 'swing', level: 'ru', why: '最著名的大乐队现场：萨克斯 27 段独奏点燃全场，感受摇摆乐让人跳舞的能量。', tracks: ['Take the \'A\' Train', 'Diminuendo and Crescendo in Blue', 'Jeep\'s Blues', 'Such Sweet Thunder'] },
  { id: 'ella-louis', title: 'Ella and Louis', artist: 'Ella Fitzgerald & Louis Armstrong', year: 1956, era: 'swing', level: 'ru', why: '爵士男女对唱的巅峰，旋律美、氛围暖，公认最没有门槛的爵士入门。', tracks: ['Can\'t We Be Friends?', 'Moonlight in Vermont', 'They Can\'t Take That Away from Me', 'Cheek to Cheek', 'Tenderly'] },
  { id: 'brilliant-corners', title: 'Brilliant Corners', artist: 'Thelonious Monk', year: 1957, era: 'bebop', level: 'tiao', why: 'Monk 棱角分明的旋律与古怪节奏尽在于此；能听出乐趣说明耳朵已经毕业。', tracks: ['Brilliant Corners', 'Ba-Lue Bolivar Ba-Lues-Are', 'Pannonica', 'I Surrender, Dear', 'Bemsha Swing'] },
  { id: 'amazing-bud', title: 'The Amazing Bud Powell, Vol. 1', artist: 'Bud Powell', year: 1951, era: 'bebop', level: 'jin', why: '比波普钢琴教科书：把 Charlie Parker 的速度与语汇完整搬上键盘。', tracks: ['Un Poco Loco', 'Bouncing with Bud', 'Dance of the Infidels', 'Parisian Thoroughfare', 'A Night in Tunisia'] },
  { id: 'birth-of-the-cool', title: 'Birth of the Cool', artist: 'Miles Davis', year: 1957, era: 'cool', level: 'ru', why: '"酷派"之名由此而来：冷静克制的室内化编曲，像深蓝色的夜。', tracks: ['Move', 'Jeru', 'Moon Dreams', 'Venus de Milo', 'Boplicity', 'Israel'] },
  { id: 'time-out', title: 'Time Out', artist: 'The Dave Brubeck Quartet', year: 1959, era: 'cool', level: 'ru', why: '用 5/4、9/8 等奇数拍做出畅销金曲，《Take Five》是史上最有名的爵士单曲。', tracks: ['Blue Rondo à la Turk', 'Strange Meadow Lark', 'Take Five', 'Three to Get Ready', 'Kathy\'s Waltz'] },
  { id: 'chet-baker-sings', title: 'Chet Baker Sings', artist: 'Chet Baker', year: 1954, era: 'cool', level: 'ru', why: '忧郁清凉的演唱与小号，夜晚的最佳伴侣，"忧郁王子"的魅力全在这张。', tracks: ['That Old Feeling', 'It\'s Always You', 'Like Someone in Love', 'My Funny Valentine', 'I\'ve Never Been in Love Before'] },
  { id: 'moanin', title: 'Moanin\'', artist: 'Art Blakey & The Jazz Messengers', year: 1958, era: 'hardbop', level: 'jin', why: '硬波普范本：钢琴与管乐的呼喊应答 + 沉重鼓点，灵魂爵士的源头。', tracks: ['Moanin\'', 'Are You Real?', 'Along Came Betty', 'The Drum Thunder Suite', 'Blues March'] },
  { id: 'sax-colossus', title: 'Saxophone Colossus', artist: 'Sonny Rollins', year: 1956, era: 'hardbop', level: 'jin', why: 'Rollins 主题发展式即兴的示范作；《St. Thomas》的卡利普索节奏过耳不忘。', tracks: ['St. Thomas', 'You Don\'t Know What Love Is', 'Strode Rode', 'Moritat (Mack the Knife)', 'Blue 7'] },
  { id: 'kind-of-blue', title: 'Kind of Blue', artist: 'Miles Davis', year: 1959, era: 'modal', level: 'ru', why: '公认爵士入门第一张：调式即兴安静开阔，五个段落各是一种夜色，永不落榜的经典。', tracks: ['So What', 'Freddie Freeloader', 'Blue in Green', 'All Blues', 'Flamenco Sketches'] },
  { id: 'waltz-for-debby', title: 'Waltz for Debby', artist: 'Bill Evans Trio', year: 1961, era: 'modal', level: 'ru', why: '钢琴三重奏的巅峰：诗意触键与对话式互动，录于先锋村酒吧的传奇现场。', tracks: ['My Foolish Heart', 'Waltz for Debby', 'Detour Ahead', 'My Romance', 'Milestones'] },
  { id: 'ballads', title: 'Ballads', artist: 'John Coltrane Quartet', year: 1962, era: 'modal', level: 'ru', why: 'Coltrane 最温柔的一面：没有嘶吼只有旋律，适合习惯萨克斯音色的第一步。', tracks: ['Say It (Over and Over Again)', 'You Don\'t Know What Love Is', 'Too Young to Go Steady', 'All or Nothing at All', 'I Should Care'] },
  { id: 'a-love-supreme', title: 'A Love Supreme', artist: 'John Coltrane', year: 1965, era: 'modal', level: 'jin', why: '四个乐章的灵性组曲：从感恩到赞颂，爵士史上影响最深远的作品之一。', tracks: ['Acknowledgement', 'Resolution', 'Pursuance', 'Psalm'] },
  { id: 'shape-of-jazz', title: 'The Shape of Jazz to Come', artist: 'Ornette Coleman', year: 1959, era: 'free', level: 'tiao', why: '自由爵士的开山之作：旋律摆脱和弦束缚；先听《Lonely Woman》的美，再谈规则。', tracks: ['Lonely Woman', 'Eventually', 'Peace', 'Focus on Sanity', 'Congeniality'] },
  { id: 'head-hunters', title: 'Head Hunters', artist: 'Herbie Hancock', year: 1973, era: 'fusion', level: 'jin', why: '爵士放克神作：《Chameleon》的贝斯线被嘻哈采样了无数次，律动即正义。', tracks: ['Chameleon', 'Watermelon Man', 'Sly', 'Vein Melter'] },
  { id: 'heavy-weather', title: 'Heavy Weather', artist: 'Weather Report', year: 1977, era: 'fusion', level: 'jin', why: '爵士摇滚的畅销之王：《Birdland》的旋律会在你脑中自动循环三天。', tracks: ['Birdland', 'A Remark You Made', 'Teen Town', 'Harlequin'] },
  { id: 'come-away', title: 'Come Away with Me', artist: 'Norah Jones', year: 2002, era: 'contemporary', level: 'ru', why: '爵士与民谣的温柔跨界，零门槛的人声专辑，许多人的爵士第一课。', tracks: ['Don\'t Know Why', 'Come Away with Me', 'I\'ve Got to See You Again', 'Turn Me On', 'The Nearness of You'] },
  { id: 'the-epic', title: 'The Epic', artist: 'Kamasi Washington', year: 2015, era: 'contemporary', level: 'tiao', why: '21 世纪爵士史诗：大编制 + 嘻哈与灵魂乐气质，三小时却不觉冗长。', tracks: ['Change of the Guard', 'Isabelle', 'Final Thought', 'The Next Step', 'Clair de Lune'] },
];

export const ARTISTS = [
  { id: 'louis-armstrong', name: 'Louis Armstrong', zh: '路易斯·阿姆斯特朗', role: '小号 / 演唱', years: '1901–1971', tag: '新奥尔良 → 摇摆', tagline: '爵士之父，发明了爵士的"独奏"', story: '出身新奥尔良贫民区，把集体即兴变成个人独奏艺术，还开创了拟声唱法（scat）。他之后的几乎所有独奏者与歌手，都是他的学生。', start: ['West End Blues', 'What a Wonderful World', 'La Vie en Rose'], album: 'hot-fives' },
  { id: 'duke-ellington', name: 'Duke Ellington', zh: '艾灵顿公爵', role: '钢琴 / 作曲', years: '1899–1974', tag: '摇摆', tagline: '大乐队时代最伟大的作曲家，写了上千首曲子', story: '把大乐队当作一件乐器来作曲，为每个乐手量身定做声部；把爵士带进卡内基音乐厅与电影配乐。', start: ['Take the \'A\' Train', 'It Don\'t Mean a Thing', 'Mood Indigo'], album: 'ellington-newport' },
  { id: 'ella-fitzgerald', name: 'Ella Fitzgerald', zh: '艾拉·费兹杰拉', role: '演唱', years: '1917–1996', tag: '摇摆', tagline: '歌艺第一夫人，拟声唱女王', story: '三个八度的音域、无懈可击的音准，即兴拟声不输任何乐器。她的 Songbook 系列是演绎爵士标准曲的教科书。', start: ['Misty', 'Dream a Little Dream of Me', 'Cheek to Cheek'], album: 'ella-louis' },
  { id: 'charlie-parker', name: 'Charlie Parker', zh: '查理·帕克', role: '中音萨克斯', years: '1920–1955', tag: '比波普', tagline: '比波普的共创者，绰号 "Bird"', story: '以闪电般的高速即兴与全新和声语汇，25 岁就把爵士推向现代艺术；纽约的 "Yardbird Suite" 因他得名。', start: ['Ornithology', 'Confirmation', 'Now\'s the Time'], album: 'amazing-bud' },
  { id: 'miles-davis', name: 'Miles Davis', zh: '迈尔斯·戴维斯', role: '小号', years: '1926–1991', tag: '酷派 → 调式 → 融合', tagline: '引领了三次爵士革命的人', story: '永远不重复自己：酷派、调式、融合，每一次都开创时代新方向。他加弱音器的小号音色是爵士最具辨识度的声音之一。', start: ['So What', '\'Round Midnight', 'In a Silent Way'], album: 'kind-of-blue' },
  { id: 'thelonious-monk', name: 'Thelonious Monk', zh: '塞隆尼斯·蒙克', role: '钢琴', years: '1917–1982', tag: '比波普', tagline: '不协和音大师，《\'Round Midnight》作者', story: '棱角分明的旋律、错位的重音与大胆的留白，当年被误解为"不会弹琴"，如今被公认为爵士最有个人风格的作曲家。', start: ['\'Round Midnight', 'Straight, No Chaser', 'Ruby, My Dear'], album: 'brilliant-corners' },
  { id: 'john-coltrane', name: 'John Coltrane', zh: '约翰·柯川', role: '次中音 / 高音萨克斯', years: '1926–1967', tag: '调式 → 自由', tagline: '从情歌到神性，萨克斯的朝圣者', story: '练琴到睡觉都含着笛片的苦行者；从温柔叙事一路走到自由爵士的极致强度，把即兴变成祈祷。', start: ['Naima', 'My One and Only Love', 'Alabama'], album: 'ballads' },
  { id: 'bill-evans', name: 'Bill Evans', zh: '比尔·艾文斯', role: '钢琴', years: '1929–1980', tag: '调式 / 三重奏', tagline: '钢琴三重奏影响最大的声音', story: '印象派和声与对话式的三重奏互动，塑造了现代钢琴爵士的语言；《Kind of Blue》的键盘声就来自他。', start: ['Waltz for Debby', 'Peace Piece', 'My Foolish Heart'], album: 'waltz-for-debby' },
  { id: 'dave-brubeck', name: 'Dave Brubeck', zh: '戴夫·布鲁贝克', role: '钢琴', years: '1920–2012', tag: '酷派', tagline: '把奇数拍写成流行金曲的实验家', story: '古典音乐出身，用 5/4、9/8 拍做出《Time Out》——最早的百万销量爵士唱片之一。', start: ['Take Five', 'Blue Rondo à la Turk'], album: 'time-out' },
  { id: 'chet-baker', name: 'Chet Baker', zh: '切特·贝克', role: '小号 / 演唱', years: '1929–1988', tag: '酷派', tagline: '西海岸的忧郁王子', story: '英俊、脆弱、嗓音让人心碎；小号与歌唱都像淡蓝色的烟雾。他的人生跌宕得像一部电影，音乐却始终温柔。', start: ['My Funny Valentine', 'I Fall in Love Too Easily'], album: 'chet-baker-sings' },
  { id: 'sonny-rollins', name: 'Sonny Rollins', zh: '桑尼·罗林斯', role: '次中音萨克斯', years: '1930–', tag: '硬波普', tagline: '主题发展大师，桥洞下的练琴传说', story: '以"动机发展"著称：一个小小的乐句能发展出整段即兴。曾为精进琴艺隐退数年，在威廉斯堡大桥上通宵练习。', start: ['St. Thomas', 'SonnyMoon for Two'], album: 'sax-colossus' },
  { id: 'herbie-hancock', name: 'Herbie Hancock', zh: '赫比·汉考克', role: '钢琴 / 电声键盘', years: '1940–', tag: '后波普 → 融合', tagline: '从原声爵士到电子放克，永远年轻', story: 'Miles 第二代五重奏成员；以《Head Hunters》转向放克与电子乐，凭电影《午夜旋律》拿下奥斯卡配乐奖。', start: ['Chameleon', 'Cantaloupe Island', 'Maiden Voyage'], album: 'head-hunters' },
];

export const TERMS = [
  { en: 'Standard', zh: '标准曲', desc: '爵士乐手共同演奏的经典曲目库，是即兴聚会的"通用语"' },
  { en: 'Head', zh: '主题', desc: '一首曲子的主旋律部分，即兴前后各奏一遍' },
  { en: 'Improvisation', zh: '即兴', desc: '在和声框架内现场创作旋律，爵士的核心' },
  { en: 'Chorus', zh: '一轮', desc: '把一首歌的和声进行完整走一遍' },
  { en: 'Changes', zh: '和声进行', desc: '一首曲子的和弦序列，即兴的地基' },
  { en: 'Scat', zh: '拟声唱', desc: '用无意义音节做人声即兴，如 "shoo-be-doo-bop"' },
  { en: 'Riff', zh: '重复段', desc: '短小重复的乐句，摇摆与放克的发动机' },
  { en: 'Comping', zh: '伴奏', desc: '节奏组为独奏者铺和声、做回应' },
  { en: 'Trading Fours', zh: '四小节对答', desc: '独奏者与鼓手轮流各奏四小节，像打乒乓球' },
  { en: 'Jam Session', zh: '即兴聚会', desc: '乐手自发合奏，常在酒吧深夜开始' },
];

export const GUIDE = [
  {
    title: '三步听懂即兴',
    body: [
      '① 先听旋律：爵士曲大多以一段好听的主题开场，先记住它、能哼出来。',
      '② 跟着独奏走：主题之后各乐器轮流即兴，把它当"主题变奏"听，追情绪的发展而不是音符的快慢。',
      '③ 听互动：鼓怎么推动、贝斯怎么走、钢琴怎么回应——即兴是群体对话，不是独白。',
    ],
  },
  {
    title: '一首标准曲的结构',
    body: [
      '典型流程：主题（Head）→ 轮流独奏（每人若干轮 Chorus）→ 主题再现。',
      '两种常见骨架：32 小节 AABA 曲式（如《Cheek to Cheek》）与 12 小节蓝调（如《Freddie Freeloader》）。',
      '小技巧：听到主题再现，说明一段独奏结束了——主题就是你的书签。',
    ],
  },
  {
    title: '抓住摇摆感',
    body: [
      'Swing 的秘密：八分音符奏成"长—短、长—短"的三连音感觉，而不是平均的。',
      '身体练习：数 1-2-3-4，在 2 和 4 上轻轻点头；听到想晃肩膀，说明你跟上了。',
      '进阶实验：听《Take Five》，它是 5/4 拍，心里数成"1-2-3 / 1-2"。',
    ],
  },
  {
    title: '节奏组的分工',
    body: [
      '贝斯（低音提琴）：每拍走一个音（walking bass），是时间的骨架。',
      '鼓：镲片维持摇摆律动，军鼓与大鼓点缀重音、回应独奏者（comping）。',
      '钢琴 / 吉他：铺和声、做伴奏，随时可能接过话头开始独奏。',
    ],
  },
];

export const FAQ = [
  { q: '听不出好在哪里，正常吗？', a: '完全正常。先从人声、慢歌、酷派听起，习惯后再碰比波普与自由爵士。听爵士是耳朵的训练过程，不是考试。' },
  { q: '即兴太长跟丢了怎么办？', a: '把主题当书签：主题再现 = 一段独奏结束。也可以先找两三分钟的单曲版本练耳。' },
  { q: '现场和唱片有什么不同？', a: '爵士本质是现场艺术，同一首曲子每场即兴都不同。有机会就去本地爵士酒吧或 jam session，一次顶十张唱片。' },
  { q: '去哪里找这些唱片？', a: '各大音乐平台搜索本应用里的专辑名即可。实体爱好者可从 Blue Note / Impulse! / Columbia 厂牌的经典再版入手。' },
];
