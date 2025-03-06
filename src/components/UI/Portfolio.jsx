"use client"

import { useState, useEffect } from "react"
import data from "../../assets/data/portfolioData"
import Modal from "./Modal"

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState(6)
  const [portfolios, setPortfolios] = useState(data)
  const [activeTab, setActiveTab] = useState("all")
  const [showModal, setShowModal] = useState(false)
  const [activeID, setActiveID] = useState(null)

  const filterCategories = {
    all: "All",
    "web-design": "Frontend",
    "Fullstack": "Fullstack",
  }

  useEffect(() => {
    if (activeTab === "all") {
      setPortfolios(data)
    } else {
      const categoryMap = {
        "web-design": "Web Design",
        "Fullstack": "Fullstack",
      }

      const filteredData = data.filter((item) => item.category === categoryMap[activeTab])

      setPortfolios(filteredData)
    }

    // Reset visible items when changing tabs
    setVisibleItems(6)
  }, [activeTab])

  const loadMoreHandler = () => {
    setVisibleItems((prev) => prev + 3)
  }

  const showModalHandler = (id) => {
    setShowModal(true)
    setActiveID(id)
  }

  const isAllItemsVisible = visibleItems >= portfolios.length
  const hasMoreThanInitialItems = data.length > 6

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap mb-8">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">My Recent Projects</h3>
          </div>

          <div className="flex gap-3 flex-wrap">
            {Object.entries(filterCategories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] transition-colors duration-300 ${
                  activeTab === key ? "bg-smallTextColor text-white" : "hover:bg-smallTextColor hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {portfolios.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-smallTextColor text-lg">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {portfolios.slice(0, visibleItems).map((portfolio, index) => (
              <div
                key={portfolio.id}
                data-aos="fade-zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="group relative z-[1] overflow-hidden rounded-[8px]"
              >
                <figure className="h-[220px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover rounded-[8px] transition-transform duration-500 group-hover:scale-110"
                    src={portfolio.imgUrl || "/placeholder.svg"}
                    alt={portfolio.title}
                  />
                </figure>

                <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:flex items-center justify-center transition-all duration-300">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] transition-colors duration-300"
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isAllItemsVisible && hasMoreThanInitialItems && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] transition-colors duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} portfolios={portfolios} />}
    </section>
  )
}

export default Portfolio

