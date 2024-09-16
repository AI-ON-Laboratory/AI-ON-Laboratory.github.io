document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var modal = document.getElementById('eventModal');
    var modalContent = modal.querySelector('.modal-content');
    var span = document.getElementsByClassName("close")[0];

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'it',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: function(fetchInfo, successCallback, failureCallback) {
            fetch('/assets/events.json')
                .then(response => response.json())
                .then(data => successCallback(data))
                .catch(error => failureCallback(error));
        },
        eventClick: function(info) {
            document.getElementById('eventTitle').textContent = info.event.title;
            document.getElementById('eventDescription').textContent = info.event.extendedProps.description || 'N/A';
            document.getElementById('eventLocation').textContent = info.event.extendedProps.location || 'N/A';
            var urlElement = document.getElementById('eventUrl');
            if (info.event.url) {
                urlElement.href = info.event.url;
                urlElement.textContent = info.event.url;
            } else {
                urlElement.textContent = 'N/A';
                urlElement.removeAttribute('href');
            }

            var borderColor = info.event.backgroundColor || '#3788d8';
            modalContent.style.borderColor = borderColor;
            modalContent.style.borderWidth = '5px';
            modalContent.style.borderStyle = 'solid';

            modal.style.display = "block";
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        }
    });

    calendar.render();

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    span.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});