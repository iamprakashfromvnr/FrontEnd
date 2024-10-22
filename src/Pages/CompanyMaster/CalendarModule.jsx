import React from 'react'
import {ScheduleXCalendar, useCalendarApp} from '@schedule-x/react'
import {createViewWeek,createViewMonthGrid, createViewDay} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/calendar.css'
const CalendarModule = () => {
  const CalendarApp=useCalendarApp({
    views:[
      createViewMonthGrid(),
      createViewWeek(),
      createViewDay()
    ],
    events:[
      {
        id:1,
        title:'event1',
        start:'2024-10-29',
        end:'2024-10-29',
      }
    ],
    selectedDate:'2024-10-29',
})
  // const calendar:CalendarApp=useCalendarApp(config:{
  //   views:[
  //     createViewWeek(),createViewMonthGrid()
  //   ],
  //   events:[
  //     {
  //       id:1,
  //       title:'event1',
  //       start:'2024-10-29',
  //       end:'2024-10-29',
  //     },
  //   ]
  // })
  return (
    <div>
      <ScheduleXCalendar calendarApp={CalendarApp}/>
    </div>
  )
}

export default CalendarModule