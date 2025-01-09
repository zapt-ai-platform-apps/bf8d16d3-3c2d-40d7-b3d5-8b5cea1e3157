import React from 'react';

export default function App(){
    return (
        <div className="min-h-screen bg-background text-text font-sans p-4">
            <header className="bg-primary text-white py-4 px-2 md:px-4">
                <h1 className="text-xl md:text-2xl">My Elegant App</h1>
            </header>
            <main className="mt-6">
                <p className="text-base">
                    Welcome to your beautifully designed app. Enjoy a seamless and visually consistent experience!
                </p>
                <button className="mt-4 px-4 py-2 bg-secondary text-white rounded hover:bg-accent transition cursor-pointer" disabled={false}>
                    Get Started
                </button>
            </main>
            <footer className="mt-8 text-center text-sm text-gray-500">
                &copy; 2024 My Elegant App. All rights reserved.
            </footer>
        </div>
    )
}