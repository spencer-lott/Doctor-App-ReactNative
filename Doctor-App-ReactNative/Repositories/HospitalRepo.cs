using Doctor_App_ReactNative.Models;
using Doctor_App_ReactNative.Utils;


namespace Doctor_App_ReactNative.Repositories
{
    public class HospitalRepo : BaseRepository, IHospitalRepo
    {
        public HospitalRepo(IConfiguration configuration) : base(configuration) { }

        public List<Hospital> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, Name, Address, ImageUrl, Website, Phone
                        FROM Hospital";

                    var reader = cmd.ExecuteReader();

                    var categories = new List<Hospital>();
                    while (reader.Read())
                    {
                        categories.Add(new Hospital()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Address = DbUtils.GetString(reader, "Address"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            Website = DbUtils.GetString(reader, "Website"),
                            Phone = DbUtils.GetString(reader, "Phone")

                        });
                    }

                    reader.Close();

                    return categories;
                }
            }
        }

    }
}
