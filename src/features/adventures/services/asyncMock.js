const DELAY_MS = 400;

function delay(ms = DELAY_MS) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const adventures = [
  {
        id: "suave",
        level: "Intensidad Suave", 
        activities: [
            {
                id: 1, 
                activity: "Caminata", 
                /* image: "../assets/haonan-wei-Ard57Te3Hxw-unsplash.jpg", */ 
                location: "Rambla",
                city: "Montevideo", 
                duration: "1 hora", 
                difficulty: "Suave", 
                price: 500,
                capacity: 20,
                availableSpots: 8,
                featured: false
            },
            {
                id: 2, 
                activity: "Yoga", 
                /* image: "../assets/amauri-mejia-GvF7RkA-E9Q-unsplash.jpg", */ 
                location: "Parque Rodo",
                city: "Montevideo",
                duration: "1 hora", 
                difficulty: "Suave", 
                price: 800,
                capacity: 15,
                availableSpots: 5,
                featured: true
            }
        ]
    },
    {
        id: "medio", 
        level: "Intensidad Media", 
        activities: [
            {
                id: 3, 
                activity: "Trekking", 
                /* image: "../assets/anders-nielsen-8jQFXXSTvbw-unsplash.jpg", */ 
                location: "Sierra de las Animas",
                city: "Maldonado",
                duration: "5 horas", 
                difficulty: "Media", 
                price: 1500,
                capacity: 10,
                availableSpots: 2,
                featured: true
            },
            {
                id: 4, 
                activity: "Paddelsurf", 
                /* image: "../assets/piratedea-S0yTuhrno5U-unsplash.jpg", */ 
                location: "Puente de la Barra",
                city: "Maldonado", 
                duration: "1 hora 30 minutos", 
                difficulty: "Media", 
                price: 2500,
                capacity: 12,
                availableSpots: 6,
                featured: false
            }
        ]
    },
    {
        id: "extremo", 
        level: "Intensidad Extrema", 
        activities: [
            {
                id: 5, 
                activity: "Rappel", 
                /* image: "../assets/balu-gaspar-Ys5B-lnJrco-unsplash.jpg",  */
                location: "Salto del Penitente",
                city: "Lavalleja",
                duration: "2 horas", 
                difficulty: "Extrema", 
                price: 4000,
                capacity: 8,
                availableSpots: 3,
                featured: false
            },
            {
                id: 6, 
                activity: "Paracaidismo", 
                /* image: "../assets/kamil-pietrzak-H22w-tq0SeQ-unsplash.jpg", */ 
                location: "Aeropuerto el Jaguel", 
                city: "Maldonado",
                duration: "40 minutos", 
                difficulty: "Extrema", 
                price: 7000,
                capacity: 5,
                availableSpots: 1,
                featured: true
            }
        ]
    },
];

let allAdventures = [...adventures];
let orders = [];
let nextOrderId = 1;

export const adventuresApi = {

    async getAll() {
        await delay();
        return [...allAdventures];
    },

    async getActivityById(activityId) {
        await delay();

        for (const adventure of allAdventures) {
            const activity = adventure.activities.find(
                (act) => act.id === Number(activityId)
            );
            if (activity) return { ...activity };
        }

        throw new Error("Actividad no encontrada");
    },

    async getActivityByLevel(levelId) {
        await delay();

        const adventure = allAdventures.find((adv) => adv.id === levelId);
        if (adventure) return { ...adventure };
    },

    async getActivityByCity(city) {
        await delay();

        return allAdventures.flatMap((adv) => adv.activities.filter((act) => act.city.toLowerCase() === city.toLowerCase()));
    }
};

export const ordersApi = {
  async getAll() {
    await delay();
    return [...orders];
  },

  async create(items) {
    await delay();
    const order = {
      id: String(nextOrderId++),
      items: items || [],
      createdAt: new Date().toISOString(),
    };
    orders.push(order);
    return { ...order };
  },
};