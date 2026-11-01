export interface Pub {
  id: string;
  name: string;
  tagline: string;
  town: string;
  county: string;
  region: 'Yorkshire' | 'Kent' | 'Cotswolds' | 'Peak District' | 'London & South' | 'East Anglia';
  address: string;
  postcode: string;
  phone: string;
  image: string;
  caskLines: number;
  ciderCount: number;
  dogFriendly: boolean;
  beerGarden: boolean;
  camraAward: string;
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  currentAles: { name: string; brewery: string; abv: string; style: string }[];
  description: string;
}

export interface DrinkItem {
  id: string;
  name: string;
  breweryOrProducer: string;
  origin: string;
  category: 'Cask Ale' | 'Craft Keg' | 'Cider & Perry' | 'Fine Wine' | 'Artisan Spirits';
  abv: string;
  notes: string;
  priceHalf: string;
  pricePint: string;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Bar Bites' | 'Artisan Pies' | 'Sharing Boards' | 'Puddings';
  pairing: string;
  vegetarian?: boolean;
}

export interface PubEvent {
  id: string;
  title: string;
  pubName: string;
  location: string;
  date: string;
  time: string;
  category: 'Live Music' | 'Tasting' | 'Pub Quiz' | 'Meet The Brewer' | 'Folk Session';
  description: string;
}

export const PUBS_DATA: Pub[] = [
  {
    id: 'hop-and-anchor',
    name: 'The Hop & Anchor',
    tagline: 'Historic cobblestone charm & gravity-fed cellar ales',
    town: 'Lincoln',
    county: 'Lincolnshire',
    region: 'Yorkshire',
    address: '14 Steep Hill, Bailgate',
    postcode: 'LN2 1LT',
    phone: '01522 849201',
    image: '/images/hero.jpg',
    caskLines: 6,
    ciderCount: 8,
    dogFriendly: true,
    beerGarden: true,
    camraAward: 'CAMRA Branch Pub of the Year 2024',
    openingHours: {
      weekdays: '12:00 - 22:30',
      saturday: '11:30 - 23:00',
      sunday: '12:00 - 21:00',
    },
    currentAles: [
      { name: 'Castle Gold', brewery: 'Bailgate Ales', abv: '4.2%', style: 'Golden Best Bitter' },
      { name: 'Cathedral Porter', brewery: 'Steep Hill Brewing', abv: '5.1%', style: 'Robust Porter' },
      { name: 'Citra Sunburst', brewery: 'Oakham Ales', abv: '4.5%', style: 'Pale Ale' },
      { name: 'Landlord Best', brewery: 'Timothy Taylor', abv: '4.3%', style: 'Classic Pale' },
    ],
    description: 'Tucked beneath the shadow of Lincoln Cathedral on historic Steep Hill, The Hop & Anchor celebrates pure conversation, no fruit machines or television, and pristine cask ales poured straight by gravity.',
  },
  {
    id: 'stumble-inn',
    name: 'The Stumble Inn',
    tagline: 'Pennine valley refuge with rotating artisan micro-brews',
    town: 'Hebden Bridge',
    county: 'West Yorkshire',
    region: 'Yorkshire',
    address: '8 Bridge Gate',
    postcode: 'HX7 8EX',
    phone: '01422 845112',
    image: '/images/interior.jpg',
    caskLines: 8,
    ciderCount: 12,
    dogFriendly: true,
    beerGarden: false,
    camraAward: 'Yorkshire Regional Micropub Champion',
    openingHours: {
      weekdays: '14:00 - 22:00',
      saturday: '12:00 - 23:00',
      sunday: '12:00 - 20:30',
    },
    currentAles: [
      { name: 'Hebden Hop', brewery: 'Vocation Brewery', abv: '4.0%', style: 'Session IPA' },
      { name: 'Black Moor Stout', brewery: 'Saltaire Brewery', abv: '4.8%', style: 'Dry Oatmeal Stout' },
      { name: 'Pennine Gold', brewery: 'Kirkstall Brewery', abv: '4.4%', style: 'Blonde Ale' },
    ],
    description: 'A cozy sanctuary for hill walkers, canal wanderers, and ale lovers in the heart of the Calder Valley. Wooden pews, roaring cast iron stove, and guest ales from independent northern microbreweries.',
  },
  {
    id: 'snug-and-barrel',
    name: 'The Snug & Barrel',
    tagline: 'Kentish hop heritage & traditional stillage service',
    town: 'Canterbury',
    county: 'Kent',
    region: 'Kent',
    address: '22 Sun Street',
    postcode: 'CT1 2HX',
    phone: '01227 458993',
    image: '/images/drinks.jpg',
    caskLines: 6,
    ciderCount: 10,
    dogFriendly: true,
    beerGarden: true,
    camraAward: 'East Kent CAMRA Micropub of the Year',
    openingHours: {
      weekdays: '12:00 - 22:00',
      saturday: '12:00 - 22:30',
      sunday: '12:00 - 20:00',
    },
    currentAles: [
      { name: 'Canterbury Best', brewery: 'Gadds\' Ramsgate', abv: '4.1%', style: 'Kentish Pale Ale' },
      { name: 'East Kent Golding Special', brewery: 'Time & Tide Brewing', abv: '4.6%', style: 'Single Hop Bitter' },
      { name: 'Hop Monster', brewery: 'Whitstable Brewery', abv: '5.2%', style: 'Hoppy Amber' },
    ],
    description: 'Located in the birthplace of the UK micropub movement. Serving ales sourced exclusively within 30 miles of Kent hop farms, along with farmhouse cloudy perries and ciders.',
  },
  {
    id: 'copper-kettle',
    name: 'The Copper Kettle Tap',
    tagline: 'Snug timber nooks, brass taps & vinyl folk evenings',
    town: 'York',
    county: 'North Yorkshire',
    region: 'Yorkshire',
    address: '5 Fossgate',
    postcode: 'YO1 9TA',
    phone: '01904 632190',
    image: '/images/events.jpg',
    caskLines: 7,
    ciderCount: 6,
    dogFriendly: true,
    beerGarden: false,
    camraAward: 'Good Beer Guide 2024 Entry',
    openingHours: {
      weekdays: '13:00 - 22:30',
      saturday: '11:30 - 23:00',
      sunday: '12:00 - 21:00',
    },
    currentAles: [
      { name: 'Fossgate Bitter', brewery: 'Brew York', abv: '4.2%', style: 'Traditional Best' },
      { name: 'Jorvik Amber', brewery: 'Rooster\'s Brewing Co', abv: '4.7%', style: 'Special Bitter' },
      { name: 'Northern Monk Eternal', brewery: 'Northern Monk', abv: '4.1%', style: 'Session IPA' },
    ],
    description: 'A vibrant yet peaceful haven on York’s merchant street. Expect antique brass fittings, vintage books, weekly acoustic sessions, and a chalkboard cellar board updated twice daily.',
  },
  {
    id: 'whistling-cask',
    name: 'The Whistling Cask',
    tagline: 'Cotswold stone micropub & Somerset orchard ciders',
    town: 'Bath',
    county: 'Somerset',
    region: 'Cotswolds',
    address: '19 Walcot Street',
    postcode: 'BA1 5BG',
    phone: '01225 310884',
    image: '/images/food.jpg',
    caskLines: 5,
    ciderCount: 14,
    dogFriendly: true,
    beerGarden: true,
    camraAward: 'Somerset Cider Pub of the Year',
    openingHours: {
      weekdays: '14:00 - 22:30',
      saturday: '12:00 - 23:00',
      sunday: '12:00 - 21:00',
    },
    currentAles: [
      { name: 'Bath Gem', brewery: 'Bath Ales', abv: '4.1%', style: 'Amber Ale' },
      { name: 'Cotswold Spring Best', brewery: 'Stroud Brewery', abv: '4.5%', style: 'Organic Bitter' },
      { name: 'Lilliput Pale', brewery: 'Electric Bear', abv: '3.8%', style: 'Crisp Session' },
    ],
    description: 'Walcot Street’s favorite micropub, housed in honey-colored Bath stone. Famous for its temperature-controlled stillage room visible behind glazed timber screens.',
  },
  {
    id: 'malt-and-hops',
    name: 'The Malt & Hops Parlour',
    tagline: 'High Peak warmth, crackling fires & artisan pies',
    town: 'Bakewell',
    county: 'Derbyshire',
    region: 'Peak District',
    address: '3 Matlock Street',
    postcode: 'DE45 1EE',
    phone: '01629 813770',
    image: '/images/hero.jpg',
    caskLines: 6,
    ciderCount: 8,
    dogFriendly: true,
    beerGarden: true,
    camraAward: 'Derbyshire Good Beer Guide Premier Pick',
    openingHours: {
      weekdays: '12:00 - 22:00',
      saturday: '11:00 - 23:00',
      sunday: '12:00 - 20:30',
    },
    currentAles: [
      { name: 'Peak Gold', brewery: 'Peak Ales', abv: '4.3%', style: 'Golden Ale' },
      { name: 'Bakewell Best', brewery: 'Thornbridge Brewery', abv: '4.5%', style: 'Classic Yorkshire-style Bitter' },
      { name: 'Jaipur IPA', brewery: 'Thornbridge Brewery', abv: '5.9%', style: 'Award-winning India Pale' },
    ],
    description: 'Welcoming muddy boots, well-behaved dogs, and discerning drinkers with comforting open fires, locally baked pasties, and immaculate cellarmanship.',
  },
];

export const DRINKS_DATA: DrinkItem[] = [
  {
    id: 'ale-1',
    name: 'Landlord Golden Cask',
    breweryOrProducer: 'Timothy Taylor\'s Brewery',
    origin: 'Keighley, West Yorkshire',
    category: 'Cask Ale',
    abv: '4.3%',
    notes: 'Complex citrus and floral hop aroma with rich malt base. CAMRA Champion Beer of Britain winner.',
    priceHalf: '£2.40',
    pricePint: '£4.60',
  },
  {
    id: 'ale-2',
    name: 'Citra Sunburst Pale',
    breweryOrProducer: 'Oakham Ales',
    origin: 'Peterborough, Cambridgeshire',
    category: 'Cask Ale',
    abv: '4.2%',
    notes: 'Crisp, refreshingly bitter with intense grapefruit, lychee and passionfruit character.',
    priceHalf: '£2.50',
    pricePint: '£4.80',
  },
  {
    id: 'ale-3',
    name: 'Old Peculier Traditional Ale',
    breweryOrProducer: 'Theakston Brewery',
    origin: 'Masham, North Yorkshire',
    category: 'Cask Ale',
    abv: '5.6%',
    notes: 'Full-bodied dark ruby ale with subtle black cherry, dark chocolate and banana ester undertones.',
    priceHalf: '£2.75',
    pricePint: '£5.20',
  },
  {
    id: 'ale-4',
    name: 'Steady Rolling Man',
    breweryOrProducer: 'DEYA Brewing Co.',
    origin: 'Cheltenham, Gloucestershire',
    category: 'Craft Keg',
    abv: '5.2%',
    notes: 'Incredible soft and juicy New England-style pale ale bursting with tropical mango and peach.',
    priceHalf: '£3.40',
    pricePint: '£6.50',
  },
  {
    id: 'cider-1',
    name: 'Dabinett Single Variety Vintage Cider',
    breweryOrProducer: 'Sheppy\'s Farmhouse',
    origin: 'Taunton, Somerset',
    category: 'Cider & Perry',
    abv: '6.5%',
    notes: 'Matured in oak vats. Rich bittersweet apple tannins, soft buttery vanilla finish.',
    priceHalf: '£2.70',
    pricePint: '£5.00',
  },
  {
    id: 'cider-2',
    name: 'Kentish Pip Craftsman Cloudy',
    breweryOrProducer: 'Kentish Pip Orchards',
    origin: 'Bekesbourne, Kent',
    category: 'Cider & Perry',
    abv: '5.4%',
    notes: 'Unfiltered, gently sparkling with crisp Bramley acidity balanced by sweet Cox dessert apples.',
    priceHalf: '£2.60',
    pricePint: '£4.90',
  },
  {
    id: 'wine-1',
    name: 'Bacchus Reserve English White',
    breweryOrProducer: 'Chapel Down Estate',
    origin: 'Tenterden, Kent',
    category: 'Fine Wine',
    abv: '12.0%',
    notes: 'England\'s signature grape: crisp elderflower, nettle and lime zest with flinty minerality.',
    priceHalf: '£5.20 (125ml)',
    pricePint: '£7.80 (175ml)',
  },
  {
    id: 'spirit-1',
    name: 'Small-Batch Damson & Juniper Gin',
    breweryOrProducer: 'Masons of Yorkshire',
    origin: 'Aiskew, North Yorkshire',
    category: 'Artisan Spirits',
    abv: '42.0%',
    notes: 'Steeped with hand-foraged Yorkshire hedgerow damsons, pink peppercorn and orange peel. Served with Fever-Tree Indian tonic.',
    priceHalf: '£4.50 (25ml)',
    pricePint: '£7.50 (50ml)',
  },
];

export const FOOD_DATA: FoodItem[] = [
  {
    id: 'food-1',
    name: 'Gourmet Free-Range Scotch Egg',
    description: 'Cumberland seasoned outdoor-reared pork with sage and toasted mace crumbs, soft molten golden yolk, served with Tracklements wholegrain mustard.',
    price: '£5.95',
    category: 'Bar Bites',
    pairing: 'Pairs brilliantly with Oakham Citra or Timothy Taylor Landlord',
  },
  {
    id: 'food-2',
    name: 'Authentic Melton Mowbray Pork Pie',
    description: 'Crisp hot-water crust pastry filled with uncured British pork jelly and seasoned prime meat, served with English piccalilli and pickled cornichons.',
    price: '£6.50',
    category: 'Artisan Pies',
    pairing: 'Superb with Old Peculier or deep dark mild ales',
  },
  {
    id: 'food-3',
    name: 'The Collective Ploughman’s Platter',
    description: 'Keen’s Somerset Cheddar, Colston Bassett Stilton, thick ham hock terrine, pickled onions, buttered sourdough, apple chutney and crisp celery.',
    price: '£13.50',
    category: 'Sharing Boards',
    pairing: 'Ideal with Sheppy\'s Vintage Cider or dry hopped bitters',
  },
  {
    id: 'food-4',
    name: 'Mature Cheddar & Ale Chutney Toastie',
    description: 'Slices of local artisanal sourdough griddled in farmhouse butter with 18-month aged cheddar, Worcestershire splash, and ale relish.',
    price: '£7.50',
    category: 'Bar Bites',
    pairing: 'Outstanding with any pale or golden ale',
    vegetarian: true,
  },
  {
    id: 'food-5',
    name: 'Hand-Rolled Flaky Sausage Roll',
    description: 'Gloucester Old Spot sausage meat with thyme and caramelized red onions, wrapped in butter puff pastry and sprinkled with nigella seeds.',
    price: '£4.95',
    category: 'Bar Bites',
    pairing: 'Best enjoyed with a half of Castle Gold',
  },
];

export const EVENTS_DATA: PubEvent[] = [
  {
    id: 'event-1',
    title: 'Sunday Acoustic Folk & Fiddle Session',
    pubName: 'The Copper Kettle Tap',
    location: 'York, North Yorkshire',
    date: 'Every Sunday',
    time: '16:00 - 19:00',
    category: 'Folk Session',
    description: 'Unamplified traditional acoustic jam with guest folk fiddlers, guitars, and tin whistles. Free entry, all welcome to bring instruments or simply listen.',
  },
  {
    id: 'event-2',
    title: 'Meet the Brewer: Northern Monk Cellar Tasting',
    pubName: 'The Hop & Anchor',
    location: 'Lincoln, Lincolnshire',
    date: 'Thursday, 12th November',
    time: '19:30 - 21:30',
    category: 'Meet The Brewer',
    description: 'Lead brewer guided tasting flight of 5 rare cask & wood-aged releases paired with artisanal local Lincolnshire cheeses and scotch eggs.',
  },
  {
    id: 'event-3',
    title: 'The Great Micropub Trivia & Ale Quiz',
    pubName: 'The Stumble Inn',
    location: 'Hebden Bridge, Yorkshire',
    date: 'Tuesday Evenings',
    time: '20:00 - 22:00',
    category: 'Pub Quiz',
    description: 'No apps, no smartphones, strictly pen-and-paper. 5 rounds of general knowledge, music trivia, and blind beer tasting round. £2 entry per person.',
  },
  {
    id: 'event-4',
    title: 'Kentish Harvest Cider & Perry Showcase',
    pubName: 'The Snug & Barrel',
    location: 'Canterbury, Kent',
    date: 'Saturday, 21st November',
    time: 'All Day from 12:00',
    category: 'Tasting',
    description: 'Celebrating the 2024 pressing season with 12 guest farmhouse ciders, hot spiced mulled cider by the fire, and local orchard growers.',
  },
];
