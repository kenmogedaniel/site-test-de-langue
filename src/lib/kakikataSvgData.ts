export interface StrokePath {
  d: string;
  arrowX: number;
  arrowY: number;
  arrowAngle: number;
}

export interface CharStrokes {
  char: string;
  strokes: StrokePath[];
}

const h: CharStrokes[] = [
  { char: "あ", strokes: [
    { d: "M 25,35 L 70,32", arrowX: 70, arrowY: 32, arrowAngle: 0 },
    { d: "M 42,15 L 38,65 Q 35,78 28,82", arrowX: 28, arrowY: 82, arrowAngle: 200 },
    { d: "M 55,48 Q 72,52 68,68 Q 64,82 45,85 Q 30,87 22,78", arrowX: 22, arrowY: 78, arrowAngle: 220 },
  ]},
  { char: "い", strokes: [
    { d: "M 28,18 Q 25,35 22,65 L 18,72", arrowX: 18, arrowY: 72, arrowAngle: 250 },
    { d: "M 55,22 Q 58,40 56,58", arrowX: 56, arrowY: 58, arrowAngle: 170 },
  ]},
  { char: "う", strokes: [
    { d: "M 42,20 L 58,18", arrowX: 58, arrowY: 18, arrowAngle: 0 },
    { d: "M 55,30 Q 72,48 65,68 Q 58,82 38,85", arrowX: 38, arrowY: 85, arrowAngle: 210 },
  ]},
  { char: "え", strokes: [
    { d: "M 38,18 L 42,22", arrowX: 42, arrowY: 22, arrowAngle: 135 },
    { d: "M 25,45 L 42,48 L 58,42 Q 72,38 68,58 Q 64,72 48,78 L 32,85", arrowX: 32, arrowY: 85, arrowAngle: 210 },
  ]},
  { char: "お", strokes: [
    { d: "M 20,35 L 70,32", arrowX: 70, arrowY: 32, arrowAngle: 0 },
    { d: "M 45,12 L 42,58 Q 40,68 35,72 L 55,75", arrowX: 55, arrowY: 75, arrowAngle: 10 },
    { d: "M 72,52 L 78,58", arrowX: 78, arrowY: 58, arrowAngle: 135 },
  ]},
  { char: "か", strokes: [
    { d: "M 18,35 L 55,30 Q 65,28 72,35", arrowX: 72, arrowY: 35, arrowAngle: 30 },
    { d: "M 50,30 L 45,72 Q 42,80 38,85", arrowX: 38, arrowY: 85, arrowAngle: 250 },
    { d: "M 68,55 L 72,60", arrowX: 72, arrowY: 60, arrowAngle: 135 },
  ]},
  { char: "き", strokes: [
    { d: "M 18,28 L 65,25", arrowX: 65, arrowY: 25, arrowAngle: 0 },
    { d: "M 18,48 L 55,45", arrowX: 55, arrowY: 45, arrowAngle: 0 },
    { d: "M 38,25 L 35,65", arrowX: 35, arrowY: 65, arrowAngle: 260 },
    { d: "M 25,72 Q 42,78 58,72 Q 68,68 72,62", arrowX: 72, arrowY: 62, arrowAngle: 320 },
  ]},
  { char: "く", strokes: [
    { d: "M 65,15 L 38,50 L 65,85", arrowX: 65, arrowY: 85, arrowAngle: 50 },
  ]},
  { char: "け", strokes: [
    { d: "M 22,22 L 18,48", arrowX: 18, arrowY: 48, arrowAngle: 260 },
    { d: "M 48,12 L 44,70 Q 42,82 32,86", arrowX: 32, arrowY: 86, arrowAngle: 220 },
    { d: "M 32,48 L 70,42 Q 82,40 78,55 Q 74,68 58,74", arrowX: 58, arrowY: 74, arrowAngle: 200 },
  ]},
  { char: "こ", strokes: [
    { d: "M 25,30 L 65,26", arrowX: 65, arrowY: 26, arrowAngle: 0 },
    { d: "M 20,60 Q 45,52 68,58 Q 85,63 78,75 Q 70,86 45,88 Q 28,89 18,80", arrowX: 18, arrowY: 80, arrowAngle: 220 },
  ]},
  { char: "さ", strokes: [
    { d: "M 32,18 L 28,30", arrowX: 28, arrowY: 30, arrowAngle: 250 },
    { d: "M 15,50 L 75,45 L 70,48 Q 55,75 25,82 Q 15,84 10,78", arrowX: 10, arrowY: 78, arrowAngle: 240 },
  ]},
  { char: "し", strokes: [
    { d: "M 62,15 Q 55,50 40,72 Q 30,86 45,88 Q 58,89 65,78", arrowX: 65, arrowY: 78, arrowAngle: 20 },
  ]},
  { char: "す", strokes: [
    { d: "M 15,35 L 72,32", arrowX: 72, arrowY: 32, arrowAngle: 0 },
    { d: "M 42,32 L 38,55 Q 35,65 42,68 Q 48,70 45,62 L 42,55", arrowX: 42, arrowY: 55, arrowAngle: 250 },
  ]},
  { char: "せ", strokes: [
    { d: "M 15,35 L 72,32", arrowX: 72, arrowY: 32, arrowAngle: 0 },
    { d: "M 55,32 L 52,72 Q 50,78 58,82", arrowX: 58, arrowY: 82, arrowAngle: 40 },
    { d: "M 38,48 L 48,50", arrowX: 48, arrowY: 50, arrowAngle: 10 },
  ]},
  { char: "そ", strokes: [
    { d: "M 55,12 L 38,28 L 58,35 L 42,52 L 38,78 Q 36,85 32,88", arrowX: 32, arrowY: 88, arrowAngle: 250 },
  ]},
  { char: "た", strokes: [
    { d: "M 15,35 L 55,32", arrowX: 55, arrowY: 32, arrowAngle: 0 },
    { d: "M 35,32 L 32,58", arrowX: 32, arrowY: 58, arrowAngle: 260 },
    { d: "M 52,48 L 72,46", arrowX: 72, arrowY: 46, arrowAngle: 0 },
    { d: "M 52,48 Q 48,62 55,72 Q 60,78 55,82", arrowX: 55, arrowY: 82, arrowAngle: 200 },
  ]},
  { char: "ち", strokes: [
    { d: "M 18,35 L 65,32", arrowX: 65, arrowY: 32, arrowAngle: 0 },
    { d: "M 38,32 L 35,55 Q 32,68 42,75 Q 55,82 68,75", arrowX: 68, arrowY: 75, arrowAngle: 30 },
  ]},
  { char: "つ", strokes: [
    { d: "M 55,12 Q 75,28 72,52 Q 68,72 48,82 Q 35,88 28,82", arrowX: 28, arrowY: 82, arrowAngle: 210 },
  ]},
  { char: "て", strokes: [
    { d: "M 18,35 L 68,32 Q 75,30 72,38 Q 68,48 50,52 Q 35,56 28,62", arrowX: 28, arrowY: 62, arrowAngle: 230 },
  ]},
  { char: "と", strokes: [
    { d: "M 38,15 L 35,35", arrowX: 35, arrowY: 35, arrowAngle: 260 },
    { d: "M 35,42 Q 55,52 62,65 Q 68,75 62,82", arrowX: 62, arrowY: 82, arrowAngle: 30 },
  ]},
  { char: "な", strokes: [
    { d: "M 18,35 L 55,32", arrowX: 55, arrowY: 32, arrowAngle: 0 },
    { d: "M 35,32 L 32,55", arrowX: 32, arrowY: 55, arrowAngle: 260 },
    { d: "M 62,48 L 68,52", arrowX: 68, arrowY: 52, arrowAngle: 135 },
    { d: "M 38,62 Q 42,68 38,72 Q 34,76 38,80", arrowX: 38, arrowY: 80, arrowAngle: 200 },
  ]},
  { char: "に", strokes: [
    { d: "M 22,15 L 18,72", arrowX: 18, arrowY: 72, arrowAngle: 260 },
    { d: "M 45,35 L 68,32", arrowX: 68, arrowY: 32, arrowAngle: 0 },
    { d: "M 65,32 L 62,72 Q 60,78 58,82", arrowX: 58, arrowY: 82, arrowAngle: 260 },
  ]},
  { char: "ぬ", strokes: [
    { d: "M 22,18 Q 42,28 55,48 Q 62,62 55,72", arrowX: 55, arrowY: 72, arrowAngle: 30 },
    { d: "M 55,22 L 48,52 Q 42,65 48,72 Q 55,78 50,82", arrowX: 50, arrowY: 82, arrowAngle: 250 },
  ]},
  { char: "ね", strokes: [
    { d: "M 35,12 L 32,72", arrowX: 32, arrowY: 72, arrowAngle: 260 },
    { d: "M 32,35 L 58,38 Q 68,40 65,52 Q 62,62 55,58 Q 48,52 42,58 Q 38,65 45,72 Q 52,78 62,78", arrowX: 62, arrowY: 78, arrowAngle: 10 },
  ]},
  { char: "の", strokes: [
    { d: "M 42,18 L 55,35 Q 72,52 68,68 Q 62,82 42,85 Q 25,85 18,72", arrowX: 18, arrowY: 72, arrowAngle: 210 },
  ]},
  { char: "は", strokes: [
    { d: "M 18,15 L 15,72", arrowX: 15, arrowY: 72, arrowAngle: 260 },
    { d: "M 42,35 L 68,32", arrowX: 68, arrowY: 32, arrowAngle: 0 },
    { d: "M 55,32 L 52,55 Q 48,68 55,72 Q 62,75 58,78", arrowX: 58, arrowY: 78, arrowAngle: 100 },
  ]},
  { char: "ひ", strokes: [
    { d: "M 22,25 Q 28,35 35,42 Q 48,52 58,52 Q 72,52 75,42", arrowX: 75, arrowY: 42, arrowAngle: 320 },
  ]},
  { char: "ふ", strokes: [
    { d: "M 42,12 L 45,18", arrowX: 45, arrowY: 18, arrowAngle: 80 },
    { d: "M 52,28 Q 62,42 58,58 Q 52,72 42,78", arrowX: 42, arrowY: 78, arrowAngle: 230 },
    { d: "M 28,42 L 32,48", arrowX: 32, arrowY: 48, arrowAngle: 135 },
    { d: "M 65,45 L 70,50", arrowX: 70, arrowY: 50, arrowAngle: 135 },
  ]},
  { char: "へ", strokes: [
    { d: "M 18,42 L 45,28 L 78,42", arrowX: 78, arrowY: 42, arrowAngle: 30 },
  ]},
  { char: "ほ", strokes: [
    { d: "M 18,15 L 15,72", arrowX: 15, arrowY: 72, arrowAngle: 260 },
    { d: "M 42,28 L 68,25", arrowX: 68, arrowY: 25, arrowAngle: 0 },
    { d: "M 42,45 L 68,42", arrowX: 68, arrowY: 42, arrowAngle: 0 },
    { d: "M 55,25 L 52,55 Q 48,68 55,72 Q 62,75 58,78", arrowX: 58, arrowY: 78, arrowAngle: 100 },
  ]},
  { char: "ま", strokes: [
    { d: "M 20,25 L 68,22", arrowX: 68, arrowY: 22, arrowAngle: 0 },
    { d: "M 20,48 L 68,45", arrowX: 68, arrowY: 45, arrowAngle: 0 },
    { d: "M 45,22 L 42,52 Q 38,65 45,72 Q 52,78 48,82", arrowX: 48, arrowY: 82, arrowAngle: 120 },
  ]},
  { char: "み", strokes: [
    { d: "M 22,28 L 62,25 L 58,52", arrowX: 58, arrowY: 52, arrowAngle: 260 },
    { d: "M 35,48 L 72,52 Q 78,54 75,62", arrowX: 75, arrowY: 62, arrowAngle: 120 },
  ]},
  { char: "む", strokes: [
    { d: "M 25,22 L 55,20", arrowX: 55, arrowY: 20, arrowAngle: 0 },
    { d: "M 42,20 L 38,48 Q 35,60 42,65 Q 48,68 52,58", arrowX: 52, arrowY: 58, arrowAngle: 310 },
    { d: "M 65,52 L 70,55", arrowX: 70, arrowY: 55, arrowAngle: 135 },
  ]},
  { char: "め", strokes: [
    { d: "M 22,35 Q 42,42 55,58 Q 62,68 55,75", arrowX: 55, arrowY: 75, arrowAngle: 30 },
    { d: "M 55,22 Q 48,38 42,52 Q 35,65 42,72 Q 50,78 60,75", arrowX: 60, arrowY: 75, arrowAngle: 30 },
  ]},
  { char: "も", strokes: [
    { d: "M 38,12 L 35,65", arrowX: 35, arrowY: 65, arrowAngle: 260 },
    { d: "M 22,35 L 55,32", arrowX: 55, arrowY: 32, arrowAngle: 0 },
    { d: "M 22,55 L 55,52", arrowX: 55, arrowY: 52, arrowAngle: 0 },
  ]},
  { char: "や", strokes: [
    { d: "M 62,12 L 22,68 Q 18,75 15,82", arrowX: 15, arrowY: 82, arrowAngle: 250 },
    { d: "M 25,35 L 20,42", arrowX: 20, arrowY: 42, arrowAngle: 240 },
    { d: "M 62,48 L 68,52", arrowX: 68, arrowY: 52, arrowAngle: 135 },
  ]},
  { char: "ゆ", strokes: [
    { d: "M 55,15 Q 28,35 22,55 Q 18,68 25,78", arrowX: 25, arrowY: 78, arrowAngle: 230 },
    { d: "M 52,22 L 48,72", arrowX: 48, arrowY: 72, arrowAngle: 260 },
  ]},
  { char: "よ", strokes: [
    { d: "M 22,38 L 55,35", arrowX: 55, arrowY: 35, arrowAngle: 0 },
    { d: "M 42,35 L 38,55 Q 35,68 42,72 Q 48,75 52,72", arrowX: 52, arrowY: 72, arrowAngle: 30 },
  ]},
  { char: "ら", strokes: [
    { d: "M 22,18 L 55,15", arrowX: 55, arrowY: 15, arrowAngle: 0 },
    { d: "M 42,28 L 38,52 Q 35,65 42,72 Q 48,78 55,75", arrowX: 55, arrowY: 75, arrowAngle: 30 },
  ]},
  { char: "り", strokes: [
    { d: "M 32,12 L 28,48 L 25,52", arrowX: 25, arrowY: 52, arrowAngle: 260 },
    { d: "M 55,15 L 52,72", arrowX: 52, arrowY: 72, arrowAngle: 260 },
  ]},
  { char: "る", strokes: [
    { d: "M 58,12 L 28,48 Q 22,55 28,62 Q 35,68 42,62 Q 48,55 45,62 Q 42,72 48,78", arrowX: 48, arrowY: 78, arrowAngle: 130 },
  ]},
  { char: "れ", strokes: [
    { d: "M 35,12 L 32,72", arrowX: 32, arrowY: 72, arrowAngle: 260 },
    { d: "M 32,35 L 55,38 Q 65,40 62,52 Q 58,62 52,58 Q 45,52 42,58 L 62,72 L 72,78", arrowX: 72, arrowY: 78, arrowAngle: 30 },
  ]},
  { char: "ろ", strokes: [
    { d: "M 58,12 L 28,48 Q 22,55 28,62 Q 35,68 42,62 Q 48,55 48,68 Q 48,78 55,82", arrowX: 55, arrowY: 82, arrowAngle: 30 },
  ]},
  { char: "わ", strokes: [
    { d: "M 35,12 L 32,72", arrowX: 32, arrowY: 72, arrowAngle: 260 },
    { d: "M 32,35 L 55,38 Q 65,40 62,52 Q 58,62 52,58 Q 42,52 42,65 Q 42,78 55,82", arrowX: 55, arrowY: 82, arrowAngle: 30 },
  ]},
  { char: "を", strokes: [
    { d: "M 18,35 L 55,32", arrowX: 55, arrowY: 32, arrowAngle: 0 },
    { d: "M 35,32 L 32,55", arrowX: 32, arrowY: 55, arrowAngle: 260 },
    { d: "M 55,42 Q 68,48 65,58 Q 62,68 52,72 Q 42,75 35,72", arrowX: 35, arrowY: 72, arrowAngle: 210 },
  ]},
  { char: "ん", strokes: [
    { d: "M 42,15 L 28,42 Q 22,52 28,58 L 42,65 Q 55,72 62,78 Q 68,82 72,78", arrowX: 72, arrowY: 78, arrowAngle: 0 },
  ]},
];

const k: CharStrokes[] = [
  { char: "ア", strokes: [
    { d: "M 62,12 L 22,55", arrowX: 22, arrowY: 55, arrowAngle: 230 },
    { d: "M 58,25 L 55,65", arrowX: 55, arrowY: 65, arrowAngle: 260 },
  ]},
  { char: "イ", strokes: [
    { d: "M 55,12 L 25,72", arrowX: 25, arrowY: 72, arrowAngle: 240 },
    { d: "M 38,45 L 35,82", arrowX: 35, arrowY: 82, arrowAngle: 265 },
  ]},
  { char: "ウ", strokes: [
    { d: "M 42,10 L 45,15", arrowX: 45, arrowY: 15, arrowAngle: 80 },
    { d: "M 22,18 L 18,62", arrowX: 18, arrowY: 62, arrowAngle: 260 },
    { d: "M 62,18 L 58,72", arrowX: 58, arrowY: 72, arrowAngle: 260 },
  ]},
  { char: "エ", strokes: [
    { d: "M 20,22 L 68,22", arrowX: 68, arrowY: 22, arrowAngle: 0 },
    { d: "M 42,22 L 42,72", arrowX: 42, arrowY: 72, arrowAngle: 260 },
    { d: "M 15,72 L 75,72", arrowX: 75, arrowY: 72, arrowAngle: 0 },
  ]},
  { char: "オ", strokes: [
    { d: "M 15,32 L 72,32", arrowX: 72, arrowY: 32, arrowAngle: 0 },
    { d: "M 42,15 L 40,72", arrowX: 40, arrowY: 72, arrowAngle: 260 },
    { d: "M 48,48 L 75,78", arrowX: 75, arrowY: 78, arrowAngle: 50 },
  ]},
  { char: "カ", strokes: [
    { d: "M 18,30 L 62,28 Q 72,28 75,35", arrowX: 75, arrowY: 35, arrowAngle: 60 },
    { d: "M 55,30 L 45,78", arrowX: 45, arrowY: 78, arrowAngle: 250 },
  ]},
  { char: "キ", strokes: [
    { d: "M 18,22 L 62,22", arrowX: 62, arrowY: 22, arrowAngle: 0 },
    { d: "M 18,48 L 55,48", arrowX: 55, arrowY: 48, arrowAngle: 0 },
    { d: "M 62,12 L 28,82", arrowX: 28, arrowY: 82, arrowAngle: 245 },
  ]},
  { char: "ク", strokes: [
    { d: "M 58,12 L 22,68", arrowX: 22, arrowY: 68, arrowAngle: 240 },
    { d: "M 52,18 L 58,65", arrowX: 58, arrowY: 65, arrowAngle: 160 },
  ]},
  { char: "ケ", strokes: [
    { d: "M 18,22 L 35,22", arrowX: 35, arrowY: 22, arrowAngle: 0 },
    { d: "M 38,22 L 22,72", arrowX: 22, arrowY: 72, arrowAngle: 250 },
    { d: "M 45,15 L 72,78", arrowX: 72, arrowY: 78, arrowAngle: 65 },
  ]},
  { char: "コ", strokes: [
    { d: "M 18,22 L 68,22 L 65,65", arrowX: 65, arrowY: 65, arrowAngle: 260 },
    { d: "M 18,65 L 72,65", arrowX: 72, arrowY: 65, arrowAngle: 0 },
  ]},
  { char: "サ", strokes: [
    { d: "M 18,30 L 62,30", arrowX: 62, arrowY: 30, arrowAngle: 0 },
    { d: "M 42,15 L 38,78", arrowX: 38, arrowY: 78, arrowAngle: 260 },
    { d: "M 55,45 L 28,65", arrowX: 28, arrowY: 65, arrowAngle: 210 },
  ]},
  { char: "シ", strokes: [
    { d: "M 22,62 L 38,52", arrowX: 38, arrowY: 52, arrowAngle: 320 },
    { d: "M 42,52 L 58,42", arrowX: 58, arrowY: 42, arrowAngle: 320 },
    { d: "M 25,82 L 72,18", arrowX: 72, arrowY: 18, arrowAngle: 320 },
  ]},
  { char: "ス", strokes: [
    { d: "M 18,30 L 65,30 L 62,35", arrowX: 62, arrowY: 35, arrowAngle: 100 },
    { d: "M 62,35 L 22,78", arrowX: 22, arrowY: 78, arrowAngle: 245 },
  ]},
  { char: "セ", strokes: [
    { d: "M 18,32 L 68,30 L 65,38", arrowX: 65, arrowY: 38, arrowAngle: 100 },
    { d: "M 48,18 L 45,82", arrowX: 45, arrowY: 82, arrowAngle: 262 },
  ]},
  { char: "ソ", strokes: [
    { d: "M 22,42 L 38,58", arrowX: 38, arrowY: 58, arrowAngle: 130 },
    { d: "M 58,15 L 28,82", arrowX: 28, arrowY: 82, arrowAngle: 240 },
  ]},
  { char: "タ", strokes: [
    { d: "M 18,28 L 35,22", arrowX: 35, arrowY: 22, arrowAngle: 340 },
    { d: "M 22,38 L 65,35", arrowX: 65, arrowY: 35, arrowAngle: 0 },
    { d: "M 48,35 L 45,72", arrowX: 45, arrowY: 72, arrowAngle: 260 },
  ]},
  { char: "チ", strokes: [
    { d: "M 18,22 L 55,22", arrowX: 55, arrowY: 22, arrowAngle: 0 },
    { d: "M 55,15 L 22,78", arrowX: 22, arrowY: 78, arrowAngle: 240 },
    { d: "M 18,55 L 65,55 L 62,72", arrowX: 62, arrowY: 72, arrowAngle: 260 },
  ]},
  { char: "ツ", strokes: [
    { d: "M 22,48 L 35,62", arrowX: 35, arrowY: 62, arrowAngle: 135 },
    { d: "M 45,42 L 55,58", arrowX: 55, arrowY: 58, arrowAngle: 135 },
    { d: "M 68,12 L 55,82", arrowX: 55, arrowY: 82, arrowAngle: 260 },
  ]},
  { char: "テ", strokes: [
    { d: "M 18,22 L 55,22", arrowX: 55, arrowY: 22, arrowAngle: 0 },
    { d: "M 15,48 L 72,48", arrowX: 72, arrowY: 48, arrowAngle: 0 },
    { d: "M 48,48 L 22,82", arrowX: 22, arrowY: 82, arrowAngle: 235 },
  ]},
  { char: "ト", strokes: [
    { d: "M 38,12 L 35,72", arrowX: 35, arrowY: 72, arrowAngle: 260 },
    { d: "M 38,38 L 72,68", arrowX: 72, arrowY: 68, arrowAngle: 45 },
  ]},
  { char: "ナ", strokes: [
    { d: "M 18,30 L 62,30", arrowX: 62, arrowY: 30, arrowAngle: 0 },
    { d: "M 42,30 L 28,78", arrowX: 28, arrowY: 78, arrowAngle: 250 },
  ]},
  { char: "ニ", strokes: [
    { d: "M 18,28 L 65,28", arrowX: 65, arrowY: 28, arrowAngle: 0 },
    { d: "M 18,68 L 72,68", arrowX: 72, arrowY: 68, arrowAngle: 0 },
  ]},
  { char: "ヌ", strokes: [
    { d: "M 18,22 L 72,72", arrowX: 72, arrowY: 72, arrowAngle: 45 },
    { d: "M 18,72 L 72,28", arrowX: 72, arrowY: 28, arrowAngle: 320 },
  ]},
  { char: "ネ", strokes: [
    { d: "M 35,12 L 32,72", arrowX: 32, arrowY: 72, arrowAngle: 260 },
    { d: "M 32,42 L 55,45 Q 65,48 62,58 L 68,72 L 75,78", arrowX: 75, arrowY: 78, arrowAngle: 30 },
  ]},
  { char: "ノ", strokes: [
    { d: "M 62,12 L 22,82", arrowX: 22, arrowY: 82, arrowAngle: 240 },
  ]},
  { char: "ハ", strokes: [
    { d: "M 32,15 L 18,78", arrowX: 18, arrowY: 78, arrowAngle: 250 },
    { d: "M 58,15 L 72,78", arrowX: 72, arrowY: 78, arrowAngle: 110 },
  ]},
  { char: "ヒ", strokes: [
    { d: "M 15,28 L 42,28", arrowX: 42, arrowY: 28, arrowAngle: 0 },
    { d: "M 55,18 Q 68,35 65,58 Q 62,75 48,82", arrowX: 48, arrowY: 82, arrowAngle: 230 },
  ]},
  { char: "フ", strokes: [
    { d: "M 62,12 L 28,78", arrowX: 28, arrowY: 78, arrowAngle: 245 },
  ]},
  { char: "ヘ", strokes: [
    { d: "M 18,48 L 45,28 L 78,48", arrowX: 78, arrowY: 48, arrowAngle: 30 },
  ]},
  { char: "ホ", strokes: [
    { d: "M 18,22 L 68,22", arrowX: 68, arrowY: 22, arrowAngle: 0 },
    { d: "M 42,10 L 40,82", arrowX: 40, arrowY: 82, arrowAngle: 262 },
    { d: "M 42,52 L 22,78", arrowX: 22, arrowY: 78, arrowAngle: 230 },
    { d: "M 42,52 L 62,78", arrowX: 62, arrowY: 78, arrowAngle: 130 },
  ]},
  { char: "マ", strokes: [
    { d: "M 18,22 L 65,22 L 62,28", arrowX: 62, arrowY: 28, arrowAngle: 100 },
    { d: "M 18,68 L 72,68", arrowX: 72, arrowY: 68, arrowAngle: 0 },
  ]},
  { char: "ミ", strokes: [
    { d: "M 22,28 L 55,42", arrowX: 55, arrowY: 42, arrowAngle: 150 },
    { d: "M 22,48 L 55,62", arrowX: 55, arrowY: 62, arrowAngle: 150 },
    { d: "M 22,68 L 55,82", arrowX: 55, arrowY: 82, arrowAngle: 150 },
  ]},
  { char: "ム", strokes: [
    { d: "M 18,25 L 72,72", arrowX: 72, arrowY: 72, arrowAngle: 45 },
    { d: "M 42,72 L 68,72", arrowX: 68, arrowY: 72, arrowAngle: 0 },
  ]},
  { char: "メ", strokes: [
    { d: "M 22,22 L 72,78", arrowX: 72, arrowY: 78, arrowAngle: 45 },
    { d: "M 22,78 L 72,28", arrowX: 72, arrowY: 28, arrowAngle: 320 },
  ]},
  { char: "モ", strokes: [
    { d: "M 18,25 L 62,25", arrowX: 62, arrowY: 25, arrowAngle: 0 },
    { d: "M 18,55 L 68,55", arrowX: 68, arrowY: 55, arrowAngle: 0 },
    { d: "M 42,25 L 40,82", arrowX: 40, arrowY: 82, arrowAngle: 262 },
  ]},
  { char: "ヤ", strokes: [
    { d: "M 65,12 L 18,78", arrowX: 18, arrowY: 78, arrowAngle: 240 },
    { d: "M 25,35 L 22,42", arrowX: 22, arrowY: 42, arrowAngle: 250 },
    { d: "M 55,48 L 72,48", arrowX: 72, arrowY: 48, arrowAngle: 0 },
  ]},
  { char: "ユ", strokes: [
    { d: "M 18,22 L 68,22 L 65,62", arrowX: 65, arrowY: 62, arrowAngle: 260 },
    { d: "M 18,62 L 72,62", arrowX: 72, arrowY: 62, arrowAngle: 0 },
  ]},
  { char: "ヨ", strokes: [
    { d: "M 18,18 L 68,18", arrowX: 68, arrowY: 18, arrowAngle: 0 },
    { d: "M 18,48 L 62,48", arrowX: 62, arrowY: 48, arrowAngle: 0 },
    { d: "M 18,18 L 18,78", arrowX: 18, arrowY: 78, arrowAngle: 260 },
  ]},
  { char: "ラ", strokes: [
    { d: "M 18,22 L 58,22", arrowX: 58, arrowY: 22, arrowAngle: 0 },
    { d: "M 42,32 L 22,78", arrowX: 22, arrowY: 78, arrowAngle: 250 },
  ]},
  { char: "リ", strokes: [
    { d: "M 28,12 L 25,52 L 22,58", arrowX: 22, arrowY: 58, arrowAngle: 260 },
    { d: "M 58,12 L 55,82", arrowX: 55, arrowY: 82, arrowAngle: 260 },
  ]},
  { char: "ル", strokes: [
    { d: "M 28,12 L 25,48 L 22,55", arrowX: 22, arrowY: 55, arrowAngle: 260 },
    { d: "M 55,12 Q 62,35 58,58 Q 52,78 68,82", arrowX: 68, arrowY: 82, arrowAngle: 20 },
  ]},
  { char: "レ", strokes: [
    { d: "M 28,12 L 25,42 L 58,78", arrowX: 58, arrowY: 78, arrowAngle: 30 },
  ]},
  { char: "ロ", strokes: [
    { d: "M 18,18 L 72,18", arrowX: 72, arrowY: 18, arrowAngle: 0 },
    { d: "M 18,18 L 18,82", arrowX: 18, arrowY: 82, arrowAngle: 260 },
    { d: "M 18,82 L 72,82 L 72,18", arrowX: 72, arrowY: 18, arrowAngle: 260 },
  ]},
  { char: "ワ", strokes: [
    { d: "M 22,12 L 18,72", arrowX: 18, arrowY: 72, arrowAngle: 260 },
    { d: "M 18,35 L 65,38 Q 72,40 68,52 Q 62,65 72,82", arrowX: 72, arrowY: 82, arrowAngle: 30 },
  ]},
  { char: "ヲ", strokes: [
    { d: "M 18,22 L 68,22", arrowX: 68, arrowY: 22, arrowAngle: 0 },
    { d: "M 18,52 L 62,52", arrowX: 62, arrowY: 52, arrowAngle: 0 },
    { d: "M 42,22 L 40,82", arrowX: 40, arrowY: 82, arrowAngle: 262 },
  ]},
  { char: "ン", strokes: [
    { d: "M 22,42 L 35,58", arrowX: 35, arrowY: 58, arrowAngle: 135 },
    { d: "M 25,82 L 72,18", arrowX: 72, arrowY: 18, arrowAngle: 320 },
  ]},
];

export const HIRAGANA_SVG: CharStrokes[] = h;
export const KATAKANA_SVG: CharStrokes[] = k;
export const ALL_KANA_SVG: CharStrokes[] = [...h, ...k];

export function getCharStrokes(char: string): CharStrokes | undefined {
  return ALL_KANA_SVG.find((c) => c.char === char);
}
