import Image from "next/image"

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Wild War Arena"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6 text-green-800">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Wild War was founded in 2020 by a group of passionate laser tag enthusiasts who wanted to bring the next
              level of immersive combat experiences to thrill-seekers everywhere.
            </p>
            <p className="text-gray-600 mb-4">
              Our state-of-the-art arenas and cutting-edge equipment provide an unparalleled gaming experience that
              keeps our players coming back for more. From casual gamers to competitive teams, Wild War offers something
              for everyone.
            </p>
            <p className="text-gray-600">
              We're committed to continuous innovation, ensuring that every visit to Wild War is filled with excitement,
              strategy, and unforgettable moments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

