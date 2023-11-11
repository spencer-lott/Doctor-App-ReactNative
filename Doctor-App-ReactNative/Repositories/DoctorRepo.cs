using Doctor_App_ReactNative.Models;
using Doctor_App_ReactNative.Utils;

namespace Doctor_App_ReactNative.Repositories
{
    public class DoctorRepo : BaseRepository, IDoctorRepo
    {
        public DoctorRepo(IConfiguration configuration) : base(configuration) { }

        public List<Doctor> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name], Years_Of_Experience, StartTime, EndTime, About, HospitalId, CategoryId
                        FROM Doctor
                        ";

                    var reader = cmd.ExecuteReader();

                    var doctors = new List<Doctor>();
                    while (reader.Read())
                    {
                        doctors.Add(new Doctor()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Years_Of_Experience = DbUtils.GetInt(reader, "Years_Of_Experience"),
                            StartTime = DbUtils.GetString(reader, "StartTime"),
                            EndTime = DbUtils.GetString(reader, "EndTime"),
                            About = DbUtils.GetString(reader, "About"),
                            HospitalId = DbUtils.GetInt(reader, "HospitalId"),
                            CategoryId = DbUtils.GetInt(reader, "CategoryId")

                        });
                    }

                    reader.Close();

                    return doctors;
                }
            }
        }

        public List<Doctor> GetDoctorsByCategoryName(string name)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT 
                            d.Id AS DId, 
                            d.[Name] AS DoctorName, 
                            d.Years_Of_Experience, 
                            d.StartTime, 
                            d.EndTime, 
                            d.About,
                            d.HospitalId,
                            d.CategoryId,
                            c.Id AS CId,
                            c.[Name] AS CategoryName,
                            c.IconUrl
                        FROM 
                            Doctor d
                        LEFT JOIN 
                            Category c ON d.CategoryId = c.Id
                        WHERE 
                            c.[Name] = @categoryName;
                        ";

                    DbUtils.AddParameter(cmd, "@categoryName", name);

                    var reader = cmd.ExecuteReader();

                    var doctors = new List<Doctor>();
                    while (reader.Read())
                    {
                        doctors.Add(new Doctor()
                        {
                            Id = DbUtils.GetInt(reader, "DId"),
                            Name = DbUtils.GetString(reader, "DoctorName"),
                            Years_Of_Experience = DbUtils.GetInt(reader, "Years_Of_Experience"),
                            StartTime = DbUtils.GetString(reader, "StartTime"),
                            EndTime = DbUtils.GetString(reader, "EndTime"),
                            About = DbUtils.GetString(reader, "About"),
                            HospitalId = DbUtils.GetInt(reader, "HospitalId"),
                            CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            Category = new Category()
                            {
                                Id = DbUtils.GetInt(reader, "CId"),
                                Name = DbUtils.GetString(reader, "CategoryName"),
                                IconUrl = DbUtils.GetString(reader, "IconUrl")
                            }
                        });
                    }

                    reader.Close();

                    return doctors;
                }
            }
        }



    }
}


