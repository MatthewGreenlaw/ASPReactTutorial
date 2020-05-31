const siteRoot = '/';
const endpoints = {
    getCalendars: 'api/CalendarsRepository',
    postCalendar: 'api/CalendarsRepository',
    deleteCalendar: 'api/CalendarsRepository/5',
}

export function getCalendars() {
    return $.getJSON(siteRoot + endpoints.getCalendars);
}

export function postCalendar(calendar) {
    let retData = false;
    $.ajax({
        type: "POST",
        url: siteRoot + endpoints.postCalendar,
        data: calendar,
        success: function (resData) { retData = resData },
        dataType: 'JSON'
    });

    return retData;
}

export function deleteCalendar(id) {
    $.ajax({
        method: "DELETE",
        url: siteRoot + endpoints.deleteCalendar,
        data: id,
        success: function () {
            alert("success");
        },
        error: function () {
            alert("fails");
        },
        dataType: 'JSON'
    });
}