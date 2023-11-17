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
