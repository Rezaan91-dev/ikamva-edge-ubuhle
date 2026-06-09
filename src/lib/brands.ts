export const BRANDS: string[] = [
  "mo-in","Mortein","Mothers Delight","Mountain Dew","MPL","Mr. Sheen","Mum","My Precious Kids",
  "Nasti","Native Child","Natural Elixir","Natural Xpressions","Nature's Choice","Nestle","Newden",
  "No Hair","Nivea","Mitchum","Morning Fresh","Morvite","Mothers Touch","MpesuMax","Mr. Vitality",
  "Muthi Wenyoni","Nail Stickers","Nastique","Natural Collection","Natural Salts & Herbs",
  "Naturally Flawless","Natures Secrets","New Shades","NSIY","NukiBell","NutriFro","Obee's HPS",
  "One-Day","Orbit","Organic Root Stimulator","OTO","Pakmed","Panado","Paw","People Planet",
  "Pepsodent","Personal Touch","Phakamisa","Phoenix","Pinzas Plastico","Playgirl","Pond's",
  "Preg or Not","Pretty Play","Pro White","Protex","Pure Miracle","Pure Touch","Qffit",
  "Rapid Energy","RED","Reitzer's","Restore Plus","Revlon Realistic","Rhino","Right On",
  "Rootex Naturals","Sadie","Sangoma's","Sarah Range","Savlon","Schick","Scorpion","Secrets",
  "Sellonote","Sensodyne","Shalina","Shine 'n Jam","Shower to Shower","Simba","SKALA",
  "Skin Miracle","Sleek Makeup","Snickers","Sofnfree n Pretty","Soft Petals","Somandla",
  "Sta-Soft","Status","Stimorol","Style & Image","Subaru","Sunlight","Super Khulisa","Surf",
  "Switch","Telament","The Herbalist","Tlotsa","Top Society","TOVCH Color","Triparc","Tsubaki",
  "ukebay","USN","Vaida's Professional","Vdenmenv","Vibhuti or Bhasma","Vida","Vita Glow",
  "Wahl","Wilson's","Woods","Wrigley's","Xintong","Yardley London","yx Original","Zapelec",
  "Nyaba Nyaba","One Step","Oral-B","Oreo","Originals","Pabala","Pampers","Paper Mate","Penguin",
  "Pepsi","Perfect Choice","Petal Soft","Phipp's","Pink","Playboy","Plush","Preem","Pretty Baby",
  "Price's Candles","Procydin","Puma","Pure Royal","Purity","Rainbow","Reboost Energy","Red Bull",
  "Remedy Hub","Revlon","Rexona Shield","Rhythms","Rockefeller","Royco","Sage","Santoor",
  "Satiskin","Scalli's","Schwarzkopf GLISS","Secret","Securex","Sellotape",
  "Setsong Africa Tea Crafters","Sheen for Bright Heads","Shiseido Fino","Silky Touch",
  "Sister Mary Personal Care","Skin Fade","Sky High","Smart Copy","Sofnfree","Soft Feather",
  "Sokany","Sta-Sof-Fro","Star Lite","Stayfree","Studex","Stylin Dredz","Sun","Super C",
  "Super U","Swankie Look","Tinkle","Tman's","Toppik Inc.","Trinco","Trust","Ubuntu Meats",
  "Uncle Joe","Uzana","Vaseline","Veerox","Vicks","Vira-Gard","Vuka Kwabafile Products",
  "Willards","Wonda Wave","Woodward's","X-Pression","Xiongying","Yimia Beauty","Zam-Buk",
  "Zero Spot",
].sort((a, b) => a.localeCompare(b));

export function groupBrandsByLetter(brands: string[]) {
  const groups: Record<string, string[]> = {};
  for (const b of brands) {
    const letter = b[0].toUpperCase().match(/[A-Z]/) ? b[0].toUpperCase() : "#";
    (groups[letter] ||= []).push(b);
  }
  return groups;
}
