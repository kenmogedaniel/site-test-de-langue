export interface StrokeStep {
  label: string;
  desc: string;
}

export interface KanaStrokeEntry {
  kana: string;
  totalStrokes: number;
  steps: StrokeStep[];
  tip: string;
}

export const HIRAGANA_STROKES: KanaStrokeEntry[] = [
  { kana: "あ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal de gauche à droite, légèrement incliné vers le haut." },
    { label: "Trait 2", desc: "Vertical qui traverse le premier trait, légèrement penché vers la gauche." },
    { label: "Trait 3", desc: "Boucle courbe en bas, ferme vers la gauche puis s'arrondit." },
  ], tip: "La boucle finale est la signature de あ : elle doit être ouverte et arrondie." },
  { kana: "い", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Vertical courbé, comme un J renversé, qui se termine en pointe." },
    { label: "Trait 2", desc: "Même direction, plus court et plus droit, légèrement plus bas." },
  ], tip: "Deux traits parallèles, le premier toujours plus long." },
  { kana: "う", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Petit trait horizontal court en haut, léger." },
    { label: "Trait 2", desc: "Grande courbe en C qui descend vers la gauche, comme un sourire." },
  ], tip: "Le premier trait est un accent, le vrai mouvement est la courbe." },
  { kana: "え", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Petit point ou trait court en haut." },
    { label: "Trait 2", desc: "Grande ligne qui ondule : descend, remonte et redescend en pointe." },
  ], tip: "Imaginez une vague : c'est la même énergie que え." },
  { kana: "お", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal de gauche à droite." },
    { label: "Trait 2", desc: "Vertical qui traverse le trait 1, avec un crochet vers la droite en bas." },
    { label: "Trait 3", desc: "Point ou petit trait à droite, séparé des deux premiers." },
  ], tip: "お et あ se ressemblent : お est plus carré et a le trait supplémentaire à droite." },
  { kana: "か", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal courbé vers la droite, comme un crochet." },
    { label: "Trait 2", desc: "Vertical qui descend du milieu du premier trait, avec un léger écart à droite." },
    { label: "Trait 3", desc: "Petit trait oblique à gauche, séparé, comme un point d'interrogation." },
  ], tip: "Le trait 3 est détaché : ne le faites pas rejoindre les autres." },
  { kana: "き", totalStrokes: 4, steps: [
    { label: "Trait 1", desc: "Horizontal de gauche à droite." },
    { label: "Trait 2", desc: "Un autre horizontal parallèle, légèrement en dessous." },
    { label: "Trait 3", desc: "Vertical qui traverse les deux traits et descend." },
    { label: "Trait 4", desc: "Courbe en C qui reprend du bas du trait 3, ouverte vers la gauche." },
  ], tip: "Ne confondez pas き avec さ : き a deux traits horizontaux, さ n'en a qu'un." },
  { kana: "く", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Un seul angle : descendre vers la droite, puis rebondir vers le haut-droite." },
  ], tip: "Un seul trait, comme un « < » arrondi. Le point de rotation est au centre." },
  { kana: "け", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Court trait vertical à gauche, légèrement penché." },
    { label: "Trait 2", desc: "Grand trait vertical au centre, qui descend et se termine par un crochet vers la gauche." },
    { label: "Trait 3", desc: "Trait horizontal qui traverse le trait 2 et se courbe vers le bas à droite." },
  ], tip: "Ne confondez pas け avec か : け a un troisième trait qui se recourbe distinctement vers le bas." },
  { kana: "こ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Horizontal court en haut, légèrement incliné." },
    { label: "Trait 2", desc: "Grande courbe en dessous, comme un bol ouvert vers le haut à gauche." },
  ], tip: "Deux traits horizontaux qui ne se touchent pas : l'espace entre eux est important." },
  { kana: "さ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Petit trait diagonal en haut, séparé." },
    { label: "Trait 2", desc: "Long trait horizontal qui descend et se courbe en crochet vers la gauche en bas." },
  ], tip: "Le crochet final part vers la gauche : c'est ce qui distingue さ de た." },
  { kana: "し", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Une seule courbe : descend depuis le haut à droite, puis remonte en crochet." },
  ], tip: "Un simple hameçon qui descend puis remonte : pensez à un point d'interrogation sans le point." },
  { kana: "す", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Horizontal de gauche à droite." },
    { label: "Trait 2", desc: "Vertical qui traverse le trait 1, fait un cercle en bas, puis remonte." },
  ], tip: "La boucle en bas est la clé : elle doit être petite et bien fermée." },
  { kana: "せ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal de gauche à droite." },
    { label: "Trait 2", desc: "Vertical qui descend à droite, avec un crochet vers la gauche." },
    { label: "Trait 3", desc: "Trait court qui s'appuie contre le trait 2, à gauche." },
  ], tip: "せ ressemble à un « S » penché avec un appui." },
  { kana: "そ", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Un seul trait en zigzag : descendre à droite, remonter à gauche, redescendre et courber." },
  ], tip: "En un seul mouvement continu, comme un « Z » avec une courbe finale." },
  { kana: "た", totalStrokes: 4, steps: [
    { label: "Trait 1", desc: "Horizontal de gauche à droite." },
    { label: "Trait 2", desc: "Vertical qui traverse le trait 1 et s'arrête." },
    { label: "Trait 3", desc: "Deuxième trait horizontal à droite, court." },
    { label: "Trait 4", desc: "Courbe qui descend du trait 3 vers la gauche, comme un こ." },
  ], tip: "た est comme 左 + こ collés ensemble." },
  { kana: "ち", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Horizontal de gauche à droite." },
    { label: "Trait 2", desc: "Vertical qui traverse le trait 1 et se courbe en C vers la droite." },
  ], tip: "Ne confondez pas ち (courbe vers la droite) avec て (courbe vers la gauche)." },
  { kana: "つ", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Grande courbe en arc de cercle, de gauche vers la droite puis vers le bas." },
  ], tip: "Un seul trait en arc, comme le toit d'un abri de jardin japonais." },
  { kana: "て", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Horizontal qui descend légèrement à droite, puis se courbe doucement vers la gauche." },
  ], tip: "Moins courbé que ち, et le bout ne remonte pas." },
  { kana: "と", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Vertical court qui descend." },
    { label: "Trait 2", desc: "Grande courbe en C qui commence du bas du trait 1 et s'arrondit vers la droite." },
  ], tip: "Comme une goutte d'eau qui tombe et s'épanouit." },
  { kana: "な", totalStrokes: 4, steps: [
    { label: "Trait 1", desc: "Horizontal de gauche à droite." },
    { label: "Trait 2", desc: "Vertical qui traverse le trait 1." },
    { label: "Trait 3", desc: "Petit trait à droite, séparé." },
    { label: "Trait 4", desc: "Croc au centre : descendre, boucle fermée, remonter." },
  ], tip: "La boucle de な est centrale et fermée : c'est sa signature." },
  { kana: "に", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Vertical de gauche." },
    { label: "Trait 2", desc: "Horizontal court à droite." },
    { label: "Trait 3", desc: "Vertical qui descend du trait 2 et se termine en crochet." },
  ], tip: "に ressemble beaucoup à la lettre latine « ni » inversée." },
  { kana: "ぬ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Courbe qui descend de gauche à droite puis remonte." },
    { label: "Trait 2", desc: "Croc qui reprend du haut, descend et fait une boucle fermée." },
  ], tip: "La boucle finale est identique à celle de ね, mais le début est plus simple." },
  { kana: "ね", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Vertical qui descend." },
    { label: "Trait 2", desc: "Zigzag qui rejoint le trait 1, fait une boucle et se termine vers la droite." },
  ], tip: "ね et れ sont jumeaux : ne terminez pas vers la droite comme れ, faites la boucle." },
  { kana: "の", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Un seul trait : diagonale descendante, puis grand arc de cercle fermé." },
  ], tip: "Le cercle est presque complet : commence en haut à gauche, tourne et revient presque au point de départ." },
  { kana: "は", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Vertical de gauche." },
    { label: "Trait 2", desc: "Horizontal à droite." },
    { label: "Trait 3", desc: "Vertical qui traverse le trait 2 et fait une boucle fermée en bas." },
  ], tip: "は est l'une des lettres les plus importantes : c'est la particule thème (prononcée « wa »)." },
  { kana: "ひ", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Un seul trait : petit crochet à gauche, puis courbe en U vers la droite." },
  ], tip: "Un seul mouvement, comme un « U » avec un crochet de départ." },
  { kana: "ふ", totalStrokes: 4, steps: [
    { label: "Trait 1", desc: "Petit point ou crochet en haut." },
    { label: "Trait 2", desc: "Courbe principale en C." },
    { label: "Trait 3", desc: "Petit trait à gauche de la courbe." },
    { label: "Trait 4", desc: "Petit trait à droite de la courbe." },
  ], tip: "ふ est l'un des plus complexes : quatre traits séparés, pas de trait continu." },
  { kana: "へ", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Un seul trait en montagne : monter à droite, puis redescendre plus bas." },
  ], tip: "Simple comme un toit de maison. En katakana, ヘ est quasi identique." },
  { kana: "ほ", totalStrokes: 4, steps: [
    { label: "Trait 1", desc: "Vertical de gauche." },
    { label: "Trait 2", desc: "Premier horizontal à droite." },
    { label: "Trait 3", desc: "Deuxième horizontal à droite, sous le premier." },
    { label: "Trait 4", desc: "Vertical qui traverse les deux horizontaux et fait une boucle en bas." },
  ], tip: "ほ a deux traits horizontaux (contrairement à は qui n'en a qu'un)." },
  { kana: "ま", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Premier horizontal." },
    { label: "Trait 2", desc: "Deuxième horizontal parallèle en dessous." },
    { label: "Trait 3", desc: "Vertical qui traverse les deux et fait une boucle fermée en bas." },
  ], tip: "La boucle de ま est fermée, contrairement à ち qui est ouverte." },
  { kana: "み", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Horizontal court, puis angle brusque vers le bas-gauche." },
    { label: "Trait 2", desc: "Croc qui traverse le trait 1 et se termine vers la droite." },
  ], tip: "Le premier trait est en L inversé : horizontal puis vertical." },
  { kana: "む", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal court en haut." },
    { label: "Trait 2", desc: "Vertical qui descend du trait 1, fait une boucle puis remonte." },
    { label: "Trait 3", desc: "Petit trait à droite, séparé." },
  ], tip: "La boucle de む est ouverte vers la droite, pas fermée." },
  { kana: "め", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Courbe de gauche à droite." },
    { label: "Trait 2", desc: "Autre courbe qui croise la première et s'arrondit." },
  ], tip: "め et お se ressemblent : め est plus simple et plus arrondi." },
  { kana: "も", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Vertical qui descend." },
    { label: "Trait 2", desc: "Premier horizontal qui croise le trait 1." },
    { label: "Trait 3", desc: "Deuxième horizontal plus bas." },
  ], tip: "Comme し avec deux barres horizontales." },
  { kana: "や", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Grand angle en V penché vers la droite." },
    { label: "Trait 2", desc: "Petit trait à gauche, presque parallèle au trait 1." },
    { label: "Trait 3", desc: "Point à droite, séparé." },
  ], tip: "Le trait 1 est le plus grand, les deux autres sont des accompagneurs." },
  { kana: "ゆ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Courbe qui descend et remonte, comme un U." },
    { label: "Trait 2", desc: "Vertical qui traverse le trait 1 et se termine." },
  ], tip: "Le trait 1 est un U penché, le trait 2 le traverse." },
  { kana: "よ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Horizontal court." },
    { label: "Trait 2", desc: "Vertical qui traverse le trait 1 et fait une courbe." },
  ], tip: "Ressemble à と inversé : le trait 2 est le mouvement principal." },
  { kana: "ら", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Horizontal court en haut." },
    { label: "Trait 2", desc: "Vertical qui descend, puis courbe vers la gauche en bas." },
  ], tip: "Deux traits séparés, pas de continuité entre eux." },
  { kana: "り", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Vertical qui descend avec un crochet à droite." },
    { label: "Trait 2", desc: "Autre vertical plus long, parallèle au premier." },
  ], tip: "Deux verts parallèles, le premier avec un crochet." },
  { kana: "る", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Un seul trait en Z qui se termine par une boucle fermée." },
  ], tip: "る et ろ sont jumeaux : る a la boucle fermée, ろ est ouvert." },
  { kana: "れ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Vertical qui descend." },
    { label: "Trait 2", desc: "Zigzag qui rejoint le trait 1 puis s'écarte vers la droite en pointe." },
  ], tip: "れ et ね sont jumeaux : ね termine par une boucle, れ par une pointe vers la droite." },
  { kana: "ろ", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Un seul trait en Z qui se termine vers la droite, sans boucle." },
  ], tip: "Identique à る mais sans la boucle finale." },
  { kana: "わ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Vertical qui descend." },
    { label: "Trait 2", desc: "Zigzag qui rejoint le trait 1, puis grande courbe vers la droite." },
  ], tip: "わ et れ sont jumeaux : la courbe de れ est plus anguleuse, celle de わ plus arrondie." },
  { kana: "を", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal court." },
    { label: "Trait 2", desc: "Vertical qui descend du trait 1." },
    { label: "Trait 3", desc: "Cercle en « c » qui entoure les deux premiers." },
  ], tip: "On ne l'utilise qu'en particule objet : il se prononce « o »." },
  { kana: "ん", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Un seul trait : descendre diagonalement, remonter en boucle, terminer vers la droite." },
  ], tip: "La seule syllabe qui finit par une consonne. Un seul mouvement fluide." },
];

export const KATAKANA_STROKES: KanaStrokeEntry[] = [
  { kana: "ア", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Horizontal qui se termine par un angle vers le bas-gauche." },
    { label: "Trait 2", desc: "Vertical qui part du coin du trait 1 et se termine." },
  ], tip: "Anguleux comme tous les katakana. Pas de courbe." },
  { kana: "イ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Diagonale qui descend vers la gauche." },
    { label: "Trait 2", desc: "Vertical qui part du bas du trait 1." },
  ], tip: "Deux traits qui se croisent en haut." },
  { kana: "ウ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Petit point ou crochet en haut." },
    { label: "Trait 2", desc: "Vertical court à gauche." },
    { label: "Trait 3", desc: "Vertical à droite, plus long, parallèle au trait 2." },
  ], tip: "Trois traits, le point du milieu toujours en haut." },
  { kana: "エ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal en haut." },
    { label: "Trait 2", desc: "Vertical au centre." },
    { label: "Trait 3", desc: "Horizontal en bas, plus long que le trait 1." },
  ], tip: "Une lettre « I » cap不让 avec des barres en haut et en bas." },
  { kana: "オ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal de gauche à droite." },
    { label: "Trait 2", desc: "Vertical qui traverse le trait 1." },
    { label: "Trait 3", desc: "Diagonale à droite, séparée." },
  ], tip: "Un « + » avec un trait diagonal." },
  { kana: "カ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Horizontal qui se termine par un crochet vers le bas." },
    { label: "Trait 2", desc: "Diagonale qui part du coin du trait 1." },
  ], tip: "Comme く avec un trait horizontal." },
  { kana: "キ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal court." },
    { label: "Trait 2", desc: "Deuxième horizontal en dessous, parallèle." },
    { label: "Trait 3", desc: "Diagonale qui traverse les deux." },
  ], tip: "Trois traits, les deux premiers sont parallèles." },
  { kana: "ク", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Angle en V penché vers la gauche." },
    { label: "Trait 2", desc: "Diagonale qui part du sommet et descend." },
  ], tip: "Un angle simple, plus anguleux que く." },
  { kana: "ケ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Petit crochet horizontal." },
    { label: "Trait 2", desc: "Diagonale à gauche." },
    { label: "Trait 3", desc: "Diagonale à droite, plus longue." },
  ], tip: "Trois traits qui partent d'un même point." },
  { kana: "コ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Angle : horizontal puis vertical qui tourne." },
    { label: "Trait 2", desc: "Horizontal en bas." },
  ], tip: "Deux traits qui forment un « C » carré." },
  { kana: "サ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal court." },
    { label: "Trait 2", desc: "Vertical qui traverse le trait 1." },
    { label: "Trait 3", desc: "Croc à gauche, séparé." },
  ], tip: "Le trait 3 est détaché, à gauche." },
  { kana: "シ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Petit trait en bas à gauche, monte vers la droite." },
    { label: "Trait 2", desc: "Un autre petit trait au-dessus du premier." },
    { label: "Trait 3", desc: "Grand trait qui part du bas et remonte vers la droite." },
  ], tip: "Les trois traits « montent vers la droite ». Ne confondez pas avec ツ qui descend." },
  { kana: "ス", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Horizontal qui se termine par un angle." },
    { label: "Trait 2", desc: "Diagonale à gauche qui part du coin." },
  ], tip: "Comme カ mais avec le premier trait plus droit." },
  { kana: "セ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Angle : horizontal puis un crochet vers le bas." },
    { label: "Trait 2", desc: "Vertical qui part du milieu du trait 1." },
  ], tip: "Le trait 2 traverse le trait 1." },
  { kana: "ソ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Petit trait en haut à gauche, descend vers la droite." },
    { label: "Trait 2", desc: "Grand trait qui part du haut et descend vers la gauche." },
  ], tip: "Les traits « descendent ». Ne confondez pas avec ン qui monte." },
  { kana: "タ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Petit trait oblique." },
    { label: "Trait 2", desc: "Horizontal qui traverse le trait 1." },
    { label: "Trait 3", desc: "Vertical qui part du trait 2 et descend." },
  ], tip: "Trois traits, les deux premiers se croisent." },
  { kana: "チ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal court en haut." },
    { label: "Trait 2", desc: "Diagonale qui part du trait 1." },
    { label: "Trait 3", desc: "Vertical qui traverse le tout et fait un crochet." },
  ], tip: "Trois traits, le premier est le plus court." },
  { kana: "ツ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Petit trait en haut à gauche, descend." },
    { label: "Trait 2", desc: "Petit trait en haut au milieu, descend." },
    { label: "Trait 3", desc: "Grand trait qui part du haut et descend." },
  ], tip: "Les traits « descendent ». Ne confondez pas avec シ qui monte." },
  { kana: "テ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal court en haut." },
    { label: "Trait 2", desc: "Horizontal plus long en dessous." },
    { label: "Trait 3", desc: "Diagonale qui part du milieu du trait 2." },
  ], tip: "Deux horizontaux puis une diagonale." },
  { kana: "ト", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Vertical qui descend." },
    { label: "Trait 2", desc: "Diagonale qui part du milieu du trait 1 vers la droite." },
  ], tip: "Deux traits qui forment un « T » incliné." },
  { kana: "ナ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Horizontal de gauche à droite." },
    { label: "Trait 2", desc: "Diagonale qui part du milieu du trait 1." },
  ], tip: "Deux traits : un horizontal et une diagonale." },
  { kana: "ニ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Horizontal court en haut." },
    { label: "Trait 2", desc: "Horizontal plus long en bas." },
  ], tip: "Le kanji « deux » : deux traits horizontaux parallèles." },
  { kana: "ヌ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Angle qui descend vers la droite." },
    { label: "Trait 2", desc: "Diagonale qui croise la première." },
  ], tip: "Deux traits qui se croisent." },
  { kana: "ネ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Vertical qui descend." },
    { label: "Trait 2", desc: "Croc qui part du trait 1, descend et se termine vers la droite." },
  ], tip: "Le trait 2 est un mouvement en deux temps." },
  { kana: "ノ", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Un seul trait : diagonale de haut-gauche vers bas-droite." },
  ], tip: "Le katakana le plus simple : une seule diagonale." },
  { kana: "ハ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Diagonale qui descend vers la gauche." },
    { label: "Trait 2", desc: "Diagonale qui descend vers la droite." },
  ], tip: "Deux diagonales symétriques, comme les « huit » (八) en katakana." },
  { kana: "ヒ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Horizontal court." },
    { label: "Trait 2", desc: "Grande courbe à droite, comme un C incliné." },
  ], tip: "Un horizontal court puis une grande courbe." },
  { kana: "フ", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Un seul trait : horizontal puis diagonal vers le bas-gauche." },
  ], tip: "Un angle ouvert vers la gauche." },
  { kana: "ヘ", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Un seul trait en montagne." },
  ], tip: "Identique à l'hiragana へ, le plus facile des deux syllabaires." },
  { kana: "ホ", totalStrokes: 4, steps: [
    { label: "Trait 1", desc: "Horizontal en haut." },
    { label: "Trait 2", desc: "Vertical qui traverse le trait 1." },
    { label: "Trait 3", desc: "Diagonale à gauche qui part du trait 2." },
    { label: "Trait 4", desc: "Diagonale à droite qui part du trait 2." },
  ], tip: "Un « + » avec deux jambes." },
  { kana: "マ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Angle : horizontal puis un crochet." },
    { label: "Trait 2", desc: "Horizontal parallèle en dessous." },
  ], tip: "Deux traits, le premier est un angle." },
  { kana: "ミ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Diagonale en bas à gauche." },
    { label: "Trait 2", desc: "Diagonale au milieu." },
    { label: "Trait 3", desc: "Diagonale en haut à droite." },
  ], tip: "Trois diagonales parallèles, comme le kanji « trois » (三) en katakana." },
  { kana: "ム", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Angle qui descend vers la droite." },
    { label: "Trait 2", desc: "Trait court qui ferme l'angle en bas." },
  ], tip: "Un triangle ouvert vers la gauche." },
  { kana: "メ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Diagonale de haut-gauche vers bas-droite." },
    { label: "Trait 2", desc: "Diagonale qui croise la première." },
  ], tip: "Deux diagonales qui se croisent, comme une croix penchée." },
  { kana: "モ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal court." },
    { label: "Trait 2", desc: "Horizontal plus long en dessous." },
    { label: "Trait 3", desc: "Vertical qui traverse les deux horizontaux." },
  ], tip: "Deux horizontaux puis un vertical." },
  { kana: "ヤ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Grand angle en V penché." },
    { label: "Trait 2", desc: "Horizontal à droite." },
  ], tip: "L'angle est le mouvement principal." },
  { kana: "ユ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Horizontal puis vertical." },
    { label: "Trait 2", desc: "Horizontal parallèle en bas." },
  ], tip: "Deux traits qui forment un « U » carré." },
  { kana: "ヨ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal en haut." },
    { label: "Trait 2", desc: "Horizontal au milieu." },
    { label: "Trait 3", desc: "Vertical à gauche qui ferme le tout." },
  ], tip: "Comme un « E » inversé." },
  { kana: "ラ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Horizontal court en haut." },
    { label: "Trait 2", desc: "Diagonale qui part du milieu du trait 1." },
  ], tip: "Deux traits : un horizontal puis une diagonale." },
  { kana: "リ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Vertical court avec un crochet." },
    { label: "Trait 2", desc: "Vertical plus long, parallèle." },
  ], tip: "Deux verticaux, le premier plus court." },
  { kana: "ル", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Vertical qui descend avec un crochet." },
    { label: "Trait 2", desc: "Grande courbe qui descend vers la droite." },
  ], tip: "Un crochet à gauche, une courbe à droite." },
  { kana: "レ", totalStrokes: 1, steps: [
    { label: "Trait 1", desc: "Un seul trait : diagonale qui descend vers la gauche puis remonte vers la droite." },
  ], tip: "Un seul mouvement en V penché." },
  { kana: "ロ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal en haut." },
    { label: "Trait 2", desc: "Vertical à gauche." },
    { label: "Trait 3", desc: "Angle qui termine le carré : vertical droit puis horizontal en bas." },
  ], tip: "Un carré complet, comme la bouche 口." },
  { kana: "ワ", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Vertical qui descend." },
    { label: "Trait 2", desc: "Angle qui part du trait 1 et descend vers la droite." },
  ], tip: "Le mouvement est ouvert vers la droite, contrairement à ク." },
  { kana: "ヲ", totalStrokes: 3, steps: [
    { label: "Trait 1", desc: "Horizontal en haut." },
    { label: "Trait 2", desc: "Horizontal au milieu." },
    { label: "Trait 3", desc: "Vertical qui traverse les deux horizontaux." },
  ], tip: "Trois traits : deux horizontaux traversés par un vertical." },
  { kana: "ン", totalStrokes: 2, steps: [
    { label: "Trait 1", desc: "Petit trait en haut à gauche, descend." },
    { label: "Trait 2", desc: "Grand trait qui part du bas et remonte vers la droite." },
  ], tip: "Les traits « montent vers la droite ». Ne confondez pas avec ソ qui descend." },
];

export const ALL_KAKIKATA: KanaStrokeEntry[] = [...HIRAGANA_STROKES, ...KATAKANA_STROKES];

export function getKakikataEntry(kana: string): KanaStrokeEntry | undefined {
  return ALL_KAKIKATA.find((s) => s.kana === kana);
}
