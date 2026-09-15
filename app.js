const CDN = "https://cdn.jsdelivr.net/gh/workinwithai-create/PreEight@main/public/samples";
const STEPS = 16;
const HOLD = 4;
const SWELL = 4;
const TOTAL = HOLD + SWELL;

const recipes = [
  { id: "violin-climb", name: "Violin climb", blurb: "First violin walks one scale degree per bar. Last note is the hook tonic." },
  { id: "cello-floor", name: "Cello floor", blurb: "Cello holds a pedal while the pocket thins. Hook sits on a floor, not a cliff." },
  { id: "horn-stack", name: "Horn stack", blurb: "French horn adds a voice each bar. Full triad lands on bar 8 beat 1." },
  { id: "hairpin", name: "Hairpin", blurb: "Same voicing all four bars. Gain writes the story. p to f across 5–8." },
  { id: "common-tone", name: "Common tone", blurb: "Violin sits on one pitch while cello and horn move the color under it." },
  { id: "late-brass", name: "Late brass", blurb: "Bars 5–6 strings only. Horn enters bar 7. Full stack on 8." },
  { id: "hush-bloom", name: "Hush then bloom", blurb: "Bar 5 is air. Bar 6 cello. Bars 7–8 the room opens." },
  { id: "octave-lift", name: "Octave lift", blurb: "Violin jumps an octave on bar 7. Same harmony, new ceiling." },
  { id: "pedal-under", name: "Pedal under", blurb: "Bass and cello lock a pedal tonic. Harmony walks above it into the hook." },
  { id: "last-hit", name: "Last-bar hit", blurb: "Quiet swell, then one tutti hit on bar 8 beat 3. Door." }
];

function bar(symbol, piano, guitar, bass, violin, cello, horn) {
  return { symbol, piano, guitar, bass, violin, cello, horn };
}

const grooves = [
  {
    id: "amber",
    name: "Amber Pre",
    bpm: 96,
    key: "A minor",
    pocket: [
      bar("Am", [57, 60, 64], [45, 52, 57], 33, 69, 45, 57),
      bar("F", [53, 57, 60], [41, 48, 53], 41, 65, 41, 53),
      bar("C", [55, 60, 64], [48, 52, 55], 36, 67, 48, 55),
      bar("G", [55, 59, 62], [43, 47, 50], 31, 67, 43, 55)
    ],
    swell: [
      bar("F", [53, 57, 60], [41, 48, 53], 41, 65, 41, 53),
      bar("G", [55, 59, 62], [43, 47, 50], 31, 67, 43, 55),
      bar("Am", [57, 60, 64], [45, 52, 57], 33, 69, 45, 57),
      bar("E7", [52, 56, 59], [40, 47, 50], 28, 64, 40, 52)
    ]
  },
  {
    id: "porch",
    name: "Porch Rise",
    bpm: 84,
    key: "E major",
    pocket: [
      bar("E", [52, 56, 59], [40, 47, 52], 28, 64, 40, 52),
      bar("B", [47, 51, 54], [35, 42, 47], 23, 59, 35, 47),
      bar("C#m", [56, 59, 63], [44, 51, 56], 32, 68, 44, 56),
      bar("A", [45, 49, 52], [33, 40, 45], 33, 69, 33, 45)
    ],
    swell: [
      bar("A", [45, 49, 52], [33, 40, 45], 33, 69, 33, 45),
      bar("B", [47, 51, 54], [35, 42, 47], 23, 71, 35, 47),
      bar("E", [52, 56, 59], [40, 47, 52], 28, 76, 40, 52),
      bar("B", [47, 51, 54], [35, 42, 47], 23, 71, 35, 47)
    ]
  },
  {
    id: "fold",
    name: "Fold Radio",
    bpm: 102,
    key: "D minor",
    pocket: [
      bar("Dm", [50, 53, 57], [38, 45, 50], 26, 62, 38, 50),
      bar("Bb", [46, 50, 53], [34, 41, 46], 34, 58, 34, 46),
      bar("F", [53, 57, 60], [41, 48, 53], 29, 65, 41, 53),
      bar("C", [48, 52, 55], [36, 43, 48], 24, 60, 36, 48)
    ],
    swell: [
      bar("Bb", [46, 50, 53], [34, 41, 46], 34, 58, 34, 46),
      bar("C", [48, 52, 55], [36, 43, 48], 24, 60, 36, 48),
      bar("Dm", [50, 53, 57], [38, 45, 50], 26, 62, 38, 50),
      bar("A7", [45, 49, 52], [33, 40, 43], 33, 57, 33, 45)
    ]
  },
  {
    id: "stair",
    name: "Stair House",
    bpm: 110,
    key: "G major",
    pocket: [
      bar("G", [55, 59, 62], [43, 50, 55], 31, 67, 43, 55),
      bar("Em", [52, 55, 59], [40, 47, 52], 28, 64, 40, 52),
      bar("C", [48, 52, 55], [36, 43, 48], 24, 60, 36, 48),
      bar("D", [50, 54, 57], [38, 45, 50], 26, 62, 38, 50)
    ],
    swell: [
      bar("C", [48, 52, 55], [36, 43, 48], 24, 60, 36, 48),
      bar("D", [50, 54, 57], [38, 45, 50], 26, 62, 38, 50),
      bar("G", [55, 59, 62], [43, 50, 55], 31, 67, 43, 55),
      bar("D", [50, 54, 57], [38, 45, 50], 26, 74, 38, 50)
    ]
  },
  {
    id: "carbon",
    name: "Carbon Verse",
    bpm: 90,
    key: "C minor",
    pocket: [
      bar("Cm", [48, 51, 55], [36, 43, 48], 24, 60, 36, 48),
      bar("Ab", [44, 48, 51], [32, 39, 44], 32, 56, 32, 44),
      bar("Eb", [51, 55, 58], [39, 46, 51], 27, 63, 39, 51),
      bar("Bb", [46, 50, 53], [34, 41, 46], 34, 58, 34, 46)
    ],
    swell: [
      bar("Ab", [44, 48, 51], [32, 39, 44], 32, 56, 32, 44),
      bar("Bb", [46, 50, 53], [34, 41, 46], 34, 58, 34, 46),
      bar("Cm", [48, 51, 55], [36, 43, 48], 24, 60, 36, 48),
      bar("G7", [43, 47, 50], [31, 38, 41], 23, 55, 31, 43)
    ]
  }
];

const state = { groove: grooves[0], recipe: recipes[0], playing: false, bar: -1, buffers: {}, ctx: null };
let timer = null;

function zone(i) { return i < HOLD ? "pocket" : "swell"; }
function chordAt(i) {
  const g = state.groove;
  return i < HOLD ? g.pocket[i] : g.swell[i - HOLD];
}

async function load() {
  const status = document.getElementById("status");
  status.textContent = "Loading live chairs…";
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    state.ctx = ctx;
    const names = ["piano", "bass", "guitar", "trumpet", "violin", "kick", "snare", "hat", "ride"];
    await Promise.all(names.map(async (n) => {
      const res = await fetch(`${CDN}/${n}.mp3`);
      state.buffers[n] = await ctx.decodeAudioData(await res.arrayBuffer());
    }));
    status.textContent = "Chairs seated. Violin, cello (bass chair), french horn (trumpet chair). Live FluidR3 only. Audio stays in the tab.";
  } catch (e) {
    status.textContent = "Sample load failed — check CDN. Punch list still works.";
    console.error(e);
  }
}

function playNote(name, midi, when, dur = 0.4, gain = 0.35) {
  if (!state.ctx || !state.buffers[name]) return;
  const src = state.ctx.createBufferSource();
  src.buffer = state.buffers[name];
  const g = state.ctx.createGain();
  g.gain.value = gain;
  src.playbackRate.value = Math.pow(2, (midi - 60) / 12);
  src.connect(g);
  g.connect(state.ctx.destination);
  src.start(when);
  src.stop(when + dur);
}

function scheduleBar(barIndex, when, stepDur) {
  const ch = chordAt(barIndex);
  const z = zone(barIndex);
  const r = state.recipe.id;
  const isSwell = z === "swell";
  const swellPos = barIndex - HOLD;

  const hush = isSwell && r === "hush-bloom" && barIndex === 4;
  const kitOn = !hush;
  for (let s = 0; s < STEPS; s++) {
    const t = when + s * stepDur;
    if (!kitOn) continue;
    const thin = isSwell && (r === "hairpin" || r === "hush-bloom");
    if (s % 4 === 0) playNote("kick", 36, t, 0.25, thin ? 0.28 : 0.48);
    if (s % 4 === 2) playNote("snare", 38, t, 0.2, thin ? 0.22 : 0.38);
    if (s % 4 === 0) playNote("hat", 42, t, 0.12, 0.16);
  }

  if (ch.bass != null && !hush) {
    const pedal = isSwell && r === "pedal-under";
    const note = pedal ? state.groove.swell[0].bass : ch.bass;
    playNote("bass", note, when, 0.95, 0.4);
    playNote("bass", note, when + 8 * stepDur, 0.7, 0.36);
  }

  if (ch.piano && !hush) {
    ch.piano.forEach((m, i) => playNote("piano", m, when + (i % 2) * 2 * stepDur, 0.5, 0.2));
  }
  if (ch.guitar && !isSwell) {
    ch.guitar.forEach((m, i) => playNote("guitar", m, when + i * 3 * stepDur, 0.45, 0.22));
  }

  if (isSwell && !hush) {
    const hair = r === "hairpin" ? 0.14 + swellPos * 0.08 : 0.26;
    let vMidi = ch.violin;
    if (r === "violin-climb") vMidi = ch.violin + swellPos;
    if (r === "octave-lift" && swellPos >= 2) vMidi = ch.violin + 12;
    if (r === "common-tone") vMidi = state.groove.swell[0].violin;
    playNote("violin", vMidi, when, 1.6, hair + 0.06);

    const celloGain = r === "cello-floor" || r === "pedal-under" ? 0.38 : 0.24;
    const celloMidi = r === "cello-floor" || r === "pedal-under" ? state.groove.swell[0].cello : ch.cello;
    playNote("bass", celloMidi, when, 1.5, celloGain);

    const hornOk =
      r === "horn-stack" ||
      r === "last-hit" ||
      r === "hairpin" ||
      r === "octave-lift" ||
      (r === "late-brass" && swellPos >= 2) ||
      (r === "hush-bloom" && swellPos >= 2) ||
      r === "common-tone";
    if (hornOk) {
      const stack = r === "horn-stack" ? swellPos + 1 : 1;
      for (let i = 0; i < stack; i++) {
        const n = ch.horn + (i === 1 ? 4 : i === 2 ? 7 : 0);
        const t = r === "last-hit" && swellPos === 3 ? when + 10 * stepDur : when + 2 * stepDur;
        playNote("trumpet", n, t, r === "last-hit" && swellPos === 3 ? 0.45 : 1.2, 0.22 + i * 0.04);
      }
    }
  }
}

function stop() {
  state.playing = false;
  state.bar = -1;
  if (timer) clearTimeout(timer);
  timer = null;
  paintBars();
}

function play(mode) {
  if (!state.ctx) return;
  if (state.ctx.state === "suspended") state.ctx.resume();
  stop();
  state.playing = true;
  const stepDur = 60 / state.groove.bpm / 4;
  let startBar = 0;
  let endBar = TOTAL;
  if (mode === "loop") { startBar = 0; endBar = HOLD; }
  else if (mode === "eight") { startBar = HOLD; endBar = TOTAL; }
  let barIndex = startBar;
  const ctx = state.ctx;
  const tick = () => {
    if (!state.playing) return;
    if (barIndex >= endBar) {
      if (mode === "loop") barIndex = startBar;
      else { stop(); return; }
    }
    state.bar = barIndex;
    paintBars();
    scheduleBar(barIndex, ctx.currentTime + 0.02, stepDur);
    barIndex += 1;
    timer = setTimeout(tick, STEPS * stepDur * 1000);
  };
  tick();
}

function punch() {
  const g = state.groove;
  const r = state.recipe;
  return `SwellFour punch list\n${g.name} · ${g.bpm} BPM · ${g.key} · ${r.name}\n\nThe problem: the hook arrives naked. No air, no chairs, no hairpin.\nThe move: ${r.blurb}\n\nPocket (bars 1–4)\n${g.pocket.map((b, i) => `  ${i + 1}. ${b.symbol}`).join("\n")}\n\nSwell (bars 5–8) — ${r.name}\n${g.swell.map((b, i) => `  ${i + 5}. ${b.symbol}`).join("\n")}\n\nLive chairs only — FluidR3 violin, cello (bass chair), french horn (trumpet chair), grand, upright, nylon, kit.\nAudio never leaves the tab.\nDistinct from LiftTwo, LiftFour, ChoirEight, SlideTwo, StabFour, TurnFour, PreEight.\nDrop the swell on the last four of the pre. Do not slam the hook.`;
}

function paintGrooves() {
  const el = document.getElementById("grooves");
  el.innerHTML = "";
  grooves.forEach((g) => {
    const b = document.createElement("button");
    b.className = "card" + (state.groove.id === g.id ? " on" : "");
    b.innerHTML = `<b>${g.name}</b><span>${g.bpm} BPM · ${g.key}</span>`;
    b.onclick = () => { state.groove = g; render(); };
    el.appendChild(b);
  });
}

function paintRecipes() {
  const el = document.getElementById("recipes");
  el.innerHTML = "";
  recipes.forEach((r) => {
    const b = document.createElement("button");
    b.className = "card" + (state.recipe.id === r.id ? " on" : "");
    b.innerHTML = `<b>${r.name}</b><span>${r.blurb}</span>`;
    b.onclick = () => { state.recipe = r; render(); };
    el.appendChild(b);
  });
}

function paintBars() {
  const el = document.getElementById("bars");
  el.innerHTML = "";
  for (let i = 0; i < TOTAL; i++) {
    const ch = chordAt(i);
    const z = zone(i);
    const d = document.createElement("div");
    d.className = "bar " + z + (state.playing && state.bar === i ? " active" : "");
    d.innerHTML = `<div class="n">${i + 1} · ${z === "pocket" ? "P" : "S"}</div><div class="c">${ch.symbol}</div>`;
    el.appendChild(d);
  }
}

function render() {
  paintGrooves();
  paintRecipes();
  paintBars();
  document.getElementById("punch").textContent = punch();
}

document.getElementById("playA").onclick = () => play("loop");
document.getElementById("playB").onclick = () => play("cut");
document.getElementById("play8").onclick = () => play("eight");
document.getElementById("stop").onclick = stop;
document.getElementById("copy").onclick = () => navigator.clipboard.writeText(punch());

render();
load();
