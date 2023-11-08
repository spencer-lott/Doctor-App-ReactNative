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

    }
}
