export interface Slide {
	type: string;
	title: string;
	subtitle?: string;
	bgTitle: string;
	story: string;
	image?: string;
	video?: string;
	youtubeId?: string;
	images?: string[];
	keywords: string[];
	withSound?: boolean;
}

export const slides: Slide[] = [
	{
		type: 'intro',
		title: 'KYLIAN',
		subtitle: 'THE PHENOMENON',
		bgTitle: 'MBAPPÉ',
		story: "They said it was impossible. A kid from Bondy conquering the world. But he didn't just play the game—he changed it forever.",
		image: '/mbappeintro.jpg',
		keywords: []
	},
	{
		type: 'era',
		title: 'UNSTOPPABLE',
		bgTitle: 'MAGIC',
		subtitle: 'HIGHLIGHTS',
		story: "His own father didn't believe in him—he even slapped him on the forehead. But that pain didn't break him; it ignited a fire. Now, when he accelerates, he leaves the doubters in the dust.",
		video: '/mbappa.mp4',
		withSound: true,
		keywords: ["SKILLS", "SPEED", "VITESSE", "TECHNIQUE"]
	},
	{
		type: 'era',
		title: 'ORIGINS',
		bgTitle: 'BONDY',
		story: "1998. France lifts the World Cup. Months later, a king is born in the concrete jungle of Bondy. Where others saw obstacles, he saw a path to greatness.",
		image: '/mbappebondy.jpg',
		keywords: ["CONCRETE", "DREAMER", "SPEED", "FAMILY", "93", "START"]
	},
	{
		type: 'era',
		title: 'BREAKOUT',
		bgTitle: 'MONACO',
		story: "Eighteen years old. Fearless. He dismantled Europe's elite, leading Monaco to glory and proving that age is nothing but a number when you have destiny on your side.",
		image: '/mbappemonaco.png',
		keywords: ["EXPLOSION", "LIGUE 1", "YOUTH", "FEARLESS", "RECORDS", "CHAMPION"]
	},
	{
		type: 'era',
		title: 'KING',
		bgTitle: 'PARIS',
		story: "The prince became the King of Paris. Seven years of dominance. Top scorer. Icon. He carried the hopes of a city on his back and delivered time and time again.",
		image: '/kaka.png',
		keywords: ["ICON", "HOME", "SCORER", "LEADER", "HISTORY", "LEGEND"]
	},
	{
		type: 'intro',
		title: 'WORLD',
		subtitle: 'CHAMPION',
		bgTitle: '2018',
		story: "Russia, 2018. The world watched a teenager match Pelé. Four goals. One trophy. The moment a prodigy became a legend.",
		image: '/mbappefinal.png',
		keywords: []
	},
	{
		type: 'era',
		title: 'WARRIOR',
		bgTitle: '2022',
		story: "Lusail Stadium. Down and out. Then, 97 seconds of madness. A hat-trick in the World Cup Final. He refused to let the dream die.",
		image: '/mbappe-scream.png',
		keywords: ["HATTRICK", "FIGHT", "RESILIENCE", "GOLDEN BOOT", "TITAN", "SOLO"]
	},
	{
		type: 'youtube',
		title: 'THE HATTRICK',
		subtitle: '97 SECONDS OF MADNESS',
		bgTitle: '2022',
		story: "It wasn't just a game; it was a war. With the weight of a nation on his shoulders, he stood tall. Single-handedly dragging France into history books.",
		youtubeId: 'cVkI9Hezg0U',
		keywords: ["80' (P)", "81'", "118' (P)", "CLUTCH", "LEGENDARY", "GOAT"]
	},
	{
		type: 'gallery',
		title: 'BROTHERHOOD',
		subtitle: 'DAY ONES',
		bgTitle: 'SQUAD',
		story: "Success means nothing if you forget where you came from. From Bondy to the world stage, the circle remains unbroken.",
		images: [
			'/mbappe-squad.png',
			'/mbappe-scooter.png'
		],
		keywords: ["FAMILY", "ROOTS", "STYLE", "STREET", "CULTURE"]
	},
	{
		type: 'era',
		title: 'FUTURE',
		bgTitle: 'MADRID',
		story: "The final piece of the puzzle. Real Madrid. The biggest club in the world for the best player in the world. The Galactic Era begins now.",
		image: '/mbappemadrid.png',
		keywords: ["GALACTICO", "WHITE", "DESTINY", "GLORY", "NEXT", "ERA"]
	},
	{
		type: 'gallery',
		title: 'THE LEGACY',
		subtitle: 'HISTORY IS BEING WRITTEN',
		bgTitle: 'FOREVER',
		story: "25 years old. World Champion. Top Scorer. Icon. But the scary part? He's just getting started. The story isn't over. It's only just begun.",
		images: [
			'/mbappe-wc.png',
			'/tro2.jpg',
			'/mbappe-l1.png',
			'/mbappe-golden-boy.png'
		],
		keywords: ["TROPHIES", "GLORY", "WORLD CUP", "RECORD", "HEIR", "ETERNAL"]
	}
];
