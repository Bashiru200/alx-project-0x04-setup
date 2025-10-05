import { useState } from 'react';

const CounterApp: React.FC = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count > 0 ? count -1 : 0);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from yellow-400 to-pink-500 flex flex-col justify-center items-center
        text-white">
            {/* Title */}
            <h1 className="text-6xl font-extrabold mb-6"> Fun Counter app </h1>

            {/* Funny Message */}
            <p className="text-lg font-medium mb-4">
                Current count: {count} { count === 0 ? "😞 No clicks yet!" : count % 10 ? "🚀 You are a on a rocket" : "" }
            </p>

            {/* Counter Display */}
            <div className="text-6xl font-blod mb-8">
                {count}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
                <button
                    onClick={increment}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition
                    duration-300 shadow-lg transform hover:scale-105">
                        Increment
                </button>

                <button
                    onClick={decrement}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transiton
                    duration-300 shadow-lg transform hover:scale-105"
                    >
                        Decrement
                </button> 
            </div>
            {/* Footer */}
            <p className="mt-8 text-sm opacity-75">
                Keep clicking, who knows what will happens at 100?
            </p>
        </div>
    );
}

export default CounterApp;