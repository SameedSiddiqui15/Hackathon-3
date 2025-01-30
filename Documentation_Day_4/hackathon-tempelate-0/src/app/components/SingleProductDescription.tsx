import React, { useState } from 'react';


export default function SingleProductDescription() {
  const [openSection, setOpenSection] = useState<string | null>('description');
  const [activeTab, setActiveTab] = useState('description');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
    setActiveTab(openSection === section ? 'description' : section);
  };
  
  const reviews = [
    { id: 1, text: 'Absolutely love this furniture! The quality is outstanding, and it fits perfectly in my living room. Worth every penny.', rating: 5 },
    { id: 2, text: 'The design is beautiful, but the assembly instructions were confusing. Took me longer to set up than expected.', rating: 3 },
    { id: 3, text: 'Exceeded my expectations! Sturdy, stylish, and delivered earlier than promised. Perfect for my dining area.', rating: 4 },
    { id: 4, text: 'Amazing value for the price! I have already recommended it to my friends. The scratch-resistant coating works as advertised.', rating: 5 },
    { id: 5, text: 'Good quality overall, but the packaging was damaged when it arrived. Thankfully, the product was intact.', rating: 4 },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <div className="flex justify-center space-x-6 pb-4">
      <button
        className={`text-lg font-medium ${
          activeTab === 'description'
            ? 'text-black border-b-2 border-black'
            : 'text-gray-500 hover:text-black'
        }`}
        onClick={() => toggleSection('description')}
      >
        Description
      </button>

      <button
        className={`text-lg font-medium ${
          activeTab === 'additionalInfo'
            ? 'text-black border-b-2 border-black'
            : 'text-gray-500 hover:text-black'
        }`}
        onClick={() => toggleSection('additionalInfo')}
      >
        Additional Information
      </button>

      <button
        className={`text-lg font-medium ${
          activeTab === 'reviews'
            ? 'text-black border-b-2 border-black'
            : 'text-gray-500 hover:text-black'
        }`}
        onClick={() => toggleSection('reviews')}
      >
        Reviews [{reviews.length}]
      </button>
    </div>

      <div className="mt-6 space-y-6">
        {openSection === 'description' && (
          <div className="mt-6 space-y-6">
          <p className="text-gray-700 xl:px-48 lg:px-32 md:px-16 ">
            Embodying the raw, wayward spirit of rock &rsquo;n&rsquo; roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-gray-700  xl:px-48 lg:px-32 md:px-16 ">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and extended
            highs for a sound that is both articulate and pronounced. The
            analogue knobs allow you to fine-tune the controls to your personal
            preferences while the guitar-influenced leather strap enables easy and
            stylish travel.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <img
              src="/images/Cloud sofa three seater + ottoman_2 1.png" 
              alt="Product view 1"
              className="w-full object-cover bg-[#FFF9E5]"
            />
            <img
              src="/images/Cloud sofa three seater + ottoman_1 1.png" 
              alt="Product view 2"
              className="w-full object-cover bg-[#FFF9E5]"
            />
          </div>
        </div>
        )}

        {openSection === 'additionalInfo' && (
          <div className="sm:p-6 sm:bg-gray-50 rounded-lg sm:shadow-md max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Style and Suitability</h2>
              <p className="text-gray-600 mb-2">
                <span className="font-medium text-gray-800">Design Style:</span> A <span className="text-indigo-600">Modern Scandinavian</span> design with minimalist lines and a timeless aesthetic.
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium text-gray-800">Room Suitability:</span>
                <ul className="list-disc list-inside ml-4">
                  <li>Ideal for dining rooms, home offices, or living rooms.</li>
                  <li>Fits perfectly in both compact and spacious interiors.</li>
                </ul>
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Usage:</span>
                <ul className="list-disc list-inside ml-4">
                  <li>Great for hosting dinner parties or as a stylish work desk.</li>
                  <li>Versatile enough for both formal and casual settings.</li>
                </ul>
              </p>
            </div>
        
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Features and Benefits</h2>
              <p className="text-gray-600 mb-2">
                <span className="font-medium text-gray-800">Weight Capacity:</span> Supports up to <span className="text-green-600">400 lbs</span> for durable and long-term use.
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium text-gray-800">Eco-Friendly:</span> Made from sustainable and FSC-certified wood.
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium text-gray-800">Customizable Options:</span> Choose from various finishes and fabric options for upholstery (if applicable).
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Special Features:</span>
                <ul className="list-disc list-inside ml-4">
                  <li>Scratch-resistant coating for everyday wear and tear.</li>
                  <li>Rounded edges for child safety.</li>
                  <li>Adjustable feet to ensure stability on uneven floors.</li>
                </ul>
              </p>
            </div>
        
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping & Delivery</h2>
              <p className="text-gray-600 mb-2">
                <span className="font-medium text-gray-800">Shipping Time:</span> Delivered within <span className="text-blue-600">5-7 business days</span>.
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium text-gray-800">Delivery Options:</span> Free curbside delivery or paid in-home setup.
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Packaging:</span> Ships in flat-pack boxes with recyclable packaging materials.
              </p>
            </div>
          </div>
        </div>        
        )}

        {openSection === 'reviews' && (
          <div className="space-y-4">
            {reviews.map(review => (
              <div key={review.id} className="border p-4 rounded-md max-w-4xl mx-auto">
                <p className="text-center">{review.text}</p>
                <p className="text-yellow-500 text-center">Rating: {review.rating} ⭐</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}