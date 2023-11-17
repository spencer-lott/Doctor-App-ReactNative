const BASE_URL = 'http://192.168.1.235:5236/api'

export const getAllSliders = () => {
    return fetch(`${BASE_URL}/Slider`).then((res) => res.json())
};

export const getAllCategories = () => {
    return fetch(`${BASE_URL}/Category`).then((res) => res.json())
};

export const getAllHospitals = async () => {
    try {
        const response = await fetch(`${BASE_URL}/Hospital`);
        const data = await response.json();
        return data;
    } catch (error) {
        // Handle errors here
        console.error('Error fetching hospitals:', error);
        throw error; // Re-throw the error to propagate it to the caller
    }
};

export const getAllDoctors = () => {
    return fetch(`${BASE_URL}/Doctor`).then((res) => res.json())
};

export const getHospitalsByCategoryId = (id) => {
    return fetch(`${BASE_URL}/Hospital/GetHospitalsByCategoryId?categoryId=${categoryId}`).then((res) => res.json())
}; //NOT CURRENTLY BEING USED

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
    });
}
