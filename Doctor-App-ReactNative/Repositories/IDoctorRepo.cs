using Doctor_App_ReactNative.Models;

namespace Doctor_App_ReactNative.Repositories
{
    public interface IDoctorRepo
    {
        List<Doctor> GetAll();
        List<Doctor> GetDoctorsByCategoryName(string name);
    }
}