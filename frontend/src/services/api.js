// Mock API service to simulate Python backend response
// Using strict snake_case for keys as requested

export const getExercises = () => {
    return Promise.resolve([
        {
            id: 1,
            title: "Standing Barbell Curl",
            subtitle: "5 Sets • 12 Reps",
            image_url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=200",
            muscle_group: "Biceps"
        },
        {
            id: 2,
            title: "Reverse Cable Curl",
            subtitle: "4 Sets • 10 Reps",
            image_url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=200",
            muscle_group: "Biceps"
        },
        {
            id: 3,
            title: "Incline Dumbbell Curl",
            subtitle: "4 Sets • 12 Reps",
            image_url: "https://images.unsplash.com/photo-1567598508481-65985588e295?auto=format&fit=crop&q=80&w=200",
            muscle_group: "Biceps"
        },
        {
            id: 4,
            title: "Hammer Curl",
            subtitle: "4 Sets • 12 Reps",
            image_url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=200",
            muscle_group: "Biceps"
        },
        {
            id: 5,
            title: "Bench Press",
            subtitle: "5 Sets • 8 Reps",
            image_url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=200",
            muscle_group: "Chest"
        }
    ]);
};

export const getWorkoutDetails = (id) => {
    return Promise.resolve({
        id: id,
        title: "Full Body Workout",
        calories: "345 Kcal",
        duration: "20 min",
        image_url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
        round_exercises: [
            {
                id: 101,
                name: "Bending to the sides",
                time: "1:35 min",
                image_url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=100"
            },
            {
                id: 102,
                name: "Jump squats",
                time: "1:35 min",
                image_url: "https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?auto=format&fit=crop&q=80&w=100"
            },
            {
                id: 103,
                name: "Plank with leg raises",
                time: "1:35 min",
                image_url: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&q=80&w=100"
            }
        ]
    });
};

export const getFoods = () => {
    return Promise.resolve([
        {
            id: 1,
            name: "Grilled Chicken Salad",
            macros: "350 kcal • 40g Protein",
            image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 2,
            name: "Avocado Toast",
            macros: "280 kcal • 8g Protein",
            image_url: "https://images.unsplash.com/photo-1588137372308-15f09a043722?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 3,
            name: "Protein Smoothing Bowl",
            macros: "250 kcal • 20g Protein",
            image_url: "https://images.unsplash.com/photo-1511690656952-34342d5c2895?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 4,
            name: "Salmon with Asparagus",
            macros: "450 kcal • 35g Protein",
            image_url: "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&q=80&w=200"
        }
    ]);
};
