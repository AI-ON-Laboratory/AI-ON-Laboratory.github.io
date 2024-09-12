<div id='calendar'></div>
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/icalendar@6.1.8/index.global.min.js'></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'it',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: {
      url: 'https://calendar.google.com/calendar/ical/TUO_ID_CALENDARIO_QUI/public/basic.ics',
      format: 'ics'
    }
  });
  calendar.render();
});
</script>
<style>
#calendar {
  max-width: 900px;
  margin: 0 auto;
}
</style>