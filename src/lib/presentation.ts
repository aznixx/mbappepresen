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
		story: "A talent that emerges only once in a generation, redefining what is possible on the pitch. From the concrete courts of Bondy to the glittering summit of world football, his journey is a testament to speed, precision, and unwavering ambition. He is not just a player; he is a force of nature.",
		image: '/mbappeintro.jpg',
		keywords: []
	},
	{
		type: 'era',
		title: 'ORIGINS',
		bgTitle: 'BONDY',
		story: "Born in 1998, mere months after France's historic first World Cup victory, he was destined for greatness. Raised in the vibrant suburbs of Bondy, where football is more than a sport—it is a language, a culture, and a way of life.",
		// Concrete pitch vibe (Unsplash) -> Replaced with User Upload
		image: '/mbappebondy.jpg',
		keywords: ["CONCRETE", "DREAMER", "SPEED", "FAMILY", "93", "START"]
	},
	{
		type: 'era',
		title: 'BREAKOUT',
		bgTitle: 'MONACO',
		story: "At just 18 years old, he tore through Europe's elite defenses with fearless agility. Leading AS Monaco to a stunning Ligue 1 title against all odds and orchestrating a Champions League run that shocked the world, he announced his arrival on the global stage.",
		// Real Monaco 2017 photo (User Upload)
		image: '/mbappemonaco.png',
		keywords: ["EXPLOSION", "LIGUE 1", "YOUTH", "FEARLESS", "RECORDS", "CHAMPION"]
	},
	{
		type: 'era',
		title: 'KING',
		bgTitle: 'PARIS',
		story: "Returning to his hometown as a hero, he embraced the weight of expectation. Over seven historic years, he became Paris Saint-Germain's all-time top scorer, embodying the soul of the city and etching his name permanently into the fabric of Parisian history.",
		image: '/kaka.png',
		keywords: ["ICON", "HOME", "SCORER", "LEADER", "HISTORY", "LEGEND"]
	},
	{
		type: 'intro',
		title: 'WORLD',
		subtitle: 'CHAMPION',
		bgTitle: '2018',
		story: "Four goals, one golden trophy, and a performance for the ages. Becoming only the second teenager in history to score in a World Cup Final, he joined the pantheon of greats at just 19 years old. The world watched in awe as a new king was crowned.",
		image: '/mbappefinal.png',
		keywords: []
	},
	{
		type: 'era',
		title: 'WARRIOR',
		bgTitle: '2022',
		story: "A historic hat-trick in the greatest final ever played. He single-handedly dragged his nation to the very brink of immortality, displaying a level of dominance that proved he stands alone at the absolute peak of the game. Even in defeat, he was the victor.",
		image: '/mbappe-scream.png',
		keywords: ["HATTRICK", "FIGHT", "RESILIENCE", "GOLDEN BOOT", "TITAN", "SOLO"]
	},
	{
		type: 'youtube',
		title: 'THE HATTRICK',
		subtitle: '97 SECONDS OF MADNESS',
		bgTitle: '2022',
		story: "Three goals. One relentless warrior. In a breathtaking 97-second window, he dragged France back from the dead, defying probability and logic. It was a performance that transcended sport, proving that even at the summit of the world, his will to win is unmatched.",
		youtubeId: 'cVkI9Hezg0U',
		keywords: ["clutch", "legendary", "goat", "history"]
	},
	{
		type: 'gallery',
		title: 'BROTHERHOOD',
		subtitle: 'DAY ONES',
		bgTitle: 'SQUAD',
		story: "Football is temporary, but the bond with the streets is forever. Whether tearing up the pitch with icons or cruising through the neighborhood, he never forgets where he came from.",
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
		story: "The next chapter begins, fulfilling a childhood destiny clad in iconic white. Now, he chases the only trophy that remains elusive, ready to conquer new heights and solidify his legacy as the greatest of all time in the hallowed halls of the Bernabéu.",
		image: '/mbappemadrid.png',
		keywords: ["GALACTICO", "WHITE", "DESTINY", "GLORY", "NEXT", "ERA"]
	},
	{
		type: 'gallery',
		title: 'THE LEGACY',
		subtitle: 'HISTORY IS BEING WRITTEN',
		bgTitle: 'FOREVER',
		story: "At just 25, his trophy cabinet already rivals the most decorated legends of the game. A World Cup winner, a serial domestic champion, and the undisputed heir to the footballing throne. Yet, with his prime still ahead, the most exciting chapters of his story are yet to be written.",
		images: [
			'/mbappe-wc.png',
			'/tro2.jpg',
			'/mbappe-l1.png',
			'/mbappe-golden-boy.png'
		],
		keywords: ["TROPHIES", "GLORY", "WORLD CUP", "RECORD", "HEIR", "ETERNAL"]
	}
];
