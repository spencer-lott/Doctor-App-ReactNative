using Doctor_App_ReactNative.Repositories;
using Doctor_App_ReactNative.Models;
using Microsoft.AspNetCore.Mvc;

namespace Doctor_App_ReactNative.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SliderController : ControllerBase
    {
        private readonly ISliderRepo _sliderRepo;

        public SliderController(ISliderRepo sliderRepo)
        {
            _sliderRepo = sliderRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_sliderRepo.GetAll());
        }

    }
}
