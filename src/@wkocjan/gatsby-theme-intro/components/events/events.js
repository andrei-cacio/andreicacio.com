import React from 'react';
import Event from "./event";

const Events = ({ events }) => (
    <>
        <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
            Talks & workshops
        </h5>
        {events.map((event, i) => (
            <Event key={`${event.name}_${i}`} {...event} />
        ))}
    </>
);

Events.defaultProps = {
    events: []
};

export default Events;