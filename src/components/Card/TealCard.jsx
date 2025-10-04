import React from 'react'

export default function TealCard({ props }) {
  // Apply hover only if no image or link is passed
  const hoverClass = !props.img && !props.link ? "hover:scale-105 transform transition duration-300" : ""

  return (
    <div className={`bg-gradient-to-tr from-teal-500 to-teal-700 p-6 rounded-2xl shadow-xl flex flex-col ${hoverClass}`}>
      
      {props.title && <h3 className="text-xl font-bold mb-4">{props.title}</h3>}

      <div className="flex flex-col md:flex-row gap-4 flex-1">
        {props.img && (
          <img
            src={props.img}
            alt={props.title || "Card Image"}
            className="w-full md:w-40 h-40 md:h-40 object-cover rounded-xl"
          />
        )}

        <div className="flex flex-col flex-1 justify-between">
          <p className="text-gray-200 mb-4">{props.body}</p>

          {props.link && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {props.link.demoLink && (
                <a
                  href={props.link.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-pink-700 rounded-full text-sm text-white hover:bg-pink-600 transition"
                >
                  View live demo
                </a>
              )}
              {props.link.githubLink && (
                <a
                  href={props.link.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 border-2 border-pink-700 rounded-full text-sm text-white hover:border-pink-500 transition"
                >
                  View Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
