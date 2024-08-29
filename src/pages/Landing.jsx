import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { MapPin, Phone } from 'lucide-react'

export default function Landing() {
  return (
    <div className="bg-white min-h-screen font-montserrat">
      <Nav />

      <main>
        <section className="relative h-[500px] overflow-hidden m-8 rounded-3xl">
          <img src="/placeholder.svg?height=500&width=1200" alt="Students studying" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="font-londrina-solid font-black text-5xl mb-4">If you're looking to immerse yourself in Argentine culture while learning Spanish, Ahora Español in Mar del Plata is the ideal place</h1>
              <p className="mb-6 text-lg">Located in one of Argentina's most vibrant coastal cities, Ahora Español offers a unique blend of language learning and cultural immersion. Our experienced native teachers and interactive methods ensure you'll make rapid progress in your Spanish skills while enjoying the rich Argentine lifestyle.</p>
              <button className="bg-[#43B3AF] text-white px-8 py-3 rounded-full hover:bg-[#3A9E9A] font-semibold text-lg">
                Start now!
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#B4E1DF]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-londrina-solid font-black text-4xl mb-8">Learn Spanish with native teachers in an interactive and engaging way.</h2>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <h2 className="font-londrina-solid font-black text-4xl text-center mb-12">Our school</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-londrina-solid font-black text-2xl mb-4">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#43B3AF] rounded-full mr-2"></span>Highly qualified native teachers</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#43B3AF] rounded-full mr-2"></span>Interactive teaching methods</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#43B3AF] rounded-full mr-2"></span>Programs tailored to your needs</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#43B3AF] rounded-full mr-2"></span>Quick and effective learning</li>
                </ul>
              </div>
              <div>
                <h3 className="font-londrina-solid font-black text-2xl mb-4">Cultural Immersion</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#43B3AF] rounded-full mr-2"></span>Tango classes</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#43B3AF] rounded-full mr-2"></span>Brewery tours</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#43B3AF] rounded-full mr-2"></span>Asado experience</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#43B3AF] rounded-full mr-2"></span>Exploring Porteño painting</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-16">
              <img src="/placeholder.svg?height=150&width=200" alt="School image 1" className="w-full h-40 object-cover rounded-lg" />
              <img src="/placeholder.svg?height=150&width=200" alt="School image 2" className="w-full h-40 object-cover rounded-lg" />
              <img src="/placeholder.svg?height=150&width=200" alt="School image 3" className="w-full h-40 object-cover rounded-lg" />
              <img src="/placeholder.svg?height=150&width=200" alt="School image 4" className="w-full h-40 object-cover rounded-lg" />
            </div>
          </div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#C1CA31] rounded-full opacity-50"></div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-londrina-solid font-black text-4xl mb-12">What we offer...</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-[#EAEAEA] border-[#43B3AF] border-2 rounded-lg shadow-lg p-6">
                  <h3 className="font-londrina-solid font-black text-2xl text-center mb-4">Small group of classes</h3>
                  <p className="text-gray-600 text-center mb-4">Max. 5 students per class with flexible schedules. 15 or 20 hours/week. Classes are held in the morning or afternoon.</p>
                  <button className="bg-[#43B3AF] text-white px-4 py-2 rounded-full hover:bg-[#3A9E9A]">
                    Learn more
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-londrina-solid font-black text-4xl text-right mb-12">We are in Mar del Plata</h2>
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <img src="/placeholder.svg?" />
                </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#B4E1DF]">
          <div className="container mx-auto px-4">
            <h2 className="font-londrina-solid font-black text-4xl text-center mb-12">Location of our School</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="w-full h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201064.8436943117!2d-57.69904485!3d-38.0054771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d94d19d34209%3A0xdd9670804bfed126!2sMar%20del%20Plata%2C%20Buenos%20Aires%20Province%2C%20Argentina!5e0!3m2!1sen!2sus!4v1653395185385!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div>
                <p className=" mb-4">Choosing Mar del Plata over Buenos Aires to learn Spanish is a better option as it's a smaller, more affordable city with a beachside lifestyle. Plus, it's conveniently located just 45 minutes by plane or 5 hours by bus or train from Buenos Aires.</p>
                <div className="flex items-center mb-2">
                  <MapPin className="mr-2" />
                  <span>Address: Direccion 1234, Mar del Plata</span>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="mr-2" />
                  <span>Phone: +54 1154685463</span>
                </div>
                <button className="bg-[#43B3AF]  px-4 py-2 rounded-full hover:bg-[#3A9E9A]">
                  Go to Maps
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#43B3AF]">
          <div className="container mx-auto px-4">
            <h2 className="font-londrina-solid font-black text-4xl text-center mb-12">Our students experiences</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white shadow-lg rounded-lg p-6">
                  <p className="text-gray-600 mb-4">Soy Brasileño, y el Ahora Español fue mi primer contacto con el castellano! Me encantó la experiencia, los profesores y me ayudó mucho.</p>
                  <div className="flex items-center">
                    <img src="/placeholder.svg?height=40&width=40" alt="Student" className="w-10 h-10 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold">Nombre usuario</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}