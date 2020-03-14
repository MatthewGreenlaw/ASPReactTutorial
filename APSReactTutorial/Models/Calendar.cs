using System;
using System.Data.Entity;

namespace ASPReactTutorial.Models
{
    public class Calendar
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }

    public class CalendarDBContext : DbContext
    {
        public DbSet<Calendar> Calendars { get; set; }
    }
}