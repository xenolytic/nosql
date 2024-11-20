# NOSQL opdracht

Dit project is een eenvoudige filmdatabase-applicatie die gebruik maakt van Next.js en MongoDB. De applicatie stelt gebruikers in staat om films toe te voegen, bij te werken, te verwijderen en te zoeken op titel, genre en acteur.

## Inhoudsopgave
- Installatie
- Gebruik
- API Endpoints
- Frontend Functionaliteit
- Projectstructuur
- Licentie

## Installatie

1. **Clone de repository:**
git clone https://github.com/jouw-gebruikersnaam/films-database.git  
cd films-database

2. **Installeer de benodigde pakketten:**
npm install

3. **Maak een `.env.local` bestand aan in de root van je project en voeg je MongoDB URI toe:**
MONGODB_URI=your_mongodb_connection_string

4. **Start de ontwikkelserver:**
npm run dev

## Gebruik

### Films Toevoegen
- Ga naar de pagina `/addFilm`.
- Vul het formulier in met de titel, genre, jaar, rating en acteurs van de film.
- Klik op "Film Toevoegen".

### Films Bijwerken
- Ga naar de pagina `/updateFilm`.
- Vul het formulier in met de titel van de film en de nieuwe rating.
- Klik op "Rating Bijwerken".

### Films Verwijderen
- Ga naar de pagina `/deleteFilm`.
- Vul het formulier in met de titel van de film die je wilt verwijderen.
- Klik op "Film Verwijderen".

### Films Zoeken
- Ga naar de hoofdpagina `/`.
- Gebruik het zoekveld om te zoeken op titel, genre of acteur.

## API Endpoints

### GET /api/getFilms
Haalt alle films op uit de database.

### POST /api/addFilms
Voegt een nieuwe film toe aan de database.

Body (JSON):
{
  "titel": "New Film",
  "genre": "Drama",
  "jaar": 2021,
  "rating": 7.5,
  "acteurs": ["Actor One", "Actor Two"]
}

### PUT /api/updateFilms
Werk de rating van een film bij.

Body (JSON):
{
  "titel": "The Matrix",
  "rating": 9.0
}

### DELETE /api/deleteFilms
Verwijdert een film uit de database.

Body (JSON):
{
  "titel": "Inception"
}

## Frontend Functionaliteit
- **Zoeken**: Gebruikers kunnen films zoeken op titel, genre en acteur.
- **Toevoegen**: Gebruikers kunnen nieuwe films toevoegen via een formulier.
- **Bijwerken**: Gebruikers kunnen de rating van een film bijwerken via een formulier.
- **Verwijderen**: Gebruikers kunnen films verwijderen via een formulier.

## Projectstructuur
.
├── app/  
│   ├── api/  
│   │   ├── addFilms/  
│   │   │   └── route.ts  
│   │   ├── deleteFilms/  
│   │   │   └── route.ts  
│   │   ├── getFilms/  
│   │   │   └── route.ts  
│   │   └── updateFilms/  
│   │       └── route.ts  
│   ├── addFilm.tsx  
│   ├── deleteFilm.tsx  
│   ├── updateFilm.tsx  
│   └── page.tsx  
├── lib/  
│   └── mongodb.ts  
├── .env.local  
├── package.json  
├── README.md  
└── tsconfig.json