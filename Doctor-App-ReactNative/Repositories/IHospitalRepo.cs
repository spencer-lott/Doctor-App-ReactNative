using Doctor_App_ReactNative.Models;

namespace Doctor_App_ReactNative.Repositories
{
    public interface IHospitalRepo
    {
        List<Hospital> GetAll();

        List<Hospital> GetHospitalsByCategoryId(int categoryId);

        List<Hospital> GetHospitalsByCategoryName(string name);

    }
}