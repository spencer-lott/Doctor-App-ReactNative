using Doctor_App_ReactNative.Models;

namespace Doctor_App_ReactNative.Repositories
{
    public interface ICategoryRepo
    {
        List<Category> GetAll();
    }
}