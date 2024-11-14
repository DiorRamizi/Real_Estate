const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors({
}));


app.use('/images', express.static('images'));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Real Estate API!');
});


const properties = [
    {
        id: 1,
        name: "Luxury Villa",
        location: "Miami, FL",
        description: "Luxury Villa with a private pool and beautiful view of the ocean",
        rooms: "5",
        bathrooms: "6",
        squareFeet: "5300",
        details: "Experience modern luxury and prime location in this extraordinary Cheoff Levy Fishman masterpiece! Nestled between the Biscayne Waterway and Miami Beach Golf Club, every room offers breathtaking views. The backyard is an outdoor oasis, perfect for entertaining and relaxation, featuring terraces, a covered open-air summer kitchen, lush pool, cabana bath, and a rooftop hot tub for spectacular sunrises and sunsets. The living room impresses with a 28-ft ceiling, a gourmet Subzero-Wolf marble kitchen, a 12-person dining room, and a fabulous family room. Upstairs, the 1500 sqft primary suite provides a private retreat with three terraces and spacious closets. Plus, enjoy the convenience of parking for 12 cars, including a 4-car AC garage. Your dream home awaits!",
        price: "12,500,000",
        photos: ["http://localhost:3000/images/miami-villa-1.jpg","http://localhost:3000/images/miami-villa-4.jpg","http://localhost:3000/images/miami-villa-5.jpg","http://localhost:3000/images/miami-villa-6.jpg","http://localhost:3000/images/miami-villa-7.jpg"]
    },
    {
        id: 6,
        name: "Luxury Flat",
        location: "New York, NY",
        description: "6 bedroom luxury Flat for sale in New York",
        rooms: "6",
        bathrooms: "6",
        squareFeet: "6600",
        details: "THE DREAM PRIVATE RESIDENCE | REDEFINING THE ULTRA HIGH-END TROPHY RESIDENCE\n" +
            "THE DUPLEX | THE COVETED TROPHY PRIVATE RESIDENCE | 4,000SF PRIVATE TERRACE\n" +
            "Sublime, contemporary, tailored beauty at every turn, The Duplex at the Coveted 100 VANDAM is a masterpiece, in every detail, in every square inch and is the new definition of an ultra-luxurious tailor-made Private Residence.\n" +
            "Upon entering, you will immediately understand that The Duplex is unworldly, entirely jaw dropping, and within the first step, will take your breath away. Keyed-elevator opens into each floor, two, offering unreal views of every architectural masterpiece from every vantage point and from every room within the Residence– from the Empire State Building and Chrysler building to your North, the Hudson River to the West and award winning worthy cinematic views to the South of The Statue of Liberty standing proudly in the New York Harbor facing the massiveness of The Freedom Tower, the classic Robert A.M. Stern’s Four Seasons, 56 Leonard with its glass cantilever chicness, The Woolworth Building and every other quaint and modern dwelling in between; all making The Penthouse vistas the most incredible, beautifully layered rolling architectural landscape that defines New York City. This one is truly, one- of-a-kind.",
        price:"35,000,000" ,
        photos: ["http://localhost:3000/images/new-york-apartment-1.jpg","http://localhost:3000/images/new-york-apartment-2.jpg","http://localhost:3000/images/new-york-apartment-3.jpg","http://localhost:3000/images/new-york-apartment-4.jpg","http://localhost:3000/images/new-york-apartment-5.jpg"]
    },
    {
        id: 3,
        name: "Olympic Tower Penthouse",
        location: "Manhattan, NY",
        description: "13 room luxury penthouse for sale in New York",
        rooms: "8",
        bathrooms: "8",
        squareFeet: "9000",
        details: "Discover the ultimate luxury penthouse in Manhattan. With 9,000 square feet of space, breathtaking city views and luxury amenities, this penthouse is the perfect place for those seeking the ultimate in style and comfort.\n" +
            "\n" +
            "This two-storey penthouse, located at the top of the famous Olympic Tower, is the ideal place for those seeking the ultimate in luxury and style.\n" +
            "\n" +
            "With high ceilings ranging from 14 to 16 feet, floor-to-ceiling wrap-around windows and numerous wood-burning fireplaces, this penthouse offers a feeling of spaciousness and grandeur.\n" +
            "\n" +
            "The penthouse is currently configured as a duplex with 8 bedrooms, 8 full bathrooms and 2 powder rooms. The bedrooms are located on the 50th floor, while the living room, dining room, kitchen and other living spaces are located on the 51st floor.\n" +
            "\n" +
            "The two master suites have spa features, including a whirlpool bath and sauna. The other bedrooms all have dedicated full bathrooms.\n" +
            "\n" +
            "On the 51st floor, you'll also find two inviting galleries, a sky-lit library, a huge entertainment room, a staff kitchen and a glass-enclosed kitchen-dining room overlooking the Empire State Building.\n" +
            "\n" +
            "The Olympic Tower is a historic luxury condominium on Fifth Avenue. The building features a discreet and highly professional service staff, a fully equipped gym and a concierge.\n" +
            "\n" +
            "This penthouse is a unique opportunity to live in luxury and style in the heart of Manhattan. Contact GADAIT International today to arrange a viewing and discover this dream come true for yourself.",
        price: "35,000,000",
        photos: ["http://localhost:3000/images/new-york-penthouse-1.jpg","http://localhost:3000/images/new-york-penthouse-2.jpg","http://localhost:3000/images/new-york-penthouse-3.jpg","http://localhost:3000/images/new-york-penthouse-4.jpg","http://localhost:3000/images/new-york-penthouse-5.jpg"]
    },
    {
        id: 4,
        name: "Luxury House",
        location: "Las Vegas, NV",
        description: "Luxury House for sale in Las Vegas, Nevada",
        rooms: "4",
        bathrooms: "3",
        squareFeet: "6700",
        details: "Experience unmatched luxury in this one-of-a-kind 2-story PH at Park Towers. This residence offers breathtaking, panoramic views of Las Vegas Strip, incl The Sphere, High Roller & Mtns, capturing the city's vibrant energy. Expansive living areas feat. rich hardwood floors & custom cabinetry that exude elegance & craftsmanship. The chef’s kitchen, equipped with top-tier appliances & ample counter space, is perfect for casual meals or gourmet feasts. The primary suite offers dual baths, dressing rooms, & a freestanding tub with stunning Strip views, creating a private spa-like retreat. 2 add. suites provide ample space & privacy for guests, ensuring everyone experiences the same level of luxury. While the home theater delivers a cinematic experience. Automated lighting & sound systems enhance the ambiance, making this penthouse a seamless blend of elegance & urban sophistication—an exclusive chance to own a premier Las Vegas residence at Park Towers, Las Vegas most exclusive highrise!",
        price: "7,750,000",
        photos: ["http://localhost:3000/images/las-vegas-house-1.jpg","http://localhost:3000/images/las-vegas-house-2.jpg","http://localhost:3000/images/las-vegas-house-3.jpg","http://localhost:3000/images/las-vegas-house-4.jpg","http://localhost:3000/images/las-vegas-house-5.jpg",]
    },
    {
        id: 5,
        name: "Big Apartment",
        location: "Chicago, IL",
        description: "6 bedroom luxury Apartment for sale in Chicago, Illinois",
        rooms: "6",
        bathrooms: "7",
        squareFeet: "7500",
        details: "Live on top of the Gold Coast with your own private rooftop pool and pavilion at the most luxurious building in the city. The first time ever offered- This true penthouse at Chicago's most distinguished address, No. 9 Walton! This a one-of-a-kind and exceptional opportunity to create a 7500+ square feet dream home, plus the added exclusivity of a private 39th floor interior space and rooftop pool accessed by an in-unit private elevator. This home has dramatic 16' windows and two additional terraces, providing sweeping 360-degree views of Chicago. Sample floor plans and architectural consultation are available. Three additional floors are also available. Residents at No. 9 Walton experience the ultimate in luxury living with 24hr door staff, house car, indoor pool, sauna/steam, 2-story exercise facility, golf simulator, dining room with catering kitchen, bar, terrace, indoor/outdoor pet area, and two guest suites. Four tandem valet parking spaces in a private garage and one private courtyard space are included and additional garage opportunities available.",
        price: "11,000,000",
        photos: ["http://localhost:3000/images/chicago-penthouse-1.jpg","http://localhost:3000/images/chicago-penthouse-2.jpg","http://localhost:3000/images/chicago-penthouse-3.jpg","http://localhost:3000/images/chicago-penthouse-4.jpg","http://localhost:3000/images/chicago-penthouse-5.jpg"]
    },
    {
        id: 2,
        name: "Luxury House",
        location: "Miami, FL",
        description: "Luxury Villa for sale in Miami, Florida",
        rooms: "7",
        bathrooms: "7",
        squareFeet: "6900",
        details: "Immerse yourself into the vibrant lifestyle of the N Grove neighborhood with this exceptional modern estate, perched atop a ridge 21 ft above sea level and meticulously crafted by renowned architect Charles Treister. Seamlessly blending indoor and outdoor spaces, this distinctive Tri-Level residence offers a serene tropical retreat. With meticulous attention to detail and unparalleled craftsmanship, the floorplan boasts 7 bed rms and 7/2 bath rms, complemented by a unique modern basement with a family rm, wine gallery and a fully equipped gym under a/c, a separate guest suite, and elevator access. Indulge in an outdoor oasis featuring a sparkling pool and spa, a covered terrace, a summer kitchen, and an outdoor shower. Additional features include a full house generator and a 2-car garage.",
        price: "10,000,000",
        photos: ["http://localhost:3000/images/miami-house-1.png","http://localhost:3000/images/miami-house-2.jpg","http://localhost:3000/images/miami-house-3.jpg","http://localhost:3000/images/miami-house-4.jpg","http://localhost:3000/images/miami-house-5.jpg"]
    },
];

app.get('/api/properties', (req, res) => {
    res.json(properties);
});

app.get('/api/properties/:id', (req, res) => {
    const property = properties.find(p => p.id === parseInt(req.params.id));
    if (!property) return res.status(404).send('Property not found');
    res.json(property);
});

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
