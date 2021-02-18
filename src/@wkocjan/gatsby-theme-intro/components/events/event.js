import Img from "gatsby-image"
import React from "react"
import { ProjectType } from "@wkocjan/gatsby-theme-intro/src/types"
import ProjectIcon from "./event-icon"
import EventType from "./event-type"
import ProjectTags from "@wkocjan/gatsby-theme-intro/src/components/projects/project-tags"

const Event = props => {
    const { name, where, image, url, description, status, tags, icon } = props
    return (
        <div className="border-t-4 border-line relative flex flex-wrap bg-red-100 p-4 lg:p-8 bg-no-repeat text-sm mb-6">
            {image && (
                <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
                    <Img fluid={image.childImageSharp.fluid} alt={name} />
                </div>
            )}
            <div className="lg:flex-1">
                <h4 className="font-bold">{name}</h4>
                <p class="mt-1">
                    <span> <strong>Event:</strong> </span>
                    {
                        where.map(location => (<span class="p-1 mr-1 bg-red-200">{location}</span>))
                    }
                </p>

                {url && (
                    <p class="mt-1">
                        <strong class="pr-1">
                        Link: 
                        </strong>
                        <a
                            className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
                            href={url}
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            {url}
                        </a>
                    </p>
                )}
                
                <p className="w-full py-4 whitespace-pre-line">{description}</p>
                <ul className="pr-2">
                    {status && <EventType type={status} />}
                    {tags && <ProjectTags tags={tags} />}
                </ul>

                {icon && <ProjectIcon icon={icon} />}
            </div>
        </div>
    )
}

Event.propTypes = ProjectType

export default Event
