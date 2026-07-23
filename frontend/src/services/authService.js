import api from "./api";

export const registerUser = (data) =>
    api.post("/auth/register", data);

export const loginUser = async (data) => {

    const formData = new URLSearchParams();

    formData.append("username", data.email);
    formData.append("password", data.password);

    const response = await api.post(
        "/auth/login",
        formData,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );

    return response;
};