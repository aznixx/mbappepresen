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
}

export const slides: Slide[] = [
	{
		type: 'intro',
		title: 'KYLIAN',
		subtitle: 'THE PHENOMENON',
		bgTitle: 'MBAPPÉ',
		story: "A talent that emerges once in a generation. From the concrete courts of Bondy to the summit of world football.",
		image: '/mbappeintro.jpg',
		keywords: []
	},
	{
		type: 'era',
		title: 'ORIGINS',
		bgTitle: 'BONDY',
		story: "Born in 1998, just months after France's first World Cup win. Raised in Bondy, where football isn't just a sport, it's a language.",
		// Concrete pitch vibe (Unsplash) -> Replaced with User Upload
		image: '/mbappebondy.jpg',
		keywords: ["CONCRETE", "DREAMER", "SPEED", "FAMILY", "93", "START"]
	},
	{
		type: 'era',
		title: 'BREAKOUT',
		bgTitle: 'MONACO',
		story: "At 18, he tore through Europe's elite. A Ligue 1 title against the odds and a Champions League run that shocked the world.",
		// Real Monaco 2017 photo (User Upload)
		image: '/mbappemonaco.png',
		keywords: ["EXPLOSION", "LIGUE 1", "YOUTH", "FEARLESS", "RECORDS", "CHAMPION"]
	},
	{
		type: 'era',
		title: 'KING',
		bgTitle: 'PARIS',
		story: "Returning home as a hero. He became the club's all-time top scorer, embodying the soul of Paris Saint-Germain for seven historic years.",
		image: '/kaka.png',
		keywords: ["ICON", "HOME", "SCORER", "LEADER", "HISTORY", "LEGEND"]
	},
	{
		type: 'intro',
		title: 'WORLD',
		subtitle: 'CHAMPION',
		bgTitle: '2018',
		story: "Four goals. One trophy. The second teenager in history to score in a World Cup Final. A legend cemented at 19.",
		image: '/mbappefinal.png',
		keywords: []
	},
	{
		type: 'era',
		title: 'WARRIOR',
		bgTitle: '2022',
		story: "A hat-trick in the final. He dragged his nation to the brink of immortality, proving he stands alone at the peak of the game.",
		image: '/mbappeking.jpg',
		keywords: ["HATTRICK", "FIGHT", "RESILIENCE", "GOLDEN BOOT", "TITAN", "SOLO"]
	},
	{
		type: 'youtube',
		title: 'THE HATTRICK',
		subtitle: '97 SECONDS OF MADNESS',
		bgTitle: '2022',
		story: "Three goals. One warrior. In a 97-second window, he dragged France back from the dead, proving that even at the summit of the world, he stands alone.",
		youtubeId: 'cVkI9Hezg0U',
		keywords: ["80' (P)", "81'", "118' (P)", "CLUTCH", "LEGENDARY", "GOAT"]
	},
	{
		type: 'era',
		title: 'FUTURE',
		bgTitle: 'MADRID',
		story: "The final chapter writes itself. Fulfilling a childhood destiny in white, chasing the only trophy that remains.",
		image: '/mbappemadrid.png',
		keywords: ["GALACTICO", "WHITE", "DESTINY", "GLORY", "NEXT", "ERA"]
	},
	{
		type: 'gallery',
		title: 'THE LEGACY',
		subtitle: 'HISTORY IS BEING WRITTEN',
		bgTitle: 'FOREVER',
		story: "At just 25, his trophy cabinet rivals the legends of the game. A World Cup winner, a serial champion, and the undisputed heir to the throne. The journey is far from over.",
		images: [
			'/mbappe-wc.png',
			'/tro2.jpg',
			'/mbappe-l1.png',
			'/mbappe-golden-boy.png'
		],
		keywords: ["TROPHIES", "GLORY", "WORLD CUP", "RECORD", "HEIR", "ETERNAL"]
	}
];
