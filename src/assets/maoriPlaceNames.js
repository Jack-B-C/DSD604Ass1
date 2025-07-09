//we have to remap the city data into an object of value city because the stupid select can't read a simple list of cities

//city data. the Select  needs to be in the array object of
//value and label have to map the city data to this object
// const [selectData, setSelectData] = useState([{ value: "1", label: "city" }]);
export function createMaoriPlacenames() {
  var getSelectDataList = [{ value: "1", label: "city" }];
  getSelectDataList = maoriPlaceNamesData.map((item) => ({
    value: item.Placename,
    label: item.Placename,
  }));
  //https://stackoverflow.com/questions/43572436/sort-an-array-of-objects-in-react-and-render-them
  //getSelectDataList.sort((a, b) => (a.label > b.label ? 1 : -1));

  console.log(
    "createMaoriPlacenames in maoriPlacenames.js selectData ",
    getSelectDataList
  );
  return getSelectDataList;

  // const data = allData.flatMap((item) => item.CapitalName).sort();
}

export const maoriPlaceNamesData = [
  {
    Placename: "Ahuroa",
    Components: "ahu: mound; roa: long",
    Meaning: "Long mound",
  },
  {
    Placename: "Aoroa",
    Components: "ao: cloud; roa: long",
    Meaning: "Long cloud",
  },
  {
    Placename: "Aotearoa",
    Components: "ao: cloud; tea: white; roa: long",
    Meaning: "Land of the long white cloud",
  },
  {
    Placename: "Aramoana",
    Components: "ara: path; moana: sea",
    Meaning: "Sea pathway",
  },
  {
    Placename: "Aranui",
    Components: "ara: path; nui: great",
    Meaning: "Great pathway",
  },
  {
    Placename: "Arapae",
    Components: "ara: path; pae: ridgeway",
    Meaning: "Pathway along the ridge",
  },
  {
    Placename: "Arapito",
    Components: "ara: path; pito: end or extremity",
    Meaning: "End of the path",
  },
  {
    Placename: "Arapōhue",
    Components: "ara: path; pōhue: climbing plant",
    Meaning: "Path of the climbing plant",
  },
  {
    Placename: "Arapuni",
    Components: "ara: path; puni: blocked or covered",
    Meaning: "Blocked path",
  },
  {
    Placename: "Ararātā",
    Components: "ara: path; rātā: native tree",
    Meaning: "Rātā tree path",
  },
  {
    Placename: "Ararimu",
    Components: "ara: path; rimu: native tree",
    Meaning: "Rimu tree path",
  },
  {
    Placename: "Ararua",
    Components: "ara: path; rua: two",
    Meaning: "Two paths",
  },
  {
    Placename: "Arataha",
    Components: "ara: path; taha: side",
    Meaning: "Side path",
  },
  {
    Placename: "Aratapu",
    Components: "ara: path; tapu: sacred or restricted",
    Meaning: "Sacred path",
  },
  {
    Placename: "Aratiatia Lakes, Aratiatia Rapids",
    Components: "ara: path; tiatia: pegs",
    Meaning: "Pegged ladder",
  },
  {
    Placename: "Aratika",
    Components: "ara: path; tika: correct or straight",
    Meaning: "Direct path",
  },
  {
    Placename: "Aratoro",
    Components: "ara: path; toro: discover",
    Meaning: "Path of discovery",
  },
  {
    Placename: "Aropaonui",
    Components: "aro: kidney fat; paoa: to bash",
    Meaning: "Bashed kidney fat",
  },
  {
    Placename: "Aukati",
    Components: "au: line; kati: block",
    Meaning: "Frontier",
  },
  {
    Placename: "Auripo",
    Components: "au: current; ripo: whirlpool, or eddying",
    Meaning: "Eddying current",
  },
  {
    Placename: "Auroa",
    Components: "au: cloud or mist; roa: long",
    Meaning: "Long cloud",
  },
  {
    Placename: "Awa",
    Components: "awa: river",
    Meaning: "River",
  },
  {
    Placename: "Awahōhonu River",
    Components: "awa: river; hōhonu: deep",
    Meaning: "Deep river",
  },
  {
    Placename: "Awahōu",
    Components: "awa: river; hōu: new",
    Meaning: "New river",
  },
  {
    Placename: "Awaiti",
    Components: "awa: river; iti: little",
    Meaning: "Little river",
  },
  {
    Placename: "Awa-kāeaea",
    Components: "awa: valley or stream; kāeaea: the sparrow-hawk",
    Meaning: "Sparrow-hawk stream",
  },
  {
    Placename: "Awakeri",
    Components: "awa: river; keri: dig",
    Meaning: "Ditch or trench",
  },
  {
    Placename: "Awakino",
    Components: "awa: river; kino: bad, evil, or of bad appearance",
    Meaning: "Bad creek",
  },
  {
    Placename: "Awamangu",
    Components: "awa: river; mangu: black",
    Meaning: "Black river",
  },
  {
    Placename: "Awamarino",
    Components: "awa: stream; marino: calm",
    Meaning: "Calm stream",
  },
  {
    Placename: "Awamoana",
    Components: "awa: stream; moana: sea",
    Meaning: "Sea stream",
  },
  {
    Placename: "Awamoko",
    Components: "awa: stream; moko: lizard",
    Meaning: "Lizard stream",
  },
  {
    Placename: "Awanui",
    Components: "awa: river; nui: large",
    Meaning: "Large river",
  },
  {
    Placename: "Awapikopiko",
    Components: "awa: stream; pikopiko: winding about",
    Meaning: "Winding stream",
  },
  {
    Placename: "Awapuni",
    Components: "awa: stream; puni: blocked up",
    Meaning: "Blocked-up river",
  },
  {
    Placename: "Awarere",
    Components: "awa: stream; rere: to flow",
    Meaning: "Flowing stream",
  },
  {
    Placename: "Awariki",
    Components: "awa: river; riki: small",
    Meaning: "Little river",
  },
  {
    Placename: "Awaroa",
    Components: "awa: river or valley; roa: long",
    Meaning: "Long river",
  },
  {
    Placename: "Awarua",
    Components: "awa: stream or river; rua: two",
    Meaning: "Two streams",
  },
  {
    Placename: "Awatere River",
    Components: "awa: river; tere: swift",
    Meaning: "Swift river",
  },
  {
    Placename: "Awatoitoi",
    Components: "awa: stream; toitoi: giant bully",
    Meaning: "Giant bully stream",
  },
  {
    Placename: "Awatōtō",
    Components: "awa: stream; tōtō: hauling place",
    Meaning: "Stream for hauling (canoes)",
  },
  {
    Placename: "Awatuna",
    Components: "awa: stream; tuna: eel",
    Meaning: "Eel stream",
  },
  {
    Placename: "Eketāhuna",
    Components: "eke: run aground or land; tāhuna: sandbank",
    Meaning: "Land on the sandbank",
  },
  {
    Placename: "Epiha",
    Components: "Māori form of biblical name Ephesus",
    Meaning: "Ephesus",
  },
  {
    Placename: "Erua",
    Components: "e: used before cardinal numbers from two to nine; rua: two",
    Meaning: "Two",
  },
  {
    Placename: "Hāpua-waikawa",
    Components: "hāpua: pool; wai: water; kawa: bitter",
    Meaning: "Pool of bitter water",
  },
  {
    Placename: "Haumoana",
    Components: "hau: wind; moana: sea",
    Meaning: "Sea breeze",
  },
  {
    Placename: "Haunui",
    Components: "hau: wind; nui: big or many",
    Meaning: "Strong wind",
  },
  {
    Placename: "Hiwinui",
    Components: "hiwi: ridge; nui: big",
    Meaning: "Big ridge",
  },
  {
    Placename: "Hokanui",
    Components: "hoka: projecting sharply upwards; nui: large",
    Meaning: "Large projection",
  },
  {
    Placename: "Houipapa",
    Components: "houi: lacebark; papa: flat",
    Meaning: "Ribbonwood flat",
  },
  {
    Placename: "Houpoto",
    Components: "hou: feathers; poto: short",
    Meaning: "Short feathers",
  },
  {
    Placename: "Hukanui",
    Components: "huka: foam, frost or snow; nui: big",
    Meaning: "Heavy snow",
  },
  {
    Placename: "Hukerenui",
    Components: "hukere: cascade; nui: large",
    Meaning: "Large cascade",
  },
  {
    Placename: "Hurimoana",
    Components: "huri: to overflow; moana: ocean",
    Meaning: "Overflowing ocean",
  },
  {
    Placename: "Ihumātao",
    Components: "ihu: nose; mātao: cold",
    Meaning: "Cold nose",
  },
  {
    Placename: "Ihumoana",
    Components: "ihu: nose; moana: sea",
    Meaning: "Nose into the sea",
  },
  {
    Placename: "Ikawai",
    Components: "ika: fish; wai: water",
    Meaning: "Waters of fish",
  },
  {
    Placename: "Kā Pukehore",
    Components:
      "A descriptive name, kā (ngā): the; puke: hill; hore: bare (the peaks were bare of vegetation)",
    Meaning: "The bare hills",
  },
  {
    Placename: "Kā Pukemāeroero",
    Components:
      "kā (ngā): the; puke: hill; māeroero: ogres of the South Island forests",
    Meaning: "The hill of ogres",
  },
  {
    Placename: "Kaharoa",
    Components: "kaha: net; roa: long",
    Meaning: "Large net",
  },
  {
    Placename: "Kaiata",
    Components: "kai: to eat: ata: early morning",
    Meaning: "Eating in the morning",
  },
  {
    Placename: "Kaiaua",
    Components: "kai: to eat; aua: mullet or herrings",
    Meaning: "Eating mullets",
  },
  {
    Placename: "Kai-Hau-o-Kupe",
    Components: "kai: to eat; hau: wind; o: of; Kupe",
    Meaning: "The place where Kupe ‘ate wind’",
  },
  {
    Placename: "Kaihiku",
    Components: "kai: te eat; hiku: tail of a fish",
    Meaning: "Eating a fish tail",
  },
  {
    Placename: "Kaihinu",
    Components: "kai: food; hinu: fat",
    Meaning: "Food preserved in fat",
  },
  {
    Placename: "Kaihu",
    Components:
      "An abbreviation of kai-hu-a-Ihenga, kai: to eat; hu: secretly; a: of; Ihenga",
    Meaning: "Eat secretly",
  },
  {
    Placename: "Kaikarae",
    Components: "kai: food; karae: seabird",
    Meaning: "Eat a seabird",
  },
  {
    Placename: "Kaikōura",
    Components: "kai: to eat; koura: crayfish",
    Meaning: "Eat crayfish",
  },
  {
    Placename: "Kaikūmera Bay",
    Components:
      "kai: to eat; kūmera (alternate spelling of kūmara): sweet potato",
    Meaning: "Eat kūmara",
  },
  {
    Placename: "Kaimāī",
    Components: "kai: food or to eat; māī: mussels, or slightly fermented food",
    Meaning: "Eat fermented food",
  },
  {
    Placename: "Kaimamaku",
    Components: "kai: food or to eat; mamaku: edible tree-fern",
    Meaning: "Eat edible tree-fern",
  },
  {
    Placename: "Kaimanawa Mountains",
    Components:
      "kai: food or to eat; manawa: breath (also meaning heart or emotion)",
    Meaning: "Breath for food",
  },
  {
    Placename: "Kaimangō",
    Components: "kai: food or to eat; mangō: shark",
    Meaning: "Eating shark",
  },
  {
    Placename: "Kaimata",
    Components: "kaimata: unripe or uncooked food",
    Meaning: "Eat raw food",
  },
  {
    Placename: "Kaimātaitai",
    Components: "kai: food; mātaitai: salty",
    Meaning: "Eat seafood",
  },
  {
    Placename: "Kaimaumau",
    Components: "kai: food; maumau: to waste",
    Meaning: "Eat food",
  },
  {
    Placename: "Kaimiro",
    Components: "kai: food or to eat; miro: a tree",
    Meaning: "Eat miro berries",
  },
  {
    Placename: "Kainamu",
    Components: "kai: to eat; namu: sandflies",
    Meaning: "Eat sandflies",
  },
  {
    Placename: "Kāingaroa",
    Components: "kāinga: area of land; roa: long",
    Meaning: "Long area of land",
  },
  {
    Placename: "Kāingaroa Plain",
    Components: "Kāinga: place where food has been cooked and eaten; roa: long",
    Meaning: "Long meal",
  },
  {
    Placename: "Kaipākirikiri",
    Components: "kai: food; pākirikiri: rock cod",
    Meaning: "Eating rock cod",
  },
  {
    Placename: "Kaipara Flats",
    Components: "kai: te eat; para: fern-root",
    Meaning: "Eat fern-root",
  },
  {
    Placename: "Kaiparoro",
    Components: "kai: to eat; paroro: bad weather",
    Meaning: "Eating up bad weather",
  },
  {
    Placename: "Kaipō Bay",
    Components: "kai: to eat; pō: night",
    Meaning: "Eat night",
  },
  {
    Placename: "Kaipuke",
    Components: "kai: to eat; puke: swell, flood",
    Meaning: "Ship (wave eater)",
  },
  {
    Placename: "Kaipūpū",
    Components: "kai: food; pūpū: shellfish",
    Meaning: "Eat shellfish",
  },
  {
    Placename: "Kairākau",
    Components: "kai: to eat; rākau: wood.",
    Meaning: "Eat wood",
  },
  {
    Placename: "Kairaki",
    Components: "kai: eat; raki (South Island form of rangi); sky",
    Meaning: "Sky eater",
  },
  {
    Placename: "Kairara",
    Components:
      "kai: food; rara: to be spread out on a stage for drying in the sun",
    Meaning: "Food spread out on a stage to dry",
  },
  {
    Placename: "Kairua",
    Components: "kai: food; rua: pit",
    Meaning: "Food pit",
  },
  {
    Placename: "Kaitakata",
    Components:
      "South Island variant of Kaitangata – kai: to eat; tangata: man",
    Meaning: "Man eater (South Island form)",
  },
  {
    Placename: "Kaitangata",
    Components: "kai: to eat; tangata: man",
    Meaning: "Man eater",
  },
  {
    Placename: "Kaitangiweka",
    Components: "kai: food; tangi: to cry; weka: wood hen",
    Meaning: "Crying of the weka for food",
  },
  {
    Placename: "Kaitapeha",
    Components: "kai: to eat; tapeha: rind or skin",
    Meaning: "Eat the rind",
  },
  {
    Placename: "Kaitawa",
    Components: "kai: food; tawa: tree or berries",
    Meaning: "Eat tawa berries",
  },
  {
    Placename: "Kaitieke",
    Components: "kai: to eat; tieke: the saddleback bird",
    Meaning: "Eat the saddleback bird",
  },
  {
    Placename: "Kaitoke",
    Components: "kai: to eat, or food; take: worm",
    Meaning: "Eat worms",
  },
  {
    Placename: "Kaitoki",
    Components: "kai: food; toki: adze",
    Meaning: "Food for the adze",
  },
  {
    Placename: "Kaituna",
    Components: "kai: to eat; tuna: eel",
    Meaning: "Eat eels",
  },
  {
    Placename: "Kai-waha-onepū",
    Components: "kai: food; waha: mouth; onepū: sand",
    Meaning: "Biting the sand",
  },
  {
    Placename: "Kaiwaka",
    Components: "kai: to eat; waka: canoe",
    Meaning: "Eating the canoes",
  },
  {
    Placename: "Kaiwera",
    Components: "kai: food; wera: hot",
    Meaning: "Hot food",
  },
  {
    Placename: "Kaiwharawhara",
    Components: "kai: food or to eat; wharawhara: the fruit of the astelia",
    Meaning: "Eat the fruit of the astelia",
  },
  {
    Placename: "Kakīroa",
    Components: "kakī: neck or throat; roa: large",
    Meaning: "Long neck",
  },
  {
    Placename: "Kararoa",
    Components:
      "kara: this word has many meanings, one of which is old man; roa: tall",
    Meaning: "Tall elderly man",
  },
  {
    Placename: "Kauroa",
    Components: "kau: to swim; roa: long",
    Meaning: "Long swim",
  },
  {
    Placename: "Kereone",
    Components: "kere: earth; one: sand or sandy",
    Meaning: "Sandy earth",
  },
  {
    Placename: "Kererū",
    Components: "kererū: wood pigeon",
    Meaning: "Wood pigeon",
  },
  {
    Placename: "Keteketerau",
    Components: "ketekete: click the tongue; rau: many times",
    Meaning: "Click the tongue repeatedly",
  },
  {
    Placename: "Ketetahi springs",
    Components: "Kete: basket; tahi: one",
    Meaning: "One spring",
  },
  {
    Placename: "Kihikihi",
    Components: "kihikihi: cicada",
    Meaning: "Cicada",
  },
  {
    Placename: "Kihitū",
    Components:
      "kihi: to strip off; tū: girdle or belt to which a maro (loincloth) was attached",
    Meaning: "Strip off the girdle",
  },
  {
    Placename: "Kioreroa",
    Components: "kiore: native rat; roa: long",
    Meaning: "Long rat",
  },
  {
    Placename: "Kirkiriroa",
    Components: "kirikiri: gravel; roa: long",
    Meaning: "Long gravel",
  },
  {
    Placename: "Kiwinui",
    Components: "kiwi: bird; nui: many",
    Meaning: "Many kiwi birds",
  },
  {
    Placename: "Kōhīnui",
    Components:
      "kōhī: dark mud (used in dyeing), heavy rain, skeleton, youth, etc.; nui: large, many or plenty",
    Meaning: "Plenty of dark mud",
  },
  {
    Placename: "Kohukohunui",
    Components: "Lit: kohukohu: mist; nui: big or many",
    Meaning: "Great mist",
  },
  {
    Placename: "Kōpūtai",
    Components: "kōpū: full; tai: tide",
    Meaning: "Full tide",
  },
  {
    Placename: "Kōputaroa",
    Components: "kōputa: snare for catching parakeets; roa: long",
    Meaning: "Long snare for catching parakeets",
  },
  {
    Placename: "Kōpūwai",
    Components: "kōpū: belly or full; wai: water",
    Meaning: "Water swallower",
  },
  {
    Placename: "Korakonui",
    Components: "korako: albino; nui: big",
    Meaning: "Large albino (bird)",
  },
  {
    Placename: "Kororāreka",
    Components: "kororā: blue penguin; reka: sweet or tasty",
    Meaning: "Tasty blue penguin",
  },
  {
    Placename: "Kōtuku",
    Components: "kōku: white heron",
    Meaning: "White heron",
  },
  {
    Placename: "Kōtuku-moana",
    Components: "kōtuku: white heron; moana: lake",
    Meaning: "Lake of white herons",
  },
  {
    Placename: "Kōurarau",
    Components: "kōura: crayfish; rau: many",
    Meaning: "Many crayfish",
  },
  {
    Placename: "Koutunui",
    Components: "koutu: headland; nui: large",
    Meaning: "Large headland",
  },
  {
    Placename: "Kumeroa",
    Components: "kume: to pull; roa: long",
    Meaning: "Long drag",
  },
  {
    Placename: "Kuranui",
    Components: "kura: red; nui: large red birds",
    Meaning: "Big red (birds)",
  },
  {
    Placename: "Makakahikatoa",
    Components:
      "maka: strike; kahikatoa: red mānuka (Leptospermum scoparium) or more probably a weapon made from this wood",
    Meaning: "Striking with mānuka stick",
  },
  {
    Placename: "Makarānui",
    Components: "makarā: to come and go; nui: many",
    Meaning: "Much coming and going",
  },
  {
    Placename: "Mākikihi",
    Components: "ma: stream; kikihi: cicada (Amphipsalta cingulata)",
    Meaning: "Cicada stream",
  },
  {
    Placename: "Mākirikiri",
    Components: "ma: stream: kirikiri: gravel",
    Meaning: "Gravelly stream",
  },
  {
    Placename: "Mākōhine Valley",
    Components: "mā: stream; kōhine: girl",
    Meaning: "Young woman's stream",
  },
  {
    Placename: "Mākōtuku",
    Components: "mā: stream; kōtuku: white heron",
    Meaning: "White heron stream",
  },
  {
    Placename: "Mākōwhai",
    Components: "Mā: stream; kōwhai: tree",
    Meaning: "Kōwhai tree stream",
  },
  {
    Placename: "Mākurī",
    Components: "mā: stream; kurī: dog",
    Meaning: "Dog stream",
  },
  {
    Placename: "Māmāranui",
    Components: "mā: stream; māra: farm or cultivation; nui: large or many",
    Meaning: "Stream for many gardens",
  },
  {
    Placename: "Manaroa",
    Components: "mana: power or prestige; roa: great or long",
    Meaning: "Enduring prestige",
  },
  {
    Placename: "Mangaharakeke",
    Components: "manga: stream; harakeke: flax bush",
    Meaning: "Stream of flax",
  },
  {
    Placename: "Mangahoe",
    Components: "manga: stream; hoe: canoe paddle",
    Meaning: "Stream of canoe paddles",
  },
  {
    Placename: "Mangahouhounui Stream",
    Components: "manga: stream; houhou: five-finger tree; nui: large or many",
    Meaning: "Stream of many five finger trees",
  },
  {
    Placename: "Mangaiti",
    Components: "manga: stream; iti: tiny",
    Meaning: "Small stream",
  },
  {
    Placename: "Mangakāhia",
    Components: "manga: stream; kāhia or kōhia: native passion vine",
    Meaning: "Stream of New Zealand passionfruit",
  },
  {
    Placename: "Mangakino",
    Components: "manga: stream; kino: bad, usless or stagnant",
    Meaning: "Stagnant stream",
  },
  {
    Placename: "Mangakura",
    Components: "manga: stream; kura: red or red ochre",
    Meaning: "Stream of red ochre",
  },
  {
    Placename: "Mangamāhoe",
    Components:
      "manga: stream; māhoe: native tree, whiteywood (Melicytus ramiflorus)",
    Meaning: "Māhoe stream",
  },
  {
    Placename: "Mangamahu",
    Components: "manga: stream; mahu: gentle",
    Meaning: "Gentle stream",
  },
  {
    Placename: "Mangamaire",
    Components: "manga: stream; maire: native tree",
    Meaning: "Maire stream",
  },
  {
    Placename: "Mangamuka",
    Components: "manga: stream; muka: the furled shoot of the nīkau palm",
    Meaning: "Stream of the furled shoot of the nīkau palm",
  },
  {
    Placename: "Mangamutu",
    Components: "manga: stream; mutu: finished",
    Meaning: "Finished stream",
  },
  {
    Placename: "Mangangarongaro: Mangangarongaro Stream",
    Components: "manga: stream; ngarongaro: somewhat abated",
    Meaning: "Abated stream",
  },
  {
    Placename: "Manganui-a-te-Ao",
    Components: "manga: stream; nui: great; a: of; te: the; ao: world",
    Meaning: "Great stream of the world",
  },
  {
    Placename: "Mangaohae",
    Components: "manga: stream o: of; Hae",
    Meaning: "The stream of Hae",
  },
  {
    Placename: "Mangaohutu",
    Components: "manga: stream; o: of; Hutu",
    Meaning: "The stream of Hutu",
  },
  {
    Placename: "Mangaonoho",
    Components: "manga: stream; o: of; Noho",
    Meaning: "The stream of Noho",
  },
  {
    Placename: "Mangaorapa",
    Components: "manga: stream; o: of; Rapa",
    Meaning: "The stream of Rapa",
  },
  {
    Placename: "Mangaore",
    Components: "manga: stream; ore: to poke with a stick, or to bore a hole",
    Meaning: "The stream where a hole was bored",
  },
  {
    Placename: "Mangaotaki",
    Components: "manga: stream; o: of; taki: oratory or to make a speech",
    Meaning: "Stream of oratory",
  },
  {
    Placename: "Mangaowera: Mangaowera Stream",
    Components: "manga: stream; o: of; Wera",
    Meaning: "The stream of Wera",
  },
  {
    Placename: "Mangapai",
    Components: "manga: stream; pai: good",
    Meaning: "Good stream",
  },
  {
    Placename: "Mangapēhi",
    Components: "manga: stream; pēhi: troubled",
    Meaning: "Stream of trouble",
  },
  {
    Placename: "Mangapiko",
    Components: "manga: stream; piko: bent or crooked",
    Meaning: "Winding stream",
  },
  {
    Placename: "Mangapōuri",
    Components: "manga: stream; pōuri: dark",
    Meaning: "Dark stream",
  },
  {
    Placename: "Mangapu",
    Components: "manga: stream; pū: double",
    Meaning: "Double stream",
  },
  {
    Placename: "Mangapuaka",
    Components: "manga: stream ; puaka: bird snare or rimu tree",
    Meaning: "Bird snare stream",
  },
  {
    Placename: "Mangapūrua",
    Components: "manga: stream; pūrua: abundant or plenty",
    Meaning: "Abundant stream",
  },
  {
    Placename: "Mangarakau",
    Components: "manga: stream; rākau: tree",
    Meaning: "Stream of trees",
  },
  {
    Placename: "Mangaramarama",
    Components: "manga: stream; ramarama: native shrub",
    Meaning: "Stream of the ramarama shrub",
  },
  {
    Placename: "Mangarapa",
    Components: "manga: stream; rapa: broad or spread out",
    Meaning: "Broad stream",
  },
  {
    Placename: "Mangarātā",
    Components: "manga: stream; rata: native tree",
    Meaning: "Rātā stream",
  },
  {
    Placename: "Mangarawa",
    Components: "manga: stream; rawa: swamp",
    Meaning: "Swampy stream",
  },
  {
    Placename: "Mangarimu",
    Components: "manga: stream; rimu: native tree",
    Meaning: "Rimu stream",
  },
  {
    Placename: "Mangaroa",
    Components: "manga: stream; roa: long",
    Meaning: "Long stream",
  },
  {
    Placename: "Mangatahi",
    Components: "manga: stream; tahi: single",
    Meaning: "Single stream",
  },
  {
    Placename: "Mangatainoka",
    Components: "manga: stream; tainoka: native broom",
    Meaning: "Native broom stream",
  },
  {
    Placename: "Mangatangi",
    Components: "manga: stream; tangi: weeping or sounding",
    Meaning: "Stream of weeping",
  },
  {
    Placename: "Mangatapu",
    Components: "manga: stream; tapu: sacred or forbidden",
    Meaning: "Sacred stream",
  },
  {
    Placename: "Mangatarata",
    Components: "manga: stream; tarata: native tree known as lemonwood",
    Meaning: "Lemonwood stream",
  },
  {
    Placename: "Mangatāwhiri",
    Components: "manga: stream; tāwhiri: native tree",
    Meaning: "Tāwhiri tree stream",
  },
  {
    Placename: "Mangatea",
    Components: "manga: stream; tea: white or clear",
    Meaning: "Clear stream",
  },
  {
    Placename: "Mangateparu",
    Components: "manga: stream; te: the paru: mud, dirt, dirty or deep",
    Meaning: "Stream of mud",
  },
  {
    Placename: "Mangatepopo",
    Components: "manga: stream; te: the; popo: anything rotten or decayed",
    Meaning: "Stream of rotten items",
  },
  {
    Placename: "Mangateretere",
    Components: "manga: stream; teretere: swiftly flowing",
    Meaning: "Swiftly flowing river",
  },
  {
    Placename: "Mangatī",
    Components: "manga: stream; tī: cabbage tree",
    Meaning: "Cabbage-tree stream",
  },
  {
    Placename: "Mangatina",
    Components: "manga: stream; tina: exhausted",
    Meaning: "Exhausted at the stream",
  },
  {
    Placename: "Mangatoetoe",
    Components: "manga: stream; toetoe: native grass",
    Meaning: "Toetoe stream",
  },
  {
    Placename: "Mangatuna",
    Components: "manga: stream; tuna: eel",
    Meaning: "Eel stream",
  },
  {
    Placename: "Mangawara",
    Components: "manga: stream; wara: to make an indistinct sound",
    Meaning: "Quiet stream",
  },
  {
    Placename: "Mangaweka:",
    Components: "manga: stream; weka: wood-hen",
    Meaning: "Weka stream",
  },
  {
    Placename: "Mangawhata",
    Components: "manga: stream; whata: a raised storehouse for food",
    Meaning: "Raised storehouse stream",
  },
  {
    Placename: "Mangawhero",
    Components: "manga: stream; whero: red",
    Meaning: "Red stream",
  },
  {
    Placename: "Mangōnui",
    Components: "mangō: shark; nui: large or many",
    Meaning: "Great shark",
  },
  {
    Placename: "Mānia-rauhea",
    Components: "mānia: plain of flat land; rauhea: tussock grass",
    Meaning: "Plain of shining tussock",
  },
  {
    Placename: "Māniatoto",
    Components: "mānia: plain; o: of; toto: blood",
    Meaning: "Plain of blood",
  },
  {
    Placename: "Māniatutu",
    Components: "mānia: plain; tutu: a native tree",
    Meaning: "Tutu-tree plain",
  },
  {
    Placename: "Mānui",
    Components: "mā: stream; nui: large",
    Meaning: "Large stream",
  },
  {
    Placename: "Maraenui",
    Components: "marae: courtyard or meeting area; nui: large",
    Meaning: "Great marae",
  },
  {
    Placename: "Maraeroa",
    Components: "marae: courtyard or meeting area; roa: long",
    Meaning: "Long marae",
  },
  {
    Placename: "Maraetai",
    Components: "marae: courtyard or meeting area; tai: coast",
    Meaning: "Coastal marae",
  },
  {
    Placename: "Māraroa",
    Components: "māra: cultivated area; roa: long, long lasting",
    Meaning: "Long lasting cultivations",
  },
  {
    Placename: "Matakanui",
    Components: "mata: face; ka: blow or scar; nui: large",
    Meaning: "Scarred face of a large cliff",
  },
  {
    Placename: "Mataroa",
    Components: "mata: headland or bluff; roa: long",
    Meaning: "Long headland",
  },
  {
    Placename: "Maunga Mā",
    Components: "maunga: mountain; mā: white",
    Meaning: "White mountain",
  },
  {
    Placename: "Maunga-atua",
    Components: "maunga: mountain; atua: gods",
    Meaning: "Mountain of the gods",
  },
  {
    Placename: "Maungaharuru",
    Components: "maunga: mountain; haruru: to rumble",
    Meaning: "Rumbling mountain",
  },
  {
    Placename: "Maungahaumi",
    Components:
      "maunga: mountain; haumi: timber to lengthen or raise the sides of a canoe",
    Meaning: "Mountain of canoe timber",
  },
  {
    Placename: "Maungakaramea",
    Components: "maunga: mountain; karamea: red ochre or speargrass",
    Meaning: "Red ochre mountain",
  },
  {
    Placename: "Maungakiekie",
    Components: "maunga: mountain; kiekie: a climbing plant",
    Meaning: "Kiekie plant mountain",
  },
  {
    Placename: "Maunganui",
    Components: "maunga: mountain; nui: tall or large",
    Meaning: "Large mountain",
  },
  {
    Placename: "Maungapōhatu",
    Components: "maunga: mountain; pōhatu: rock or stone",
    Meaning: "Rocky mountain",
  },
  {
    Placename: "Maungaraki",
    Components: "maunga: mountain or mountains; raki: north",
    Meaning: "Northern mountain",
  },
  {
    Placename: "Maungaroa",
    Components: "maunga: mountain; roa: long",
    Meaning: "Long mountain",
  },
  {
    Placename: "Maungataketake",
    Components:
      "maunga: mountain; taketake: base, long-established or well-founded",
    Meaning: "Broad mountain",
  },
  {
    Placename: "Maungataniwha",
    Components: "maunga: mountain; taniwha: supernatural creature",
    Meaning: "Taniwha mountain",
  },
  {
    Placename: "Maungatāpere",
    Components: "maunga: mountain; tāpere: red, volcanic earth",
    Meaning: "Mountain of red volcanic earth",
  },
  {
    Placename: "Maungatapu",
    Components: "maunga: mountain; tapu: sacred or forbidden",
    Meaning: "Sacred mountain",
  },
  {
    Placename: "Maungatautari",
    Components: "maunga: mountain; tautari: an upright stick",
    Meaning: "Mountain of the upright stick",
  },
  {
    Placename: "Maungatī",
    Components: "maunga: mountain; tī: cabbage tree",
    Meaning: "Cabbage tree mountain",
  },
  {
    Placename: "Maungatua",
    Components: "maunga: mountain; a: of; atua: god",
    Meaning: "Mountain of the gods",
  },
  {
    Placename: "Maungatūroto",
    Components: "maunga: mountain; tū: to stand; roto: lake",
    Meaning: "Mountain standing up in lagoons",
  },
  {
    Placename: "Maungawera",
    Components: "maunga: mountain; wera: burnt or hot",
    Meaning: "Burnt mountain",
  },
  {
    Placename: "Maungawhau",
    Components: "maunga: mountain; whau: a native tree",
    Meaning: "Whau tree mountain",
  },
  {
    Placename: "Māwheranui",
    Components:
      "Māwhera: open, widesread; nui: large (referring particularly to the river mouth).",
    Meaning: "Broad and widespread (river mouth)",
  },
  {
    Placename: "Mititai",
    Components: "miti: to lick; tai: tide",
    Meaning: "Lick the tide",
  },
  {
    Placename: "Moana",
    Components: "Ocean or large lake",
    Meaning: "Ocean",
  },
  {
    Placename: "Moanariri",
    Components: "moana: sea; riri: to be angry or to fight",
    Meaning: "Angry sea",
  },
  {
    Placename: "Moanaroa",
    Components: "moana: ocean; roa: large or broad",
    Meaning: "Broad sea",
  },
  {
    Placename: "Moanawhenuapōuri",
    Components: "moana: sea; whenua: land; pōuri: sad or dark",
    Meaning: "Sombre arm of the sea",
  },
  {
    Placename: "Moeroa",
    Components: "moe: to sleep; roa: long",
    Meaning: "Long sleep",
  },
  {
    Placename: "Mōkihinui",
    Components: "mōkihi: raft made of flax stalks; nui: large",
    Meaning: "Large flax-stalk raft",
  },
  {
    Placename: "Mokoroa",
    Components: "moko: tattoo; roa: long",
    Meaning: "Long tattoo",
  },
  {
    Placename: "Mokoroa: Mokoroa Stream",
    Components: "moko: lizard; roa; long",
    Meaning: "Long lizard",
  },
  {
    Placename: "Motuara: Motuara Island",
    Components: "motu: island; ara: path",
    Meaning: "Island in the path (of a canoe)",
  },
  {
    Placename: "Motuarohia: Motuarohia Island",
    Components: "motu:island; arohia: reconnoitred",
    Meaning: "Reconnoitred island",
  },
  {
    Placename: "Motukairangi",
    Components: "motu: island; kairangi: wonderful, chief, or wandering",
    Meaning: "Wonderful island",
  },
  {
    Placename: "Motukaraka",
    Components: "motu: clump of trees; karaka: native tree",
    Meaning: "Clump of karaka trees",
  },
  {
    Placename: "Motukāranui",
    Components: "Motu: island; karā: basalt; nui: large",
    Meaning: "Island of large basalt stone",
  },
  {
    Placename: "Motukauatiiti",
    Components:
      "motu: grove of trees; kauati: rubbing stick for firemaking; iti: little",
    Meaning: "Little clump of trees used for fire sticks",
  },
  {
    Placename: "Motukauatirahi",
    Components:
      "motu: grove of trees; kauati: rubbing stick for firemaking; rahi: large",
    Meaning: "Large clump of trees used for fire sticks",
  },
  {
    Placename: "Motukauri: Motukauri Island",
    Components: "motu: island; kauri: native tree",
    Meaning: "Clump of kauri trees",
  },
  {
    Placename: "Motukiekie",
    Components: "motu: island; kiekie: a native plant",
    Meaning: "Kiekie island",
  },
  {
    Placename: "Motukina",
    Components: "motu: island or isolated headland; kina: sea urchin",
    Meaning: "Kina island",
  },
  {
    Placename: "Motukiore",
    Components: "motu: island; kiore: native rat",
    Meaning: "Rat island",
  },
  {
    Placename: "Motukokopu",
    Components: "motu: island; kokopu: cockabully fish",
    Meaning: "Cockabully island",
  },
  {
    Placename: "Motumāhanga",
    Components: "motu: island; māhanga: twin",
    Meaning: "Twin islands",
  },
  {
    Placename: "Motumaire",
    Components: "motu: island; maire: native tree",
    Meaning: "Maire island",
  },
  {
    Placename: "Motumaoho",
    Components: "motu: clump of trees; maoho: to intrude",
    Meaning: "Intruding clump of trees",
  },
  {
    Placename: "Motunau",
    Components: "motu: island; nau: scurvy grass",
    Meaning: "Scurvy grass island",
  },
  {
    Placename: "Motungārara",
    Components: "motu: island; ngārara: lizard",
    Meaning: "Lizard island",
  },
  {
    Placename: "Motunui",
    Components: "motu: island; nui: large",
    Meaning: "Large island",
  },
  {
    Placename: "Motuoapa",
    Components: "motu: island or grove of trees; o: of; Apa",
    Meaning: "Grove of trees belonging to Apa",
  },
  {
    Placename: "Motu-o-Kura",
    Components: "motu: island; o: of; Kura",
    Meaning: "Island of Kura",
  },
  {
    Placename: "Motuopuhi: Motuopuhi Island",
    Components: "motu: island; o: of; Puhi",
    Meaning: "Island of Puhi",
  },
  {
    Placename: "Motuoroi: Motuoroi Island",
    Components: "motu: island; o: of; Roi",
    Meaning: "Island of Roi",
  },
  {
    Placename: "Motuotaraia",
    Components: "motu: isolated area; o: of; Taraia",
    Meaning: "Isolated area of Taraia",
  },
  {
    Placename: "Motupipi",
    Components: "motu: island; pipi: common edible shellfish",
    Meaning: "Pipi island",
  },
  {
    Placename: "Motupiu",
    Components: "motu: island; piu: to swing",
    Meaning: "Swinging island",
  },
  {
    Placename: "Moturoa",
    Components: "motu: island; roa: long",
    Meaning: "Long island",
  },
  {
    Placename: "Motutaiko",
    Components: "motu: island; taiko: petrel",
    Meaning: "Island of the black petrel",
  },
  {
    Placename: "Motutapu: Motutapu Island",
    Components: "motu: island; tapu: sacred or forbidden",
    Meaning: "Sacred island",
  },
  {
    Placename: "Motutara: Motutara Island",
    Components: "motu: island; tara: gull",
    Meaning: "Gull island",
  },
  {
    Placename: "Motutawa",
    Components: "motu: island; tawa: a tree",
    Meaning: "Tawa tree island",
  },
  {
    Placename: "Motutere",
    Components: "motu: island; tere: to float",
    Meaning: "Floating island",
  },
  {
    Placename: "Muritai",
    Components: "muri: breeze; tai: sea or tide",
    Meaning: "Sea breeze",
  },
  {
    Placename: "Muriwai",
    Components: "muri: end; wai: water",
    Meaning: "Waters’ end",
  },
  {
    Placename: "Ngākawau",
    Components: "ngā: the; kauwau: shags",
    Meaning: "The shags",
  },
  {
    Placename: "Ngāmatapōuri",
    Components: "ngā: the; matapōuri: black teal",
    Meaning: "The black teals",
  },
  {
    Placename: "Ngāmoko",
    Components: "ngā: the; moko: lizards",
    Meaning: "The lizards",
  },
  {
    Placename: "Ngāmotu",
    Components: "ngā: the; motu: islands",
    Meaning: "The islands",
  },
  {
    Placename: "Ngāpōhatu",
    Components: "ngā: the; pōhatu: rocks",
    Meaning: "The rocks",
  },
  {
    Placename: "Ngāpuhi",
    Components: "ngā: the; puhi: plumes",
    Meaning: "The plumes",
  },
  {
    Placename: "Ngāpuna",
    Components: "ngā; the; puna: springs",
    Meaning: "The springs",
  },
  {
    Placename: "Ngārimu Bay",
    Components: "ngā: the; rimu: native tree",
    Meaning: "The rimu trees",
  },
  {
    Placename: "Ngāroma",
    Components: "nga: the; roma: currents",
    Meaning: "The currents",
  },
  {
    Placename: "Ngaionui",
    Components: "ngaio: a native tree; nui: large or many",
    Meaning: "Great ngaio tree",
  },
  {
    Placename: "Ngāpuke",
    Components: "ngā: the; puke: hills",
    Meaning: "The hills",
  },
  {
    Placename: "Ngāroto",
    Components: "ngā: the; roto: lakes",
    Meaning: "The lakes",
  },
  {
    Placename: "Ngātira",
    Components: "ngā; the; tira: parties of travellers",
    Meaning: "The parties of travellers",
  },
  {
    Placename: "Ngātuku",
    Components: "ngā: the; tuku: ridges of a hill",
    Meaning: "The ridges of a hill",
  },
  {
    Placename: "Ngāūranga",
    Components: "ngā: the; ūranga: landing place for canoes",
    Meaning: "The landing place for canoes",
  },
  {
    Placename: "Ngāurukehu",
    Components: "ngā: the; urukehu: red-haired, fair-skinned Māori",
    Meaning: "The red-haired, fair-skinned Māori",
  },
  {
    Placename: "Ngāwaka",
    Components: "ngā: the; waka: canoes",
    Meaning: "The canoes",
  },
  {
    Placename: "Ngāwaro",
    Components: "ngā: the; waro: burning coals",
    Meaning: "The burning coals",
  },
  {
    Placename: "Ngāwhā",
    Components: "ngāwhā: hot springs",
    Meaning: "The hot springs",
  },
  {
    Placename: "Ngāwhatu",
    Components: "ngā: the; whatu: eyes",
    Meaning: "The eyes",
  },
  {
    Placename: "Ngāwī",
    Components: "ngā: the; wī: native tussock grass",
    Meaning: "The native tussock grass",
  },
  {
    Placename: "Ngutunui",
    Components: "ngutu: lip; nui: big",
    Meaning: "Big lips",
  },
  {
    Placename: "Nukumānia",
    Components: "nuku: wide extent; mānia: plains",
    Meaning: "Wide plains",
  },
  {
    Placename: "Nukuroa",
    Components: "nuku: to move; roa: long",
    Meaning: "Long travles",
  },
  {
    Placename: "Ōamaru",
    Components: "ō: place; a: of; Maru",
    Meaning: "The place of Maru",
  },
  {
    Placename: "Ōaonui",
    Components: "ō: place of; ao: clouds: nui: many",
    Meaning: "Place of many clouds",
  },
  {
    Placename: "Ōaro",
    Components: "ō: place of; aro: front",
    Meaning: "Front-facing place",
  },
  {
    Placename: "Ōeo",
    Components: "ō: place of; eo: louse or lice",
    Meaning: "Place of lice",
  },
  {
    Placename: "Ōhaeawai",
    Components: "ō: place of; haeawai: thermal waters",
    Meaning: "Place of thermal waters",
  },
  {
    Placename: "Ohakune",
    Components: "ō: place of; hakune: to be careful",
    Meaning: "Place of care",
  },
  {
    Placename: "Ōhāngai",
    Components: "ō: place of; hāngai: opposite, across, or at right angles",
    Meaning: "Opposite place",
  },
  {
    Placename: "Ōhau",
    Components: "ō: place of; Hau",
    Meaning: "Place of Hau",
  },
  {
    Placename: "Ōhauiti",
    Components: "ō: place of; hau: wind; iti: little",
    Meaning: "Place of little wind",
  },
  {
    Placename: "Ōhaupō",
    Components: "ō: place of; hau: wind; pō: night",
    Meaning: "Place of a breeze at night",
  },
  {
    Placename: "Ōhawe",
    Components: "ō: place of; hawe: bend in a river or path",
    Meaning: "Place of many (river) bends",
  },
  {
    Placename: "Ōhikaiti",
    Components:
      "ō: place of; hika: a rite involving certain incantations; iti: small",
    Meaning: "The place of small incantations",
  },
  {
    Placename: "Ōhikanui",
    Components:
      "ō: place of; hika: a rite involving certain incantations; nui: large",
    Meaning: "The place of large incantations",
  },
  {
    Placename: "Ōhinekura",
    Components: "Named after Hinekura",
    Meaning: "Place of Hinekura",
  },
  {
    Placename: "Ōhinepanea",
    Components: "ō: place of; Hinepanea: probably a personal name",
    Meaning: "Place of Hinepanea",
  },
  {
    Placename: "Ōhinerau",
    Components: "ō: place of; Hinerau, the goddess of whirlwinds",
    Meaning: "Place of Hinerau",
  },
  {
    Placename: "Ōhinerehia",
    Components: "ō: place of; Hinerehia, a legendary creature or mermaid.",
    Meaning: "Place of Hinerēhia",
  },
  {
    Placename: "Ōhingahape",
    Components: "ō: place of; hinga: fall; hape: crooked foot",
    Meaning: "Place of a slip causing a crooked foot",
  },
  {
    Placename: "Ōhiwa",
    Components: "ō: place of; hiwa: watchful or alert",
    Meaning: "Place of alertness",
  },
  {
    Placename: "Ōhoka",
    Components:
      "ō: place of; hoka: a stake to which a decoy kākā (parrot) was tied. Earlier spelt Hohoka",
    Meaning: "Place of the stake for a decoy parrot",
  },
  {
    Placename: "Ōhope",
    Components: "ō: place of; hope (or ope): main body of an army",
    Meaning: "Place of main body of an army",
  },
  {
    Placename: "Ōhotu",
    Components: "ō: place of; hotu: fifteenth night of the moon",
    Meaning: "Place of fifteenth night of the moon",
  },
  {
    Placename: "Ōhoukākā",
    Components: "ō: place of; hou: feather; kākā: parrot",
    Meaning: "Place of the parrot feather",
  },
  {
    Placename: "Ōhura",
    Components: "ō: place of; hura: to uncover, or uncovered spot",
    Meaning: "Place which is uncovered",
  },
  {
    Placename: "Ōihi",
    Components: "ō: place of; ihi: power or authority",
    Meaning: "Place of spiritual power",
  },
  {
    Placename: "Ōio",
    Components: "ō: place of; io: spur",
    Meaning: "Place of the spur",
  },
  {
    Placename: "Ōkahu",
    Components: "ō: place of; Kahu",
    Meaning: "Place of Kahu",
  },
  {
    Placename: "Ōkahukura",
    Components: "ō: place of; Kahukura: atua related to rainbow",
    Meaning: "Place of Kahukura",
  },
  {
    Placename: "Ōkahutai",
    Components: "ō: place; kahu: garment; tai: tide",
    Meaning: "Place of cloaking waters",
  },
  {
    Placename: "Ōkaihae",
    Components: "ō: place of; kai: food; hae: to dislike",
    Meaning: "Place of disliked food",
  },
  {
    Placename: "Ōkaihau",
    Components: "ō: place of; kai: to eat or food; hau: wind",
    Meaning: "Place of feast of the winds",
  },
  {
    Placename: "Ōkarae",
    Components: "ō: place of; karae: a seabird",
    Meaning: "Place of the seabird",
  },
  {
    Placename: "Ōkarahia",
    Components:
      "ō: place of; karahia: assistance called for in war, in this case in vain",
    Meaning: "Place of a call for assistance",
  },
  {
    Placename: "Ōkareka",
    Components: "ō: food for a long journey; kareka: sweet or tasty",
    Meaning: "Sweet food for a long journey",
  },
  {
    Placename: "Ōkārito",
    Components: "ō: place of; karito: young shoots of the bulrush or raupō",
    Meaning: "Place of young shoots of the bulrush",
  },
  {
    Placename: "Ōkataina",
    Components: "ō: place of; kataina: laughter",
    Meaning: "Place of laughter",
  },
  {
    Placename: "Ōkato",
    Components: "ō: place of; Kato: a personal name",
    Meaning: "Place of Kato",
  },
  {
    Placename: "Ōkau",
    Components: "ō: place of; kau: to swim",
    Meaning: "Place of swimming",
  },
  {
    Placename: "Ōkauia",
    Components: "ō: place of; kauia: articles threaded on string or on a stick",
    Meaning: "Place of articles threaded on a stick",
  },
  {
    Placename: "Ōkawa",
    Components: "ō: place of; kawa: bitter",
    Meaning: "Place of bitter (water)",
  },
  {
    Placename: "Ōkehu",
    Components: "ō: place of; Kehu: a personal name",
    Meaning: "Place of Kehu",
  },
  {
    Placename: "Ōkere",
    Components: "ō: place of; kere: to drift or float",
    Meaning: "Place of drifting",
  },
  {
    Placename: "Ōkete",
    Components: "ō: place of; kete: basket",
    Meaning: "Place of baskets",
  },
  {
    Placename: "Ōkiato",
    Components: "ō: place of; kīato: a receptacle for holding sacred objects",
    Meaning: "Place of receptable for holding sacred objects",
  },
  {
    Placename: "Ōkiwi",
    Components: "ō: place of; kiwi: native bird",
    Meaning: "Place of the kiwi",
  },
  {
    Placename: "Ōkiwi",
    Components: "ō: place of; Kiwi",
    Meaning: "Place of Kiwi",
  },
  {
    Placename: "Ōkoki",
    Components: "ō: place of; koki: a small canoe",
    Meaning: "Place of a small canoe",
  },
  {
    Placename: "Ōkoroire",
    Components: "ō: place of; koroire: ring-necked native duck, now extinct",
    Meaning: "Place of the koroire duck",
  },
  {
    Placename: "Ōkōtuku",
    Components: "ō: place of; kōtuku: white heron",
    Meaning: "Place of the white heron",
  },
  {
    Placename: "Ōkupu",
    Components: "ō: place of; kupu: message",
    Meaning: "Place of a message",
  },
  {
    Placename: "Ōkura",
    Components: "ō: place; kura: red",
    Meaning: "Place of red (clay)",
  },
  {
    Placename: "Ōkuri",
    Components: "ō: place of; kurī: Polynesian dog",
    Meaning: "Place of the Polynesian dog",
  },
  {
    Placename: "Ōmaha",
    Components: "ō: place of; maha: pleasure",
    Meaning: "Place of pleasure",
  },
  {
    Placename: "Ōmahu",
    Components:
      "ō: place of; ō: provisions for a travelling party; Mahu: a personal name",
    Meaning: "The place where Mahu ran out of food.",
  },
  {
    Placename: "Ōmāio",
    Components: "ō: place of; māio: calm",
    Meaning: "Place of calm",
  },
  {
    Placename: "Ōmaka",
    Components: "ō: place of; maka: South island form of manga (stream)",
    Meaning: "Place of the stream",
  },
  {
    Placename: "Ōmakau",
    Components: "ō: place of; makau: spouse",
    Meaning: "Belonging to husband and wife",
  },
  {
    Placename: "Ōmakere",
    Components: "ō: place of; makere: to be lost, abandoned or to die",
    Meaning: "Place of abandonment",
  },
  {
    Placename: "Ōmāmari",
    Components: "ō: place of; Māmari: a famous canoe that come from Hawaiki.",
    Meaning: "Place of Māmari canoe",
  },
  {
    Placename: "Ōmana",
    Components: "ō: place of; Mana: a personal name",
    Meaning: "Place of Mana",
  },
  {
    Placename: "Ōmanaia",
    Components: "ō: place of; Manaia: a personal name",
    Meaning: "Place of Manaia",
  },
  {
    Placename: "Ōmanawa",
    Components: "ō: place of; Manawa: a personal name",
    Meaning: "Place of Manawa",
  },
  {
    Placename: "Ōmanawanui",
    Components:
      "ō: place of; manawanui: stout-hearted, long-suffering or forbearing",
    Meaning: "Place of unswerving dedication",
  },
  {
    Placename: "Ōmāpere",
    Components: "ō: place of; māpere: cutty grass",
    Meaning: "Place of cutty grass",
  },
  {
    Placename: "Ōmarama",
    Components: "ō: place of; Marama: a personal name",
    Meaning: "Place of Marama",
  },
  {
    Placename: "Ōmaru",
    Components: "ō: place of; maru: shelter",
    Meaning: "Place of shelter",
  },
  {
    Placename: "Ōmarumutu",
    Components:
      "ō: place of; maru: shade or shelter; mutu: cut off or terminated",
    Meaning: "Place of cut-off shelter",
  },
  {
    Placename: "Ōmarunui",
    Components: "ō: place of; maru: shade; nui: great or much",
    Meaning: "Place of great shade",
  },
  {
    Placename: "Ōmarupāpaku",
    Components: "ō: place of; maru: shade; pāpaku: shallow",
    Meaning: "Place of shallow shade",
  },
  {
    Placename: "Ōmaui",
    Components: "ō: place of; Māui",
    Meaning: "Place of Māui",
  },
  {
    Placename: "Ōmihi",
    Components:
      "ō: place of; mihi: greeting; also possibly wailing or lamentation",
    Meaning: "Place of greeting",
  },
  {
    Placename: "Ōmimi",
    Components: "ō: place o; mimi: urine",
    Meaning: "Place of urine",
  },
  {
    Placename: "Ōmoana",
    Components: "ō: place of; moana: ocean",
    Meaning: "Place of the sea",
  },
  {
    Placename: "Ōmoeroa",
    Components: "ō: place of; moe: sleep; roa: long",
    Meaning: "Place of the long sleep",
  },
  {
    Placename: "Ōnaeroa",
    Components: "ō: place of; naeroa: mosquitoes",
    Meaning: "Place of mosquitoes",
  },
  {
    Placename: "Ōnawe",
    Components: "ō: place of; nawe: to set on fire",
    Meaning: "Place of arson",
  },
  {
    Placename: "Ōnehunga",
    Components: "ō: place of; nehunga: burial",
    Meaning: "Place of burial",
  },
  {
    Placename: "Ōnekakā",
    Components: "one: sand; kākā: hot",
    Meaning: "Hot sand",
  },
  {
    Placename: "Onekawa",
    Components: "one: sand; kawa: bitter or sour",
    Meaning: "Salty soil",
  },
  {
    Placename: "Ōnekeneke",
    Components: "ō: place of; nekeneke: to move gradually",
    Meaning: "Place of movement",
  },
  {
    Placename: "Onemaewao",
    Components: "one: sand; Maewao: fairy-like beings",
    Meaning: "Place of the Maewao (fairy-like beings)",
  },
  {
    Placename: "Oneone",
    Components: "oneone: earth, soil",
    Meaning: "Earth",
  },
  {
    Placename: "Onepoto",
    Components: "one: beach; poto: short",
    Meaning: "Short beach",
  },
  {
    Placename: "Onepū",
    Components: "one: sand; pū: loose",
    Meaning: "Loose sandy soil",
  },
  {
    Placename: "Onepunui",
    Components: "one: sand; pupuni: covered, fill up",
    Meaning: "Extensive sand dune",
  },
  {
    Placename: "Onerahi",
    Components: "one: beach; rahi: long or wide",
    Meaning: "Long beach",
  },
  {
    Placename: "Oneriri",
    Components:
      "one: beach; riri: combat, battle, fight, to quarrel or be angry",
    Meaning: "Battle beach",
  },
  {
    Placename: "Oneroa",
    Components: "one: sand or beach; roa: long",
    Meaning: "Long beach",
  },
  {
    Placename: "Onetahua",
    Components: "one: sand; tahua: heaped up",
    Meaning: "Heaped-up sand (sand dunes)",
  },
  {
    Placename: "Onetangi",
    Components: "one: sandy beach; tangi: to weep or to sound",
    Meaning: "Beach of weeping",
  },
  {
    Placename: "Onetapu",
    Components: "one: sand or in this case, desert; tapu: sacred or forbidden",
    Meaning: "Sacred desert",
  },
  {
    Placename: "Onetea",
    Components: "one: sandy soil; tea: light-coloured",
    Meaning: "Light soil",
  },
  {
    Placename: "Onewhero",
    Components: "one: soil; whero: red",
    Meaning: "Red soil",
  },
  {
    Placename: "Ōngāroto",
    Components: "ō: place of; ngā: the; roto: lakes",
    Meaning: "Place of the lakes",
  },
  {
    Placename: "Ōngāruānuku",
    Components: "ō: place; ngā; the; ruānuku: learned people",
    Meaning: "Place of the learned people",
  },
  {
    Placename: "Ōngarue",
    Components: "ō: place of; ngarue: to shake, as in an earthquake",
    Meaning: "Place of shaking",
  },
  {
    Placename: "Ōngātoro",
    Components: "ō: place of; Ngātoro: personal name",
    Meaning: "The place of Ngātoro",
  },
  {
    Placename: "Ōnoke",
    Components: "ō: place of; noke: earthworm",
    Meaning: "Place of earthworms",
  },
  {
    Placename: "Ōnuku",
    Components: "ō: place of; nuku: food for a journey",
    Meaning: "Place of Nuku",
  },
  {
    Placename: "Ōpaheke",
    Components: "ō: place of; paheke: slip or landslide",
    Meaning: "Place of a landslide",
  },
  {
    Placename: "Ōpaki",
    Components: "ō: place of; paki: fine weather",
    Meaning: "Place of fine weather",
  },
  {
    Placename: "Ōpakū",
    Components:
      "ō: place of; pakū: to make a sudden sound or report, to resound or to knock",
    Meaning: "Place of sudden noise",
  },
  {
    Placename: "Ōpanuku",
    Components: "ō: place of; Panuku: a personal name",
    Meaning: "Place of Panuku",
  },
  {
    Placename: "Ōpapa",
    Components: "ō: place of; papa: flat land",
    Meaning: "Place of flat land",
  },
  {
    Placename: "Ōpara",
    Components:
      "ō: place of; para: mud or dust, or a place where sacred ceremonies were performed",
    Meaning: "Place of mud",
  },
  {
    Placename: "Ōpararā",
    Components: "ō: place of; parara: to lie open towards",
    Meaning: "A place which lies open (to the Tasman Sea)",
  },
  {
    Placename: "Ōparau",
    Components:
      "ō: place of; pa: fortified villages; rau: many; or parau: dissembling or falsehood",
    Meaning: "Place of many fortified villages; or Place of falsehood",
  },
  {
    Placename: "Ōpārure",
    Components: "ō: place of; pārure: to plunder",
    Meaning: "Place of plunder",
  },
  {
    Placename: "Ōpepe",
    Components: "ō: place of; pepe: moth",
    Meaning: "Place of the moth",
  },
  {
    Placename: "Ōpihi",
    Components: "ō: place of; pihi: springing up (referring to plants)",
    Meaning: "Place of springing-up (plants)",
  },
  {
    Placename: "Ōpiki",
    Components: "ō: place of; piki: to climb or ascend",
    Meaning: "Place of climbing",
  },
  {
    Placename: "Ōpito",
    Components: "ō: place of; pito: umbilical cord",
    Meaning: "Place of umbilical cords",
  },
  {
    Placename: "Ōpoe",
    Components: "ō: place of; Poe",
    Meaning: "Place of Poe",
  },
  {
    Placename: "Ōpoho",
    Components: "ō: place of; Poho",
    Meaning: "Place of Poho",
  },
  {
    Placename: "Ōpononi",
    Components: "ō: place of; pou: post; noni: crooked",
    Meaning: "Place of crooked fishing post",
  },
  {
    Placename: "Ōpōuri",
    Components: "ō: place of; pōuri: sadness",
    Meaning: "Place of sadness",
  },
  {
    Placename: "Ōpoutama",
    Components:
      "ō: place of; poutama: pattern on the tukutuku panels of a whare",
    Meaning: "Place of the poutama pattern",
  },
  {
    Placename: "Ōpoutere",
    Components: "ō: place of; pou: pour out; tere: quickly",
    Meaning: "The place (where the sea-waters) swiftly empty out",
  },
  {
    Placename: "Ōpua",
    Components: "ō: place of; pua: flower",
    Meaning: "Place of the flower",
  },
  {
    Placename: "Ōpuke",
    Components: "ō: place of; puke: hill",
    Meaning: "Place of the hill",
  },
  {
    Placename: "Ōrākau",
    Components: "ō: place of; rakau: trees",
    Meaning: "Place of trees",
  },
  {
    Placename: "Ōrākei",
    Components: "ō: place of; rākei: adornment",
    Meaning: "Place of adornment",
  },
  {
    Placename: "Ōrakei Kōrako",
    Components: "ō: place of; rakei: adornment; kōrako: white",
    Meaning: "Place of adornment near the white (sinter flat)",
  },
  {
    Placename: "Ōranga",
    Components:
      "ō: place of; ranga: rising ground, hill, sandbank, or fishing ground",
    Meaning: "Place of rising ground",
  },
  {
    Placename: "Ōrarī",
    Components: "ō: place of; rarī: butterfish",
    Meaning: "Place of the butterfish",
  },
  {
    Placename: "Ōrātia",
    Components: "ō: place of; ra: sun; tia: persistency",
    Meaning: "Place of long-lingering sun",
  },
  {
    Placename: "Ōrere",
    Components: "ō: place of; rere: waterfall",
    Meaning: "Place of the waterfall",
  },
  {
    Placename: "Ōreti",
    Components: "ō: place of; reti: snare",
    Meaning: "Place of the snare",
  },
  {
    Placename: "Ōringi",
    Components: "ō: place of; Ringi",
    Meaning: "Place of Ringi",
  },
  {
    Placename: "Ōrongo",
    Components: "ō: place of; rongo: listening-post",
    Meaning: "Place of the listening post",
  },
  {
    Placename: "Ōrongorongo",
    Components: "o: of; rongorongo: a woman’s name",
    Meaning: "Place of Rongorongo",
  },
  {
    Placename: "Ōropi",
    Components: "ō: place of; ropi: to cover up",
    Meaning: "Place of covering up",
  },
  {
    Placename: "Ōroua",
    Components: "ō: place of; roua: dredging for shellfish",
    Meaning: "Place of dredging for shellfish",
  },
  {
    Placename: "Ōruaiti",
    Components: "ō: place of; rua: pit; iti: small",
    Meaning: "Place of small pit",
  },
  {
    Placename: "Ōruanui",
    Components: "ō: place of; rua: pit; nui: large or many",
    Meaning: "Place of many pits",
  },
  {
    Placename: "Ōruawairua",
    Components: "ō: place of; rua: two; wairua: soul or spirit",
    Meaning: "Meeting-place of spirits",
  },
  {
    Placename: "Ōruawharo",
    Components:
      "ō: place of; rua: hole or pit; whārō: stretched out in full length",
    Meaning: "Place of stretched-out pit",
  },
  {
    Placename: "Ōruawharo",
    Components: "ō: place of; Ruawharo: a personal name",
    Meaning: "Place of Ruawharo",
  },
  {
    Placename: "Ōrukuwai",
    Components: "ō: place of; Rukuwai: a personal name",
    Meaning: "Place of Rukuwai",
  },
  {
    Placename: "Ōruru",
    Components: "ō: place of; ruru: morepork",
    Meaning: "Place of the morepork",
  },
  {
    Placename: "Ōrurutūmārō",
    Components: "ō: place of; ruru: morepork; tū: stand; mārō: firm",
    Meaning: "Place of the unmoving morepork",
  },
  {
    Placename: "Ōtāhei",
    Components: "ō: place of; tāhei: a bird snare",
    Meaning: "Place of the bird snare",
  },
  {
    Placename: "Ōtahu",
    Components: "ō: place of; Tahu: a personal name",
    Meaning: "Place of Tahu",
  },
  {
    Placename: "Ōtāhūhū",
    Components: "ō: place of tāhūhū: ridgepole of a house",
    Meaning: "Place of the ridgepole of a house",
  },
  {
    Placename: "Ōtaihanga",
    Components: "ō: place of: Taihanga: a personal name",
    Meaning: "Place of Taihanga",
  },
  {
    Placename: "Ōtāika",
    Components: "ō: place of; tāika: to lie in a heap",
    Meaning: "Place of lying in a heap",
  },
  {
    Placename: "Ōtakapuneke",
    Components: "ō: place of; Takapuneke: a personal name",
    Meaning: "Place of Takapuneke",
  },
  {
    Placename: "Ōtakaro",
    Components: "ō: place of; Takaro: a personal name",
    Meaning: "Place of Takaro",
  },
  {
    Placename: "Ōtakeho",
    Components: "ō: place of; Takeho: a personal name",
    Meaning: "Place of Takeho",
  },
  {
    Placename: "Ōtaki",
    Components: "ō: place of; taki: stick in",
    Meaning: "Place of sticking a staff into the ground",
  },
  {
    Placename: "Ōtākiri",
    Components: "ō: place of; tākiri: loosening or making free from tapu",
    Meaning: "Place of loosening or freeing from tapu",
  },
  {
    Placename: "Ōtakou",
    Components: "ō: place of; tākou: red ochre",
    Meaning: "Place of red ochre; or place of Tākou",
  },
  {
    Placename: "Ōtama",
    Components: "ō: place of;  Tama: a personal name",
    Meaning: "Place of Tama",
  },
  {
    Placename: "Ōtamakura",
    Components: "ō: place of; tama: son; kura: ornamented with red feathers",
    Meaning: "Place of boy ornamented with red feathers",
  },
  {
    Placename: "Ōtamarākau",
    Components: "ō: place of; tama: young men; rākau: weapons",
    Meaning: "Place of young warriors",
  },
  {
    Placename: "Ōtamarau",
    Components: "ō: place of; Tamarau: a personal name",
    Meaning: "Place of Tamarau",
  },
  {
    Placename: "Ōtamatea",
    Components: "ō: place of; Tamatea: a personal name",
    Meaning: "Place of Tamatea",
  },
  {
    Placename: "Ōtāne",
    Components: "ō: place of; tāne: man",
    Meaning: "Place of a man",
  },
  {
    Placename: "Ōtāngarei",
    Components: "ō: place of; tanga: row or company of people; rei: leaping",
    Meaning: "Place of group of people leaping",
  },
  {
    Placename: "Ōtangaroa",
    Components:
      "ō: place of; Tangaroa: a personal name, or the god of the ocean",
    Meaning: "Place of Tangaroa",
  },
  {
    Placename: "Ōtangihaku",
    Components: "ō: place of; tangi: to sound or weep; haku: to murmur",
    Meaning: "Place of murmured weeping",
  },
  {
    Placename: "Ōtangimoana",
    Components: "ō: place of; tangi: weeping; moana: waters",
    Meaning: "Place of weeping waters",
  },
  {
    Placename: "Ōtangiwai",
    Components: "ō: place of; tangi: weeping; wai: waters",
    Meaning: "Place of weeping waters",
  },
  {
    Placename: "Ōtāpara",
    Components: "ō: place of; tāpara: desire, or wooden digging implement",
    Meaning: "Place of digging implement",
  },
  {
    Placename: "Ōtāpiri",
    Components:
      "ō: place of; tapiri: a vigorous shoot growing beside the main stem of a plant",
    Meaning: "Place of vigorous growing shoot",
  },
  {
    Placename: "Ōtara",
    Components: "ō: place of; tara: peak",
    Meaning: "Place of the peak",
  },
  {
    Placename: "Ōtara",
    Components: "ō: place of; Tara: a personal name",
    Meaning: "Place of Tara",
  },
  {
    Placename: "Ōtaraia",
    Components: "ō: place of; Taraia: a personal name",
    Meaning: "Place of Taraia",
  },
  {
    Placename: "Ōtaranga",
    Components: "ō: place of; taranga: separation",
    Meaning: "Place of separation",
  },
  {
    Placename: "Ōtatara",
    Components: "ō: place of; tatara: to untie or loosen",
    Meaning: "Place of loosening",
  },
  {
    Placename: "Ōtauaki",
    Components: "ō: place of; tauaki: to show or expose",
    Meaning: "Place of exposure",
  },
  {
    Placename: "Ōtautau",
    Components:
      "ō: place of; tautau: greenstone ear pendant with a straight shank curved at the lower end",
    Meaning: "Place of ear pendant",
  },
  {
    Placename: "Ōtāwēwē",
    Components: "ō: place of: tāwēwē: weighted net",
    Meaning: "Place of a weighted net",
  },
  {
    Placename: "Ōtāwhao",
    Components: "ō: place of; tāwhao: fragments, refuse or brushwood",
    Meaning: "Place of brushwood scrub",
  },
  {
    Placename: "Ōtehei",
    Components: "ō: place of; te: the; hei: neck ornament",
    Meaning: "Place of the neck ornament",
  },
  {
    Placename: "Ōtehīwai",
    Components: "ō: place of; te: the; hīwai: springing up",
    Meaning: "Place of springing up of water",
  },
  {
    Placename: "Ōtekura",
    Components: "ō: place of; te: the; kura: red feather",
    Meaning: "Place of the red feather",
  },
  {
    Placename: "Ōtepopo",
    Components: "ō: place of; te: the; popo: decayed wood",
    Meaning: "Place of the decayed wood",
  },
  {
    Placename: "Ōtipua",
    Components: "ō: place of; tipua: enchanted object or person",
    Meaning: "Place of supernatural creature",
  },
  {
    Placename: "Ōtiria",
    Components: "ō: place of; tiria: to be planted",
    Meaning: "Place of planting",
  },
  {
    Placename: "Ōtiwhā",
    Components:
      "ō: place of: tiwhā: a patch of shell or wood to cover a hole in a kelp bag",
    Meaning: "Place of patch",
  },
  {
    Placename: "Ōtoatahi",
    Components: "ō: place of; toa: warrior; tahi: one",
    Meaning: "Place of a single warrior",
  },
  {
    Placename: "Ōtohi",
    Components: "ō: place of; tohi: ritual ceremony",
    Meaning: "Place of ceremony",
  },
  {
    Placename: "Ōtoko",
    Components: "ō: place of; toko: stick or staff",
    Meaning: "Place of the staff",
  },
  {
    Placename: "Ōtonga",
    Components: "ō: place of; tonga: south, or south wind",
    Meaning: "Place of the south wind",
  },
  {
    Placename: "Ōtoroa",
    Components: "ō: place of; toroa: albatross",
    Meaning: "Place of the albatross",
  },
  {
    Placename: "Ōtūkapuarangai",
    Components: "ō: place of; tu: to stand; kapua: cloud; rangi: sky",
    Meaning: "Place of the standing cloud in the sky",
  },
  {
    Placename: "Ōtūmatua",
    Components: "o: place of; tū: stand; matua: parent",
    Meaning: "Where the elder stands",
  },
  {
    Placename: "Ōtūmoetai",
    Components: "ō: place of; tu: to stand; moe: to sleep; tai: tide",
    Meaning: "Place where the tide stands still as if asleep",
  },
  {
    Placename: "Ōtūpaopao",
    Components:
      "ō: place of; tū: to stand; paopao: to break by repeated strokes",
    Meaning: "Place of standing and breaking",
  },
  {
    Placename: "Ōtūraki",
    Components: "ō: place of; tū: to stand; raki (rangi): sky",
    Meaning: "Place of standing in the sky",
  },
  {
    Placename: "Ōtūrēhua",
    Components: "ō: place of; tū: to stand; Rēhua: the star Antares",
    Meaning: "Place where the summer star stands still",
  },
  {
    Placename: "Ōturoto",
    Components: "ō: place of; Turoto: a personal name",
    Meaning: "Place of Turoto",
  },
  {
    Placename: "Ōtūru",
    Components: "ō: place of; Turu: a personal name",
    Meaning: "Place of Turu",
  },
  {
    Placename: "Ōue",
    Components: "ō: place of; Ue: a personal name",
    Meaning: "Place of Ue",
  },
  {
    Placename: "Ōueroa",
    Components: "ō: place of; ue: species of flax; roa: long",
    Meaning: "Place of long flax",
  },
  {
    Placename: "Ōui",
    Components: "ō: place of; ui: to ask",
    Meaning: "Place of questioning",
  },
  {
    Placename: "Ōuruhia",
    Components: "ō: place of; uruhia: to be attacked",
    Meaning: "Place of being attacked",
  },
  {
    Placename: "Ōwahanga",
    Components: "ō: place of; wahanga: burden",
    Meaning: "Place of burden",
  },
  {
    Placename: "Ōwairaka",
    Components: "ō: place of; Wairaka, a chieftainess of repute",
    Meaning: "Place of Wairaka",
  },
  {
    Placename: "Ōwairaka",
    Components: "ō: place of; wai: stream; Raka: an ancestor",
    Meaning: "Place of the stream of Raka",
  },
  {
    Placename: "Ōwaka",
    Components: "ō: place of; waka: canoe or wooden trough",
    Meaning: "Place of a canoe",
  },
  {
    Placename: "Ōweka",
    Components: "ō: place of; weka: wood-hen",
    Meaning: "Place of the weka",
  },
  {
    Placename: "Ōwhango",
    Components: "ō: place of; whango: hoarse voice or wheezy sound",
    Meaning: "Place of wheezy noises",
  },
  {
    Placename: "Ōwhata",
    Components:
      "ō: place of; whata: elevated stage to protect food from bush rats, and for drying",
    Meaning: "Place of the elevated stage",
  },
  {
    Placename: "Ōwhawhe",
    Components: "ō: place of; whawhe: put round",
    Meaning: "The place encircled",
  },
  {
    Placename: "Ōwhiro",
    Components: "ō: place of; Whiro",
    Meaning: "Place of Whiro",
  },
  {
    Placename: "Paehinahina",
    Components:
      "pae: ridge, headland; hinahina: a small tree also knwn as mahoe",
    Meaning: "Hinahina ridge",
  },
  {
    Placename: "Paekākāriki",
    Components:
      "pae: perch or snare; kākāriki: parakeet (Cyanoramphus novaezelandiae)",
    Meaning: "Parakeet perch",
  },
  {
    Placename: "Paekoka",
    Components:
      "pae: ridge; koka: an unidentified species of seabird that was caught here",
    Meaning: "Seabird ridge",
  },
  {
    Placename: "Paeoterangi",
    Components: "pae: perching place; o: of; te: the; rangi: sky",
    Meaning: "Footstool of the sky",
  },
  {
    Placename: "Paerātā",
    Components: "pae: ridge; rātā: native tree",
    Meaning: "Ridge of the rātā tree",
  },
  {
    Placename: "Paerau",
    Components: "pae: ridges or steps; rau: many or a hundred",
    Meaning: "Many ridges",
  },
  {
    Placename: "Paeroa",
    Components: "pae: ridge of hills; roa: long",
    Meaning: "Long ridge of hills",
  },
  {
    Placename: "Paetiki",
    Components: "pae: ridge; tiki: carved wooden or stone figure",
    Meaning: "Ridge of carved figure",
  },
  {
    Placename: "Pakirārahi",
    Components: "pakirā: bald; rahi: big",
    Meaning: "Large bald dome",
  },
  {
    Placename: "Papahīnau",
    Components: "papa: flat; hīnau: native tree",
    Meaning: "Hīnau flats",
  },
  {
    Placename: "Papaiti",
    Components: "papa: flat; iti: small",
    Meaning: "Small flats",
  },
  {
    Placename: "Papakaio",
    Components: "papa: flat; kaio: native tree (South Island form of ngaio)",
    Meaning: "Kaio tree flats",
  },
  {
    Placename: "Papakura",
    Components: "papa: flat; kura: red",
    Meaning: "Red flats",
  },
  {
    Placename: "Papamoa",
    Components: "papa: flat; moa: raisted mounds for growing vegetables",
    Meaning: "Raised mounds for growing vegetables on the flats",
  },
  {
    Placename: "Papanui",
    Components: "papa: flat; nui: large",
    Meaning: "Large flat",
  },
  {
    Placename: "Paparangi",
    Components: "papa: flat; rangi: sky",
    Meaning: "Flat sky",
  },
  {
    Placename: "Paparātā",
    Components: "papa: flat; rātā: native tree",
    Meaning: "Rātā tree flats",
  },
  {
    Placename: "Paparimu",
    Components: "papa: flat; rimu: native tree",
    Meaning: "Rimu tree flats",
  },
  {
    Placename: "Paparoa",
    Components: "papa: flat; roa: long",
    Meaning: "Long flats",
  },
  {
    Placename: "Papatawa",
    Components: "papa: flat; tawa: native tree",
    Meaning: "Tawa tree flats",
  },
  {
    Placename: "Papatāwhara",
    Components: "papa: ground; tāwhara: kiekie flowers",
    Meaning: "Kiekie flower flats",
  },
  {
    Placename: "Papatoetoe",
    Components: "papa: flat; toetoe: native grass",
    Meaning: "Toetoe grass flat",
  },
  {
    Placename: "Papatōtara",
    Components: "papa: flat; tōtara: native tree",
    Meaning: "Tōtara flat",
  },
  {
    Placename: "Papatōwai",
    Components: "papa: flat; tōwai: native tree",
    Meaning: "Tōwai tree flat",
  },
  {
    Placename: "Papawai",
    Components: "papa: flat; wai: water",
    Meaning: "Inundated land",
  },
  {
    Placename: "Pāreranui",
    Components: "pārera: grey duck (Anas superciliosa): nui: large",
    Meaning: "Large grey duck",
  },
  {
    Placename: "Paretai",
    Components: "pare: divert; tai: the tide",
    Meaning: "River bank",
  },
  {
    Placename: "Paretetaitonga",
    Components: "para: dust; te: the; tai: sea; tonga: south",
    Meaning: "The dust from the south sea",
  },
  {
    Placename: "Pārewanui",
    Components: "pā: fortified village; rewa: swamp; nui: large",
    Meaning: "Fortified village in a large swamp",
  },
  {
    Placename: "Pari-nui-te-ra",
    Components: "pari: cliff; nui: great; te: the; rā: sun",
    Meaning: "Great cliff in the sun",
  },
  {
    Placename: "Pariparitetai",
    Components: "paripari: cliffs; te: the; tai: coast",
    Meaning: "Cliffs on the coast",
  },
  {
    Placename: "Pariroa",
    Components: "pari: cliff; roa: long",
    Meaning: "Long cliff",
  },
  {
    Placename: "Pāroa",
    Components: "pā: fortified village; roa: long, broad",
    Meaning: "Broad fortified village",
  },
  {
    Placename: "Paruroa",
    Components: "paru: mud; roa: long",
    Meaning: "Long mud",
  },
  {
    Placename: "Paturoa",
    Components: "patu: to strike or kill; roa: long",
    Meaning: "Much hitting",
  },
  {
    Placename: "Pāuanui",
    Components: "pāua: shellfish; nui: many or large",
    Meaning: "Many or large pāua",
  },
  {
    Placename: "Pikowai",
    Components: "piko: corner or bend; wai: stream",
    Meaning: "Bend in the stream",
  },
  {
    Placename: "Pipiroa",
    Components: "pipi: cockle; roa: long",
    Meaning: "Long pipi",
  },
  {
    Placename: "Pīroa",
    Components: "pī: headwaters; roa: long",
    Meaning: "Long headwaters",
  },
  {
    Placename: "Pōhatunui",
    Components: "pōhatu: rock; nui: great",
    Meaning: "Great rock",
  },
  {
    Placename: "Pōhaturoa",
    Components: "pōhatu: rock; roa: tall",
    Meaning: "Tall rock",
  },
  {
    Placename: "Pohonui",
    Components: "poho: stomach; nui: big",
    Meaning: "Big stomach",
  },
  {
    Placename: "Pōhuenui",
    Components: "pōhue: convolvulus or other climbing plants; nui: many",
    Meaning: "Large climbing plant",
  },
  {
    Placename: "Pongaroa",
    Components: "ponga: tree fern; roa: tall or long",
    Meaning: "Tall tree fern",
  },
  {
    Placename: "Pōnui",
    Components: "pō: night; nui: long",
    Meaning: "Long night",
  },
  {
    Placename: "Puatai",
    Components: "pua: foam; tai: sea",
    Meaning: "Foam of the sea",
  },
  {
    Placename: "Pukearuhe",
    Components: "puke: hill; aruhe: bitter",
    Meaning: "Hill of bitterness",
  },
  {
    Placename: "Puhinui",
    Components: "puhi: plume at the bow of a war canoe; nui: large",
    Meaning: "Large plume at bow of war canoe",
  },
  {
    Placename: "Pukeatua",
    Components: "puke: hill; atua: god",
    Meaning: "Hill of the deity",
  },
  {
    Placename: "Pukehinau",
    Components: "puke: hill; hinau: a native tree",
    Meaning: "Hīnau tree hill",
  },
  {
    Placename: "Puke-hiwi-tahi",
    Components: "puke: hill; hiwi: ridge; tahi: one",
    Meaning: "One-ridge hill",
  },
  {
    Placename: "Pukehuhu",
    Components: "puke: hill; huhu: grub",
    Meaning: "Huhu grub hill",
  },
  {
    Placename: "Pukehuia",
    Components: "puke: hill; huia: cluster",
    Meaning: "Cluster of hills",
  },
  {
    Placename: "Pukeiti",
    Components: "puke: hill; tī: cabbage tree",
    Meaning: "Cabbage tree hill",
  },
  {
    Placename: "Pukekāhu",
    Components: "puke: hill; kāhu: hawk",
    Meaning: "Hill of the hawk",
  },
  {
    Placename: "Pukekaikiore",
    Components: "puke: hill; kai: to eat; kiore: rat",
    Meaning: "Hill of the eaten rat",
  },
  {
    Placename: "Pukekākāriki",
    Components: "puke: hill; kākāriki: parakeet",
    Meaning: "Hill of the parakeet",
  },
  {
    Placename: "Pukekāpia",
    Components: "puke: hill; kāpia: kauri gum",
    Meaning: "Kauri gum hill",
  },
  {
    Placename: "Pukekoikoi",
    Components: "puke: hill; koikoi: pointed",
    Meaning: "Pointed hill",
  },
  {
    Placename: "Pukekōmā",
    Components:
      "puke: hill; kōmā: light-coloured or bright; or a kind of stone",
    Meaning: "Light-coloured hill",
  },
  {
    Placename: "Pukekōwhai",
    Components: "puke: hill; kōwhai: native tree",
    Meaning: "Kōwhai tree hill",
  },
  {
    Placename: "Pukekura",
    Components: "puke: hill; kura: red",
    Meaning: "Red hill",
  },
  {
    Placename: "Puke-māeroero",
    Components: "puke: hill; māeroero: ogres of the forest",
    Meaning: "Hill of ogres",
  },
  {
    Placename: "Pukemaori",
    Components: "puke: hill; māori: Māori",
    Meaning: "Māori hill",
  },
  {
    Placename: "Pukemarama",
    Components: "puke: hill; marama: moon",
    Meaning: "Moon hill",
  },
  {
    Placename: "Pukemātāwai",
    Components: "puke: hill: mātāwai: source of streams",
    Meaning: "Hill is source of stream",
  },
  {
    Placename: "Pukematekeo",
    Components: "puke: hill; mate: end; keo: peak",
    Meaning: "The hill at the end of the range",
  },
  {
    Placename: "Pukemiro",
    Components: "puke: hill; miro: native tree",
    Meaning: "Miro tree hill",
  },
  {
    Placename: "Pukemoko",
    Components: "puke: hill; moko: tattoo",
    Meaning: "Hill of tattoos",
  },
  {
    Placename: "Pukemoremore",
    Components: "puke: hill; more; a freshwater fish",
    Meaning: "Hill of many pinbellied freshwater fish",
  },
  {
    Placename: "Pukengahu",
    Components: "puke: hill; ngahu: point or promontory",
    Meaning: "Hill",
  },
  {
    Placename: "Pukenui",
    Components: "puke: hill; nui: large",
    Meaning: "Large hill",
  },
  {
    Placename: "Pukeokahu",
    Components: "puke: hill; o: of; Kahu: personal name",
    Meaning: "Hill of Kahu",
  },
  {
    Placename: "Puke-o-Tara",
    Components: "puke: hill; o: of; Tara",
    Meaning: "Hill of Tara",
  },
  {
    Placename: "Pukepiripiri",
    Components: "puke: hill; piripiri: the ‘biddy-bid’ (Acaena anserinifolia)",
    Meaning: "‘Biddy-bid’ hill",
  },
  {
    Placename: "Pukepito",
    Components: "puke: hill; pito: end",
    Meaning: "Hill end",
  },
  {
    Placename: "Pukepōhatu",
    Components: "puke: hill; pōhatu: rock",
    Meaning: "Rock hill",
  },
  {
    Placename: "Pukepoto",
    Components:
      "puke: hill; poto: dark blue earth present in a nearby swamp, used as a pigment",
    Meaning: "Dark blue pigment hill",
  },
  {
    Placename: "Pukerangi",
    Components: "puke: hill; rangi: sky",
    Meaning: "Sky hill",
  },
  {
    Placename: "Pukerangiora",
    Components: "puke: hill; rangiora: native shrub",
    Meaning: "Rangiora shrub hill",
  },
  {
    Placename: "Pukerau",
    Components: "puke: hills; rau: a leaf, a hundred or many",
    Meaning: "Hill of leaves",
  },
  {
    Placename: "Pukerauaruhe",
    Components: "puke: hill; rauaruhe: bracken fronds",
    Meaning: "Hill of bracken fronds",
  },
  {
    Placename: "Pukerimu",
    Components: "puke: hill; rimu: native tree",
    Meaning: "Rimu tree hill",
  },
  {
    Placename: "Pukeora",
    Components: "puke: hill; ora: well or in good health",
    Meaning: "Hill of good health",
  },
  {
    Placename: "Pukeroa",
    Components: "puke: hill; roa: long or tall",
    Meaning: "Tall hill",
  },
  {
    Placename: "Pukerua",
    Components: "puke: hill; rua: two",
    Meaning: "Two hills",
  },
  {
    Placename: "Puketaha",
    Components: "puke: hill; taha: side",
    Meaning: "Hill side",
  },
  {
    Placename: "Puketāpapa",
    Components: "puke: hill; tāpapa: edge or flat-topped",
    Meaning: "Flat-topped hill",
  },
  {
    Placename: "Puketapu",
    Components: "puke: hill; tapu: sacred or forbidden",
    Meaning: "Sacred hill",
  },
  {
    Placename: "Puketawa",
    Components: "puke: hill; tawa: native tree",
    Meaning: "Tawa tree hill",
  },
  {
    Placename: "Puketī",
    Components: "puke: hill; tī: cabbage tree",
    Meaning: "Cabbage tree hill",
  },
  {
    Placename: "Puketihi",
    Components: "puke: hill; tihi: top or summit",
    Meaning: "Summit of the hill",
  },
  {
    Placename: "Puketiro",
    Components: "puke: hill; tiro: view",
    Meaning: "View from the hill",
  },
  {
    Placename: "Puke-tirohia-marama",
    Components: "puke: hill; tirohia: to survey or view; marama: moon",
    Meaning: "Hill giving a view of the moon",
  },
  {
    Placename: "Puketoi",
    Components: "puke: hill; toi: summit",
    Meaning: "Summit of the hill",
  },
  {
    Placename: "Puketōtara",
    Components: "puke: hill; tōtara tree",
    Meaning: "Tōtara hill",
  },
  {
    Placename: "Puketūī",
    Components: "puke: hill; tūī: native bird",
    Meaning: "Tūī hill",
  },
  {
    Placename: "Puketūroto",
    Components: "puke: hill; tū: to stand; roto: lake",
    Meaning: "Hillside beside the lake",
  },
  {
    Placename: "Puketutu",
    Components: "puke: hill; tutu: native shrub (Coriaria arborea)",
    Meaning: "Tutu shrub hill",
  },
  {
    Placename: "Pukewhau",
    Components: "puke: hill; whau: a native tree",
    Meaning: "Whau tree hill",
  },
  {
    Placename: "Pukewhero",
    Components: "puke: hill; whero: red",
    Meaning: "Red hill",
  },
  {
    Placename: "Pukurahi",
    Components: "puku: belly; rahi: large",
    Meaning: "Large belly",
  },
  {
    Placename: "Rāhotu",
    Components: "rā: sun; hotu: to long for",
    Meaning: "Long for the sun",
  },
  {
    Placename: "Rākaunui",
    Components: "rākau: tree; nui: many or large",
    Meaning: "Many trees",
  },
  {
    Placename: "Rākauroa",
    Components: "rākau: tree; roa: tall",
    Meaning: "Tall trees",
  },
  {
    Placename: "Ramaroa",
    Components: "rama: torch; roa: long",
    Meaning: "Long torch",
  },
  {
    Placename: "Ranganui",
    Components: "ranga: parade; nui: large",
    Meaning: "Large parade",
  },
  {
    Placename: "Rangi-roa",
    Components: "rangi: sky; roa: long",
    Meaning: "Long sky",
  },
  {
    Placename: "Rānui",
    Components: "rā: sun; nui: many",
    Meaning: "Plenty of sunshine",
  },
  {
    Placename: "Rapanui",
    Components:
      "rapa: there are many meanings of rapa, including to seek; nui: many",
    Meaning: "Much seeking",
  },
  {
    Placename: "Rārangi-roa",
    Components: "rārangi: line or row; roa: long",
    Meaning: "Long line",
  },
  {
    Placename: "Rāroa",
    Components: "rā; day; roa: long",
    Meaning: "Long day",
  },
  {
    Placename: "Rātānui",
    Components: "rātā: native tree; nui: large or many",
    Meaning: "Many or large rātā trees",
  },
  {
    Placename: "Rāwhitiroa",
    Components: "rā: sun; whiti: to shine; roa: long",
    Meaning: "Long-shining sun",
  },
  {
    Placename: "Reporoa",
    Components: "repo: swamp; roa: long or wide",
    Meaning: "Long swamp",
  },
  {
    Placename: "Rimunui",
    Components: "rimu: native tree; nui: many or large",
    Meaning: "Many or large rimu trees",
  },
  {
    Placename: "Rongotai",
    Components: "rongo: sound; tai: sea",
    Meaning: "Sound of the sea",
  },
  {
    Placename: "Rotoaira",
    Components: "roto: lake; a: of; Ira",
    Meaning: "Lake of Ira",
  },
  {
    Placename: "Roto-a-Tara",
    Components: "roto: lake; a: of; Tara",
    Meaning: "Lake of Tara",
  },
  {
    Placename: "Rotoehu",
    Components: "roto: lake; ehu: turbid",
    Meaning: "Turbid lake",
  },
  {
    Placename: "Rotoiti",
    Components: "roto: lake; iti: small",
    Meaning: "Little lake",
  },
  {
    Placename: "Rotokākahi",
    Components: "roto: lake; kākahi: freshwater shellfish",
    Meaning: "Freshwater shellfish lake",
  },
  {
    Placename: "Rotokauri",
    Components: "roto: lake; kauri: native tree",
    Meaning: "Kauri tree lake",
  },
  {
    Placename: "Rotokawa",
    Components: "roto: lake; kawa; bitter",
    Meaning: "Bitter lake",
  },
  {
    Placename: "Rotokawau",
    Components: "roto: lake; kawau: shag",
    Meaning: "Shag lake",
  },
  {
    Placename: "Rotokohu",
    Components: "roto: lake; kohu: mist",
    Meaning: "Misty lake",
  },
  {
    Placename: "Rotokura",
    Components: "roto: lake; kura: red",
    Meaning: "Red glow of sunset on the water",
  },
  {
    Placename: "Rotoma",
    Components: "roto: lake; ma: clear",
    Meaning: "Clear lake",
  },
  {
    Placename: "Rotomahana",
    Components: "roto: lake; mahana: warm",
    Meaning: "Warm lake",
  },
  {
    Placename: "Rotomanu",
    Components: "roto: lake; manu: bird",
    Meaning: "Bird lake",
  },
  {
    Placename: "Rotongaro",
    Components: "roto: lake; ngaro: hidden or lost",
    Meaning: "Hidden lake",
  },
  {
    Placename: "Roto-o-rangi",
    Components: "roto: lake; o: of; rangi: sky",
    Meaning: "Lake of the sky",
  },
  {
    Placename: "Rotoroa",
    Components: "roto: lake; roa: long",
    Meaning: "Long lake",
  },
  {
    Placename: "Rotorua",
    Components: "roto: lake; rua: two",
    Meaning: "Two lakes",
  },
  {
    Placename: "Rototuna",
    Components: "roto: lake; tuna: eel",
    Meaning: "Eel lake",
  },
  {
    Placename: "Rotowaro",
    Components: "roto: lake; waro: coal or glowing embers",
    Meaning: "Lake of glowing embers",
  },
  {
    Placename: "Ruapuke Island",
    Components: "rua: two; puke: hills",
    Meaning: "Two hill island",
  },
  {
    Placename: "Ruaroa",
    Components: "rua: cave or pit; roa: long",
    Meaning: "Long pit",
  },
  {
    Placename: "Ruawai",
    Components: "rua: hole; wai: water",
    Meaning: "Watery hole",
  },
  {
    Placename: "Rukumoana",
    Components: "ruku: to dive; moana: sea, or deep pool in river",
    Meaning: "Diving into the pool",
  },
  {
    Placename: "Tāhaenui",
    Components: "tāhae: thief; nui: big or many",
    Meaning: "Many thieves",
  },
  {
    Placename: "Tahāroa",
    Components: "tahā: calabash, gourd; roa: long",
    Meaning: "Long calabash",
  },
  {
    Placename: "Tahawai",
    Components: "taha: side; wai: water",
    Meaning: "Seaside",
  },
  {
    Placename: "Tāhekereroa",
    Components: "tāheke: waterfall; roa: high or long",
    Meaning: "High waterfall",
  },
  {
    Placename: "Tahoraiti",
    Components: "tahora: forest clearing; iti: little",
    Meaning: "Little forest clearing",
  },
  {
    Placename: "Tāhuhūnui",
    Components: "tāhūhū: ridge-pole; nui: large",
    Meaning: "Large ridge-pole",
  },
  {
    Placename: "Tāhunanui",
    Components: "tāhuna: shoal or sandbank; nui: large",
    Meaning: "Large sandbank",
  },
  {
    Placename: "Taiharuru",
    Components: "tai: sea; haruru: resounding",
    Meaning: "Resounding sea",
  },
  {
    Placename: "Taikorea",
    Components: "tai: sea; korea: a small canoe",
    Meaning: "Tide of the small canoe",
  },
  {
    Placename: "Taimate",
    Components: "tai: tide; mate: dead",
    Meaning: "A salt pool blocked off from the tide",
  },
  {
    Placename: "Tainui",
    Components: "tai: tide; nui: great",
    Meaning: "Great tide",
  },
  {
    Placename: "Tairua",
    Components: "tai: tides; rua: two",
    Meaning: "Two tides",
  },
  {
    Placename: "Taitapu",
    Components: "tai: coast; tapu: sacred",
    Meaning: "Sacred coast",
  },
  {
    Placename: "Taitimu",
    Components: "tai: tide; timu: to ebb",
    Meaning: "Ebb of the tide",
  },
  {
    Placename: "Taitomo",
    Components: "tai: sea; tomo: shaft",
    Meaning: "Shaft of the sea",
  },
  {
    Placename: "Takahiwai",
    Components: "takahi: to trample; wai: water",
    Meaning: "Trample water",
  },
  {
    Placename: "Takutai",
    Components: "taku: coast; tai: sea",
    Meaning: "Sea coast",
  },
  {
    Placename: "Tangimoana",
    Components: "tangi: to weep or lament; moana: ocean",
    Meaning: "Weeping sea",
  },
  {
    Placename: "Tangiwai",
    Components: "tangi: to cry or weep; wai: water",
    Meaning: "Weeping water",
  },
  {
    Placename: "Taonui",
    Components: "tao: spear; nui: many",
    Meaning: "Large spear",
  },
  {
    Placename: "Taoroa",
    Components: "tao: spear; roa: long",
    Meaning: "Long spear",
  },
  {
    Placename: "Tapuwaeroa",
    Components: "tapuwae: footsteps; roa: long",
    Meaning: "Long footsteps",
  },
  {
    Placename: "Tātuanui",
    Components: "tātua: girdle; nui: large or many",
    Meaning: "Large girdle",
  },
  {
    Placename: "Taumarunui",
    Components: "taumaru: screen; nui: large",
    Meaning: "Large screen",
  },
  {
    Placename:
      "Taumatawhakatangihanga\n kōauauotamatea\n pōkaiwhenuakitanatahu",
    Components:
      "taumata: brow of a hill; whakatangihanga: place of sounding or playing; kōauau: flute; o: of; Tamatea-pōkai-whenua; ki: to; tana: his; tahu: lover",
    Meaning:
      "The brow of the hill where Tamatea who travelled all over the land played his flute to his lover",
  },
  {
    Placename: "Taumoana",
    Components: "tau: to come to rest (and many other meanings); moana: sea",
    Meaning: "Come to rest at sea",
  },
  {
    Placename: "Tauranganui",
    Components: "taura: landing places; nui: many, great",
    Meaning: "Great landing place",
  },
  {
    Placename: "Tauraroa",
    Components: "taura: rope; roa: long",
    Meaning: "Long rope",
  },
  {
    Placename: "Tawanui",
    Components: "tawa: native tree (Beilschmiedia tawa); nui: many",
    Meaning: "Great tawa tree",
  },
  {
    Placename: "Tāwharanui",
    Components:
      "tāwhara: flower of the kiekie (Freycinetia banksii); nui: many",
    Meaning: "Many flowers of the kiekie",
  },
  {
    Placename: "Te Araroa",
    Components: "te: the; ara: path; roa: long",
    Meaning: "The long path",
  },
  {
    Placename: "Te Awa",
    Components: "te: the; awa: valley or channel",
    Meaning: "The valley",
  },
  {
    Placename: "Te Awahou",
    Components: "te: the; awa: river; hou: new",
    Meaning: "The new river",
  },
  {
    Placename: "Te Awaiti",
    Components: "te: the; awa: stream; iti: little",
    Meaning: "The little stream",
  },
  {
    Placename: "Te Awa-māeroero",
    Components:
      "te: the; awa: river; māeroero: ogres of the South Island forests",
    Meaning: "The river of the ogres",
  },
  {
    Placename: "Te Awamutu",
    Components: "te: the; awa: river; mutu: cut off or ended",
    Meaning: "The ended river",
  },
  {
    Placename: "Te Awa-parahi",
    Components: "te: the; awa: valley; parahi: steep",
    Meaning: "The steep valley",
  },
  {
    Placename: "Te Awaure",
    Components: "te: the; awa: river; ure: male",
    Meaning: "The male river",
  },
  {
    Placename: "Te Haehaenga",
    Components: "te: the; haehaenga: torn or lacerated",
    Meaning: "The laceration",
  },
  {
    Placename: "Te Hana",
    Components: "te: the; hana: glow or gleam",
    Meaning: "The glow",
  },
  {
    Placename: "Te Hāpara",
    Components: "te: the; hāpara: dawn",
    Meaning: "The dawn",
  },
  {
    Placename: "Te Hāparangi",
    Components: "te: the; hāparangi",
    Meaning: "The circumstance of shouting",
  },
  {
    Placename: "Te Hāpua",
    Components: "te: the; hāpua: lagoon",
    Meaning: "The lagoon",
  },
  {
    Placename: "Te Hāroto",
    Components: "te: the; hāroto: pool",
    Meaning: "The pool",
  },
  {
    Placename: "Te Henga",
    Components: "te: the; henga: food for a work party",
    Meaning: "The food for a work party",
  },
  {
    Placename: "Te Hēnui",
    Components:
      "te: the; hē: amongst its several meanings are wrong, erring, error, difficulty, trouble; nui: big",
    Meaning: "The great mistake",
  },
  {
    Placename: "Te Ika-a-Māui",
    Components: "te: the; ika: fish; a: of; Māui: a personal name",
    Meaning: "The fish of Māui",
  },
  {
    Placename: "Te Ika-a-Ranganui",
    Components: "te: the; ika: fish; a: of; Ranganui: a personal name",
    Meaning: "The fish of Ranganui",
  },
  {
    Placename: "Te Horo",
    Components: "te: the; horo: landslide",
    Meaning: "The landslide",
  },
  {
    Placename: "Te Kaha",
    Components: "te: the; kaha: rope",
    Meaning: "The rope",
  },
  {
    Placename: "Te Kao",
    Components: "te: the; kao: dried kūmara",
    Meaning: "The dried kūmara",
  },
  {
    Placename: "Te Kauwhata",
    Components: "te: the; kau: empty; whata: storehouse",
    Meaning: "The empty storehouse",
  },
  {
    Placename: "Te Kawakawa",
    Components: "te: the; kawakawa: a native shrub",
    Meaning: "The kawakawa shrub",
  },
  {
    Placename: "Te Kōpua",
    Components: "te: the; kōpua: deep pool",
    Meaning: "The deep pool",
  },
  {
    Placename: "Te Kiri",
    Components: "te: the; kiri: bark",
    Meaning: "The bark",
  },
  {
    Placename: "Te Kōhanga",
    Components: "te: the; kōhanga: nest",
    Meaning: "The nest",
  },
  {
    Placename: "Te Kōwhai",
    Components: "te: the; kōwhai: a tree",
    Meaning: "The kōwhai tree",
  },
  {
    Placename: "Te Mānia",
    Components: "te: the; mānia: plain",
    Meaning: "The plain",
  },
  {
    Placename: "Te Moana",
    Components: "te: the; moana: ocean",
    Meaning: "The sea",
  },
  {
    Placename: "Te Moana o Toi te Huatahi",
    Components: "te: the; moana: ocean; o: of; Toi te Huatahi",
    Meaning: "The ocean of Toi te Huatahi",
  },
  {
    Placename: "Te Moananui",
    Components: "te: the; moana: ocean; nui: large",
    Meaning: "The great ocean",
  },
  {
    Placename: "Te Moananui-a-Kiwa",
    Components: "te: the; moana: ocean; nui: large; a: of; Kiwa",
    Meaning: "The great ocean of Kiwa",
  },
  {
    Placename: "Te Onepū",
    Components: "te: the; onepū: sand",
    Meaning: "The sand",
  },
  {
    Placename: "Te Onewa",
    Components: "te: the; one: earth, soil or land; wa: unenclosed country",
    Meaning: "Soil of the unenclosed land",
  },
  {
    Placename: "Te Papatapu",
    Components: "te: the; papa: flat; tapu: sacred or forbidden",
    Meaning: "The sacred flat",
  },
  {
    Placename: "Te Puke",
    Components: "te: the; puke: hill",
    Meaning: "The hill",
  },
  {
    Placename: "Te Tai Tamāhine",
    Components: "te: the; tai: sea, coast; tamāhine: daughter, girl",
    Meaning: "The female coast",
  },
  {
    Placename: "Te Tai Tamatāne",
    Components: "te: the; tai: sea, coast; tamatāne: son, body",
    Meaning: "The male coast",
  },
  {
    Placename: "Te Tai o Marokura",
    Components: "te: the; tai: sea, coast; o: of; Marokura",
    Meaning: "The coast of Marokura",
  },
  {
    Placename: "Te Tai o Mahaanui",
    Components: "te: the; tai: sea, coast; o: of; Mahaanui",
    Meaning: "The coast of Mahaanui",
  },
  {
    Placename: "Te Tai o Aorere",
    Components: "te: the; tai: sea, coast; o: of; Aorere",
    Meaning: "The coast of Aorere",
  },
  {
    Placename: "Te Tai Poutini",
    Components: "te: the; tai: sea, coast; Poutini",
    Meaning: "The coast of Poutini",
  },
  {
    Placename: "Te Tukeroa",
    Components: "te: the ; tuke: elbow or bend; roa: tall",
    Meaning: "The long bend",
  },
  {
    Placename: "Te Waharoa",
    Components: "te: the; waha: to carry on the back; roa: long",
    Meaning: "The long carry",
  },
  {
    Placename: "Te Wai Pounamu",
    Components: "te; the; wai: water; pounamu: greenstone",
    Meaning: "The greenstone waters",
  },
  {
    Placename: "Te Waiiti",
    Components: "te: the; wai: stream; iti: small",
    Meaning: "The little stream",
  },
  {
    Placename: "Te Waiopani",
    Components: "te: the wai: water; o: of; Pani",
    Meaning: "The water of Pani",
  },
  {
    Placename: "Te Wairoa",
    Components: "te: the; wai: river or stream; roa: long",
    Meaning: "The long stream",
  },
  {
    Placename: "Te Waitere",
    Components: "te: the; wai: water; tere: swiftly flowing",
    Meaning: "The swift stream",
  },
  {
    Placename: "Te Wēiti",
    Components: "te: the; wē: water; iti: little",
    Meaning: "The little water",
  },
  {
    Placename: "Te Whare-kai-atua",
    Components: "te: the; whare: house; kai: eat; atua: gods",
    Meaning: "The abode that consumes deities",
  },
  {
    Placename: "Tīkapa Moana",
    Components: "tīkapa: mournful; moana: sea",
    Meaning: "The mournful sea",
  },
  {
    Placename: "Tikinui",
    Components:
      "tiki: human representation in wood or stone; nui: large or many",
    Meaning: "The great human carving",
  },
  {
    Placename: "Tinui",
    Components: "ti: cabbage tree; nui: large or many",
    Meaning: "Many cabbage trees",
  },
  {
    Placename: "Tiroa",
    Components: "ti: cabbage tree; roa: tall",
    Meaning: "Long cabbage tree",
  },
  {
    Placename: "Tiromoana",
    Components: "tiro: view; moana: ocean",
    Meaning: "View the sea",
  },
  {
    Placename: "Tironui",
    Components: "tiro: view; nui: large or expansive",
    Meaning: "Expansive view",
  },
  {
    Placename: "Tiroroa",
    Components: "tiro: view; roa: long",
    Meaning: "Long view",
  },
  {
    Placename: "Titiroa",
    Components: "titi: long streaks of cloud; roa: long",
    Meaning: "Long streaks of cloud",
  },
  {
    Placename: "Tokanui",
    Components: "toka: rock; nui: large or many",
    Meaning: "Large rock",
  },
  {
    Placename: "Tokarahi",
    Components: "toka: rock; rahi: large or many",
    Meaning: "Many rocks",
  },
  {
    Placename: "Tokaroa",
    Components: "toka: rock; roa: tall or long",
    Meaning: "Tall rock",
  },
  {
    Placename: "Tokoiti",
    Components: "toko: pole; iti: small",
    Meaning: "Little pole",
  },
  {
    Placename: "Tokoroa",
    Components: "toko: pole: roa: long",
    Meaning: "Long pole",
  },
  {
    Placename: "Tōmoana",
    Components: "tō: to drag or as far up as; moana: ocean",
    Meaning: "Drag to the ocean",
  },
  {
    Placename: "Tōtaranui",
    Components: "tōtara: trees; nui: many",
    Meaning: "Many tōtara trees",
  },
  {
    Placename: "Tunanui",
    Components: "tuna: eels; nui: many",
    Meaning: "Many eels",
  },
  {
    Placename: "Tūranganui",
    Components: "tūranga: standing; nui: great",
    Meaning: "Great standing place",
  },
  {
    Placename: "Tūrangaomoana",
    Components: "tūranga: standing place; o: of; moana: the sea",
    Meaning: "Resting place of the sea",
  },
  {
    Placename: "Tūtaenui",
    Components: "tūtae: dung; nui: large",
    Meaning: "Large dung",
  },
  {
    Placename: "Umutaoroa",
    Components: "umu: oven; taoroa: long spear",
    Meaning: "Oven of the long spear",
  },
  {
    Placename: "Urenui",
    Components: "ure: courage (a figurative expression); nui: great",
    Meaning: "Great courage",
  },
  {
    Placename: "Utuwai",
    Components: "utu: dip into, in order to fill a bowl; wai: water",
    Meaning: "Dip into water",
  },
  {
    Placename: "Waianiwaniwa",
    Components: "wai: water; aniwaniwa: rainbow",
    Meaning: "Rainbow waters",
  },
  {
    Placename: "Waiapu",
    Components: "wai: water; apu: to swallow",
    Meaning: "Swallowing river",
  },
  {
    Placename: "Waiareka",
    Components: "wai: water; a: of; reka: sweet or sweetness",
    Meaning: "Sweet water",
  },
  {
    Placename: "Waiariari",
    Components: "wai: water; ariari: gleaming or undisturbed",
    Meaning: "Gleaming water",
  },
  {
    Placename: "Waiariki",
    Components: "wai: water; ariki: chief",
    Meaning: "Waters of the chief",
  },
  {
    Placename: "Waiaro",
    Components: "wai: water; aro: wistful",
    Meaning: "Wistful water",
  },
  {
    Placename: "Waiatoto",
    Components: "wai: water; a: of; toto: blood",
    Meaning: "Water of blood",
  },
  {
    Placename: "Waiau",
    Components: "wai: water; au: current",
    Meaning: "Swirling waters",
  },
  {
    Placename: "Waiaua",
    Components: "wai: water; aua: herring",
    Meaning: "Waters containing herring",
  },
  {
    Placename: "Waihaha",
    Components: "wai: water; haha: noisy",
    Meaning: "Noisy water",
  },
  {
    Placename: "Waihakeke",
    Components: "wai: water; hakeke: wood ear fungus",
    Meaning: "Wood ear fungus water",
  },
  {
    Placename: "Waihao",
    Components: "wai: water; hao: to catch in a net",
    Meaning: "Water of net fishing",
  },
  {
    Placename: "Waihao",
    Components: "wai: river: hao: a species of small eel",
    Meaning: "Water with eels",
  },
  {
    Placename: "Waihaorunga",
    Components:
      "wai: river: hao: a species of small eel; runga: top or upper part",
    Meaning: "Water with eels at the top",
  },
  {
    Placename: "Waiharakeke",
    Components: "wai: stream; harakeke: flax",
    Meaning: "Flax stream",
  },
  {
    Placename: "Waiharuru",
    Components: "wai: water; haruru: to reverberate or rumble",
    Meaning: "Rumbling waters",
  },
  {
    Placename: "Waihau",
    Components: "wai: water; hau: wind",
    Meaning: "Windy water",
  },
  {
    Placename: "Waiheke",
    Components: "wai: water; heke: to ebb, drip or descend",
    Meaning: "The descending waters",
  },
  {
    Placename: "Waihemo",
    Components: "wai: water or stream; hemo: to cease",
    Meaning: "The finished stream",
  },
  {
    Placename: "Waihīnau",
    Components: "wai: stream; hīnau: a native tree",
    Meaning: "Hīnau tree stream",
  },
  {
    Placename: "Waihīrere",
    Components: "wai: water; hīrere: to rush",
    Meaning: "Rushing waters",
  },
  {
    Placename: "Waihōaka",
    Components:
      "wai: stream; hōaka (South Island form of hōanga): sandstone, used for grinding and polishing greenstone",
    Meaning: "Water of sandstone",
  },
  {
    Placename: "Waihōhepa",
    Components: "wai: stream, water; Hohepa: the Maori form of Joseph",
    Meaning: "The water of Hōhepa",
  },
  {
    Placename: "Waihōhonu",
    Components: "wai: river; hōhonu: deep",
    Meaning: "Deep water",
  },
  {
    Placename: "Waihopo",
    Components: "wai: river; hopo: to be apprehensive or doubtful",
    Meaning: "A river one fears to cross",
  },
  {
    Placename: "Waihora",
    Components: "wai: water; hora: spread out",
    Meaning: "Spread-out waters",
  },
  {
    Placename: "Waihōu",
    Components: "wai: river; hōu: new",
    Meaning: "New waters",
  },
  {
    Placename: "Waihua",
    Components: "wai: water; hua: fish roe",
    Meaning: "Fish roe waters",
  },
  {
    Placename: "Waihue",
    Components: "wai: river; hue: gourd",
    Meaning: "River gourd waters",
  },
  {
    Placename: "Wai-iti",
    Components: "wai: stream; iti: little",
    Meaning: "Little stream",
  },
  {
    Placename: "Waikākā",
    Components: "wai: water; kākā: parrot",
    Meaning: "Parrot stream",
  },
  {
    Placename: "Waikākāhi",
    Components: "wai: water; kākahi: freshwater shellfish",
    Meaning: "Waters of freshwater shellfish",
  },
  {
    Placename: "Waikākaho",
    Components: "wai: water; kākaho: flowering plumes of the toetoe",
    Meaning: "Waters of the flowering plumes of the toetoe",
  },
  {
    Placename: "Waikanae",
    Components: "wai: water; kanae: mullet",
    Meaning: "Mullet waters",
  },
  {
    Placename: "Waikaraka",
    Components: "wai: stream; karaka: native tree",
    Meaning: "Karaka tree stream",
  },
  {
    Placename: "Waikarakia",
    Components: "wai: stream; karakia: prayer or incantation",
    Meaning: "Stream of ritual",
  },
  {
    Placename: "Waikare",
    Components: "wai: water; kare: to ripple",
    Meaning: "Rippling waters",
  },
  {
    Placename: "Waikareiti",
    Components: "wai: water; kare: to ripple or dash; iti: little",
    Meaning: "Little waters",
  },
  {
    Placename: "Waikaremoana",
    Components: "wai: water; kare: to ripple; moana: sea or large lake",
    Meaning: "Sea of rippling waters",
  },
  {
    Placename: "Waikāretu",
    Components: "wai: water; kāretu: a sweet-scented grass",
    Meaning: "Waters of the kāretu grass",
  },
  {
    Placename: "Waikari",
    Components: "wai: water; kari: dig",
    Meaning: "Dig for water",
  },
  {
    Placename: "Waikato",
    Components: "wai: river; kato: to flow",
    Meaning: "Flowing water",
  },
  {
    Placename: "Waikawa",
    Components: "wai: water; kawa: bitter",
    Meaning: "Bitter water",
  },
  {
    Placename: "Waikawau",
    Components: "wai: water; kawau: shag",
    Meaning: "Water of the shag",
  },
  {
    Placename: "Waikererū",
    Components: "wai: water; kererū: wood pigeon",
    Meaning: "Water of the wood pigeon",
  },
  {
    Placename: "Waikeria",
    Components: "wai: water; keria: dug out",
    Meaning: "Dug out water",
  },
  {
    Placename: "Waikerikeri",
    Components: "wai: water; kerikeri: to rush along violently",
    Meaning: "Water that rushes along",
  },
  {
    Placename: "Waikiekie",
    Components: "wai: water; kiekie: a climbing plant",
    Meaning: "Kiekie waters",
  },
  {
    Placename: "Waikino",
    Components: "wai: water; kino: unpleasant, stinking",
    Meaning: "Harmful waters",
  },
  {
    Placename: "Waikirikiri",
    Components: "wai: stream; kirikiri: gravel",
    Meaning: "Gravelly stream",
  },
  {
    Placename: "Waikite",
    Components: "wai: water; kite: to see or gaze upon",
    Meaning: "Discovered water",
  },
  {
    Placename: "Waikiwi",
    Components: "wai: stream; kiwi: a flightless nocturnal bird",
    Meaning: "Kiwi waters",
  },
  {
    Placename: "Waikōau",
    Components: "wai: water; kōau: shag",
    Meaning: "Waters of the shag",
  },
  {
    Placename: "Waikohu",
    Components: "wai: water; kohu: mist",
    Meaning: "Misty waters",
  },
  {
    Placename: "Waikōkopu",
    Components: "wai: water; kōkopu: cockabully fish",
    Meaning: "Waters of the cockabully",
  },
  {
    Placename: "Waikōkōwai",
    Components: "wai: water; kōkōwai: red ochre",
    Meaning: "Waters of the red ochre",
  },
  {
    Placename: "Waikorea",
    Components: "wai: water; korea: a small canoe",
    Meaning: "Waters of the small canoe",
  },
  {
    Placename: "Waikouaiti",
    Components:
      "wai: stream; koua (the poetical form of kua): to become; iti: little",
    Meaning: "Stream which has become small",
  },
  {
    Placename: "Waikoukou",
    Components: "wai: water; koukou: morepork or native owl",
    Meaning: "Water of the morepork",
  },
  {
    Placename: "Waikōwhai",
    Components: "wai: stream; kowhai: native tree",
    Meaning: "Kōwhai tree waters",
  },
  {
    Placename: "Waikōwhitiwhiti",
    Components: "wai: water; kōwhitiwhiti: dancing (of water)",
    Meaning: "Dancing waters",
  },
  {
    Placename: "Waikuku",
    Components: "wai: water; kuku: freshwater mussel",
    Meaning: "Freshwater mussel waters",
  },
  {
    Placename: "Waikumete",
    Components:
      "wai: water; kumete: wooden bowl often used to snare wood pigeons",
    Meaning: "Waters of the kumete bowl",
  },
  {
    Placename: "Waikuta",
    Components: "wai: water; kuta: rushes",
    Meaning: "Waters of the kuta rushes",
  },
  {
    Placename: "Waimā",
    Components: "wai: river; mā: white or clear",
    Meaning: "Clear water",
  },
  {
    Placename: "Wai-māeroero",
    Components: "wai: water; māeroero: ogres of the South Island forests",
    Meaning: "Waters of the ogres of the forests",
  },
  {
    Placename: "Waimāhaka",
    Components: "wai: waters; māhaka (māhanga): twin",
    Meaning: "Twin waters",
  },
  {
    Placename: "Waimahora",
    Components: "wai: water; mahora: spread out",
    Meaning: "Spread out waters",
  },
  {
    Placename: "Waimahuru",
    Components: "wai; stream; mahuru: placid",
    Meaning: "Placid waters",
  },
  {
    Placename: "Waimakariri",
    Components: "wai: river; makariri: cold",
    Meaning: "Cold river",
  },
  {
    Placename: "Waimamaku",
    Components: "wai: stream; mamaku: tree-fern",
    Meaning: "Tree-fern stream",
  },
  {
    Placename: "Waimana",
    Components: "wai: stream; mana: esteem or influence",
    Meaning: "Stream of influence",
  },
  {
    Placename: "Waimangaroa",
    Components: "wai: river; manga: tributary; roa: long",
    Meaning: "River with a long tributary",
  },
  {
    Placename: "Waimangu",
    Components: "wai: water; mangu: black",
    Meaning: "Black water",
  },
  {
    Placename: "Waimārama",
    Components: "wai: water; mārama: clear",
    Meaning: "Clear water",
  },
  {
    Placename: "Waimarie",
    Components: "wai: water; marie: quiet",
    Meaning: "Quiet water",
  },
  {
    Placename: "Waimarino",
    Components: "wai: water or stream; marino: calm or still",
    Meaning: "Calm stream",
  },
  {
    Placename: "Waimaru",
    Components: "wai; water; maru: shade or sheltered",
    Meaning: "Sheltered water",
  },
  {
    Placename: "Waimātaitai",
    Components: "wai; water; mātaitai: salty or brackish water",
    Meaning: "Salty water",
  },
  {
    Placename: "Waimate",
    Components: "wai: water; mate: dead, sick or stagnant",
    Meaning: "Stagnant water",
  },
  {
    Placename: "Waimatua",
    Components: "wai: water; matua: large or important",
    Meaning: "Important water",
  },
  {
    Placename: "Waimatuku",
    Components: "wai: water; matuku: bittern",
    Meaning: "Bittern water",
  },
  {
    Placename: "Waimauku",
    Components: "wai: stream; mauku: small ferns",
    Meaning: "Fern water",
  },
  {
    Placename: "Waimaunga",
    Components: "wai: stream; maunga: mountain",
    Meaning: "Mountain stream",
  },
  {
    Placename: "Waimimi",
    Components: "wai: stream; mimi: urine",
    Meaning: "Urine stream",
  },
  {
    Placename: "Waimiro",
    Components: "wai: stream; miro: a native tree",
    Meaning: "Miro stream",
  },
  {
    Placename: "Waimotu",
    Components: "wai: water or river; motu: island",
    Meaning: "Island stream",
  },
  {
    Placename: "Waimumu",
    Components: "wai: stream; mumu: boisterous",
    Meaning: "Boisterous stream",
  },
  {
    Placename: "Waingake",
    Components:
      "wai: water; ngake: capacious, or the middle section of a fishing net",
    Meaning: "Waters to fill a large net",
  },
  {
    Placename: "Waingaro",
    Components: "wai: water or stream; ngaro: lost or hidden",
    Meaning: "Lost stream",
  },
  {
    Placename: "Waingongoro",
    Components: "wai: river; ngongoro: to snore or gurgle",
    Meaning: "Gurgling water",
  },
  {
    Placename: "Wainoni",
    Components: "wai: stream; noni: bend or turn",
    Meaning: "Bendy stream",
  },
  {
    Placename: "Wainui",
    Components: "wai: water; nui: large",
    Meaning: "Large waters",
  },
  {
    Placename: "Wainuiomata",
    Components: "wai: stream; nui: big; o: of; Mata: a personal name",
    Meaning: "Big stream of Mata",
  },
  {
    Placename: "Wainuioru",
    Components: "wai: water or stream; nui: large; o of; Ru: personal name",
    Meaning: "Large waters of Ru",
  },
  {
    Placename: "Waiohau",
    Components: "wai: water; o: of; Hau: personal name",
    Meaning: "Waters of Hau",
  },
  {
    Placename: "Waiohine",
    Components: "wai: river; o: of; Hine",
    Meaning: "River of Hine",
  },
  {
    Placename: "Waiomatatini",
    Components: "wai: water or stream; o: of; Matatini",
    Meaning: "Stream of Matatini",
  },
  {
    Placename: "Waiomio",
    Components: "wai: water or stream; o: of; Mio",
    Meaning: "Stream of Mio",
  },
  {
    Placename: "Waiomu",
    Components: "wai: water or stream; o: of; Mu",
    Meaning: "Stream of Mu",
  },
  {
    Placename: "Waione",
    Components: "wai: water; one: beach or sand",
    Meaning: "Stream on the beach",
  },
  {
    Placename: "Waiongana",
    Components: "wai: water or stream; o: of; Ngana",
    Meaning: "Stream of Ngata",
  },
  {
    Placename: "Wai-ora-a-Tāne",
    Components: "wai: water; ora: life; a: of; Tāne",
    Meaning: "The life-giving water of Tāne",
  },
  {
    Placename: "Waiorongomai",
    Components: "wai: water or stream; o: of; Rongomai",
    Meaning: "Stream of Rongomai",
  },
  {
    Placename: "Waiotahi",
    Components: "wai: water or stream; o: of; Tahi",
    Meaning: "Stream of Tahi",
  },
  {
    Placename: "Wai-o-taiki",
    Components: "te: the; wai: stream; o: of; Taiki",
    Meaning: "Stream of Taiki",
  },
  {
    Placename: "Waiotapu",
    Components: "wai: water; o: of; tapu: sacred or reserved",
    Meaning: "Sacred waters",
  },
  {
    Placename: "Waiotemarama",
    Components: "wai: water; o: of; Te Marama",
    Meaning: "Waters of Te Marama",
  },
  {
    Placename: "Waiotira",
    Components:
      "wai: water or pool; a: of; tira: to set up sticks for divination",
    Meaning: "Pool of divination",
  },
  {
    Placename: "Waiotū",
    Components: "wai: water; o: of; Tū: a personal name",
    Meaning: "Waters of Tū",
  },
  {
    Placename: "Waiouru",
    Components: "wai: river; o:of; uru: west",
    Meaning: "River of the west",
  },
  {
    Placename: "Waipā",
    Components: "wai: river; pā: fortified village or villages",
    Meaning: "River of fortified villages",
  },
  {
    Placename: "Waipahi",
    Components: "wai: water; Pahi",
    Meaning: "Stream of Pahi",
  },
  {
    Placename: "Waipāhīhī",
    Components: "wai: water; pāhīhī: welling up or flowing in driblets",
    Meaning: "Water flowing in driblets",
  },
  {
    Placename: "Waipakaru",
    Components: "wai: water; pakaru: broken",
    Meaning: "Stream broken through",
  },
  {
    Placename: "Waipango",
    Components: "wai: water; pango: black",
    Meaning: "Black water",
  },
  {
    Placename: "Waipapa",
    Components: "wai: stream; papa: flat",
    Meaning: "Stream on flats",
  },
  {
    Placename: "Waipapakauri",
    Components: "wai: water; papa: flat; kauri: native tree",
    Meaning: "Swampy ground where the kauri grow",
  },
  {
    Placename: "Waipaparoa",
    Components: "wai: water; papa: flat; roa: long",
    Meaning: "Stream on long flats",
  },
  {
    Placename: "Waipara",
    Components: "wai: water; para: mud, silt or sediment",
    Meaning: "Silty water",
  },
  {
    Placename: "Waipareira",
    Components: "wai: water; Pareira",
    Meaning: "Stream of Pareira",
  },
  {
    Placename: "Waipari",
    Components: "wai: stream; pari: cliff",
    Meaning: "Clifftop stream",
  },
  {
    Placename: "Waipati",
    Components: "wai: water; pati: shallow or splashing",
    Meaning: "Shallow waters",
  },
  {
    Placename: "Waipātiki",
    Components: "wai: water; pātiki: flounder",
    Meaning: "Flounder waters",
  },
  {
    Placename: "Waipatu",
    Components: "wai: water; patu: struck",
    Meaning: "Strike water",
  },
  {
    Placename: "Waipeto",
    Components: "wai: stream; peto: to be consumed",
    Meaning: "Consumed by the stream",
  },
  {
    Placename: "Waipīata",
    Components: "wai: water; pīata: glistening or clear",
    Meaning: "Clear water",
  },
  {
    Placename: "Waipipi",
    Components: "wai: water; pipi: cockle",
    Meaning: "Pipi waters",
  },
  {
    Placename: "Waipiro",
    Components: "wai: water; piro: evil-smelling",
    Meaning: "Evil-smelling water",
  },
  {
    Placename: "Waipōua",
    Components: "wai: water; pō: night; ua: rain",
    Meaning: "Water from rain in the night",
  },
  {
    Placename: "Waipounamu",
    Components: "wai: river; pounamu: greenstone",
    Meaning: "Greenstone waters",
  },
  {
    Placename: "Waipōuri",
    Components: "wai: water or stream; pōuri: dark or sad.",
    Meaning: "Dark waters",
  },
  {
    Placename: "Waipū",
    Components: "wai: water; pū: reddish in colour",
    Meaning: "Reddish water",
  },
  {
    Placename: "Waipuhinui",
    Components: "wai: water; puhi: plume at the bow of a war canoe; nui: large",
    Meaning: "Water of the large canoe bow plume",
  },
  {
    Placename: "Waipuku",
    Components: "wai: water; puku: to swell",
    Meaning: "Swelling water",
  },
  {
    Placename: "Waipukurau",
    Components: "wai: stream; pukurau: a large white fungus",
    Meaning: "Stream of the pukurau fungus",
  },
  {
    Placename: "Wairākei",
    Components: "wai: water; rākei: adorning",
    Meaning: "A place where pools of water were used as mirrors",
  },
  {
    Placename: "Wairangi",
    Components: "wai: water; rangi: sky",
    Meaning: "Water skies",
  },
  {
    Placename: "Wairarapa",
    Components: "wai: water; rarapa: glistening",
    Meaning: "Glistening water",
  },
  {
    Placename: "Waireka",
    Components: "wai: water; reka: sweet",
    Meaning: "Sweet water",
  },
  {
    Placename: "Wairepo",
    Components: "wai: water; repo; swamp",
    Meaning: "Swampy water",
  },
  {
    Placename: "Wairere",
    Components: "wai: water or stream; rere: to flow",
    Meaning: "Waterfall",
  },
  {
    Placename: "Wairio",
    Components: "wai: water or stream; rio: dried up",
    Meaning: "Dried-up stream",
  },
  {
    Placename: "Wairoa",
    Components: "wai: river or stream; roa: long",
    Meaning: "Long stream",
  },
  {
    Placename: "Wairongoā",
    Components: "wai: springs; rongoā: medicine",
    Meaning: "Medicinal stream",
  },
  {
    Placename: "Wairua",
    Components: "wai: stream or river; rua: two",
    Meaning: "Twin waters",
  },
  {
    Placename: "Wairuna",
    Components: "wai: stream; runa: dock",
    Meaning: "Dock waters",
  },
  {
    Placename: "Wairunga",
    Components: "wai: water; runga: above",
    Meaning: "Stream that flows from the mountains",
  },
  {
    Placename: "Waitaanga",
    Components: "wai: stream; a of; Anga",
    Meaning: "Stream of Anga",
  },
  {
    Placename: "Waitaha",
    Components: "wai: river or stream; taha: to pass on one side",
    Meaning: "Backwater",
  },
  {
    Placename: "Waitahanui",
    Components:
      "wai: stream; tahanui: a variety of cabbage tree with broad leaves",
    Meaning: "Stream of cabbage trees",
  },
  {
    Placename: "Waitahora",
    Components: "wai: water; tahora: spread out or open space",
    Meaning: "Wide-open waters",
  },
  {
    Placename: "Waitahu",
    Components: "wai: stream; tahu: continuous or running in a straight line",
    Meaning: "Straight-running stream",
  },
  {
    Placename: "Waitahuna",
    Components: "wai: stream; Tāhuna: a personal name",
    Meaning: "Stream of Tāhuna",
  },
  {
    Placename: "Waitai",
    Components: "wai: water; tai: salt or brackish",
    Meaning: "Salty water",
  },
  {
    Placename: "Waitakaro",
    Components: "wai: stream; takaro: to play or wrestle",
    Meaning: "Wrestling waters",
  },
  {
    Placename: "Waitakaruru",
    Components: "wai: water; takaruru: stagnant",
    Meaning: "Stagnant water",
  },
  {
    Placename: "Waitākere",
    Components: "wai: water or stream; tākere: deep or cascading",
    Meaning: "Cascading stream",
  },
  {
    Placename: "Waitaki",
    Components: "wai: river; taki (tangi): noisy or weeping",
    Meaning: "Weeping waters",
  },
  {
    Placename: "Waitāne",
    Components: "wai: river; tāne: man or men",
    Meaning: "River of men",
  },
  {
    Placename: "Waitangi",
    Components: "wai: waters; tangi: noisy or weeping",
    Meaning: "Weeping waters",
  },
  {
    Placename: "Waitangiruru",
    Components: "wai: water or stream; tangi: to sound; ruru: morepork",
    Meaning: "Stream that sounds like a morepork",
  },
  {
    Placename: "Waitanguru",
    Components: "wai: water; tanguru: rushing rapidly",
    Meaning: "Rapidly rushing water",
  },
  {
    Placename: "Waitao",
    Components: "wai: water; tao: spear",
    Meaning: "Spear waters",
  },
  {
    Placename: "Waitapu",
    Components: "wai: water: tapu: sacred or forbidden",
    Meaning: "Sacred waters",
  },
  {
    Placename: "Waitaramea",
    Components: "wai: stream; taramea: speargrass",
    Meaning: "Speargrass stream",
  },
  {
    Placename: "Waitararoa",
    Components: "wai:water; tara: sun’s ray or shafts of light; roa: long",
    Meaning: "First rays of the sun appearing on the water",
  },
  {
    Placename: "Waitārere",
    Components: "wai: stream; tārere: to flow copiously",
    Meaning: "Copiously flowing waters",
  },
  {
    Placename: "Waitaria",
    Components: "wai: water; taria: to wait for",
    Meaning: "Waters of waiting",
  },
  {
    Placename: "Waitaruke",
    Components: "wai: stream; taruke: hurrying",
    Meaning: "Hurrying stream",
  },
  {
    Placename: "Waitata",
    Components: "wai: water; tata: to dash or beat down",
    Meaning: "Dashing stream",
  },
  {
    Placename: "Waitawa",
    Components: "wai: stream; tawa: tree",
    Meaning: "Tawa tree stream",
  },
  {
    Placename: "Waitāwheta",
    Components: "wai: water; tāwheta: to flounder",
    Meaning: "Restless stream",
  },
  {
    Placename: "Waitekauri",
    Components: "wai: stream; te: the; kauri: native tree",
    Meaning: "Stream of the kauri tree",
  },
  {
    Placename: "Waitepeka",
    Components: "wai: stream; te: the; peka: branch",
    Meaning: "Tributary stream",
  },
  {
    Placename: "Waiterimu",
    Components: "wai: stream; te: the; rimu: native tree",
    Meaning: "Stream of the rimu tree",
  },
  {
    Placename: "Waiteti",
    Components: "wai: stream; te: the; tī: cabbage tree",
    Meaning: "Stream of the cabbage tree",
  },
  {
    Placename: "Waitetuna",
    Components: "wai: stream; te: the; tuna: eel",
    Meaning: "Stream of the eel",
  },
  {
    Placename: "Waitiri",
    Components: "wai: water or stream; tiri: to toss about or disturb",
    Meaning: "Disturbed stream",
  },
  {
    Placename: "Waitoa",
    Components: "wai: water; toa: rough or stormy",
    Meaning: "Rough waters",
  },
  {
    Placename: "Waitoetoe",
    Components: "wai: water or stream; toetoe: native grass",
    Meaning: "Toetoe grass stream",
  },
  {
    Placename: "Waitohi",
    Components: "wai: water; tohi: baptismal rite",
    Meaning: "Stream for baptismal rite",
  },
  {
    Placename: "Waitohu",
    Components: "wai: water; tohu: to point out",
    Meaning: "Water that points out the way",
  },
  {
    Placename: "Waitoki",
    Components: "wai: water; toki: adze",
    Meaning: "Adze waters",
  },
  {
    Placename: "Waitomo",
    Components: "wai: water; tomo: shaft",
    Meaning: "Shafts from water",
  },
  {
    Placename: "Waitoriki",
    Components: "wai: water; tōriki: little",
    Meaning: "Small stream",
  },
  {
    Placename: "Waitōtara",
    Components: "wai: river; tōtara: native tree",
    Meaning: "Tōtara tree river",
  },
  {
    Placename: "Waituhi",
    Components: "wai: water; tuhi: to glow",
    Meaning: "Glowing waters",
  },
  {
    Placename: "Waitūī",
    Components: "wai: water; tūī: bird",
    Meaning: "Tūī waters",
  },
  {
    Placename: "Waituna",
    Components: "wai: stream; tuna: eel",
    Meaning: "Eel stream",
  },
  {
    Placename: "Waiuku",
    Components: "wai: stream; uku: white clay",
    Meaning: "Stream with banks of white clay",
  },
  {
    Placename: "Waiuta",
    Components: "wai: river; uta: inland, or to load a burden",
    Meaning: "Inland river",
  },
  {
    Placename: "Waiwawa",
    Components: "wai: stream; wawa: roaring",
    Meaning: "Roaring stream",
  },
  {
    Placename: "Waiwera",
    Components: "wai: water; wera: hot",
    Meaning: "Hot water",
  },
  {
    Placename: "Wai-whakaata",
    Components: "wai: water; whakaata: to reflect",
    Meaning: "Reflecting waters",
  },
  {
    Placename: "Waiwhero",
    Components: "wai: water; whero: red",
    Meaning: "Red waters",
  },
  {
    Placename: "Waiwhetū",
    Components: "wai: stream; whetū: star",
    Meaning: "Star-reflecting stream",
  },
  {
    Placename: "Waiwhio",
    Components: "wai: stream; whio: blue or whistling duck",
    Meaning: "Stream of the blue duck",
  },
  {
    Placename: "Waiwhiu",
    Components: "wai: stream; whiu: sudden bend",
    Meaning: "Sudden bend in the stream",
  },
  {
    Placename: "Wakanui",
    Components: "waka: canoe; nui: large or many",
    Meaning: "Many waka",
  },
  {
    Placename: "Waronui",
    Components: "waro: chasm or coals; nui: large",
    Meaning: "Large coals",
  },
  {
    Placename: "Waitētē",
    Components: "wai: stream; tētē: shovel-nosed duck, now extinct",
    Meaning: "Shovel-nosed duck stream",
  },
  {
    Placename: "Wēiti",
    Components: "wē: liquid or water; iti: little",
    Meaning: "Little waters",
  },
  {
    Placename: "Whakaari",
    Components: "whakaari: To show or expose to view",
    Meaning: "Expose to view",
  },
  {
    Placename: "Whakaroa",
    Components:
      "Whaka (South Island form of whanga): harbour or bay; roa: long",
    Meaning: "Long harbour",
  },
  {
    Placename: "Whangakoko",
    Components: "whanga: harbour; koko: corner, or to take up with a shovel",
    Meaning: "Shovelled harbour",
  },
  {
    Placename: "Whangamarino",
    Components: "whanga: stretch of water; marino: peaceful",
    Meaning: "Peaceful harbour",
  },
  {
    Placename: "Whangamata",
    Components: "whanga: harbour; mata: obsidian",
    Meaning: "Obsidian harbour",
  },
  {
    Placename: "Whangamoa",
    Components:
      "whanga: valley or sheltered place; moa: probably the raised mounds in a plantation",
    Meaning: "Valley with raised mounds in plantation",
  },
  {
    Placename: "Whangamomona",
    Components: "whanga: valley; momona: fat",
    Meaning: "Bountiful valley",
  },
  {
    Placename: "Whanganui",
    Components: "whanga: bay; nui: large",
    Meaning: "Large harbour",
  },
  {
    Placename: "Whanganui-o-Hei",
    Components: "whanga: bay; nui: large; o: of; Hei",
    Meaning: "Large harbour of Hei",
  },
  {
    Placename: "Whangapara",
    Components: "whanga: harbour; para: sediment",
    Meaning: "Sedimentary harbour",
  },
  {
    Placename: "Whangaparāoa",
    Components: "whanga: bay; parāoa: whale",
    Meaning: "Whale bay",
  },
  {
    Placename: "Whangapē",
    Components: "whanga: to wait; pē: fish roe",
    Meaning: "Fish roe harbour",
  },
  {
    Placename: "Whangapoua",
    Components: "whanga: bay or harbour; poua: a mollusc",
    Meaning: "Mollusc harbour",
  },
  {
    Placename: "Whangarā",
    Components: "whanga: bay; rā: sun",
    Meaning: "Sunny bay",
  },
  {
    Placename: "Whangarātā",
    Components: "whanga: valley; rātā: native tree",
    Meaning: "Rātā tree valley",
  },
  {
    Placename: "Whangārei",
    Components: "whanga: waiting; rei: abbreviation of Reipae",
    Meaning: "Waiting for Reipae",
  },
  {
    Placename: "Whangaripo",
    Components: "whanga: stretch of water; ripo: deep pool or whirlpool",
    Meaning: "Deep stretch of water",
  },
  {
    Placename: "Whangaroa",
    Components: "whanga: harbour; roa: long",
    Meaning: "Long harbour",
  },
  {
    Placename: "Whangaruru",
    Components: "whanga: harbour; ruru: morepork",
    Meaning: "Morepork harbour",
  },
  {
    Placename: "Whangateau",
    Components: "whanga: harbour; te: the; au: current, smoke or mist",
    Meaning: "Harbour of smoke",
  },
  {
    Placename: "Whangatoetoe",
    Components: "whanga: bay; toetoe: native grass",
    Meaning: "Toetoe grass bay",
  },
  {
    Placename: "Whānui",
    Components: "whānui: wide",
    Meaning: "Wide-open waters",
  },
  {
    Placename: "Whareroa",
    Components: "whare: house; roa: long",
    Meaning: "Long house",
  },
  {
    Placename: "Whāro One-roa-a-Tohe",
    Components:
      "whāro: stretched out; one: beach; roa: long; a: of; Tohe, a chief",
    Meaning: "The beach on which Tōhē stretched out",
  },
  {
    Placename: "Whataroa",
    Components: "whata: elevated stage: roa: long or tall",
    Meaning: "Long, elevated stage",
  },
  {
    Placename: "Whekenui",
    Components: "wheke: octopus; nui: large",
    Meaning: "Great octopus",
  },
  {
    Placename: "Whenuanui",
    Components: "whenua: land; nui: large",
    Meaning: "Great land",
  },
  {
    Placename: "Whenuapai",
    Components: "whenua: land; pai: good",
    Meaning: "Good land",
  },
  {
    Placename: "Whānui",
    Components: "whānui: broad or wide",
    Meaning: "Wide",
  },
  {
    Placename: "Wharanui",
    Components: "wharanui: species of flax",
    Meaning: "Wharanui flax",
  },
  {
    Placename: "Whare",
    Components: "whare: house",
    Meaning: "House",
  },
  {
    Placename: "Whareakeake",
    Components: "whare: house; akeake: poor land, or a species of tree",
    Meaning: "House on poor land",
  },
  {
    Placename: "Whareama",
    Components: "whare: house; ama: carved posts supporting the maihi",
    Meaning: "House of carved posts",
  },
  {
    Placename: "Wharehine",
    Components: "whare: house; hine: girls or young women",
    Meaning: "House of young women",
  },
  {
    Placename: "Wharehuanui",
    Components: "whare: house; huanui: road or path",
    Meaning: "House by a path",
  },
  {
    Placename: "Wharehuia",
    Components: "whare: house; huia (the possessive case of hui): assembled",
    Meaning: "House of assembly",
  },
  {
    Placename: "Wharehunga",
    Components: "whare: house; hunga: company of people",
    Meaning: "Meeting house, or meeting of people in a house",
  },
  {
    Placename: "Wharekaho",
    Components: "whare: house; kaho: fence rail",
    Meaning: "Enclosed palisade",
  },
  {
    Placename: "Wharekākā",
    Components: "whare: probably nesting place; kākā: parrots",
    Meaning: "Nesting place of parrots",
  },
  {
    Placename: "Wharekōpae",
    Components: "whare: house; kōpae: circular",
    Meaning: "House with a side door",
  },
  {
    Placename: "Wharekōwhiti",
    Components: "whare: house; kō: father side; whiti: to cross",
    Meaning: "Cross to house on the far side",
  },
  {
    Placename: "Whareongaonga",
    Components: "whare: house; ongaonga: nettle",
    Meaning: "Nettle house",
  },
  {
    Placename: "Whareora",
    Components: "whare: house; ora: safe or in good health",
    Meaning: "House of good health",
  },
  {
    Placename: "Wharepāina",
    Components: "whare: house; pāina: to warm oneself",
    Meaning: "House to warm oneself",
  },
  {
    Placename: "Wharepapa",
    Components: "whare: house; papa: flat",
    Meaning: "House flats",
  },
  {
    Placename: "Wharepoa",
    Components: "whare: house: poa: smouldering or smoking",
    Meaning: "Smouldering house",
  },
  {
    Placename: "Whareponga",
    Components: "whare: house; ponga: tree-fern",
    Meaning: "Tree-fern house",
  },
  {
    Placename: "Wharerātā",
    Components: "whare: house; rātā: native tree",
    Meaning: "House among the rātā trees",
  },
  {
    Placename: "Whatamangō",
    Components:
      "whata: elevated food store: mangō (the same word as makō): shark",
    Meaning: "A stage for storing dried shark flesh",
  },
  {
    Placename: "Whatatutu",
    Components: "whata: elevated food platform; tutu: native tree or bush",
    Meaning: "Storage platform among the tutu bushes",
  },
  {
    Placename: "Whatawhata",
    Components: "whata: elevated food platform",
    Meaning: "Elevated food platforms",
  },
  {
    Placename: "Whatitiri",
    Components: "whatitiri: thunder",
    Meaning: "Thunder",
  },
  {
    Placename: "Whatiwhatihoe",
    Components: "whatiwhati: to break in pieces; hoe: paddle",
    Meaning: "Paddle broken into pieces",
  },
  {
    Placename: "Whau",
    Components: "whau: a native tree",
    Meaning: "Whau tree",
  },
  {
    Placename: "Whāwhārua",
    Components: "whāwhā: to feel about; rua: pit",
    Meaning: "Grope about in kūmara pit",
  },
  {
    Placename: "Whenuahōu",
    Components: "whenua: land; hōu: new",
    Meaning: "New land",
  },
  {
    Placename: "Whenuakite",
    Components: "whenua: land; kite: discover",
    Meaning: "Discovered land",
  },
  {
    Placename: "Whenuakura",
    Components: "whenua: land; kura: red",
    Meaning: "Red land",
  },
  {
    Placename: "Whetūkura",
    Components: "whetū: star; kura: red",
    Meaning: "Red star",
  },
  {
    Placename: "Whitianga",
    Components: "whitianga: the crossing",
    Meaning: "The crossing (of a river)",
  },
  {
    Placename: "Whitikau",
    Components: "whiti: to cross; kau: to wade",
    Meaning: "Wade across",
  },
];
