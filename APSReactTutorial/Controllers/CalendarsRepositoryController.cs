using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ASPReactTutorial.Models;

namespace ASPReactTutorial.Controllers
{
    public class CalendarsRepositoryController : ApiController
    {
        private CalendarDBContext db = new CalendarDBContext();

        // GET: api/CalendarsRepository
        public IQueryable<Calendar> GetCalendars()
        {
            return db.Calendars;
        }

        // GET: api/CalendarsRepository/5
        [ResponseType(typeof(Calendar))]
        public IHttpActionResult GetCalendar(int id)
        {
            Calendar calendar = db.Calendars.Find(id);
            if (calendar == null)
            {
                return NotFound();
            }

            return Ok(calendar);
        }

        // PUT: api/CalendarsRepository/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCalendar(int id, Calendar calendar)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != calendar.ID)
            {
                return BadRequest();
            }

            db.Entry(calendar).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CalendarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CalendarsRepository
        [ResponseType(typeof(Calendar))]
        public IHttpActionResult PostCalendar(Calendar calendar)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Calendars.Add(calendar);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = calendar.ID }, calendar);
        }

        // DELETE: api/CalendarsRepository/5
        [ResponseType(typeof(Calendar))]
        public IHttpActionResult DeleteCalendar(int id)
        {
            Calendar calendar = db.Calendars.Find(id);
            if (calendar == null)
            {
                return NotFound();
            }

            db.Calendars.Remove(calendar);
            db.SaveChanges();

            return Ok(calendar);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CalendarExists(int id)
        {
            return db.Calendars.Count(e => e.ID == id) > 0;
        }
    }
}