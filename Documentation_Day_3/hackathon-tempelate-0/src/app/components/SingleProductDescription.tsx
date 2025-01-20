export default function SingleProductDescription() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="flex justify-center space-x-6 pb-4">
        <button className="text-lg font-medium text-black">
          Description
        </button>
        <button className="text-lg font-medium text-gray-500">
          Additional Information
        </button>
        <button className="text-lg font-medium text-gray-500">
          Reviews [5]
        </button>
      </div>

      {/* Content */}
      <div className="mt-6 space-y-6">
        {/* Text Content */}
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

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <img
            src="/images/Cloud sofa three seater + ottoman_2 1.png" // Replace with your image path
            alt="Product view 1"
            className="w-full object-cover bg-[#FFF9E5]"
          />
          <img
            src="/images/Cloud sofa three seater + ottoman_1 1.png" // Replace with your image path
            alt="Product view 2"
            className="w-full object-cover bg-[#FFF9E5]"
          />
        </div>
      </div>
    </div>
  )
}
