using Doctor_App_ReactNative.Models;
using Doctor_App_ReactNative.Utils;

namespace Doctor_App_ReactNative.Repositories
{
    public class SliderRepo : BaseRepository, ISliderRepo
    {
        public SliderRepo(IConfiguration configuration) : base(configuration) { }

        public List<Slider> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, Name, ImageUrl
                        FROM Slider";

                    var reader = cmd.ExecuteReader();

                    var sliders = new List<Slider>();
                    while (reader.Read())
                    {
                        sliders.Add(new Slider()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl")
                        });
                    }

                    reader.Close();

                    return sliders;
                }
            }
        }
    }
}
