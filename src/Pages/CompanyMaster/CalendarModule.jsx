import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Import the custom styles for the event filter bar
// import './CalendarStyles.css';

// Setup localizer for react-big-calendar using moment.js
const localizer = momentLocalizer(moment);

const events = [
  {
    id: 1,
    title: 'Meeting',
    start: 2024-10-10,
    end: new Date(),
    type: 'Work',
  },
  {
    id: 2,
    title: 'Family Dinner',
    start: new Date(),
    end: new Date(),
    type: 'Personal',
  },
  // More events...
];

const CalendarComponent = () => {
  const [view, setView] = useState('month');  // State to toggle between views
  const [eventType, setEventType] = useState('All');  // State to filter events

  // Function to filter events based on selected event type
  const filteredEvents = eventType === 'All' ? events : events.filter(event => event.type === eventType);

  return (
    <div>
      {/* View Toggle Buttons */}
      <div className="view-toggle">
        <button onClick={() => setView('month')}>Monthly View</button>
        <button onClick={() => setView('week')}>Weekly View</button>
      </div>

      {/* Event Filter */}
      <div className="event-filter">
        <label htmlFor="eventType">Filter Events:</label>
        <select id="eventType" value={eventType} onChange={e => setEventType(e.target.value)}>
          <option value="All">All Events</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          {/* Add more filters as needed */}
        </select>
      </div>

      {/* Calendar Component */}
      <Calendar
        localizer={localizer}
        events={filteredEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        view={view}
        onView={() => {}}  // Disable internal view switching
      />
    </div>
  );
};

export default CalendarComponent;
