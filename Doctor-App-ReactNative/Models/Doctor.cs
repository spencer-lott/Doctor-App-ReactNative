namespace Doctor_App_ReactNative.Models
{
    public class Doctor
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public int Years_Of_Experience { get; set; }

        public string? StartTime { get; set; }

        public string? EndTime { get; set; }

        public string? About { get; set; }

        public int HospitalId { get; set; }

        public int CategoryId { get; set; }

        public string? ImageUrl { get; set; }

        public Category? Category { get; set; }

    }
}
