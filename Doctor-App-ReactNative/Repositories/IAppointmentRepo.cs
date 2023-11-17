using Doctor_App_ReactNative.Models;

namespace Doctor_App_ReactNative.Repositories
{
    public interface IAppointmentRepo
    {
        void Add(Appointment appointment);
        void Delete(int id);
        List<Appointment> GetAll();
    }
}