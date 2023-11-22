const BASE_URL = 'http://192.168.1.235:5236/api'

export const getAllSliders = () => {
    return fetch(`${BASE_URL}/Slider`).then((res) => res.json())
};

export const getAllCategories = () => {
    return fetch(`${BASE_URL}/Category`).then((res) => res.json())
};

export const getAllHospitals = () => {
  return fetch(`${BASE_URL}/Hospital`).then((res) => res.json())
};

export const getAllDoctors = () => {
    return fetch(`${BASE_URL}/Doctor`).then((res) => res.json())
};

export const getHospitalsByCategoryName = (name) => {
    return fetch(`${BASE_URL}/Hospital/GetHospitalsByCategoryName?categoryName=${name}`).then((res) => res.json())  
}

export const getDoctorsByCategoryName = (name) => {
    return fetch(`${BASE_URL}/Doctor/GetDoctorsByCategoryName?categoryName=${name}`).then((res) => res.json())  
}

export const addAppointment = (singleAppointment) => {
    return fetch(`${BASE_URL}/Appointment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(singleAppointment)
    })
    .then(() => getAllAppointments())
    .catch(error => {
      console.error("Error adding appointment:", error);
    });
  };
  

export const getAllAppointments = () => {
    return fetch(`${BASE_URL}/Appointment`).then((res) => res.json())
};

export const getAppointmentsByEmail = (email) => {
    return fetch(`${BASE_URL}/Appointment/GetAppointmentsByEmail?email=${email}`).then((res) => res.json())  
}

export const deleteAppointment = (id) => {
    return fetch(`${BASE_URL}/Appointment/${id}`, {
      method: "DELETE",
    })
  };

export const editAppointment = (appointment) => {
    return fetch(`${BASE_URL}/Appointment/${appointment.Id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(appointment)
    })
    .then(() => getAllAppointments())
    .catch(error => {
      console.error("Error adding appointment:", error);
    });

}
