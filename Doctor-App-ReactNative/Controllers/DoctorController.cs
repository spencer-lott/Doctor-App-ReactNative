using Doctor_App_ReactNative.Repositories;
using Doctor_App_ReactNative.Models;
using Microsoft.AspNetCore.Mvc;

namespace Doctor_App_ReactNative.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorRepo _doctorRepo;

        public DoctorController(IDoctorRepo doctorRepo)
        {
            _doctorRepo = doctorRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_doctorRepo.GetAll());
        }

        [HttpGet("GetDoctorsByCategoryName")]
        public IActionResult GetDoctorsByCategoryName(string categoryName)
        {
            var category = _doctorRepo.GetDoctorsByCategoryName(categoryName);


            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }

    }
}
