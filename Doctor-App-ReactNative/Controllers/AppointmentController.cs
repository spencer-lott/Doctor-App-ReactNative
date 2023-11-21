using Microsoft.AspNetCore.Mvc;
using Doctor_App_ReactNative.Models;
using Doctor_App_ReactNative.Repositories;

namespace Doctor_App_ReactNative.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AppointmentController : ControllerBase
    {
        private readonly IAppointmentRepo _appointmentRepo;

        public AppointmentController(IAppointmentRepo appointmentRepo) 
        {
            _appointmentRepo = appointmentRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_appointmentRepo.GetAll());
        }

        [HttpGet("GetAppointmentsByEmail")]
        public IActionResult GetAppointmentsByEmail(string email)
        {
            var category = _appointmentRepo.GetAppointmentsByEmail(email);

            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }


        [HttpPost]
        public IActionResult Post(Appointment appointment)
        {
            _appointmentRepo.Add(appointment);
            return CreatedAtAction("Get", new { id = appointment.Id });
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Appointment appointment)
        {
            if (id != appointment.Id)
            {
                return BadRequest();
            }

            _appointmentRepo.Update(appointment);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _appointmentRepo.Delete(id);
            return NoContent();
        }








    }
}
