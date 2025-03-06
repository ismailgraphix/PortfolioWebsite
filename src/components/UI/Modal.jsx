"use client"
import { X } from "lucide-react"

const Modal = ({ activeID, setShowModal, portfolios }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID)

  if (!portfolio) return null

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-headingColor bg-opacity-40">
      <div className="relative w-11/12 md:w-3/4 max-w-[600px] bg-white rounded-lg p-5 md:p-8 animate-fadeIn">
        <div className="flex justify-center">
          <img
            className="rounded-lg w-full object-cover max-h-[350px]"
            src={portfolio.imgUrl || "/placeholder.svg"}
            alt={portfolio.title}
          />
        </div>

        <div className="mt-5">
          <h2 className="text-2xl text-headingColor font-bold mb-3">{portfolio.title}</h2>
          <p className="text-sm text-smallTextColor leading-6">{portfolio.description}</p>

          <div className="mt-5">
            <h4 className="text-headingColor text-lg font-bold mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {portfolio.technologies.map((item, index) => (
                <span key={index} className="bg-gray-200 py-1 px-2 rounded-md text-sm leading-none">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <a href={portfolio.siteUrl} target="_blank" rel="noopener noreferrer">
            <button className="bg-primaryColor text-white py-2 px-4 mt-5 rounded-md font-semibold hover:bg-headingColor transition duration-300">
              View Live
            </button>
          </a>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}

export default Modal

