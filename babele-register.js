
var types = {
	"aberration (shapechanger)":"Förmedvény (alakváltó)",
	"aberration":"Förmedvény",
	"beast":"Vadállat",
	"celestial (titan)":"Égi lény (titán)",
	"celestial":"Égi lény",
	"construct":"Szerkezet",
	"dragon":"Sárkány",
	"elemental":"Elementál",
	"fey":"Fey",
	"fiend (demon)":"Kárhozott (démon)",
	"fiend (demon, orc)":"Kárhozott (démon, ork)",
	"fiend (demon, shapechanger)":"Kárhozott (démon, alakváltó)",
	"fiend (devil)":"Kárhozott (ördög)",
	"fiend (devil, shapechanger)":"Kárhozott (ördög, alakváltó)",
	"fiend (gnoll)":"Kárhozott (gnoll)",
	"fiend (shapechanger)":"Kárhozott (alakváltó)",
	"fiend (yugoloth)":"Kárhozott (yugoloth)",
	"fiend":"Kárhozott",
	"giant (cloud giant)":"Óriás (köd óriás)",
	"giant (fire giant)":"Óriás (tűz óriás)",
	"giant (frost giant)":"Óriás (fagy óriás)",
	"giant (hill giant)":"Óriás (hegyi óriás)",
	"giant (stone giant)":"Óriás (kő óriás)",
	"giant (storm giant)":"Óriás (vihar óriás)",
	"giant":"Óriás",
	"humanoid (aarakocra)":"Humanoid (aarakocra)",
	"humanoid (any race)":"Humanoid (bármilyen faj)",
	"humanoid (bullywug)":"Humanoid (bullywug)",
	"humanoid (dwarf)":"Humanoid (törp)",
	"humanoid (elf)":"Humanoid (elf)",
	"humanoid (firenewt)":"Humanoid (tűzgyík)",
	"humanoid (gith)":"Humanoid (gith)",
	"humanoid (gnoll)":"Humanoid (gnoll)",
	"humanoid (gnome)":"Humanoid (gnóm)",
	"humanoid (goblinoid)":"Humanoid (goblinféle)",
	"humanoid (grimlock)":"Humanoid (grimlock)",
	"humanoid (grung)":"Humanoid (grung)",
	"humanoid (human)":"Humanoid (ember)",
	"humanoid (human, shapechanger)":"Humanoid (ember, alakváltó)",
	"humanoid (kenku)":"Humanoid (kenku)",
	"humanoid (kobold)":"Humanoid (kobold)",
	"humanoid (kuo-toa)":"Humanoid (kuo-toa)",
	"humanoid (lizardfolk)":"Humanoid (gyíklény)",
	"humanoid (merfolk)":"Humanoid (tengerszerzet)",
	"humanoid (orc)":"Humanoid (ork)",
	"humanoid (quaggoth)":"Humanoid (quaggoth)",
	"humanoid (sahuagin)":"Humanoid (sahuagin)",
	"humanoid (shapechanger)":"Humanoid (alakváltó)",
	"humanoid (thri-kreen)":"Humanoid (thri-kreen)",
	"humanoid (troglodyte)":"Humanoid (troglodite)",
	"humanoid (xvart)":"Humanoid (xvart)",
	"humanoid (yuan-ti)":"Humanoid (yuan-ti)",
	"humanoid":"Humanoid",
	"monstrosity (shapechanger)":"Szörnyszülött (alakváltó)",
	"monstrosity (shapechanger, yuan-ti)":"Szörnyszülött (alakváltó, yuan-ti)",
	"monstrosity (titan)":"Szörnyszülött (titano)",
	"monstrosity":"Szörnyszülött",
	"ooze":"Nyálka",
	"plant":"Növény",
	"swarm of Tiny beasts":"Kis lények raja",
	"undead (shapechanger)":"Élőholt (alakváltó)",
	"undead":"Élőholt"
};

var alignments = {
	"chaotic evil": "Kaotikus Gonosz",
	"chaotic neutral":"Kaotikus Semleges",
	"chaotic good":"Kaotikus Jó",
	"neutral evil":"Semleges Gonosz",
	"true neutral":"Semleges",
	"neutral":"Semleges",
	"neutral good":"Semleges Jó",
	"lawful evil":"Törvényes Gonosz",
	"lawful neutral":"Törvényes Semleges",
	"lawful good":"Törvényes Jó",
	"chaotic good evil":"Kaotikus Jó/Gonosz",
	"lawful chaotic evil":"Törvényes/Kaotikus Gonosz",
	"unaligned":"Semleges",
	"any non-lawful": "Nem Törvényes",
	"any": "Bármely",
};

var languages = {
	"giant eagle": "Óriás Sas",
	"worg":"Worg",
	"winter wolf":"Téli Farkas",
	"sahuagin":"Sahuagin",
	"giant owl, understands but cannot speak all but giant owl":"óriás bagoly, érti, de csak baglyul tud beszélni",
	"giant elk but can't speak them":"óriás jávorszarvas de nem tudsz beszélni",
	"understands infernal but can't speak it":"ért ördögül, de nem tudja beszélni",
	"understands draconic but can't speak":"ért sárkányul, de nem tudja beszélni",
	"understands common but doesn't speak it":"érti a közöst, de nem tudja beszélni",
	"understands abyssal but can't speak":"ért az abysszait, de nem tudja beszélni",
	"understands all languages it knew in life but can't speak":"ért minden nyelvet amit életében megismert, de nem tudja őket beszélni",
	"understands commands given in any language but can't speak":"ért minden parancsot amit kap, de nem tud beszélni",
	"(can't speak in rat form)":"(nem tud beszélni patkány alakban)",
	"(can't speak in boar form)":"(nem tud beszélni vaddisznó alakban)",
	"(can't speak in bear form)":"(nem tud beszélni medve alakban)",
	"(can't speak in tiger form)":"(nem tud beszélni tigris alakban)",
	"any one language (usually common)":"bármely egy nyelv",
	"any two languages":"bármely két nyelv",
    "any three languages":"bármely három nyelv",
	"any four languages":"bármely négy nyelv",
	"5 other languages":"bármely öt nyelv",
	"any, usually common":"bármely általában közös",
	"one language known by its creator":"készítőjének nyelvánek ismerete",
	"the languages it knew in life":"a nyelv, amit életében beszélt",
	"those it knew in life":"a nyelvek, amit életében beszélt",
	"all it knew in life":"minden nyelv, amit életében beszélt",
	"any it knew in life":"bármely nyelv, amit életében beszélt",
	"all, telepathy 120 ft.":"minden, telepátia 120ft",
	"telepathy 60 ft.":"telepátia 60ft",
	"telepathy 60ft. (works only with creatures that understand abyssal)":"telepátia 60ft. (csak olyan léynekkel működik akik értenek abissziaiul)",
	"telepathy 120 ft.":"telepátia 120ft",
	"but can't speak":"de nem beszél",
	"but can't speak it":"de nem beszéli a",
	"choice":"választás",
	"understands the languages of its creator but can't speak":"érti teremtője nyelvét, de nem tud beszélni",
	"understands common and giant but can't speak":"érti a közöst és az óriást, de nem tud beszélni",
	"cannot speak": "nem tud beszélni"
};

var races = {
	"Dragonborn": "Sárkányszülött",
	"Dwarf": "Törp",
	"Hill Dwarf": "Hegyi Törp",
	"Elf": "Elf",
	"High Elf": "Nemes Elf",
	"Gnome": "Gnóm",
	"Rock Gnome": "Szikla Gnóm",
	"Half Elf": "Fél Elf",
	"Half-Elf": "Fél-Elf",
	"Half-elf": "Fél-elf",
	"Halfling": "Félszerzet",
	"Lightfoot Halfling": "Konnyűlábú Félszerzet",
	"Half Orc": "Fél Ork",
	"Half-Orc": "FélüOrk",
	"HUMAN": "EMBER",
	"Human": "Ember",
	"Variant Human": "Ember Variáns",
	"Tiefling": "Pokolszerzet"
};

var classes = {
	"Barbarian": "Barbár",
	"Bard": "Bárd",
	"Cleric": "Pap",
	"Druid": "Druida",
	"Fighter": "Harcos",
	"Monk": "Szerzetes",
	"Paladin": "Paplovag",
	"Ranger": "Kósza",
	"Rogue": "Zsivány",
	"Sorcerer": "Varázsló",
	"Warlock": "Boszorkánymester",
	"Wizard": "Mágus",
	"Champion": "Bajnok",
	"College of Lore": "Tanok Iskolája",
	"Oath of Devotion": "Hűség Esküje",
	"Life Domain": "Élet Szféra",
	"Circle of the Land": "Föld Társasága",
	"The Fiend": "A Kárhozott",
	"Hunter": "Vadász",
	"School of Evocation": "Energia Iskolája",
	"Path of the Berserker": "Tobolú Útja",
	"Eldritch Blast": "Túlvilági Kitörés",
	"Pact of the Tome": "A Könyv Paktuma",
	"Pact of the Blade": "A Penge Paktuma",
	"Pact of the Chain": "A Könyv Paktuma",
	"Way of the Open Hand": "A Nyílt Ököl Ótja"
};

var rarity = {
	"Common": "Gyakori",
	"Uncommon": "Nem Gyakori",
	"Rare": "Ritka",
	"Very rare": "Nagyon Ritka",
	"Legendary": "Legendás"
};

function round(num) {
	return Math.round((num + Number.EPSILON) * 100) / 100;
}

function lbToKg(lb) {
	if(!lb) {
		return lb;
	}
	return parseInt(lb)/2;
}

function footsToMeters(ft) {
	if(!ft) {
		return ft;
	}
	return round(parseInt(ft)*0.3);
}

function milesToMeters(mi) {
	if(!mi) {
		return mi;
	}
	return round(parseInt(mi)*1.5);
}

function parseSenses(sensesText) {
	const senses = sensesText.split('. ');
	let parsed = '';
	senses.forEach(sense => { parsed = parseSense(sense) + ' ' + parsed; });
	return parsed;
}

function parseSense(sense) {
	var regexp = /([0-9]+)/gi;
	sense = sense.replace(/ft/gi, 'm');
	sense = sense.replace(/feet/gi, 'm');
	sense = sense.replace(/Darkvision/gi, "Sötétlátaás");
	sense = sense.replace(/Darvision/gi, "Sötétlátaás"); //bug ^^
	sense = sense.replace(/Blindsight/gi, "Vaklátás");
	sense = sense.replace(/Truesight/gi, "Igazlátás");
	sense = sense.replace(/tremorsense/gi, "Rezgés-érzékelés");
	sense = sense.replace(/Blind Beyond/gi, "Vak Ezután");
	sense = sense.replace(/this radius/gi, "sugár");
	sense = sense.replace((sense.match(regexp)), footsToMeters(sense.match(regexp)));
	sense = sense.replace("(blind beyond this radius)", "(nem lát ezen a sugáron túl)");
	return sense;
}

function parseDamage(damage) {
	damage = damage.replace(/bludgeoning/gi, 'contundenti');
	damage = damage.replace(/piercing/gi, 'perforanti');
	damage = damage.replace(/and/gi, 'e');
	damage = damage.replace(/slashing/gi, 'taglienti');
	damage = damage.replace(/from/gi, 'da');
	damage = damage.replace(/nonmagical attacks/gi, 'attacchi non magici');
	damage = damage.replace(/that aren't silvered/gi, 'che non sono d\'argento');
	damage = damage.replace(/not made with silvered weapons/gi, 'non fatti con armi d\'argento');
	return damage;
}

function convertEnabled() {
	return game.settings.get("translation-dnd5e-hu", "convert");
}

function setEncumbranceData() {
	let convert = convertEnabled();
	game.settings.set("dnd5e", "metricWeightUnits", convert);
}

Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		game.settings.register("translation-dnd5e-hu", "convert", {
			name: "Automatikus Konverzió",
			hint: "Automatikus mértékegység váltás metrikus rendszerre.",
			scope: "world",
			type: Boolean,
			default: true,
			config: true,
			onChange: convert => {
				setEncumbranceData();
			}
		});

		Babele.get().register({
			module: 'translation-dnd5e-hu',
			lang: 'hu',
			dir: 'compendium'
		});

		Babele.get().registerConverters({
			"weight": (value) => {
				if(!convertEnabled()) {
					return value;
				}
				return lbToKg(value);
			},
			"range": (range) => {
				if(range) {
					if(!convertEnabled()) {
						return range;
					}
					if(range.units === "ft") {
						return mergeObject(range, {
							"value": footsToMeters(range.value),
							"long": footsToMeters(range.long),
							"units": "m"
						});
					}
					if(range.units === "mi") {
						return mergeObject(range, {
							"value": milesToMeters(range.value),
							"long": milesToMeters(range.long),
							"units": "km"
						});
					}
					return range;
				}
			},
			"alignement": (alignment) => {
				return alignments[alignment.toLowerCase()];
			},
			"movement": (movement) => {

				if(!convertEnabled()) {
					return movement;
				}

				let convert = (value) => { return value; };
				let units = movement.units;
				if(units === 'ft') {
					convert = (value) => { return footsToMeters(value) };
					units = "m";
				}
				if(units === 'ml') {
					convert = (value) => { return milesToMeters(value) };
					units = "m";
				}

				return mergeObject(movement, {
					burrow: convert(movement.burrow),
					climb: convert(movement.climb),
					fly: convert(movement.fly),
					swim: convert(movement.swim),
					units: units,
					walk: convert(movement.walk)
				});
			},
			"senses": (senses) => {
				return senses ? parseSenses(senses) : null;
			},
			"di": (damage) => {
				return parseDamage(damage);
			},
			"languages": (lang) => {
				if (lang != null ) {
					const languagesSplit = lang.split('; ');
					var languagesFin = '';
					var languagesTr = '';
					languagesSplit.forEach(function(el){
						languagesTr = languages[el.toLowerCase()] ;
						if (languagesTr != null) {
							if (languagesFin === '') {
								languagesFin = languagesTr;
							}  else {
								languagesFin = languagesFin + ' ; '  + languagesTr;
							}
						}
					});
					return languagesFin;
				}
			},
			"token": (token) => {
				mergeObject(
					token, {
						dimSight: footsToMeters(token.dimSight),
						brightSight: footsToMeters(token.brightSight)
					}
				);
			},
			"race": (race) => {
				return races[race] ? races[race] : race;
			},
			"rarity": (r) => {
				return rarity[r] ? rarity[r] : r
			},
			"raceRequirements": (requirements) => {
				let translated = requirements;
				const names = Object.keys(races);
				names.forEach(name => {
					translated = translated.replaceAll(name, races[name])
				});
				return translated;
			},
			"classRequirements": (requirements) => {
				let translated = requirements;
				const names = Object.keys(classes);
				names.forEach(name => {
					translated = translated.replaceAll(name, classes[name])
				});
				return translated;
			},
			"classNameFormula": (formula) => {
				if(formula && typeof formula === 'string') {
					let translated = formula;
					const names = Object.keys(classes);
					names.forEach(name => {
						translated = translated.replaceAll(name.toLowerCase(), classes[name].toLowerCase())
					});
					return translated;
				}
			},
			"damagePartClassName": (array1) => {
				for (let i=0; i< array1.length; i++) {
					let array2 = array1[i];
					for (let j=0; j< array2.length; j++) {
						let translated = array2[j];
						if (translated && typeof translated === 'string') {
							const names = Object.keys(classes);
							names.forEach(name => {
								translated = translated.replaceAll(name.toLowerCase(), classes[name].toLowerCase())
							});
							array2[j] = translated;
						}
					}
					array1[i] = array2;
				}
				return array1;
			}
		});

		CONFIG.DND5E.classFeatures = {
			"barbár": CONFIG.DND5E.classFeatures["barbarian"],
			"bárd": CONFIG.DND5E.classFeatures["bard"],
			"pap": CONFIG.DND5E.classFeatures["cleric"],
			"druida": CONFIG.DND5E.classFeatures["druid"],
			"harcos": CONFIG.DND5E.classFeatures["fighter"],
			"szerzetes": CONFIG.DND5E.classFeatures["monk"],
			"paplovag": CONFIG.DND5E.classFeatures["paladin"],
			"kósza": CONFIG.DND5E.classFeatures["ranger"],
			"zsivány": CONFIG.DND5E.classFeatures["rogue"],
			"varázsló": CONFIG.DND5E.classFeatures["sorcerer"],
			"boszorkánymester": CONFIG.DND5E.classFeatures["warlock"],
			"mágus": CONFIG.DND5E.classFeatures["wizard"]
		};
	}
});

Hooks.once('ready', () => {
	setEncumbranceData();
});

Hooks.on('createScene', (scene) => {
	if(convertEnabled()) {
		scene.update({
			"gridUnits": "m", "gridDistance": 1.5
		});
	}
});

Hooks.on('createActor', (actor) => {
	if(actor.getFlag("babele", "translated")) {
		return;
	}
	if(convertEnabled()) {
		actor.update({
			 token: {
				 dimSight: footsToMeters(actor.data.token.dimSight),
				 brightSight: footsToMeters(actor.data.token.brightSight)
			 },
			 data: {
				 attributes: {
					 movement: {
						 burrow: 0,
						 climb: 0,
						 fly: 0,
						 swim: 0,
						 units: 'm',
						 walk: 9
					 }
				 }
			 }
		 });
	}
})

async function skillSorting() {
	const lists = document.getElementsByClassName("skills-list");
	for (let list of lists) {
		const competences = list.childNodes;
		let complist = [];
		for (let sk of competences) {
			if (sk.innerText && sk.tagName == "LI") {
				complist.push(sk);
			}
		}
		complist.sort(function(a, b) {
			return (a.innerText > b.innerText) ? 1 : -1;
		});
		for (let sk of complist) {
			list.appendChild(sk)
		}
	}
}

Hooks.on("renderActorSheet", async function() {
	skillSorting();
});
