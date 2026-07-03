import React from 'react';

const Expert = () => {
    const experts = [
        {
            id: 1,
            name: "Dr. Aranya Rahman",
            specialization: "Plant Pathology & Soil Health",
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            name: "Tanvir Ahmed",
            specialization: "Indoor Plant & Bonsai Stylist",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            name: "Nusrat Jahan",
            specialization: "Hydroponics & Urban Gardening",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            name: "Sajid Hasan",
            specialization: "Succulents & Cacti Care",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Meet Our Green Experts</h2>
                    <div className="w-20 h-1.5 bg-lime-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 text-lg">Professional botanists and stylists ready to guide your gardening journey.</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experts.map((expert) => (
                        <div 
                            key={expert.id} 
                            className="bg-white p-2 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-lime-200 transition-all duration-500 group"
                        >
                            {/* Image Section */}
                            <div className="relative h-72 overflow-hidden rounded-[1.5rem] mb-4">
                                <img
                                    src={expert.image}
                                    alt={expert.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="px-4 pb-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{expert.name}</h3>
                                <p className="text-sm text-lime-600 font-semibold uppercase tracking-wider mb-6">{expert.specialization}</p>
                                
                                <button className="w-full py-3 bg-gray-50 hover:bg-lime-500 text-gray-700 hover:text-white font-bold rounded-2xl transition-all duration-300 active:scale-95">
                                    Consult Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expert;