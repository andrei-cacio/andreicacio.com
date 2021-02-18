import React from "react"
import { ProjectType } from "@wkocjan/gatsby-theme-intro/src/types"

const EventType = ({ type }) => (
    <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
    <span
        className={`inline-block w-2 h-2 rounded-full mr-2 ${
            type === "workshop" ? "bg-indigo-500" : "bg-yellow-500"
        }`}
    />
        Type: {type}
    </li>
)

EventType.propTypes = {
    type: ProjectType.status,
}

export default EventType
