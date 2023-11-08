using Doctor_App_ReactNative.Models;
using Doctor_App_ReactNative.Utils;

namespace Doctor_App_ReactNative.Repositories
{
    public class CategoryRepo : BaseRepository, ICategoryRepo
    {
        public CategoryRepo(IConfiguration configuration) : base(configuration) { }

        public List<Category> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, Name, IconUrl
                        FROM Category";

                    var reader = cmd.ExecuteReader();

                    var categories = new List<Category>();
                    while (reader.Read())
                    {
                        categories.Add(new Category()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            IconUrl = DbUtils.GetString(reader, "IconUrl")
                        });
                    }

                    reader.Close();

                    return categories;
                }
            }
        }
    }
}
