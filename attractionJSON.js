const attraction = [
  {
    country: "Pakistan",
    imgLink: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0",
    cities: [
      {
        city: "Lahore",
        places: [
          {
            placeName: "Badshahi Mosque",
            imgLink:
              "https://images.unsplash.com/photo-1601042825451-36e7b8a5f5d6",
            description:
              "One of the largest mosques in the world, built during the Mughal era.",
          },
          {
            placeName: "Lahore Fort",
            imgLink:
              "https://images.unsplash.com/photo-1624958723474-6d4a6f5c8e1a",
            description: "Historic Mughal fort and UNESCO World Heritage site.",
          },
          {
            placeName: "Shalimar Gardens",
            imgLink:
              "https://images.unsplash.com/photo-1593697820672-b4c7f8d9e1a2",
            description:
              "Mughal-era gardens known for their symmetry and fountains.",
          },
        ],
      },
      {
        city: "Karachi",
        places: [
          {
            placeName: "Clifton Beach",
            imgLink:
              "https://images.unsplash.com/photo-1588581939864-064e6b68e3a1",
            description: "Popular beach along the Arabian Sea.",
          },
          {
            placeName: "Mazar-e-Quaid",
            imgLink:
              "https://images.unsplash.com/photo-1619451334791-9e0e6c4b9d2f",
            description:
              "Mausoleum of Pakistan’s founder, Muhammad Ali Jinnah.",
          },
          {
            placeName: "Pakistan Maritime Museum",
            imgLink:
              "https://images.unsplash.com/photo-1600788907416-456f6a4e3c9b",
            description: "Naval museum showcasing maritime history.",
          },
        ],
      },
      {
        city: "Islamabad",
        places: [
          {
            placeName: "Faisal Mosque",
            imgLink:
              "https://images.unsplash.com/photo-1603791452906-bcbb8a4f9a2e",
            description: "Iconic modern mosque set against Margalla Hills.",
          },
          {
            placeName: "Daman-e-Koh",
            imgLink:
              "https://images.unsplash.com/photo-1598257006458-087fbe7a6c1e",
            description: "Hilltop viewpoint overlooking Islamabad.",
          },
          {
            placeName: "Pakistan Monument",
            imgLink:
              "https://images.unsplash.com/photo-1613924601028-8b5c3a1e7d4f",
            description: "National monument symbolizing unity.",
          },
        ],
      },
    ],
  },
  {
    country: "France",
    imgLink: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    cities: [
      {
        city: "Paris",
        places: [
          {
            placeName: "Eiffel Tower",
            imgLink:
              "https://images.unsplash.com/photo-1549640376-8e8d5a39a23a",
            description:
              "An iconic iron tower offering panoramic views of Paris.",
          },
          {
            placeName: "Louvre Museum",
            imgLink:
              "https://images.unsplash.com/photo-1529429617124-a32e7d3c9b2d",
            description:
              "The world’s largest art museum and historic monument.",
          },
        ],
      },
      {
        city: "Nice",
        places: [
          {
            placeName: "Promenade des Anglais",
            imgLink:
              "https://images.unsplash.com/photo-1505731132164-cca903a4f4b0",
            description:
              "A scenic seafront boulevard along the Mediterranean coast.",
          },
          {
            placeName: "Castle Hill",
            imgLink:
              "https://images.unsplash.com/photo-1598890777032-bde8358e32f8",
            description: "A hilltop park offering panoramic views of Nice.",
          },
        ],
      },
    ],
  },
  {
    country: "Italy",
    imgLink: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    cities: [
      {
        city: "Rome",
        places: [
          {
            placeName: "Colosseum",
            imgLink:
              "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
            description:
              "An ancient Roman amphitheater known for gladiator battles.",
          },
          {
            placeName: "Vatican City",
            imgLink:
              "https://images.unsplash.com/photo-1529260830199-42c24126f198",
            description:
              "Home to the Pope and famous religious art and architecture.",
          },
        ],
      },
      {
        city: "Venice",
        places: [
          {
            placeName: "Grand Canal",
            imgLink:
              "https://images.unsplash.com/photo-1509358271058-acd22cc93898",
            description:
              "The main waterway of Venice lined with historic buildings.",
          },
          {
            placeName: "St. Mark’s Square",
            imgLink:
              "https://images.unsplash.com/photo-1514890547357-a9ee288728e0",
            description: "A famous public square surrounded by landmarks.",
          },
        ],
      },
    ],
  },
  {
    country: "Japan",
    imgLink: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",

    cities: [
      {
        city: "Tokyo",
        places: [
          {
            placeName: "Shibuya Crossing",
            imgLink:
              "https://images.unsplash.com/photo-1549693578-d683be217e58",
            description:
              "One of the busiest pedestrian crossings in the world.",
          },
          {
            placeName: "Tokyo Tower",
            imgLink:
              "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
            description: "A communications tower offering city views.",
          },
        ],
      },
      {
        city: "Kyoto",
        places: [
          {
            placeName: "Fushimi Inari Shrine",
            imgLink:
              "https://images.unsplash.com/photo-1526481280691-3d3a6c7f47d5",
            description: "Famous for its thousands of red torii gates.",
          },
          {
            placeName: "Kinkaku-ji",
            imgLink:
              "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
            description: "A Zen temple covered in gold leaf.",
          },
        ],
      },
    ],
  },
  {
    country: "United States",
    imgLink: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    cities: [
      {
        city: "New York",
        places: [
          {
            placeName: "Statue of Liberty",
            imgLink:
              "https://images.unsplash.com/photo-1534447677768-be436bb09401",
            description: "A symbol of freedom and democracy.",
          },
          {
            placeName: "Central Park",
            imgLink:
              "https://images.unsplash.com/photo-1534854638093-bada1813ca19",
            description: "A large urban park in the heart of Manhattan.",
          },
        ],
      },
      {
        city: "San Francisco",
        places: [
          {
            placeName: "Golden Gate Bridge",
            imgLink:
              "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
            description: "A famous red suspension bridge.",
          },
          {
            placeName: "Alcatraz Island",
            imgLink:
              "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
            description: "Historic island prison turned tourist attraction.",
          },
        ],
      },
    ],
  },
  {
    country: "Australia",
    imgLink: "https://images.unsplash.com/photo-1506973035872-a4f23f3ba3db",
    cities: [
      {
        city: "Sydney",
        places: [
          {
            placeName: "Sydney Opera House",
            imgLink:
              "https://images.unsplash.com/photo-1506973035872-a4f23f3ba3db",
            description: "A world-famous performing arts center.",
          },
          {
            placeName: "Bondi Beach",
            imgLink:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            description: "A popular beach known for surfing.",
          },
        ],
      },
      {
        city: "Melbourne",
        places: [
          {
            placeName: "Federation Square",
            imgLink:
              "https://images.unsplash.com/photo-1526481280691-d6a1d5b3b12a",
            description: "A cultural hub with events and museums.",
          },
          {
            placeName: "Great Ocean Road",
            imgLink:
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            description: "A scenic coastal drive with stunning views.",
          },
        ],
      },
    ],
  },
  {
    country: "Argentina",
    imgLink: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    cities: [
      {
        city: "Buenos Aires",
        places: [
          {
            placeName: "Obelisco",
            imgLink:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            description: "Famous city landmark.",
          },
          {
            placeName: "La Boca",
            imgLink:
              "https://images.unsplash.com/photo-1548266652-5a6b7c8d9e0f",
            description: "Colorful neighborhood.",
          },
          {
            placeName: "Teatro Colón",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-7b6c5d4e3f2a",
            description: "Famous opera house.",
          },
        ],
      },
      {
        city: "Mendoza",
        places: [
          {
            placeName: "Aconcagua",
            imgLink:
              "https://images.unsplash.com/photo-1549924231-2a3b4c5d6e7f",
            description: "Highest mountain in South America.",
          },
          {
            placeName: "Bodega Norton",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-8b456906c813",
            description: "Famous winery.",
          },
          {
            placeName: "Plaza Independencia",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "Central square in Mendoza.",
          },
        ],
      },
    ],
  },
  {
    country: "Egypt",
    imgLink: "https://images.unsplash.com/photo-1505731132164-cca903a4f4b0",
    cities: [
      {
        city: "Cairo",
        places: [
          {
            placeName: "Pyramids of Giza",
            imgLink:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            description: "Ancient pyramids.",
          },
          {
            placeName: "Egyptian Museum",
            imgLink:
              "https://images.unsplash.com/photo-1548266652-5a6b7c8d9e0f",
            description: "Museum with Egyptian antiquities.",
          },
          {
            placeName: "Khan el-Khalili",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-7b6c5d4e3f2a",
            description: "Famous bazaar.",
          },
        ],
      },
      {
        city: "Luxor",
        places: [
          {
            placeName: "Valley of the Kings",
            imgLink:
              "https://images.unsplash.com/photo-1549924231-2a3b4c5d6e7f",
            description: "Ancient burial site.",
          },
          {
            placeName: "Karnak Temple",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-8b456906c813",
            description: "Large temple complex.",
          },
          {
            placeName: "Luxor Temple",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "Ancient temple along Nile.",
          },
        ],
      },
    ],
  },
  {
    country: "South Korea",
    imgLink: "https://images.unsplash.com/photo-1549693578-d683be217e58",
    cities: [
      {
        city: "Seoul",
        places: [
          {
            placeName: "Gyeongbokgung Palace",
            imgLink:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            description: "Historic palace.",
          },
          {
            placeName: "N Seoul Tower",
            imgLink:
              "https://images.unsplash.com/photo-1548266652-5a6b7c8d9e0f",
            description: "Famous observation tower.",
          },
          {
            placeName: "Myeongdong",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-7b6c5d4e3f2a",
            description: "Shopping district.",
          },
        ],
      },
      {
        city: "Busan",
        places: [
          {
            placeName: "Haeundae Beach",
            imgLink:
              "https://images.unsplash.com/photo-1549924231-2a3b4c5d6e7f",
            description: "Popular beach.",
          },
          {
            placeName: "Gamcheon Culture Village",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-8b456906c813",
            description: "Colorful hillside village.",
          },
          {
            placeName: "Jagalchi Fish Market",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "Famous seafood market.",
          },
        ],
      },
    ],
  },
  {
    country: "Turkey",
    imgLink: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
    cities: [
      {
        city: "Istanbul",
        places: [
          {
            placeName: "Hagia Sophia",
            imgLink:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            description: "Historic mosque and museum.",
          },
          {
            placeName: "Blue Mosque",
            imgLink:
              "https://images.unsplash.com/photo-1548266652-5a6b7c8d9e0f",
            description: "Famous mosque.",
          },
          {
            placeName: "Grand Bazaar",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-7b6c5d4e3f2a",
            description: "Historic covered market.",
          },
        ],
      },
      {
        city: "Cappadocia",
        places: [
          {
            placeName: "Hot Air Balloon Rides",
            imgLink:
              "https://images.unsplash.com/photo-1549924231-2a3b4c5d6e7f",
            description: "Famous for ballooning over rock formations.",
          },
          {
            placeName: "Göreme Open-Air Museum",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-8b456906c813",
            description: "Rock-cut churches.",
          },
          {
            placeName: "Fairy Chimneys",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "Unique rock formations.",
          },
        ],
      },
    ],
  },
  {
    country: "Thailand",
    imgLink: "https://images.unsplash.com/photo-1528181304800-259b08848526",
    cities: [
      {
        city: "Bangkok",
        places: [
          {
            placeName: "Grand Palace",
            imgLink:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            description: "Royal palace complex.",
          },
          {
            placeName: "Wat Pho",
            imgLink:
              "https://images.unsplash.com/photo-1548266652-5a6b7c8d9e0f",
            description: "Temple with reclining Buddha.",
          },
          {
            placeName: "Chatuchak Market",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-7b6c5d4e3f2a",
            description: "Famous weekend market.",
          },
        ],
      },
      {
        city: "Chiang Mai",
        places: [
          {
            placeName: "Doi Suthep Temple",
            imgLink:
              "https://images.unsplash.com/photo-1549924231-2a3b4c5d6e7f",
            description: "Temple on a mountain.",
          },
          {
            placeName: "Old City Temples",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-8b456906c813",
            description: "Historic temples in old city.",
          },
          {
            placeName: "Night Bazaar",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "Famous evening market.",
          },
        ],
      },
    ],
  },
  {
    country: "Greece",
    imgLink: "https://images.unsplash.com/photo-1505739773434-c6f0a4b56f7c",
    cities: [
      {
        city: "Athens",
        places: [
          {
            placeName: "Acropolis",
            imgLink:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            description: "Ancient citadel with historic ruins.",
          },
          {
            placeName: "Parthenon",
            imgLink:
              "https://images.unsplash.com/photo-1548266652-5a6b7c8d9e0f",
            description: "Iconic ancient Greek temple.",
          },
          {
            placeName: "Plaka",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-7b6c5d4e3f2a",
            description: "Historic old neighborhood.",
          },
        ],
      },
      {
        city: "Santorini",
        places: [
          {
            placeName: "Oia",
            imgLink:
              "https://images.unsplash.com/photo-1549924231-2a3b4c5d6e7f",
            description: "Famous sunset village.",
          },
          {
            placeName: "Red Beach",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-8b456906c813",
            description: "Volcanic red sand beach.",
          },
          {
            placeName: "Fira",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "Clifftop capital town.",
          },
        ],
      },
    ],
  },
  {
    country: "Portugal",
    imgLink: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d",
    cities: [
      {
        city: "Lisbon",
        places: [
          {
            placeName: "Belém Tower",
            imgLink:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            description: "Historic riverside tower.",
          },
          {
            placeName: "Jerónimos Monastery",
            imgLink:
              "https://images.unsplash.com/photo-1548266652-5a6b7c8d9e0f",
            description: "UNESCO World Heritage monastery.",
          },
          {
            placeName: "Alfama",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-7b6c5d4e3f2a",
            description: "Oldest district in Lisbon.",
          },
        ],
      },
      {
        city: "Porto",
        places: [
          {
            placeName: "Dom Luís I Bridge",
            imgLink:
              "https://images.unsplash.com/photo-1549924231-2a3b4c5d6e7f",
            description: "Iconic double-deck bridge.",
          },
          {
            placeName: "Ribeira",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-8b456906c813",
            description: "Historic riverside district.",
          },
          {
            placeName: "Livraria Lello",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "Famous historic bookstore.",
          },
        ],
      },
    ],
  },
  {
    country: "Netherlands",
    imgLink: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    cities: [
      {
        city: "Amsterdam",
        places: [
          {
            placeName: "Anne Frank House",
            imgLink:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            description: "Historic house museum.",
          },
          {
            placeName: "Rijksmuseum",
            imgLink:
              "https://images.unsplash.com/photo-1548266652-5a6b7c8d9e0f",
            description: "National art museum.",
          },
          {
            placeName: "Canals of Amsterdam",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-7b6c5d4e3f2a",
            description: "UNESCO-listed canals.",
          },
        ],
      },
      {
        city: "Rotterdam",
        places: [
          {
            placeName: "Cube Houses",
            imgLink:
              "https://images.unsplash.com/photo-1549924231-2a3b4c5d6e7f",
            description: "Unique architectural houses.",
          },
          {
            placeName: "Erasmus Bridge",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-8b456906c813",
            description: "Modern cable-stayed bridge.",
          },
          {
            placeName: "Markthal",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "Indoor food market.",
          },
        ],
      },
    ],
  },
  {
    country: "Sweden",
    imgLink: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11",
    cities: [
      {
        city: "Stockholm",
        places: [
          {
            placeName: "Gamla Stan",
            imgLink:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            description: "Medieval old town.",
          },
          {
            placeName: "Vasa Museum",
            imgLink:
              "https://images.unsplash.com/photo-1548266652-5a6b7c8d9e0f",
            description: "17th-century warship museum.",
          },
          {
            placeName: "Skansen",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-7b6c5d4e3f2a",
            description: "Open-air museum.",
          },
        ],
      },
      {
        city: "Gothenburg",
        places: [
          {
            placeName: "Liseberg",
            imgLink:
              "https://images.unsplash.com/photo-1549924231-2a3b4c5d6e7f",
            description: "Popular amusement park.",
          },
          {
            placeName: "Haga",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-8b456906c813",
            description: "Historic neighborhood.",
          },
          {
            placeName: "Universeum",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "Science and nature center.",
          },
        ],
      },
    ],
  },
  {
    country: "Finland",
    imgLink: "https://images.unsplash.com/photo-1508182311256-e3f7d7a7f4e7",
    cities: [
      {
        city: "Helsinki",
        places: [
          {
            placeName: "Suomenlinna",
            imgLink:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            description: "Sea fortress.",
          },
          {
            placeName: "Helsinki Cathedral",
            imgLink:
              "https://images.unsplash.com/photo-1548266652-5a6b7c8d9e0f",
            description: "Iconic white cathedral.",
          },
          {
            placeName: "Market Square",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-7b6c5d4e3f2a",
            description: "Harbor-side market.",
          },
        ],
      },
      {
        city: "Rovaniemi",
        places: [
          {
            placeName: "Santa Claus Village",
            imgLink:
              "https://images.unsplash.com/photo-1549924231-2a3b4c5d6e7f",
            description: "Official home of Santa Claus.",
          },
          {
            placeName: "Arktikum Museum",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-8b456906c813",
            description: "Arctic science museum.",
          },
          {
            placeName: "Northern Lights Tours",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "Aurora viewing experiences.",
          },
        ],
      },
    ],
  },
  {
    country: "Denmark",
    imgLink: "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
    cities: [
      {
        city: "Copenhagen",
        places: [
          {
            placeName: "Nyhavn",
            imgLink:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            description: "Colorful 17th-century harbor district.",
          },
          {
            placeName: "Tivoli Gardens",
            imgLink:
              "https://images.unsplash.com/photo-1548266652-5a6b7c8d9e0f",
            description: "Historic amusement park.",
          },
          {
            placeName: "The Little Mermaid",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-7b6c5d4e3f2a",
            description: "Iconic bronze statue.",
          },
        ],
      },
      {
        city: "Aarhus",
        places: [
          {
            placeName: "ARoS Art Museum",
            imgLink:
              "https://images.unsplash.com/photo-1549924231-2a3b4c5d6e7f",
            description: "Modern art museum with rainbow panorama.",
          },
          {
            placeName: "Den Gamle By",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-8b456906c813",
            description: "Open-air historical town.",
          },
          {
            placeName: "Aarhus Cathedral",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "Longest church in Denmark.",
          },
        ],
      },
    ],
  },
  {
    country: "Ireland",
    imgLink: "https://images.unsplash.com/photo-1507992781348-310259076fe0",
    cities: [
      {
        city: "Dublin",
        places: [
          {
            placeName: "Trinity College",
            imgLink:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            description: "Historic university and Book of Kells.",
          },
          {
            placeName: "Guinness Storehouse",
            imgLink:
              "https://images.unsplash.com/photo-1548266652-5a6b7c8d9e0f",
            description: "Famous brewery museum.",
          },
          {
            placeName: "Temple Bar",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-7b6c5d4e3f2a",
            description: "Lively cultural quarter.",
          },
        ],
      },
      {
        city: "Galway",
        places: [
          {
            placeName: "Eyre Square",
            imgLink:
              "https://images.unsplash.com/photo-1549924231-2a3b4c5d6e7f",
            description: "Central city square.",
          },
          {
            placeName: "Spanish Arch",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-8b456906c813",
            description: "Historic city arch.",
          },
          {
            placeName: "Salthill Promenade",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "Seaside walking promenade.",
          },
        ],
      },
    ],
  },
  {
    country: "Poland",
    imgLink: "https://images.unsplash.com/photo-1519197924294-4ba991a11128",
    cities: [
      {
        city: "Warsaw",
        places: [
          {
            placeName: "Old Town",
            imgLink:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            description: "Reconstructed historic center.",
          },
          {
            placeName: "Royal Castle",
            imgLink:
              "https://images.unsplash.com/photo-1548266652-5a6b7c8d9e0f",
            description: "Former Polish monarch residence.",
          },
          {
            placeName: "Łazienki Park",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-7b6c5d4e3f2a",
            description: "Largest park in Warsaw.",
          },
        ],
      },
      {
        city: "Kraków",
        places: [
          {
            placeName: "Wawel Castle",
            imgLink:
              "https://images.unsplash.com/photo-1549924231-2a3b4c5d6e7f",
            description: "Historic royal castle.",
          },
          {
            placeName: "Main Market Square",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-8b456906c813",
            description: "Largest medieval square in Europe.",
          },
          {
            placeName: "Kazimierz",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "Historic Jewish quarter.",
          },
        ],
      },
    ],
  },
  {
    country: "Czech Republic",
    imgLink: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    cities: [
      {
        city: "Prague",
        places: [
          {
            placeName: "Charles Bridge",
            imgLink:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            description: "Historic stone bridge.",
          },
          {
            placeName: "Prague Castle",
            imgLink:
              "https://images.unsplash.com/photo-1548266652-5a6b7c8d9e0f",
            description: "Largest ancient castle complex.",
          },
          {
            placeName: "Old Town Square",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-7b6c5d4e3f2a",
            description: "Historic square with Astronomical Clock.",
          },
        ],
      },
      {
        city: "Brno",
        places: [
          {
            placeName: "Špilberk Castle",
            imgLink:
              "https://images.unsplash.com/photo-1549924231-2a3b4c5d6e7f",
            description: "Hilltop fortress.",
          },
          {
            placeName: "Villa Tugendhat",
            imgLink:
              "https://images.unsplash.com/photo-1520975922284-8b456906c813",
            description: "UNESCO modernist villa.",
          },
          {
            placeName: "Cathedral of St. Peter and Paul",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "City landmark cathedral.",
          },
        ],
      },
    ],
  },
  {
    country: "Hungary",
    imgLink: "https://images.unsplash.com/photo-1549640376-89f79c36d95f",
    cities: [
      {
        city: "Budapest",
        places: [
          {
            placeName: "Buda Castle",
            imgLink:
              "https://images.unsplash.com/photo-1549640376-89f79c36d95f",
            description: "Historic castle complex overlooking the Danube.",
          },
          {
            placeName: "Parliament Building",
            imgLink:
              "https://images.unsplash.com/photo-1526481280691-9063f45c4d5a",
            description: "Iconic neo-Gothic government building.",
          },
          {
            placeName: "Chain Bridge",
            imgLink:
              "https://images.unsplash.com/photo-1600172454520-1348f8c9c78d",
            description: "Famous bridge connecting Buda and Pest.",
          },
        ],
      },
      {
        city: "Debrecen",
        places: [
          {
            placeName: "Great Reformed Church",
            imgLink:
              "https://images.unsplash.com/photo-1603694568452-9a7e8c6d4f1b",
            description: "Symbol of Hungarian Protestantism.",
          },
          {
            placeName: "Nagyerdő Park",
            imgLink:
              "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
            description: "Large park with thermal baths.",
          },
          {
            placeName: "Déri Museum",
            imgLink:
              "https://images.unsplash.com/photo-1599407380126-1c1c5f3e7d8b",
            description: "Museum of art and archaeology.",
          },
        ],
      },
    ],
  },
  {
    country: "Slovakia",
    imgLink: "https://images.unsplash.com/photo-1558979158-65a1eaa08691",
    cities: [
      {
        city: "Bratislava",
        places: [
          {
            placeName: "Bratislava Castle",
            imgLink:
              "https://images.unsplash.com/photo-1558979158-65a1eaa08691",
            description: "Hilltop castle overlooking the Danube.",
          },
          {
            placeName: "Old Town",
            imgLink:
              "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
            description: "Historic center with medieval streets.",
          },
          {
            placeName: "St. Martin’s Cathedral",
            imgLink:
              "https://images.unsplash.com/photo-1600703136783-4a5b6c7d8e9f",
            description: "Gothic cathedral and coronation church.",
          },
        ],
      },
      {
        city: "Košice",
        places: [
          {
            placeName: "St. Elisabeth Cathedral",
            imgLink:
              "https://images.unsplash.com/photo-1610986602533-fb25f7f4d8e6",
            description: "Largest church in Slovakia.",
          },
          {
            placeName: "Hlavná Street",
            imgLink:
              "https://images.unsplash.com/photo-1599643477877-530eb83abc8e",
            description: "Main pedestrian street.",
          },
          {
            placeName: "East Slovak Museum",
            imgLink:
              "https://images.unsplash.com/photo-1587840872194-45f54c59e4a7",
            description: "Oldest museum in Slovakia.",
          },
        ],
      },
    ],
  },
]

module.exports = attraction
