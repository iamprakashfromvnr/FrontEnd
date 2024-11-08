import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineMail } from "react-icons/ai";
import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { IoIosArrowBack } from "react-icons/io";
import { MdNavigateNext, MdOutlineFileDownload } from "react-icons/md";
import logo from '../../Images/sky.jpg'

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'ESIC Remittance',
    start: '2024-10-08',
    end: '2024-10-08',
    allDay: true,
  },
  {
    title: 'Trade License + 1',
    start: '2024-10-23',
    end: '2024-10-23',
    allDay: true,
  },
  {
    title: 'Event',
    start: '2024-10-26',
    end: '2024-10-26',
    allDay: true,
  },
];

// Convert string dates into JavaScript date objects
const convertedEvents = events.map(event => ({
  ...event,
  start: new Date(event.start),
  end: new Date(event.end),
}));
const CustomHeader = () => {
  return <div className="hidden" />; // Return an empty div to hide the header
};
// Custom Toolbar component
const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };

  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };

  const label = () => {
    const date = moment(toolbar.date);

    if (toolbar.view === 'week') {
      const startOfWeek = moment(toolbar.date).startOf('week').format('DD MMMM YYYY');
      const endOfWeek = moment(toolbar.date).endOf('week').format('DD MMMM YYYY');
      return `${startOfWeek} - ${endOfWeek}`;
    }

    return date.format('DD MMMM YYYY');
  };
  

  return (
    <div className='w-screen lg:w-2/5'>
      <div className="flex justify-between mb-4">
        <button onClick={goToBack} className="px-2 py-2 bg-yellow-100 rounded-full">
          <IoIosArrowBack className='text-yellow-500 ' size={25} />
        </button>
        <span className="text-xl font-semibold">{label()}</span>
        <button onClick={goToNext} className="px-2 py-2 bg-yellow-100 rounded-full">
          <MdNavigateNext className='text-yellow-500 ' size={25} />
        </button>
      </div>
    </div>
  );
};

// Custom date cell component to show the date in the top-left corner and the day in the top-right corner
const CustomDateCellWrapper = ({ value }) => {
  const dayName = moment(value).format('ddd'); // Get the day name (e.g., "Monday", "Tuesday")
  const date = moment(value).format('D'); // Get the day number (e.g., "1", "2")

  return (
    <div className="relative h-full w-full flex justify-center items-start p-1">
      <span className="absolute top-1 left-0 text-xs md:text-sm lg:text-base text-gray-500 -z-50">
        {dayName}
      </span>
      {/* No default children content is rendered here */}
    </div>
  );
};

const MyCalendar = () => {
  const [view, setView] = useState('month');
  const [startDate, setStartDate] = useState(null);
  const [filter, setFilter] = useState({ status: "", view: "", range: "" });
  const [search, setSearch] = useState("");

  const eventStyleGetter = (event) => {
    let style = {
      backgroundColor:'tomato',
      borderRadius: '5px',
      color: 'text-black',
      marginTop:'20px',
      border: '0px',
      display: 'block',
      padding: '5px',
    };
    return { style };
  };

  return (
    <>
      <div className='p-5 flex justify-between'>
        <span className="flex justify-between gap-3 items-center">
          <img src={logo} alt="" className='h-9 w-9 rounded-full' />
          <h4 className="text-md font-bold">Ace Corporation, <span className="text-md font-medium">Bangalore</span></h4>
        </span>
        <span className="flex justify-between items-center gap-3">
          <AiOutlineMail className='w-8 h-8 p-1.5 bg-primary text-white rounded-full' size={15} />
          <MdOutlineFileDownload className='w-8 h-8 p-1.5 bg-primary text-white rounded-full' size={15} />
        </span>
      </div>

      <div className="flex justify-start my-4 ms-5 gap-3">
        <select className="bg-white border border-bordergray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5">
          <option>Status</option>
          <option>2</option>
        </select>
        <select
          value={view}
          onChange={(e) => setView(e.target.value)}
          className="bg-white border border-bordergray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5">
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="day">Day</option>
        </select>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Date Range"
          className="bg-gray-50 border border-bordergray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5"
        />
        <input type='text' placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} className="bg-gray-50 border border-bordergray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5" />
      </div>

      <div className="App">
        <Calendar className='-z-50'
          localizer={localizer}
          events={convertedEvents}
          style={{ height: 800, margin: '20px', }}
          view={view}
          onView={(newView) => setView(newView)}
          header={false}
          selectable={true}
          eventPropGetter={eventStyleGetter}
          components={{
            toolbar: CustomToolbar,
            dateCellWrapper: CustomDateCellWrapper,
            header: CustomHeader,
          }}
        />
      </div>
    </>
  );
};

export default MyCalendar;