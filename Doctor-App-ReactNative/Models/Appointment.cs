namespace Doctor_App_ReactNative.Models
{
    public class Appointment
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public DateTime Date { get; set; }

        public string Time { get; set; }

        public string Note { get; set; }

        public int HospitalId { get; set; }


    }
}
