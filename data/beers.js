/* States from https://gist.github.com/mshafrir/2646763 */
var us_states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];


/* Top 50-100 beers from 2007-2013 ratebeer.com */
var beer_data = [
  {
    "order":1,
    "beer":"Westvleteren 12",
    "style":"Abt/Quadrupel",
    "brewer":"Westvleteren Abdij St. Sixtus",
    "state":"-",
    "country":"Belgium",
    "year":2010
  },
  {
    "order":2,
    "beer":"NÃ¤rke Kaggen Stormaktsporter",
    "style":"Imperial Stout",
    "brewer":"NÃ¤rke Kulturbryggeri",
    "state":"-",
    "country":"Sweden",
    "year":2010
  },
  {
    "order":3,
    "beer":"Cigar City Bourbon Barrel Aged Hunahpuâ€™s Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2010
  },
  {
    "order":4,
    "beer":"Three Floyds Oak Aged Dark Lord Russian Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2010
  },
  {
    "order":5,
    "beer":"Three Floyds Vanilla Bean Barrel Aged Dark Lord Russian Imperial Stout ",
    "style":"Imperial Stout",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2010
  },
  {
    "order":6,
    "beer":"AleSmith Speedway Stout",
    "style":"Imperial Stout",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":7,
    "beer":"Three Floyds Dark Lord Russian Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2010
  },
  {
    "order":8,
    "beer":"Founders Kentucky Breakfast Stout (KBS)",
    "style":"Imperial Stout",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2010
  },
  {
    "order":9,
    "beer":"Russian River Pliny the Elder",
    "style":"Imperial/Double IPA",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":10,
    "beer":"Rochefort Trappistes 10",
    "style":"Abt/Quadrupel",
    "brewer":"Brasserie Rochefort",
    "state":"-",
    "country":"Belgium",
    "year":2010
  },
  {
    "order":11,
    "beer":"Goose Island Bourbon County Stout",
    "style":"Imperial Stout",
    "brewer":"Goose Island Beer Company",
    "state":"Illinois",
    "country":"USA",
    "year":2010
  },
  {
    "order":12,
    "beer":"Bells Bourbon Barrel Double Cream/Expedition Stout",
    "style":"Imperial Stout",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2010
  },
  {
    "order":13,
    "beer":"AleSmith Kopi Luwak Speedway Stout",
    "style":"Imperial Stout",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":14,
    "beer":"Bells Expedition Stout",
    "style":"Imperial Stout",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2010
  },
  {
    "order":15,
    "beer":"Founders Canadian Breakfast Stout",
    "style":"Imperial Stout",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2010
  },
  {
    "order":16,
    "beer":"Mikkeller Beer Geek Brunch Weasel",
    "style":"Imperial Stout",
    "brewer":"Mikkeller",
    "state":"-",
    "country":"Denmark",
    "year":2010
  },
  {
    "order":17,
    "beer":"Cigar City Hunahpuâ€™s Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2010
  },
  {
    "order":18,
    "beer":"Deschutes The Abyss",
    "style":"Imperial Stout",
    "brewer":"Deschutes Brewery",
    "state":"Oregon",
    "country":"USA",
    "year":2010
  },
  {
    "order":19,
    "beer":"Stone Imperial Russian Stout",
    "style":"Imperial Stout",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":20,
    "beer":"Dieu du Ciel PÃ©chÃ© Mortel ",
    "style":"Imperial Stout",
    "brewer":"Dieu du Ciel",
    "state":"Quebec",
    "country":"Canada",
    "year":2010
  },
  {
    "order":21,
    "beer":"Bells Hopslam",
    "style":"Imperial/Double IPA",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2010
  },
  {
    "order":22,
    "beer":"The Bruery Black Tuesday Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"The Bruery",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":23,
    "beer":"Russian River Consecration",
    "style":"Sour Ale",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":24,
    "beer":"Struise Pannepot Reserva",
    "style":"Belgian Strong Ale",
    "brewer":"De Struise Brouwers",
    "state":"-",
    "country":"Belgium",
    "year":2010
  },
  {
    "order":25,
    "beer":"AleSmith Barrel Aged Speedway Stout",
    "style":"Imperial Stout",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":26,
    "beer":"Three Floyds Dreadnaught Imperial IPA",
    "style":"Imperial/Double IPA",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2010
  },
  {
    "order":27,
    "beer":"Hair of the Dog Matt ",
    "style":"Traditional Ale",
    "brewer":"Hair of the Dog Brewing Company",
    "state":"Oregon",
    "country":"USA",
    "year":2010
  },
  {
    "order":28,
    "beer":"North Coast Old Rasputin Anniversary Bourbon Barrel Aged Stout ",
    "style":"Imperial Stout",
    "brewer":"North Coast Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":29,
    "beer":"Westvleteren Extra 8",
    "style":"Belgian Strong Ale",
    "brewer":"Westvleteren Abdij St. Sixtus",
    "state":"-",
    "country":"Belgium",
    "year":2010
  },
  {
    "order":30,
    "beer":"Founders Breakfast Stout",
    "style":"Imperial Stout",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2010
  },
  {
    "order":31,
    "beer":"NÃ¤rke Stormaktsporter",
    "style":"Imperial Stout",
    "brewer":"NÃ¤rke Kulturbryggeri",
    "state":"-",
    "country":"Sweden",
    "year":2010
  },
  {
    "order":32,
    "beer":"Mikkeller Beer Geek Breakfast",
    "style":"Stout",
    "brewer":"Mikkeller",
    "state":"-",
    "country":"Denmark",
    "year":2010
  },
  {
    "order":33,
    "beer":"Great Divide Yeti Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Great Divide Brewing Company",
    "state":"Colorado",
    "country":"USA",
    "year":2010
  },
  {
    "order":34,
    "beer":"St. Bernardus Abt 12",
    "style":"Abt/Quadrupel",
    "brewer":"St. Bernard Brouwerij",
    "state":"-",
    "country":"Belgium",
    "year":2010
  },
  {
    "order":35,
    "beer":"Hoppin Frog Barrel Aged BORIS The Crusher ",
    "style":"Imperial Stout",
    "brewer":"Hoppin Frog",
    "state":"Ohio",
    "country":"USA",
    "year":2010
  },
  {
    "order":36,
    "beer":"Struise Black Albert",
    "style":"Imperial Stout",
    "brewer":"De Struise Brouwers",
    "state":"-",
    "country":"Belgium",
    "year":2010
  },
  {
    "order":37,
    "beer":"Surly Darkness",
    "style":"Imperial Stout",
    "brewer":"Surly Brewing Company",
    "state":"Minnesota",
    "country":"USA",
    "year":2010
  },
  {
    "order":38,
    "beer":"Great Divide Oak Aged Yeti Imperial Stout ",
    "style":"Imperial Stout",
    "brewer":"Great Divide Brewing Company",
    "state":"Colorado",
    "country":"USA",
    "year":2010
  },
  {
    "order":39,
    "beer":"Struise Pannepot",
    "style":"Belgian Strong Ale",
    "brewer":"De Struise Brouwers",
    "state":"-",
    "country":"Belgium",
    "year":2010
  },
  {
    "order":40,
    "beer":"Ballast Point Sculpin IPA (North Star)",
    "style":"India Pale Ale (IPA)",
    "brewer":"Ballast Point Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":41,
    "beer":"AleSmith IPA",
    "style":"India Pale Ale (IPA)",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":42,
    "beer":"Kuhnhenn Raspberry Eisbock",
    "style":"Fruit Beer",
    "brewer":"Kuhnhenn Brewing",
    "state":"Michigan",
    "country":"USA",
    "year":2010
  },
  {
    "order":43,
    "beer":"Oskar Blues Ten FIDY",
    "style":"Imperial Stout",
    "brewer":"Oskar Blues Grill & Brew",
    "state":"Colorado",
    "country":"USA",
    "year":2010
  },
  {
    "order":44,
    "beer":"Dieu du Ciel PÃ©chÃ© Mortel en FÃ»t de Bourbon AmÃ©ricain",
    "style":"Imperial Stout",
    "brewer":"Dieu du Ciel",
    "state":"Quebec",
    "country":"Canada",
    "year":2010
  },
  {
    "order":45,
    "beer":"Lost Abbey Yellow Bus ",
    "style":"Sour Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":46,
    "beer":"Pizza Port Cuvee de Tomme",
    "style":"Belgian Strong Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":47,
    "beer":"Hair of the Dog Adam",
    "style":"Traditional Ale",
    "brewer":"Hair of the Dog Brewing Company",
    "state":"Oregon",
    "country":"USA",
    "year":2010
  },
  {
    "order":48,
    "beer":"North Coast Old Rasputin Russian Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"North Coast Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":49,
    "beer":"Great Divide Espresso Oak Aged Yeti Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Great Divide Brewing Company",
    "state":"Colorado",
    "country":"USA",
    "year":2010
  },
  {
    "order":50,
    "beer":"Old Chimneys Good King Henry Special Reserve",
    "style":"Imperial Stout",
    "brewer":"Old Chimneys",
    "state":"Suffolk",
    "country":"England",
    "year":2010
  },
  {
    "order":51,
    "beer":"Cantillon BlÃ¥bÃ¦r Lambik",
    "style":"Lambic - Fruit",
    "brewer":"Cantillon",
    "state":"-",
    "country":"Belgium",
    "year":2010
  },
  {
    "order":52,
    "beer":"Port Brewing Older Viscosity",
    "style":"American Strong Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":53,
    "beer":"3 Fonteinen Hommage ",
    "style":"Lambic - Fruit",
    "brewer":"3 Fonteinen",
    "state":"-",
    "country":"Belgium",
    "year":2010
  },
  {
    "order":54,
    "beer":"Lost Abbey The Angels Share (Bourbon Barrel)",
    "style":"Barley Wine",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":55,
    "beer":"Lost Abbey Duck Duck Gooze ",
    "style":"Sour Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":56,
    "beer":"Cigar City 110K+OT Batch #2 I.R.I.S. ",
    "style":"Imperial Stout",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2010
  },
  {
    "order":57,
    "beer":"Cigar City Barrel Aged 110K+OT Batch #2",
    "style":"Imperial Stout",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2010
  },
  {
    "order":58,
    "beer":"Samuel Adams Utopias",
    "style":"Barley Wine",
    "brewer":"Boston Beer Company",
    "state":"Massachusetts",
    "country":"USA",
    "year":2010
  },
  {
    "order":59,
    "beer":"Alpine Beer Company Exponential Hoppiness",
    "style":"Imperial/Double IPA",
    "brewer":"Alpine Beer Company (CA)",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":60,
    "beer":"Midnight Sun Berserker Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Midnight Sun Brewing Company",
    "state":"Alaska",
    "country":"USA",
    "year":2010
  },
  {
    "order":61,
    "beer":"Dogfish Head 90 Minute Imperial IPA",
    "style":"Imperial/Double IPA",
    "brewer":"Dogfish Head Brewery",
    "state":"Delaware",
    "country":"USA",
    "year":2010
  },
  {
    "order":62,
    "beer":"New Glarus Raspberry Tart",
    "style":"Fruit Beer",
    "brewer":"New Glarus Brewing Company",
    "state":"Wisconsin",
    "country":"USA",
    "year":2010
  },
  {
    "order":63,
    "beer":"Bells Two Hearted Ale",
    "style":"India Pale Ale (IPA)",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2010
  },
  {
    "order":64,
    "beer":"Cigar City Campeador - Fergus Mor",
    "style":"American Strong Ale",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2010
  },
  {
    "order":65,
    "beer":"Cigar City Marshal Zhukovâ€™s Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2010
  },
  {
    "order":66,
    "beer":"Hoppin Frog BORIS The Crusher",
    "style":"Imperial Stout",
    "brewer":"Hoppin Frog",
    "state":"Ohio",
    "country":"USA",
    "year":2010
  },
  {
    "order":67,
    "beer":"Firestone Walker 13",
    "style":"American Strong Ale",
    "brewer":"Firestone Walker Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":68,
    "beer":"Rochefort Trappistes 8",
    "style":"Belgian Strong Ale",
    "brewer":"Brasserie Rochefort",
    "state":"-",
    "country":"Belgium",
    "year":2010
  },
  {
    "order":69,
    "beer":"Three Floyds Behemoth Barleywine",
    "style":"Barley Wine",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2010
  },
  {
    "order":70,
    "beer":"NÃ¸gne Ã˜ Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"NÃ¸gne Ã˜",
    "state":"-",
    "country":"Norway",
    "year":2010
  },
  {
    "order":71,
    "beer":"Ã˜lfabrikken Porter ",
    "style":"Porter",
    "brewer":"Bryggeriet Ã˜lfabrikken (Gourmetbryggeriet)",
    "state":"-",
    "country":"Denmark",
    "year":2010
  },
  {
    "order":72,
    "beer":"Hair of the Dog Fred from the Wood",
    "style":"Barley Wine",
    "brewer":"Hair of the Dog Brewing Company",
    "state":"Oregon",
    "country":"USA",
    "year":2010
  },
  {
    "order":73,
    "beer":"Russian River Temptation",
    "style":"Sour Ale",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":74,
    "beer":"Stone Ruination IPA",
    "style":"Imperial/Double IPA",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":75,
    "beer":"Cantillon Lou Pepe Pure Kriek",
    "style":"Lambic - Fruit",
    "brewer":"Cantillon",
    "state":"-",
    "country":"Belgium",
    "year":2010
  },
  {
    "order":76,
    "beer":"Dieu du Ciel Aphrodisiaque",
    "style":"Stout",
    "brewer":"Dieu du Ciel",
    "state":"Quebec",
    "country":"Canada",
    "year":2010
  },
  {
    "order":77,
    "beer":"Ayinger Celebrator Doppelbock",
    "style":"Doppelbock",
    "brewer":"Brauerei Aying",
    "state":"-",
    "country":"Germany",
    "year":2010
  },
  {
    "order":78,
    "beer":"Deschutes Black Butte XXI",
    "style":"Imperial/Strong Porter",
    "brewer":"Deschutes Brewery",
    "state":"Oregon",
    "country":"USA",
    "year":2010
  },
  {
    "order":79,
    "beer":"Amager Hr. Frederiksen",
    "style":"Imperial Stout",
    "brewer":"Amager Bryghus",
    "state":"-",
    "country":"Denmark",
    "year":2010
  },
  {
    "order":80,
    "beer":"Lost Abbey Serpents Stout",
    "style":"Imperial Stout",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":81,
    "beer":"Struise Pannepot Grand Reserva ",
    "style":"Belgian Strong Ale",
    "brewer":"De Struise Brouwers",
    "state":"-",
    "country":"Belgium",
    "year":2010
  },
  {
    "order":82,
    "beer":"Ommegang Rouge Grand Cru",
    "style":"Sour Ale",
    "brewer":"Brewery Ommegang (Moortgat)",
    "state":"New York",
    "country":"USA",
    "year":2010
  },
  {
    "order":83,
    "beer":"Captain Lawrence Cuvee de Castleton",
    "style":"Sour Ale",
    "brewer":"Captain Lawrence Brewing Company",
    "state":"New York",
    "country":"USA",
    "year":2010
  },
  {
    "order":84,
    "beer":"NÃ¸rrebro SEVEN Imperial Stout (Niepoort Barrel)",
    "style":"Imperial Stout",
    "brewer":"NÃ¸rrebro Bryghus",
    "state":"-",
    "country":"Denmark",
    "year":2010
  },
  {
    "order":85,
    "beer":"Bells The Oracle DIPA Ale",
    "style":"Imperial/Double IPA",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2010
  },
  {
    "order":86,
    "beer":"Founders Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2010
  },
  {
    "order":87,
    "beer":"New Glarus Wisconsin Belgian Red",
    "style":"Fruit Beer",
    "brewer":"New Glarus Brewing Company",
    "state":"Wisconsin",
    "country":"USA",
    "year":2010
  },
  {
    "order":88,
    "beer":"De Dolle Oerbier Special Reserva",
    "style":"Belgian Strong Ale",
    "brewer":"De Dolle Brouwers",
    "state":"-",
    "country":"Belgium",
    "year":2010
  },
  {
    "order":89,
    "beer":"Valley Brew Uberhoppy Imperial IPA",
    "style":"Imperial/Double IPA",
    "brewer":"Valley Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":90,
    "beer":"Odonata Rorieâ€™s Ale Batch 001",
    "style":"Abt/Quadrupel",
    "brewer":"Odonata Beer Company",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":91,
    "beer":"Lost Abbey Cable Car",
    "style":"Sour Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":92,
    "beer":"De Molen Hel & Verdoemenis (Hell & Damnation)",
    "style":"Imperial Stout",
    "brewer":"Brouwerij de Molen",
    "state":"-",
    "country":"Netherlands",
    "year":2010
  },
  {
    "order":93,
    "beer":"Cigar City Humidor Series Marshal Zhukovâ€™s Imperial Stout ",
    "style":"Imperial Stout",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2010
  },
  {
    "order":94,
    "beer":"Hair of the Dog Doggie Claws (2003-)",
    "style":"Barley Wine",
    "brewer":"Hair of the Dog Brewing Company",
    "state":"Oregon",
    "country":"USA",
    "year":2010
  },
  {
    "order":95,
    "beer":"AleSmith Barrel Aged Old Numbskull",
    "style":"Barley Wine",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":96,
    "beer":"Russian River Supplication",
    "style":"Sour Ale",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":97,
    "beer":"AleSmith Wee Heavy Scotch Ale",
    "style":"Scotch Ale",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":98,
    "beer":"AleSmith Old Numbskull",
    "style":"Barley Wine",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":99,
    "beer":"AleSmith YuleSmith (Summer) India Pale Ale",
    "style":"Imperial/Double IPA",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2010
  },
  {
    "order":100,
    "beer":"Bells Kalamazoo Stout",
    "style":"Stout",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2010
  },
  {
    "order":1,
    "beer":"Närke Kaggen Stormaktsporter",
    "style":"Imperial Stout",
    "brewer":"Närke Kulturbryggeri",
    "state":"-",
    "country":"Sweden",
    "year":2009
  },
  {
    "order":2,
    "beer":"Westvleteren Abt 12",
    "style":"Abt/Quadrupel",
    "brewer":"Westvleteren Abdij St. Sixtus",
    "state":"-",
    "country":"Belgium",
    "year":2009
  },
  {
    "order":3,
    "beer":"Three Floyds Dark Lord Russian Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2009
  },
  {
    "order":4,
    "beer":"Lost Abbey Yellow Bus ",
    "style":"Sour Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":5,
    "beer":"Struise Dirty Horse",
    "style":"Sour Ale",
    "brewer":"Struise",
    "state":"-",
    "country":"Belgium",
    "year":2009
  },
  {
    "order":6,
    "beer":"Mikkeller Beer Geek Brunch Weasel",
    "style":"Imperial Stout",
    "brewer":"Mikkeller",
    "state":"-",
    "country":"Denmark",
    "year":2009
  },
  {
    "order":7,
    "beer":"Three Floyds Oak Aged Dark Lord Russian Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2009
  },
  {
    "order":8,
    "beer":"AleSmith Speedway Stout",
    "style":"Imperial Stout",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":9,
    "beer":"Hair of the Dog Dave",
    "style":"Barley Wine",
    "brewer":"Hair of the Dog Brewing Company",
    "state":"Oregon",
    "country":"USA",
    "year":2009
  },
  {
    "order":10,
    "beer":"Bells Expedition Stout",
    "style":"Imperial Stout",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2009
  },
  {
    "order":11,
    "beer":"Struise Cuvée Delphine",
    "style":"Imperial Stout",
    "brewer":"Struise",
    "state":"-",
    "country":"Belgium",
    "year":2009
  },
  {
    "order":12,
    "beer":"Lost Abbey Isabelle Proximus",
    "style":"Sour Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":13,
    "beer":"Russian River Pliny the Elder",
    "style":"Imperial/Double IPA",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":14,
    "beer":"Three Floyds Dreadnaught Imperial IPA",
    "style":"Imperial/Double IPA",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2009
  },
  {
    "order":15,
    "beer":"Rochefort Trappistes 10",
    "style":"Abt/Quadrupel",
    "brewer":"Brasserie Rochefort",
    "state":"-",
    "country":"Belgium",
    "year":2009
  },
  {
    "order":16,
    "beer":"Russian River Pliny the Younger",
    "style":"Imperial/Double IPA",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":17,
    "beer":"Närke Stormaktsporter",
    "style":"Imperial Stout",
    "brewer":"Närke Kulturbryggeri",
    "state":"-",
    "country":"Sweden",
    "year":2009
  },
  {
    "order":18,
    "beer":"AleSmith Barrel Aged Speedway Stout",
    "style":"Imperial Stout",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":19,
    "beer":"Lost Abbey The Angels Share (Bourbon Barrel)",
    "style":"Barley Wine",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":20,
    "beer":"Bells Hopslam",
    "style":"Imperial/Double IPA",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2009
  },
  {
    "order":21,
    "beer":"Goose Island Bourbon County Stout",
    "style":"Imperial Stout",
    "brewer":"Goose Island Beer Company",
    "state":"Illinois",
    "country":"USA",
    "year":2009
  },
  {
    "order":22,
    "beer":"Westvleteren Extra 8",
    "style":"Belgian Strong Ale",
    "brewer":"Westvleteren Abdij St. Sixtus",
    "state":"-",
    "country":"Belgium",
    "year":2009
  },
  {
    "order":23,
    "beer":"Port Brewing Older Viscosity",
    "style":"American Strong Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":24,
    "beer":"Three Floyds Vanilla Bean Barrel Aged Dark Lord Russian Imperial Stout ",
    "style":"Imperial Stout",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2009
  },
  {
    "order":25,
    "beer":"Surly Darkness",
    "style":"Imperial Stout",
    "brewer":"Surly Brewing Company",
    "state":"Minnesota",
    "country":"USA",
    "year":2009
  },
  {
    "order":26,
    "beer":"Russian River Toronado 20th Anniversary ",
    "style":"Sour Ale",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":27,
    "beer":"Russian River Consecration",
    "style":"Sour Ale",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":28,
    "beer":"Stone Imperial Russian Stout",
    "style":"Imperial Stout",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":29,
    "beer":"Great Divide Oak Aged Yeti Imperial Stout ",
    "style":"Imperial Stout",
    "brewer":"Great Divide Brewing Company",
    "state":"Colorado",
    "country":"USA",
    "year":2009
  },
  {
    "order":30,
    "beer":"Struise Pannepot",
    "style":"Belgian Strong Ale",
    "brewer":"Struise",
    "state":"-",
    "country":"Belgium",
    "year":2009
  },
  {
    "order":31,
    "beer":"New Glarus Belgian Red",
    "style":"Fruit Beer",
    "brewer":"New Glarus Brewing Company",
    "state":"Wisconsin",
    "country":"USA",
    "year":2009
  },
  {
    "order":32,
    "beer":"Mikkeller Beer Geek Brunch One-for-One",
    "style":"Imperial Stout",
    "brewer":"Mikkeller",
    "state":"-",
    "country":"Denmark",
    "year":2009
  },
  {
    "order":33,
    "beer":"Russian River Deviation (Bottleworks IX)",
    "style":"Sour Ale",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":34,
    "beer":"Deschutes The Abyss",
    "style":"Imperial Stout",
    "brewer":"Deschutes Brewery",
    "state":"Oregon",
    "country":"USA",
    "year":2009
  },
  {
    "order":35,
    "beer":"3 Fonteinen Hommage ",
    "style":"Lambic - Fruit",
    "brewer":"3 Fonteinen",
    "state":"-",
    "country":"Belgium",
    "year":2009
  },
  {
    "order":36,
    "beer":"AleSmith Barrel Aged Old Numbskull",
    "style":"Barley Wine",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":37,
    "beer":"Russian River Supplication",
    "style":"Sour Ale",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":38,
    "beer":"Kuhnhenn Bourbon Barrel Barley Wine",
    "style":"Barley Wine",
    "brewer":"Kuhnhenn Brewing",
    "state":"Michigan",
    "country":"USA",
    "year":2009
  },
  {
    "order":39,
    "beer":"Dieu du Ciel Péché Mortel ",
    "style":"Imperial Stout",
    "brewer":"Dieu du Ciel",
    "state":"Quebec",
    "country":"Canada",
    "year":2009
  },
  {
    "order":40,
    "beer":"Founders Kentucky Breakfast Bourbon Aged Stout",
    "style":"Imperial Stout",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2009
  },
  {
    "order":41,
    "beer":"Hair of the Dog Adam from the Wood",
    "style":"Traditional Ale",
    "brewer":"Hair of the Dog Brewing Company",
    "state":"Oregon",
    "country":"USA",
    "year":2009
  },
  {
    "order":42,
    "beer":"Livery Bourbon Cask Aged Wheat Trippelbock",
    "style":"Weizen Bock",
    "brewer":"The Livery",
    "state":"Michigan",
    "country":"USA",
    "year":2009
  },
  {
    "order":43,
    "beer":"Stone Bourbon Barrel Old Guardian Barley Wine",
    "style":"Barley Wine",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":44,
    "beer":"Midnight Sun Sloth",
    "style":"Imperial Stout",
    "brewer":"Midnight Sun Brewing Company",
    "state":"Alaska",
    "country":"USA",
    "year":2009
  },
  {
    "order":45,
    "beer":"Bush de Nuits",
    "style":"Belgian Strong Ale",
    "brewer":"Dubuisson",
    "state":"-",
    "country":"Belgium",
    "year":2009
  },
  {
    "order":46,
    "beer":"Struise Double Black",
    "style":"Imperial Stout",
    "brewer":"Struise",
    "state":"-",
    "country":"Belgium",
    "year":2009
  },
  {
    "order":47,
    "beer":"Town Hall Kentucky Dessert",
    "style":"Imperial Stout",
    "brewer":"Minneapolis Town Hall Brewery",
    "state":"Minnesota",
    "country":"USA",
    "year":2009
  },
  {
    "order":48,
    "beer":"Lost Abbey The Angels Share",
    "style":"Barley Wine",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":49,
    "beer":"Russian River Temptation",
    "style":"Sour Ale",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":50,
    "beer":"Founders Breakfast Stout",
    "style":"Imperial Stout",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2009
  },
  {
    "order":51,
    "beer":"Selins Grove The Phoenix Kriek",
    "style":"Fruit Beer",
    "brewer":"Selins Grove Brewing Co.",
    "state":"Pennsylvania",
    "country":"USA",
    "year":2009
  },
  {
    "order":52,
    "beer":"St. Bernardus Abt 12",
    "style":"Abt/Quadrupel",
    "brewer":"St. Bernard Brouwerij",
    "state":"-",
    "country":"Belgium",
    "year":2009
  },
  {
    "order":53,
    "beer":"Cantillon Lou Pepe Pure Kriek",
    "style":"Lambic - Fruit",
    "brewer":"Cantillon",
    "state":"-",
    "country":"Belgium",
    "year":2009
  },
  {
    "order":54,
    "beer":"Lost Abbey Cable Car",
    "style":"Sour Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":55,
    "beer":"Surly Barrel Aged Darkness",
    "style":"Imperial Stout",
    "brewer":"Surly Brewing Company",
    "state":"Minnesota",
    "country":"USA",
    "year":2009
  },
  {
    "order":56,
    "beer":"Old Chimneys Good King Henry Special Reserve",
    "style":"Imperial Stout",
    "brewer":"Old Chimneys",
    "state":"Suffolk",
    "country":"England",
    "year":2009
  },
  {
    "order":57,
    "beer":"Green Flash Bourbon Barrel Aged Double Stout",
    "style":"Stout",
    "brewer":"Green Flash Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":58,
    "beer":"Lost Abbey Sinners 08",
    "style":"Sour Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":59,
    "beer":"Stone Bourbon Barrel Russian Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":60,
    "beer":"Kuhnhenn Raspberry Eisbock",
    "style":"Fruit Beer",
    "brewer":"Kuhnhenn Brewing",
    "state":"Michigan",
    "country":"USA",
    "year":2009
  },
  {
    "order":61,
    "beer":"AleSmith IPA",
    "style":"India Pale Ale (IPA)",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":62,
    "beer":"AleSmith Wee Heavy Scotch Ale",
    "style":"Scotch Ale",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":63,
    "beer":"New Glarus Raspberry Tart",
    "style":"Fruit Beer",
    "brewer":"New Glarus Brewing Company",
    "state":"Wisconsin",
    "country":"USA",
    "year":2009
  },
  {
    "order":64,
    "beer":"Founders Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2009
  },
  {
    "order":65,
    "beer":"Portsmouth Kate The Great Russian Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Portsmouth Brewery",
    "state":"New Hampshire",
    "country":"USA",
    "year":2009
  },
  {
    "order":66,
    "beer":"Mikkeller Beer Geek Breakfast",
    "style":"Stout",
    "brewer":"Mikkeller",
    "state":"-",
    "country":"Denmark",
    "year":2009
  },
  {
    "order":67,
    "beer":"Nøgne Ø Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Nøgne Ø",
    "state":"-",
    "country":"Norway",
    "year":2009
  },
  {
    "order":68,
    "beer":"Jolly Pumpkin Bière de Mars Grand Reserve",
    "style":"Sour Ale",
    "brewer":"Jolly Pumpkin Artisan Ales",
    "state":"Michigan",
    "country":"USA",
    "year":2009
  },
  {
    "order":69,
    "beer":"Firestone Walker 12",
    "style":"American Strong Ale",
    "brewer":"Firestone Walker Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":70,
    "beer":"De Molen Hel and Verdoemenis (Hell and Damnation)",
    "style":"Imperial Stout",
    "brewer":"Brouwerij de Molen",
    "state":"-",
    "country":"Netherlands",
    "year":2009
  },
  {
    "order":71,
    "beer":"Southern Tier Choklat",
    "style":"Imperial Stout",
    "brewer":"Southern Tier Brewing Company",
    "state":"New York",
    "country":"USA",
    "year":2009
  },
  {
    "order":72,
    "beer":"Thirsty Dog Siberian Night Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Thirsty Dog Brewing Company",
    "state":"Ohio",
    "country":"USA",
    "year":2009
  },
  {
    "order":73,
    "beer":"Southampton Imperial Russian Stout",
    "style":"Imperial Stout",
    "brewer":"Southampton Publick House",
    "state":"New York",
    "country":"USA",
    "year":2009
  },
  {
    "order":74,
    "beer":"Barley Johns The Dark Knight (Returns)",
    "style":"Imperial/Strong Porter",
    "brewer":"Barley Johns Brew Pub",
    "state":"Minnesota",
    "country":"USA",
    "year":2009
  },
  {
    "order":75,
    "beer":"Valley Brew Uberhoppy Imperial IPA",
    "style":"Imperial/Double IPA",
    "brewer":"Valley Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":76,
    "beer":"Dieu du Ciel Aphrodisiaque",
    "style":"Stout",
    "brewer":"Dieu du Ciel",
    "state":"Quebec",
    "country":"Canada",
    "year":2009
  },
  {
    "order":77,
    "beer":"Stone Ruination IPA",
    "style":"Imperial/Double IPA",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":78,
    "beer":"New Belgium La Folie",
    "style":"Sour Ale",
    "brewer":"New Belgium Brewing Company",
    "state":"Colorado",
    "country":"USA",
    "year":2009
  },
  {
    "order":79,
    "beer":"Three Floyds Behemoth Barleywine",
    "style":"Barley Wine",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2009
  },
  {
    "order":80,
    "beer":"Hair of the Dog Adam",
    "style":"Traditional Ale",
    "brewer":"Hair of the Dog Brewing Company",
    "state":"Oregon",
    "country":"USA",
    "year":2009
  },
  {
    "order":81,
    "beer":"Lost Abbey Veritas 003",
    "style":"Belgian Strong Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":82,
    "beer":"Valley Brew Stockton Sour (Phils Wild Mild)",
    "style":"Sour Ale",
    "brewer":"Valley Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":83,
    "beer":"Valley Brew Decadence 12 Cuvee Speciale",
    "style":"Abt/Quadrupel",
    "brewer":"Valley Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":84,
    "beer":"Stone Brandy Barrel Double Bastard",
    "style":"American Strong Ale",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":85,
    "beer":"Iron Hill Oak Aged Old Tom",
    "style":"Barley Wine",
    "brewer":"Iron Hill Wilmington",
    "state":"Delaware",
    "country":"USA",
    "year":2009
  },
  {
    "order":86,
    "beer":"Pizza Port Tovarish Imperial Espresso Stout",
    "style":"Imperial Stout",
    "brewer":"Pizza Port (Solana Beach)",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":87,
    "beer":"Hoppin Frog BORIS The Crusher",
    "style":"Imperial Stout",
    "brewer":"Hoppin Frog",
    "state":"Ohio",
    "country":"USA",
    "year":2009
  },
  {
    "order":88,
    "beer":"Cantillon Blåbær Lambik",
    "style":"Lambic - Fruit",
    "brewer":"Cantillon",
    "state":"-",
    "country":"Belgium",
    "year":2009
  },
  {
    "order":89,
    "beer":"Oskar Blues Ten FIDY",
    "style":"Imperial Stout",
    "brewer":"Oskar Blues Grill and Brew",
    "state":"Colorado",
    "country":"USA",
    "year":2009
  },
  {
    "order":90,
    "beer":"North Coast Anniversary Barrel-Aged Old Rasputin",
    "style":"Imperial Stout",
    "brewer":"North Coast Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":91,
    "beer":"Struise Black Albert",
    "style":"Imperial Stout",
    "brewer":"Struise",
    "state":"-",
    "country":"Belgium",
    "year":2009
  },
  {
    "order":92,
    "beer":"Ølfabrikken Porter ",
    "style":"Porter",
    "brewer":"Bryggeriet Ølfabrikken (Gourmetbryggeriet)",
    "state":"-",
    "country":"Denmark",
    "year":2009
  },
  {
    "order":93,
    "beer":"Tyranena Devil Over A Barrel",
    "style":"Imperial/Strong Porter",
    "brewer":"Tyranena Brewing",
    "state":"Wisconsin",
    "country":"USA",
    "year":2009
  },
  {
    "order":94,
    "beer":"Ayinger Celebrator Doppelbock",
    "style":"Doppelbock",
    "brewer":"Brauerei Aying",
    "state":"-",
    "country":"Germany",
    "year":2009
  },
  {
    "order":95,
    "beer":"Pizza Port Cuvee de Tomme",
    "style":"Belgian Strong Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":96,
    "beer":"Founders Porter",
    "style":"Porter",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2009
  },
  {
    "order":97,
    "beer":"Russian River Beatification (Batch 002 on)",
    "style":"Sour Ale",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2009
  },
  {
    "order":98,
    "beer":"Surly 16 Grit",
    "style":"Imperial/Double IPA",
    "brewer":"Surly Brewing Company",
    "state":"Minnesota",
    "country":"USA",
    "year":2009
  },
  {
    "order":99,
    "beer":"Captain Lawrence Cuvee de Castleton",
    "style":"Sour Ale",
    "brewer":"Captain Lawrence Brewing Company",
    "state":"New York",
    "country":"USA",
    "year":2009
  },
  {
    "order":100,
    "beer":"Nørrebro SEVEN Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Nørrebro Bryghus",
    "state":"-",
    "country":"Denmark",
    "year":2009
  },
  {
    "order":1,
    "beer":"Three Floyds Oak Aged Dark Lord Russian Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2008
  },
  {
    "order":2,
    "beer":"Westvleteren Abt 12",
    "style":"Abt/Quadrupel",
    "brewer":"Westvleteren Abdij St. Sixtus",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":3,
    "beer":"Närke Kaggen Stormaktsporter",
    "style":"Imperial Stout",
    "brewer":"Närke Kulturbryggeri",
    "state":"-",
    "country":"Sweden",
    "year":2008
  },
  {
    "order":4,
    "beer":"Struise Black Albert",
    "style":"Imperial Stout",
    "brewer":"Struise",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":5,
    "beer":"Surly Darkness",
    "style":"Imperial Stout",
    "brewer":"Surly Brewing Company",
    "state":"Minnesota",
    "country":"USA",
    "year":2008
  },
  {
    "order":6,
    "beer":"Lost Abbey The Angels Share (Bourbon Barrel)",
    "style":"Barley Wine",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":7,
    "beer":"Bells Expedition Stout",
    "style":"Imperial Stout",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2008
  },
  {
    "order":8,
    "beer":"Stone Bourbon Barrel Russian Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":9,
    "beer":"Bells Bourbon Barrel Double Cream/Expedition Stout",
    "style":"Imperial Stout",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2008
  },
  {
    "order":10,
    "beer":"Struise Aardnon - Earthnun",
    "style":"Belgian Strong Ale",
    "brewer":"Struise",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":11,
    "beer":"Lost Abbey The Angels Share",
    "style":"Barley Wine",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":12,
    "beer":"Rochefort Trappistes 10",
    "style":"Abt/Quadrupel",
    "brewer":"Brasserie Rochefort",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":13,
    "beer":"Three Floyds Dark Lord Russian Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2008
  },
  {
    "order":14,
    "beer":"Russian River Pliny the Younger",
    "style":"Imperial/Double IPA",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":15,
    "beer":"North Coast Old Stock Cellar Reserve Brandy Barrel",
    "style":"Barley Wine",
    "brewer":"North Coast Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":16,
    "beer":"Struise Pannepot",
    "style":"Belgian Strong Ale",
    "brewer":"Struise",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":17,
    "beer":"Kuhnhenn Raspberry Eisbock",
    "style":"Fruit Beer",
    "brewer":"Kuhnhenn Brewing",
    "state":"Michigan",
    "country":"USA",
    "year":2008
  },
  {
    "order":18,
    "beer":"AleSmith Speedway Stout",
    "style":"Imperial Stout",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":19,
    "beer":"Bells Bourbon Barrel Batch 7000 Ale",
    "style":"Imperial Stout",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2008
  },
  {
    "order":20,
    "beer":"Struise Pannepot Reserva Oak Aged",
    "style":"Belgian Strong Ale",
    "brewer":"Struise",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":21,
    "beer":"Nøgne Ø Dark Horizon First Edition",
    "style":"Imperial Stout",
    "brewer":"Nøgne Ø",
    "state":"-",
    "country":"Norway",
    "year":2008
  },
  {
    "order":22,
    "beer":"Westvleteren Extra 8",
    "style":"Belgian Strong Ale",
    "brewer":"Westvleteren Abdij St. Sixtus",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":23,
    "beer":"Russian River Pliny the Elder",
    "style":"Imperial/Double IPA",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":24,
    "beer":"Great Divide Oak Aged Yeti Imperial Stout ",
    "style":"Imperial Stout",
    "brewer":"Great Divide Brewing Company",
    "state":"Colorado",
    "country":"USA",
    "year":2008
  },
  {
    "order":25,
    "beer":"Stone Imperial Russian Stout",
    "style":"Imperial Stout",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":26,
    "beer":"Foothills Sexual Chocolate Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Foothills Brewing",
    "state":"North Carolina",
    "country":"USA",
    "year":2008
  },
  {
    "order":27,
    "beer":"Mikkeller X Imperial Stout 2007",
    "style":"Imperial Stout",
    "brewer":"Mikkeller",
    "state":"-",
    "country":"Denmark",
    "year":2008
  },
  {
    "order":28,
    "beer":"Goose Island Bourbon County Stout",
    "style":"Imperial Stout",
    "brewer":"Goose Island Beer Company",
    "state":"Illinois",
    "country":"USA",
    "year":2008
  },
  {
    "order":29,
    "beer":"St. Bernardus Abt 12",
    "style":"Abt/Quadrupel",
    "brewer":"St. Bernard Brouwerij",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":30,
    "beer":"Founders Kentucky Breakfast Bourbon Aged Stout",
    "style":"Imperial Stout",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2008
  },
  {
    "order":31,
    "beer":"Founders Breakfast Stout",
    "style":"Imperial Stout",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2008
  },
  {
    "order":32,
    "beer":"Närke Stormaktsporter",
    "style":"Imperial Stout",
    "brewer":"Närke Kulturbryggeri",
    "state":"-",
    "country":"Sweden",
    "year":2008
  },
  {
    "order":33,
    "beer":"Rochefort Trappistes 8",
    "style":"Belgian Strong Ale",
    "brewer":"Brasserie Rochefort",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":34,
    "beer":"Ølfabrikken Porter ",
    "style":"Porter",
    "brewer":"Ølfabrikken",
    "state":"-",
    "country":"Denmark",
    "year":2008
  },
  {
    "order":35,
    "beer":"New Glarus Belgian Red",
    "style":"Fruit Beer",
    "brewer":"New Glarus Brewing Company",
    "state":"Wisconsin",
    "country":"USA",
    "year":2008
  },
  {
    "order":36,
    "beer":"Hair of the Dog Adam",
    "style":"Traditional Ale",
    "brewer":"Hair of the Dog Brewing Company",
    "state":"Oregon",
    "country":"USA",
    "year":2008
  },
  {
    "order":37,
    "beer":"Surly Barrel Aged Darkness",
    "style":"Imperial Stout",
    "brewer":"Surly Brewing Company",
    "state":"Minnesota",
    "country":"USA",
    "year":2008
  },
  {
    "order":38,
    "beer":"Lost Abbey Cable Car",
    "style":"Sour Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":39,
    "beer":"AleSmith Barrel Aged Wee Heavy",
    "style":"Scotch Ale",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":40,
    "beer":"Rock Bottom Chicago Clares Thirsty Ale",
    "style":"Imperial Stout",
    "brewer":"Rock Bottom Chicago",
    "state":"Illinois",
    "country":"USA",
    "year":2008
  },
  {
    "order":41,
    "beer":"Russian River Supplication",
    "style":"Sour Ale",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":42,
    "beer":"Pizza Port Cuvee de Tomme",
    "style":"Belgian Strong Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":43,
    "beer":"Three Floyds Dreadnaught Imperial IPA",
    "style":"Imperial/Double IPA",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2008
  },
  {
    "order":44,
    "beer":"Hoppin Frog BORIS The Crusher",
    "style":"Imperial Stout",
    "brewer":"Hoppin Frog",
    "state":"Ohio",
    "country":"USA",
    "year":2008
  },
  {
    "order":45,
    "beer":"Mikkeller Beer Geek Breakfast",
    "style":"Stout",
    "brewer":"Mikkeller",
    "state":"-",
    "country":"Denmark",
    "year":2008
  },
  {
    "order":46,
    "beer":"Livery Bourbon Cask Aged Wheat Trippelbock",
    "style":"Weizen Bock",
    "brewer":"The Livery",
    "state":"Michigan",
    "country":"USA",
    "year":2008
  },
  {
    "order":47,
    "beer":"Amager Hr. Frederiksen",
    "style":"Imperial Stout",
    "brewer":"Amager Bryghus",
    "state":"-",
    "country":"Denmark",
    "year":2008
  },
  {
    "order":48,
    "beer":"Dogfish Head World Wide Stout 2001/2003-Present (18%)",
    "style":"Imperial Stout",
    "brewer":"Dogfish Head Brewery",
    "state":"Delaware",
    "country":"USA",
    "year":2008
  },
  {
    "order":49,
    "beer":"New Glarus Raspberry Tart",
    "style":"Fruit Beer",
    "brewer":"New Glarus Brewing Company",
    "state":"Wisconsin",
    "country":"USA",
    "year":2008
  },
  {
    "order":50,
    "beer":"Dieu du Ciel Péché Mortel ",
    "style":"Imperial Stout",
    "brewer":"Dieu du Ciel!",
    "state":"Quebec",
    "country":"Canada",
    "year":2008
  },
  {
    "order":51,
    "beer":"AleSmith Decadence 2006",
    "style":"American Strong Ale",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":52,
    "beer":"Russian River Toronado 20th Anniversary ",
    "style":"Belgian Strong Ale",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":53,
    "beer":"Deschutes The Abyss",
    "style":"Imperial Stout",
    "brewer":"Deschutes Brewery",
    "state":"Oregon",
    "country":"USA",
    "year":2008
  },
  {
    "order":54,
    "beer":"Cantillon Blåbær Lambik",
    "style":"Lambic - Fruit",
    "brewer":"Cantillon",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":55,
    "beer":"Thirsty Dog Siberian Night Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Thirsty Dog Brewing Company",
    "state":"Ohio",
    "country":"USA",
    "year":2008
  },
  {
    "order":56,
    "beer":"Hair of the Dog Fred from the Wood",
    "style":"Barley Wine",
    "brewer":"Hair of the Dog Brewing Company",
    "state":"Oregon",
    "country":"USA",
    "year":2008
  },
  {
    "order":57,
    "beer":"Great Divide Yeti Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Great Divide Brewing Company",
    "state":"Colorado",
    "country":"USA",
    "year":2008
  },
  {
    "order":58,
    "beer":"Cantillon Lou Pepe Pure Kriek",
    "style":"Lambic - Fruit",
    "brewer":"Cantillon",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":59,
    "beer":"AleSmith IPA",
    "style":"India Pale Ale (IPA)",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":60,
    "beer":"Flossmoor Station Wooden Hell",
    "style":"Barley Wine",
    "brewer":"Flossmoor Station Restaurant & Brewery",
    "state":"Illinois",
    "country":"USA",
    "year":2008
  },
  {
    "order":61,
    "beer":"3 Fonteinen Hommage ",
    "style":"Lambic - Fruit",
    "brewer":"3 Fonteinen",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":62,
    "beer":"Captain Lawrence Cuvee de Castleton",
    "style":"Sour Ale",
    "brewer":"Captain Lawrence Brewing Company",
    "state":"New York",
    "country":"USA",
    "year":2008
  },
  {
    "order":63,
    "beer":"North Coast Old Rasputin Russian Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"North Coast Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":64,
    "beer":"AleSmith YuleSmith (Summer) India Pale Ale",
    "style":"Imperial/Double IPA",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":65,
    "beer":"Three Floyds Alpha King",
    "style":"American Pale Ale",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2008
  },
  {
    "order":66,
    "beer":"AleSmith Wee Heavy Scotch Ale",
    "style":"Scotch Ale",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":67,
    "beer":"Närke ?",
    "style":"Barley Wine",
    "brewer":"Närke Kulturbryggeri",
    "state":"-",
    "country":"Sweden",
    "year":2008
  },
  {
    "order":68,
    "beer":"Old Chimneys Good King Henry Special Reserve",
    "style":"Imperial Stout",
    "brewer":"Old Chimneys",
    "state":"-",
    "country":"England",
    "year":2008
  },
  {
    "order":69,
    "beer":"AleSmith Barrel Aged Decadence ",
    "style":"Old Ale",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":70,
    "beer":"The Duck-Rabbit Baltic Porter",
    "style":"Baltic Porter",
    "brewer":"The Duck-Rabbit Craft Brewery",
    "state":"North Carolina",
    "country":"USA",
    "year":2008
  },
  {
    "order":71,
    "beer":"Mikkeller Black Hole",
    "style":"Imperial Stout",
    "brewer":"Mikkeller",
    "state":"-",
    "country":"Denmark",
    "year":2008
  },
  {
    "order":72,
    "beer":"Struise Aardmonnik / Earthmonk",
    "style":"Sour Ale",
    "brewer":"Struise",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":73,
    "beer":"Lost Abbey Red Poppy Ale",
    "style":"Sour Ale",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":74,
    "beer":"AleSmith Old Numbskull",
    "style":"Barley Wine",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":75,
    "beer":"Stone Ruination IPA",
    "style":"Imperial/Double IPA",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":76,
    "beer":"Kuhnhenn Bourbon Barrel Barley Wine",
    "style":"Barley Wine",
    "brewer":"Kuhnhenn Brewing",
    "state":"Michigan",
    "country":"USA",
    "year":2008
  },
  {
    "order":77,
    "beer":"Barley Johns The Dark Knight (Returns)",
    "style":"American Strong Ale",
    "brewer":"Barley Johns Brew Pub",
    "state":"Minnesota",
    "country":"USA",
    "year":2008
  },
  {
    "order":78,
    "beer":"Bells Hopslam",
    "style":"Imperial/Double IPA",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2008
  },
  {
    "order":79,
    "beer":"Two Hearted Ale",
    "style":"India Pale Ale (IPA)",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2008
  },
  {
    "order":80,
    "beer":"Ayinger Celebrator Doppelbock",
    "style":"Doppelbock",
    "brewer":"Brauerei Aying",
    "state":"-",
    "country":"Germany",
    "year":2008
  },
  {
    "order":81,
    "beer":"Three Floyds Behemoth Barleywine",
    "style":"Barley Wine",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2008
  },
  {
    "order":82,
    "beer":"3 Fonteinen Oude Geuze Vintage (all from 2002-*)",
    "style":"Lambic - Gueuze",
    "brewer":"3 Fonteinen",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":83,
    "beer":"Nøgne Ø Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Nøgne Ø",
    "state":"-",
    "country":"Norway",
    "year":2008
  },
  {
    "order":84,
    "beer":"Oskar Blues Ten FIDY",
    "style":"Imperial Stout",
    "brewer":"Oskar Blues Grill & Brew",
    "state":"Colorado",
    "country":"USA",
    "year":2008
  },
  {
    "order":85,
    "beer":"Barley Johns Barrel-Aged Rosies Ale (Batch 2)",
    "style":"Barley Wine",
    "brewer":"Barley Johns Brew Pub",
    "state":"Minnesota",
    "country":"USA",
    "year":2008
  },
  {
    "order":86,
    "beer":"Mikkeller Beer Geek Breakfast Pooh Coffee Dry Hopped Cask Festival Edition 2007",
    "style":"Sweet Stout",
    "brewer":"Mikkeller",
    "state":"-",
    "country":"Denmark",
    "year":2008
  },
  {
    "order":87,
    "beer":"Milton Marcus Aurelius",
    "style":"Imperial Stout",
    "brewer":"Milton",
    "state":"-",
    "country":"England",
    "year":2008
  },
  {
    "order":88,
    "beer":"Great Lakes Barrel-Aged Blackout Stout",
    "style":"Imperial Stout",
    "brewer":"Great Lakes Brewing Company",
    "state":"Ohio",
    "country":"USA",
    "year":2008
  },
  {
    "order":89,
    "beer":"AleSmith Barrel Aged Old Numbskull",
    "style":"Barley Wine",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":90,
    "beer":"Bush Prestige (Scaldis Prestige)",
    "style":"Belgian Strong Ale",
    "brewer":"Dubuisson",
    "state":"-",
    "country":"Belgium",
    "year":2008
  },
  {
    "order":91,
    "beer":"Dogfish Head 90 Minute Imperial IPA",
    "style":"Imperial/Double IPA",
    "brewer":"Dogfish Head Brewery",
    "state":"Delaware",
    "country":"USA",
    "year":2008
  },
  {
    "order":92,
    "beer":"Russian River Temptation",
    "style":"Sour Ale",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":93,
    "beer":"Three Floyds Alpha Klaus Christmas Porter",
    "style":"Porter",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2008
  },
  {
    "order":94,
    "beer":"Selins Grove The Phoenix Kriek",
    "style":"Fruit Beer",
    "brewer":"Selins Grove Brewing Co.",
    "state":"Pennsylvania",
    "country":"USA",
    "year":2008
  },
  {
    "order":95,
    "beer":"Pizza Port Hop 15",
    "style":"Imperial/Double IPA",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":96,
    "beer":"Leinenkugels Big Eddy Imperial Stout",
    "style":"Imperial Stout",
    "brewer":"Leinenkugel Brewing Company (SABMiller)",
    "state":"Wisconsin",
    "country":"USA",
    "year":2008
  },
  {
    "order":97,
    "beer":"Southern Tier Jah-va",
    "style":"Imperial Stout",
    "brewer":"Southern Tier Brewing Company",
    "state":"New York",
    "country":"USA",
    "year":2008
  },
  {
    "order":98,
    "beer":"Flossmoor Station Young Sarge",
    "style":"Imperial Stout",
    "brewer":"Flossmoor Station Restaurant & Brewery",
    "state":"Illinois",
    "country":"USA",
    "year":2008
  },
  {
    "order":99,
    "beer":"AleSmith YuleSmith (Winter) Imperial Red Ale",
    "style":"American Strong Ale",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2008
  },
  {
    "order":100,
    "beer":"Southern Tier Oat",
    "style":"Imperial Stout",
    "brewer":"Southern Tier Brewing Company",
    "state":"New York",
    "country":"USA",
    "year":2008
  },
  {
    "order":1,
    "beer":"Närke Kaggen Stormaktsporter",
    "style":"",
    "brewer":"Närke Kulturbryggeri",
    "state":"-",
    "country":"Sweden",
    "year":2011
  },
  {
    "order":2,
    "beer":"Westvleteren 12",
    "style":"",
    "brewer":"Westvleteren Abdij St. Sixtus",
    "state":"-",
    "country":"Belgium",
    "year":2011
  },
  {
    "order":3,
    "beer":"Russian River Pliny the Younger",
    "style":"",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":4,
    "beer":"Cigar City Zhukov’s Final Push",
    "style":"",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2011
  },
  {
    "order":5,
    "beer":"Goose Island Rare Bourbon County Stout",
    "style":"",
    "brewer":"Goose Island Beer Company",
    "state":"Illinois",
    "country":"USA",
    "year":2011
  },
  {
    "order":6,
    "beer":"AleSmith Speedway Stout",
    "style":"",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":7,
    "beer":"Three Floyds Dark Lord Russian Imperial Stout",
    "style":"",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2011
  },
  {
    "order":8,
    "beer":"Russian River Pliny the Elder",
    "style":"",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":9,
    "beer":"Founders Kentucky Breakfast Stout (KBS)",
    "style":"",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2011
  },
  {
    "order":10,
    "beer":"AleSmith Barrel Aged Speedway Stout",
    "style":"",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":11,
    "beer":"Westvleteren Extra 8",
    "style":"",
    "brewer":"Westvleteren Abdij St. Sixtus",
    "state":"-",
    "country":"Belgium",
    "year":2011
  },
  {
    "order":12,
    "beer":"Bells Hopslam",
    "style":"",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2011
  },
  {
    "order":13,
    "beer":"Cigar City Brandy Barrel Aged Hunahpu’s Imperial Stout ",
    "style":"",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2011
  },
  {
    "order":14,
    "beer":"Founders Canadian Breakfast Stout",
    "style":"",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2011
  },
  {
    "order":15,
    "beer":"Cigar City Hunahpu’s Imperial Stout",
    "style":"",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2011
  },
  {
    "order":16,
    "beer":"Rochefort Trappistes 10",
    "style":"",
    "brewer":"Brasserie Rochefort",
    "state":"-",
    "country":"Belgium",
    "year":2011
  },
  {
    "order":17,
    "beer":"Deschutes The Abyss",
    "style":"",
    "brewer":"Deschutes Brewery",
    "state":"Oregon",
    "country":"USA",
    "year":2011
  },
  {
    "order":18,
    "beer":"Mikkeller Beer Geek Brunch Weasel",
    "style":"",
    "brewer":"Mikkeller",
    "state":"-",
    "country":"Denmark",
    "year":2011
  },
  {
    "order":19,
    "beer":"Goose Island Bourbon County Stout",
    "style":"",
    "brewer":"Goose Island Beer Company",
    "state":"Illinois",
    "country":"USA",
    "year":2011
  },
  {
    "order":20,
    "beer":"Russian River Supplication",
    "style":"",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":21,
    "beer":"Bells Expedition Stout",
    "style":"",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2011
  },
  {
    "order":22,
    "beer":"Three Floyds Dreadnaught Imperial IPA",
    "style":"",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2011
  },
  {
    "order":23,
    "beer":"Goose Island Bourbon County Coffee Stout",
    "style":"",
    "brewer":"Goose Island Beer Company",
    "state":"Illinois",
    "country":"USA",
    "year":2011
  },
  {
    "order":24,
    "beer":"Stone Imperial Russian Stout",
    "style":"",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":25,
    "beer":"Three Floyds Oak Aged Dark Lord Russian Imperial Stout",
    "style":"",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2011
  },
  {
    "order":26,
    "beer":"Närke Stormaktsporter",
    "style":"",
    "brewer":"Närke Kulturbryggeri",
    "state":"-",
    "country":"Sweden",
    "year":2011
  },
  {
    "order":27,
    "beer":"Lost Abbey Cable Car",
    "style":"",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":28,
    "beer":"Great Divide Espresso Oak Aged Yeti Imperial Stout",
    "style":"",
    "brewer":"Great Divide Brewing Company",
    "state":"Colorado",
    "country":"USA",
    "year":2011
  },
  {
    "order":29,
    "beer":"De Molen Hel & Verdoemenis (Wild Turkey Barrel)",
    "style":"",
    "brewer":"Brouwerij de Molen",
    "state":"-",
    "country":"Netherlands",
    "year":2011
  },
  {
    "order":30,
    "beer":"Struise Pannepot",
    "style":"",
    "brewer":"De Struise Brouwers",
    "state":"-",
    "country":"Belgium",
    "year":2011
  },
  {
    "order":31,
    "beer":"Cantillon Blåbær Lambik",
    "style":"",
    "brewer":"Cantillon",
    "state":"-",
    "country":"Belgium",
    "year":2011
  },
  {
    "order":32,
    "beer":"Russian River Consecration",
    "style":"",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":33,
    "beer":"Lost Abbey The Angel’s Share Grand Cru",
    "style":"",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":34,
    "beer":"Firestone Walker Parabola",
    "style":"",
    "brewer":"Firestone Walker Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":35,
    "beer":"Three Floyds Vanilla Bean Barrel Aged Dark Lord Russian Imperial Stout ",
    "style":"",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2011
  },
  {
    "order":36,
    "beer":"Oskar Blues Ten FIDY",
    "style":"",
    "brewer":"Oskar Blues Grill & Brew",
    "state":"Colorado",
    "country":"USA",
    "year":2011
  },
  {
    "order":37,
    "beer":"Goose Island Bourbon County Vanilla Stout",
    "style":"",
    "brewer":"Goose Island Beer Company",
    "state":"Illinois",
    "country":"USA",
    "year":2011
  },
  {
    "order":38,
    "beer":"Mikkeller Beer Geek Breakfast",
    "style":"",
    "brewer":"Mikkeller",
    "state":"-",
    "country":"Denmark",
    "year":2011
  },
  {
    "order":39,
    "beer":"North Coast Old Rasputin Russian Imperial Stout",
    "style":"",
    "brewer":"North Coast Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":40,
    "beer":"Great Divide Yeti Imperial Stout",
    "style":"",
    "brewer":"Great Divide Brewing Company",
    "state":"Colorado",
    "country":"USA",
    "year":2011
  },
  {
    "order":41,
    "beer":"North Coast Old Rasputin Anniversary Bourbon Barrel Aged Stout ",
    "style":"",
    "brewer":"North Coast Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":42,
    "beer":"Närke Konjaks! Stormaktsporter",
    "style":"",
    "brewer":"Närke Kulturbryggeri",
    "state":"-",
    "country":"Sweden",
    "year":2011
  },
  {
    "order":43,
    "beer":"Great Divide Oak Aged Yeti Imperial Stout ",
    "style":"",
    "brewer":"Great Divide Brewing Company",
    "state":"Colorado",
    "country":"USA",
    "year":2011
  },
  {
    "order":44,
    "beer":"Stone Bourbon Barrel Russian Imperial Stout",
    "style":"",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":45,
    "beer":"De Molen Hel & Verdoemenis 666",
    "style":"",
    "brewer":"Brouwerij de Molen",
    "state":"-",
    "country":"Netherlands",
    "year":2011
  },
  {
    "order":46,
    "beer":"Cigar City Bourbon Barrel Aged Hunahpu’s Imperial Stout",
    "style":"",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2011
  },
  {
    "order":47,
    "beer":"Founders Breakfast Stout",
    "style":"",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2011
  },
  {
    "order":48,
    "beer":"De Molen Hel & Verdoemenis Misto B.A.",
    "style":"",
    "brewer":"Brouwerij de Molen",
    "state":"-",
    "country":"Netherlands",
    "year":2011
  },
  {
    "order":49,
    "beer":"Lost Abbey Framboise de Amorosa",
    "style":"",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":50,
    "beer":"AleSmith Kopi Luwak Speedway Stout",
    "style":"",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":51,
    "beer":"Dieu du Ciel Péché Mortel ",
    "style":"",
    "brewer":"Dieu du Ciel",
    "state":"Quebec",
    "country":"Canada",
    "year":2011
  },
  {
    "order":52,
    "beer":"Lost Abbey Veritas 006",
    "style":"",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":53,
    "beer":"St. Bernardus Abt 12",
    "style":"",
    "brewer":"St. Bernard Brouwerij",
    "state":"-",
    "country":"Belgium",
    "year":2011
  },
  {
    "order":54,
    "beer":"Surly Darkness",
    "style":"",
    "brewer":"Surly Brewing Company",
    "state":"Minnesota",
    "country":"USA",
    "year":2011
  },
  {
    "order":55,
    "beer":"Struise Black Albert",
    "style":"",
    "brewer":"De Struise Brouwers",
    "state":"-",
    "country":"Belgium",
    "year":2011
  },
  {
    "order":56,
    "beer":"Lost Abbey The Angels Share (Bourbon Barrel)",
    "style":"",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":57,
    "beer":"Hoppin Frog Barrel Aged BORIS The Crusher ",
    "style":"",
    "brewer":"Hoppin Frog Brewery",
    "state":"Ohio",
    "country":"USA",
    "year":2011
  },
  {
    "order":58,
    "beer":"De Molen Hel & Verdoemenis (Hell & Damnation)",
    "style":"",
    "brewer":"Brouwerij de Molen",
    "state":"-",
    "country":"Netherlands",
    "year":2011
  },
  {
    "order":59,
    "beer":"Cigar City Brandy Barrel Aged Marshal Zhukov’s Imperial Stout ",
    "style":"",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2011
  },
  {
    "order":60,
    "beer":"Hair of the Dog Adam",
    "style":"",
    "brewer":"Hair of the Dog Brewing Company",
    "state":"Oregon",
    "country":"USA",
    "year":2011
  },
  {
    "order":61,
    "beer":"Great Divide Barrel Aged Yeti",
    "style":"",
    "brewer":"Great Divide Brewing Company",
    "state":"Colorado",
    "country":"USA",
    "year":2011
  },
  {
    "order":62,
    "beer":"Lost Abbey Veritas 007",
    "style":"",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":63,
    "beer":"3 Fonteinen Oude Geuze Vintage (all from 2002-*)",
    "style":"",
    "brewer":"3 Fonteinen",
    "state":"-",
    "country":"Belgium",
    "year":2011
  },
  {
    "order":64,
    "beer":"Dogfish Head 90 Minute Imperial IPA",
    "style":"",
    "brewer":"Dogfish Head Brewery",
    "state":"Delaware",
    "country":"USA",
    "year":2011
  },
  {
    "order":65,
    "beer":"Cigar City Marshal Zhukov’s Double Barrel Aged Imperial Stout - 2010",
    "style":"",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2011
  },
  {
    "order":66,
    "beer":"AleSmith IPA",
    "style":"",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":67,
    "beer":"Bells Bourbon Barrel Double Cream/Expedition Stout",
    "style":"",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2011
  },
  {
    "order":68,
    "beer":"New Glarus Wisconsin Belgian Red",
    "style":"",
    "brewer":"New Glarus Brewing Company",
    "state":"Wisconsin",
    "country":"USA",
    "year":2011
  },
  {
    "order":69,
    "beer":"Ballast Point Sculpin IPA (North Star)",
    "style":"",
    "brewer":"Ballast Point Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":70,
    "beer":"Cigar City Marshal Zhukov’s Imperial Stout",
    "style":"",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2011
  },
  {
    "order":71,
    "beer":"Nøgne Ø Imperial Stout",
    "style":"",
    "brewer":"Nøgne Ø",
    "state":"-",
    "country":"Norway",
    "year":2011
  },
  {
    "order":72,
    "beer":"Bells Two Hearted Ale",
    "style":"",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2011
  },
  {
    "order":73,
    "beer":"De Molen Ziel & Zaligheid",
    "style":"",
    "brewer":"Brouwerij de Molen",
    "state":"-",
    "country":"Netherlands",
    "year":2011
  },
  {
    "order":74,
    "beer":"Struise Pannepot Reserva",
    "style":"",
    "brewer":"De Struise Brouwers",
    "state":"-",
    "country":"Belgium",
    "year":2011
  },
  {
    "order":75,
    "beer":"Struise Black Damnation II - Mocha Bomb",
    "style":"",
    "brewer":"De Struise Brouwers",
    "state":"-",
    "country":"Belgium",
    "year":2011
  },
  {
    "order":76,
    "beer":"Three Floyds Behemoth Barleywine",
    "style":"",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2011
  },
  {
    "order":77,
    "beer":"Samuel Adams Utopias",
    "style":"",
    "brewer":"Boston Beer Company",
    "state":"Massachusetts",
    "country":"USA",
    "year":2011
  },
  {
    "order":78,
    "beer":"Stone Ruination IPA",
    "style":"",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":79,
    "beer":"Portsmouth Kate The Great Russian Imperial Stout",
    "style":"",
    "brewer":"Portsmouth Brewery",
    "state":"New Hampshire",
    "country":"USA",
    "year":2011
  },
  {
    "order":80,
    "beer":"3 Fonteinen Schaerbeekse Kriek",
    "style":"",
    "brewer":"3 Fonteinen",
    "state":"-",
    "country":"Belgium",
    "year":2011
  },
  {
    "order":81,
    "beer":"Russian River Temptation",
    "style":"",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":82,
    "beer":"Cigar City Hopped up Johnnie",
    "style":"",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2011
  },
  {
    "order":83,
    "beer":"Russian River Blind Pig IPA",
    "style":"",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":84,
    "beer":"Ølfabrikken Porter ",
    "style":"",
    "brewer":"Bryggeriet Ølfabrikken (Gourmetbryggeriet)",
    "state":"-",
    "country":"Denmark",
    "year":2011
  },
  {
    "order":85,
    "beer":"Hoppin Frog BORIS The Crusher",
    "style":"",
    "brewer":"Hoppin Frog Brewery",
    "state":"Ohio",
    "country":"USA",
    "year":2011
  },
  {
    "order":86,
    "beer":"Struise Black Damnation IV - Coffee Club",
    "style":"",
    "brewer":"De Struise Brouwers",
    "state":"-",
    "country":"Belgium",
    "year":2011
  },
  {
    "order":87,
    "beer":"Founders Black Biscuit",
    "style":"",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2011
  },
  {
    "order":88,
    "beer":"Lost Abbey Deliverance",
    "style":"",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":89,
    "beer":"Dieu du Ciel Aphrodisiaque",
    "style":"",
    "brewer":"Dieu du Ciel",
    "state":"Quebec",
    "country":"Canada",
    "year":2011
  },
  {
    "order":90,
    "beer":"Stone Sublimely Self Righteous Ale",
    "style":"",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":91,
    "beer":"Southampton Imperial Russian Stout",
    "style":"",
    "brewer":"Southampton Publick House",
    "state":"New York",
    "country":"USA",
    "year":2011
  },
  {
    "order":92,
    "beer":"Goose Island Night Stalker",
    "style":"",
    "brewer":"Goose Island Beer Company",
    "state":"Illinois",
    "country":"USA",
    "year":2011
  },
  {
    "order":93,
    "beer":"Port Brewing Hop 15",
    "style":"",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":94,
    "beer":"Rochefort Trappistes 8",
    "style":"",
    "brewer":"Brasserie Rochefort",
    "state":"-",
    "country":"Belgium",
    "year":2011
  },
  {
    "order":95,
    "beer":"Founders Imperial Stout",
    "style":"",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2011
  },
  {
    "order":96,
    "beer":"New Glarus Raspberry Tart",
    "style":"",
    "brewer":"New Glarus Brewing Company",
    "state":"Wisconsin",
    "country":"USA",
    "year":2011
  },
  {
    "order":97,
    "beer":"Lost Abbey Duck Duck Gooze ",
    "style":"",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":98,
    "beer":"Hair of the Dog Matt ",
    "style":"",
    "brewer":"Hair of the Dog Brewing Company",
    "state":"Oregon",
    "country":"USA",
    "year":2011
  },
  {
    "order":99,
    "beer":"Ballast Point Victory at Sea ",
    "style":"",
    "brewer":"Ballast Point Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2011
  },
  {
    "order":100,
    "beer":"BrewDog Abstrakt AB:04",
    "style":"",
    "brewer":"BrewDog",
    "state":"-",
    "country":"Scotland",
    "year":2011
  },
  {
    "order":1,
    "beer":"Westvleteren 12 (XII)",
    "style":"",
    "brewer":"Westvleteren Abdij St. Sixtus",
    "state":"-",
    "country":"Belgium",
    "year":2013
  },
  {
    "order":2,
    "beer":"Russian River Pliny the Elder",
    "style":"",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2013
  },
  {
    "order":3,
    "beer":"Russian River Pliny the Younger",
    "style":"",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2013
  },
  {
    "order":4,
    "beer":"Founders KBS (Kentucky Breakfast Stout)",
    "style":"",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2013
  },
  {
    "order":5,
    "beer":"Cigar City Hunahpu’s Imperial Stout - Brandy Barrel Aged ",
    "style":"",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2013
  },
  {
    "order":6,
    "beer":"Bells Hopslam",
    "style":"",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2013
  },
  {
    "order":7,
    "beer":"Rochefort Trappistes 10",
    "style":"",
    "brewer":"Brasserie Rochefort",
    "state":"-",
    "country":"Belgium",
    "year":2013
  },
  {
    "order":8,
    "beer":"Goose Island Bourbon County Stout",
    "style":"",
    "brewer":"Goose Island Beer Company (AB-InBev)",
    "state":"Illinois",
    "country":"USA",
    "year":2013
  },
  {
    "order":9,
    "beer":"AleSmith Speedway Stout",
    "style":"",
    "brewer":"AleSmith Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2013
  },
  {
    "order":10,
    "beer":"Bells Black Note Stout",
    "style":"",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2013
  },
  {
    "order":11,
    "beer":"Alchemist Heady Topper",
    "style":"",
    "brewer":"The Alchemist",
    "state":"Vermont",
    "country":"USA",
    "year":2013
  },
  {
    "order":12,
    "beer":"Hill Farmstead Ann",
    "style":"",
    "brewer":"Hill Farmstead Brewery",
    "state":"Vermont",
    "country":"USA",
    "year":2013
  },
  {
    "order":13,
    "beer":"Cigar City Pilot Series Miami Madness",
    "style":"",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2013
  },
  {
    "order":14,
    "beer":"Firestone Walker Parabola",
    "style":"",
    "brewer":"Firestone Walker Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2013
  },
  {
    "order":15,
    "beer":"Deschutes The Abyss",
    "style":"",
    "brewer":"Deschutes Brewery",
    "state":"Oregon",
    "country":"USA",
    "year":2013
  },
  {
    "order":16,
    "beer":"Hill Farmstead Abner",
    "style":"",
    "brewer":"Hill Farmstead Brewery",
    "state":"Vermont",
    "country":"USA",
    "year":2013
  },
  {
    "order":17,
    "beer":"Westvleteren Extra 8",
    "style":"",
    "brewer":"Westvleteren Abdij St. Sixtus",
    "state":"-",
    "country":"Belgium",
    "year":2013
  },
  {
    "order":18,
    "beer":"Bells Expedition Stout",
    "style":"",
    "brewer":"Bells Brewery",
    "state":"Michigan",
    "country":"USA",
    "year":2013
  },
  {
    "order":19,
    "beer":"Cantillon Fou’ Foune ",
    "style":"",
    "brewer":"Cantillon",
    "state":"-",
    "country":"Belgium",
    "year":2013
  },
  {
    "order":20,
    "beer":"Mikkeller Beer Geek Brunch Weasel",
    "style":"",
    "brewer":"Mikkeller",
    "state":"-",
    "country":"Denmark",
    "year":2013
  },
  {
    "order":21,
    "beer":"Three Floyds Dreadnaught Imperial IPA",
    "style":"",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2013
  },
  {
    "order":22,
    "beer":"Three Floyds Zombie Dust",
    "style":"",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2013
  },
  {
    "order":23,
    "beer":"3 Fonteinen Framboos (Framboise)",
    "style":"",
    "brewer":"3 Fonteinen",
    "state":"-",
    "country":"Belgium",
    "year":2013
  },
  {
    "order":24,
    "beer":"Hill Farmstead Society & Solitude #5",
    "style":"",
    "brewer":"Hill Farmstead Brewery",
    "state":"Vermont",
    "country":"USA",
    "year":2013
  },
  {
    "order":25,
    "beer":"Three Floyds Dark Lord Russian Imperial Stout (Bourbon Vanilla Bean)",
    "style":"",
    "brewer":"Three Floyds Brewing Company",
    "state":"Indiana",
    "country":"USA",
    "year":2013
  },
  {
    "order":26,
    "beer":"Hill Farmstead Everett",
    "style":"",
    "brewer":"Hill Farmstead Brewery",
    "state":"Vermont",
    "country":"USA",
    "year":2013
  },
  {
    "order":27,
    "beer":"Peg’s G.O.O.D. RareR DOS",
    "style":"",
    "brewer":"Peg’s Cantina",
    "state":"Florida",
    "country":"USA",
    "year":2013
  },
  {
    "order":28,
    "beer":"Founders Imperial Stout",
    "style":"",
    "brewer":"Founders Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2013
  },
  {
    "order":29,
    "beer":"Dieu du Ciel Péché Mortel ",
    "style":"",
    "brewer":"Dieu du Ciel",
    "state":"Quebec",
    "country":"Canada",
    "year":2013
  },
  {
    "order":30,
    "beer":"St. Bernardus Abt 12",
    "style":"",
    "brewer":"St. Bernardus Brouwerij",
    "state":"-",
    "country":"Belgium",
    "year":2013
  },
  {
    "order":31,
    "beer":"North Coast Old Rasputin Anniversary Bourbon Barrel Aged Stout ",
    "style":"",
    "brewer":"North Coast Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2013
  },
  {
    "order":32,
    "beer":"Oskar Blues Ten FIDY",
    "style":"",
    "brewer":"Oskar Blues Grill & Brew",
    "state":"Colorado",
    "country":"USA",
    "year":2013
  },
  {
    "order":33,
    "beer":"Surly Darkness",
    "style":"",
    "brewer":"Surly Brewing Company",
    "state":"Minnesota",
    "country":"USA",
    "year":2013
  },
  {
    "order":34,
    "beer":"Cigar City Marshal Zhukov’s Imperial Stout",
    "style":"",
    "brewer":"Cigar City Brewing",
    "state":"Florida",
    "country":"USA",
    "year":2013
  },
  {
    "order":35,
    "beer":"Lost Abbey Deliverance",
    "style":"",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2013
  },
  {
    "order":36,
    "beer":"Struise Pannepot",
    "style":"",
    "brewer":"De Struise Brouwers",
    "state":"-",
    "country":"Belgium",
    "year":2013
  },
  {
    "order":37,
    "beer":"Närke Konjaks! Stormaktsporter",
    "style":"",
    "brewer":"Närke Kulturbryggeri",
    "state":"-",
    "country":"Sweden",
    "year":2013
  },
  {
    "order":38,
    "beer":"Stone Imperial Russian Stout",
    "style":"",
    "brewer":"Stone Brewing Co.",
    "state":"California",
    "country":"USA",
    "year":2013
  },
  {
    "order":39,
    "beer":"3 Fonteinen Oude Geuze (Armand & Tommy)",
    "style":"",
    "brewer":"3 Fonteinen",
    "state":"-",
    "country":"Belgium",
    "year":2013
  },
  {
    "order":40,
    "beer":"Dark Horse Bourbon Barrel Plead the 5th Imperial Stout",
    "style":"",
    "brewer":"Dark Horse Brewing Company",
    "state":"Michigan",
    "country":"USA",
    "year":2013
  },
  {
    "order":41,
    "beer":"Southern Tier Choklat",
    "style":"",
    "brewer":"Southern Tier Brewing Company",
    "state":"New York",
    "country":"USA",
    "year":2013
  },
  {
    "order":42,
    "beer":"New Glarus Serendipity",
    "style":"",
    "brewer":"New Glarus Brewing Company",
    "state":"Wisconsin",
    "country":"USA",
    "year":2013
  },
  {
    "order":43,
    "beer":"Great Divide Espresso Oak Aged Yeti Imperial Stout",
    "style":"",
    "brewer":"Great Divide Brewing Company",
    "state":"Colorado",
    "country":"USA",
    "year":2013
  },
  {
    "order":44,
    "beer":"Struise Black Albert",
    "style":"",
    "brewer":"De Struise Brouwers",
    "state":"-",
    "country":"Belgium",
    "year":2013
  },
  {
    "order":45,
    "beer":"Avery Uncle Jacob’s Stout",
    "style":"",
    "brewer":"Avery Brewing Company",
    "state":"Colorado",
    "country":"USA",
    "year":2013
  },
  {
    "order":46,
    "beer":"Lost Abbey Barrel Aged Serpents Stout with Cacao Nibs and Coffee",
    "style":"",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2013
  },
  {
    "order":47,
    "beer":"Russian River Beatification (Batch 002 +)",
    "style":"",
    "brewer":"Russian River Brewing",
    "state":"California",
    "country":"USA",
    "year":2013
  },
  {
    "order":48,
    "beer":"Ballast Point Victory at Sea ",
    "style":"",
    "brewer":"Ballast Point Brewing Company",
    "state":"California",
    "country":"USA",
    "year":2013
  },
  {
    "order":49,
    "beer":"Cantillon Lou Pepe Pure Kriek",
    "style":"",
    "brewer":"Cantillon",
    "state":"-",
    "country":"Belgium",
    "year":2013
  },
  {
    "order":50,
    "beer":"Lost Abbey The Angels Share (Bourbon Barrel)",
    "style":"",
    "brewer":"Port Brewing/Lost Abbey",
    "state":"California",
    "country":"USA",
    "year":2013
  }
];