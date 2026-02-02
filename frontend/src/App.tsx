import React from 'react';
import FoodScanner from './features/food_scan/FoodScanner';

function App() {
    return (
        <div className="app-container">
            <header style={{ padding: '1rem', background: '#333', color: '#fff' }}>
                <h1>Wholeness App</h1>
            </header>
            <main style={{ padding: '1rem' }}>
                <FoodScanner />
            </main>
        </div>
    );
}

export default App;
