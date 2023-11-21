using Doctor_App_ReactNative.Utils;
using Doctor_App_ReactNative.Models;

namespace Doctor_App_ReactNative.Repositories
{
    public class AppointmentRepo : BaseRepository, IAppointmentRepo
    {

        public AppointmentRepo(IConfiguration configuration) : base(configuration) { }

        public List<Appointment> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, UserName, Email, Date, Time, Note, HospitalId 
                        FROM Appointment
                        ";

                    var reader = cmd.ExecuteReader();

                    var appointments = new List<Appointment>();
                    while (reader.Read())
                    {
                        appointments.Add(new Appointment()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserName = DbUtils.GetString(reader, "UserName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Date = DbUtils.GetDateTime(reader, "Date"),
                            Time = DbUtils.GetString(reader, "Time"),
                            Note = DbUtils.GetString(reader, "Note"),
                            HospitalId = DbUtils.GetInt(reader, "HospitalId")
                        });
                    }

                    reader.Close();

                    return appointments;
                }
            }
        }

        public List<Appointment> GetAppointmentsByEmail(string email)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT a.Id AS AId, a.UserName, a.Email, a.Date, a.Time, a.Note, a.HospitalId, h.Id AS HId, h.[Name] AS HospitalName, h.Address, h.ImageUrl, h.Website, h.Phone,h.Description
                        FROM Appointment a
                        LEFT JOIN Hospital h ON h.Id = a.HospitalId
                        WHERE 
                            a.Email = @email;
                        ";

                    DbUtils.AddParameter(cmd, "@email", email);

                    var reader = cmd.ExecuteReader();

                    var appointments = new List<Appointment>();
                    while (reader.Read())
                    {
                        appointments.Add(new Appointment()
                        {
                            Id = DbUtils.GetInt(reader, "AId"),
                            UserName = DbUtils.GetString(reader, "UserName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Date = DbUtils.GetDateTime(reader, "Date"),
                            Time = DbUtils.GetString(reader, "Time"),
                            Note = DbUtils.GetString(reader, "Note"),
                            HospitalId = DbUtils.GetInt(reader, "HospitalId"),
                            Hospital = new Hospital()
                            {
                                Id = DbUtils.GetInt(reader, "HId"),
                                Name = DbUtils.GetString(reader, "HospitalName"),
                                Address = DbUtils.GetString(reader, "Address"),
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                                Website = DbUtils.GetString(reader, "Website"),
                                Phone = DbUtils.GetString(reader, "Phone"),
                                Description = DbUtils.GetString(reader, "Description"),

                            }
                        });
                    }

                    reader.Close();

                    return appointments;
                }
            }
        }

        public void Add(Appointment appointment)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Appointment (UserName, Email, Date, Time, Note, HospitalId)
                        OUTPUT INSERTED.ID
                        VALUES (@UserName, @Email, @Date, @Time, @Note, @HospitalId)";
                    DbUtils.AddParameter(cmd, "@UserName", appointment.UserName);
                    DbUtils.AddParameter(cmd, "@Email", appointment.Email);
                    DbUtils.AddParameter(cmd, "@Date", appointment.Date);
                    DbUtils.AddParameter(cmd, "@Time", appointment.Time);
                    DbUtils.AddParameter(cmd, "@Note", appointment.Note);
                    DbUtils.AddParameter(cmd, "@HospitalId", appointment.HospitalId);
                    appointment.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(Appointment appointment)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Appointment
                           SET UserName = @UserName,
                               Email = @Email,
                               Date = @Date,
                               Time = @Time,
                               Note = @Note,
                               HospitalId = @HospitalId

                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@UserName", appointment.UserName);
                    DbUtils.AddParameter(cmd, "@Email", appointment.Email);
                    DbUtils.AddParameter(cmd, "@Date", appointment.Date);
                    DbUtils.AddParameter(cmd, "@Time", appointment.Time);
                    DbUtils.AddParameter(cmd, "@Note", appointment.Note);
                    DbUtils.AddParameter(cmd, "@HospitalId", appointment.HospitalId);
                    DbUtils.AddParameter(cmd, "@Id", appointment.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }


        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Appointment WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }


    }
}
