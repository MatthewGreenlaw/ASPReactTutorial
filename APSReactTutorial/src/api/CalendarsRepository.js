const siteRoot = '/';
const endpoints = {
    getCalendars: 'api/CalendarsRepository',
}

export function getCalendars() {
    return $.getJSON(siteRoot + endpoints.getCalendars);
}