using Doctor_App_ReactNative.Repositories;
using Doctor_App_ReactNative.Models;
using Microsoft.AspNetCore.Mvc;

namespace Doctor_App_ReactNative.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepo _categoryRepo;

        public CategoryController(ICategoryRepo categoryRepo)
        {
            _categoryRepo = categoryRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_categoryRepo.GetAll());
        }

    }
}
