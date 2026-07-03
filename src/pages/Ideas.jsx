import React from 'react';
import { IoLeafOutline, IoCubeOutline, IoInfiniteOutline, IoDesktopOutline } from "react-icons/io5";

const Ideas = () => {
    const ideas = [
        {
            id: 1,
            title: "Vertical Green Wall",
            description: "Transform empty walls into lush living art using hanging planters or wall-mounted pots.",
            icon: <IoLeafOutline className="text-lime-600 text-4xl" />
        },
        {
            id: 2,
            title: "Minimalist Corner",
            description: "Place a tall, statement plant like a Monstera or Fiddle Leaf Fig in an empty corner to add depth.",
            icon: <IoCubeOutline className="text-lime-600 text-4xl" />
        },
        {
            id: 3,
            title: "Macramé Magic",
            description: "Use ceiling-mounted macramé hangers to save space and create a bohemian vibe.",
            icon: <IoInfiniteOutline className="text-lime-600 text-4xl" />
        },
        {
            id: 4,
            title: "Desktop Oasis",
            description: "Group small succulents and air plants on your workspace to boost productivity and mood.",
            icon: <IoDesktopOutline className="text-lime-600 text-4xl" />
        }
    ];

    return (
        <section className="py-20 bg-lime-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Eco Decor Ideas</h2>
                    <div className="w-20 h-1.5 bg-lime-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 text-lg">Bring nature indoors with our creative styling tips.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ideas.map((idea) => (
                        <div 
                            key={idea.id} 
                            className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="mb-6">{idea.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-lime-600 transition-colors">
                                {idea.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {idea.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ideas;