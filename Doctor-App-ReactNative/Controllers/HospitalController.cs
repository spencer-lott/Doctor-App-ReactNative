using Doctor_App_ReactNative.Repositories;
using Doctor_App_ReactNative.Models;
using Microsoft.AspNetCore.Mvc;

namespace Doctor_App_ReactNative.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HospitalController : ControllerBase
    {
        private readonly IHospitalRepo _hospitalRepo;

        public HospitalController(IHospitalRepo hospitalRepo)
        {
            _hospitalRepo = hospitalRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_hospitalRepo.GetAll());
        }

        [HttpGet("GetHospitalsByCategoryId")]
        public IActionResult GetHospitalsByCategoryId(int categoryId)
        {
            var category = _hospitalRepo.GetHospitalsByCategoryId(categoryId);

            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }

        [HttpGet("GetHospitalsByCategoryName")]
        public IActionResult GetHospitalsByCategoryName(string categoryName)
        {
            var category = _hospitalRepo.GetHospitalsByCategoryName(categoryName);

            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }


    }
}
