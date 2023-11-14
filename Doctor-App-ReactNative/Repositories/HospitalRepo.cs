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
                        SELECT Id, [Name], Address, ImageUrl, Website, Phone, Description
                        FROM Hospital";

                    var reader = cmd.ExecuteReader();

                    var hospitals = new List<Hospital>();
                    while (reader.Read())
                    {
                        hospitals.Add(new Hospital()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Address = DbUtils.GetString(reader, "Address"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            Website = DbUtils.GetString(reader, "Website"),
                            Phone = DbUtils.GetString(reader, "Phone"),
                            Description = DbUtils.GetString(reader, "Description")

                        });
                    }

                    reader.Close();

                    return hospitals;
                }
            }
        }

        public List<Hospital> GetHospitalsByCategoryId(int categoryId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT 
                            h.Id AS HId, 
                            h.[Name] AS HospitalName, 
                            h.Address, 
                            h.ImageUrl, 
                            h.Website, 
                            h.Phone,
                            h.Description,
                            c.Id AS CategoryId,
                            c.[Name] AS CategoryName,
                            hc.HospitalId
                        FROM 
                            Hospital h
                        LEFT JOIN 
                            Hospital_Category hc ON h.Id = hc.HospitalId
                        LEFT JOIN 
                            Category c ON hc.CategoryId = c.Id
                        WHERE 
                            c.Id = @categoryId;
                        ";

                    DbUtils.AddParameter(cmd, "@categoryId", categoryId);

                    var reader = cmd.ExecuteReader();

                    var hospitals = new List<Hospital>();
                    while (reader.Read())
                    {
                        hospitals.Add(new Hospital()
                        {
                            Id = DbUtils.GetInt(reader, "HId"),
                            Name = DbUtils.GetString(reader, "HospitalName"),
                            Address = DbUtils.GetString(reader, "Address"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            Website = DbUtils.GetString(reader, "Website"),
                            Phone = DbUtils.GetString(reader, "Phone"),
                            Description = DbUtils.GetString(reader, "Description")
                        });
                    }

                    reader.Close();

                    return hospitals;
                }
            }
        }

        public List<Hospital> GetHospitalsByCategoryName(string name)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT 
                            h.Id AS HId, 
                            h.[Name] AS HospitalName, 
                            h.Address, 
                            h.ImageUrl, 
                            h.Website, 
                            h.Phone,
                            h.Description,
                            c.Id AS CId,
                            c.[Name] AS CategoryName,
                            c.IconUrl,
                            hc.Id AS HCId,
                            hc.HospitalId,
                            hc.CategoryId
                        FROM 
                            Hospital h
                        LEFT JOIN 
                            Hospital_Category hc ON h.Id = hc.HospitalId
                        LEFT JOIN 
                            Category c ON hc.CategoryId = c.Id
                        WHERE 
                            c.[Name] = @categoryName;
                        ";

                    DbUtils.AddParameter(cmd, "@categoryName", name);

                    var reader = cmd.ExecuteReader();

                    var hospitals = new List<Hospital>();
                    while (reader.Read())
                    {
                        hospitals.Add(new Hospital()
                        {
                            Id = DbUtils.GetInt(reader, "HId"),
                            Name = DbUtils.GetString(reader, "HospitalName"),
                            Address = DbUtils.GetString(reader, "Address"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            Website = DbUtils.GetString(reader, "Website"),
                            Phone = DbUtils.GetString(reader, "Phone"),
                            Description = DbUtils.GetString(reader, "Description"),
                            Hospital_Category = new Hospital_Category()
                            {
                                Id = DbUtils.GetInt(reader, "HCId"),
                                HospitalId = DbUtils.GetInt(reader, "HospitalId"),
                                CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            },
                            Category = new Category() 
                            {
                                Id = DbUtils.GetInt(reader, "CId"),
                                Name = DbUtils.GetString(reader, "CategoryName"),
                                IconUrl = DbUtils.GetString(reader, "IconUrl")
                            }
                        });
                    }

                    reader.Close();

                    return hospitals;
                }
            }
        }



    }
}
