"use client"

import { useEffect } from "react"
import { Code, Database, Layers } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const TechStack = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    })

    return () => {
      AOS.refresh()
    }
  }, [])

  return (
    <section id="tech-stack" className="py-16">
      <div className="container mx-auto px-4 lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">My Tech Stack</h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            I specialize in modern software development technologies to build robust, scalable, and performance-optimized
            applications. Here are the key technologies and skills I bring to every project.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* Vertical line running through the middle */}
              <div className="hidden absolute w-1 sm:block bg-green-900 h-full left-1/2 transform -translate-x-1/2"></div>

              {/* Frontend Technologies - Left card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-headingColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Frontend Technologies
                        </h3>
                        <ul className="space-y-2 text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          <li className="flex items-center">
                            <span className="font-medium">React.js</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded group-hover:bg-white/20">
                              Advanced
                            </span>
                          </li>
                          <li className="flex items-center">
                            <span className="font-medium">Next.js</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded group-hover:bg-white/20">
                            Intermediate
                            </span>
                          </li>
                          <li className="flex items-center">
                            <span className="font-medium">JSX</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded group-hover:bg-white/20">
                            Intermediate
                            </span>
                          </li>
                          <li className="flex items-center">
                            <span className="font-medium">HTML5 & CSS3</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded group-hover:bg-white/20">
                              Expert
                            </span>
                          </li>
                          <li className="flex items-center">
                            <span className="font-medium">Tailwind CSS</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded group-hover:bg-white/20">
                              Advanced
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center text-white">
                    <Code size={16} />
                  </div>
                </div>
              </div>

              {/* Backend Technologies - Right card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-headingColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Backend Technologies
                        </h3>
                        <ul className="space-y-2 text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          <li className="flex items-center">
                            <span className="font-medium">Node.js</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded group-hover:bg-white/20">
                              Advanced
                            </span>
                          </li>
                          <li className="flex items-center">
                            <span className="font-medium">Express.js</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded group-hover:bg-white/20">
                              Intermediate
                            </span>
                          </li>
                          <li className="flex items-center">
                            <span className="font-medium">RESTful APIs</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded group-hover:bg-white/20">
                              Advanced
                            </span>
                          </li>
                          <li className="flex items-center">
                            <span className="font-medium">MongoDB</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded group-hover:bg-white/20">
                              Intermediate
                            </span>
                          </li>
                          <li className="flex items-center">
                            <span className="font-medium">Firebase</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded group-hover:bg-white/20">
                              Intermediate
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center text-white">
                    <Database size={16} />
                  </div>
                </div>
              </div>

              {/* Frameworks & Tools - Left card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-headingColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Frameworks & Tools
                        </h3>
                        <ul className="space-y-2 text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          <li className="flex items-center">
                            <span className="font-medium">React Router</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded group-hover:bg-white/20">
                              Advanced
                            </span>
                          </li>
                          <li className="flex items-center">
                            <span className="font-medium">Redux / Context API</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded group-hover:bg-white/20">
                            Intermediate
                            </span>
                          </li>
                          <li className="flex items-center">
                            <span className="font-medium">Git & GitHub</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded group-hover:bg-white/20">
                            Intermediate
                            </span>
                          </li>
                          
                          <li className="flex items-center">
                            <span className="font-medium">Webpack / Vite</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded group-hover:bg-white/20">
                              Intermediate
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center text-white">
                    <Layers size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack

