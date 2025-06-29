import {FormInputText} from "../components/FormInputText.tsx";
import {Button} from "@mui/material";
import axios from "axios";
import {useForm} from "react-hook-form";
import {authService} from "../services/authService.ts";

const LoginPage = () => {
    const {control, handleSubmit} = useForm();

    const onSubmit = async (data: any) => {
        try {
            console.log(data);
            const response = await authService.login(data);
            navigate('/')
        } catch (err) {
            console.log(err)
        }
        // try {
        //     // const response = await axios.post("http://localhost:8080/api/auth/login", data);
        //     const response = await fetch("http://localhost:8080/api/auth/login",{
        //         method:'POST',
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body:JSON.stringify(data)
        //     } )
        //     const token = response.data; // Assuming the backend returns the token directly
        //     localStorage.setItem("authToken", token); // Store token in localStorage
        //     window.location.href = "/"; // Redirect to home page
        // } catch (error) {
        //     console.error("Login failed:", error);
        //     alert("Invalid username or password");
        // }
    };

    return (
        <div className="App" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#ffffff",
            textAlign: "center"
        }}>
            <h1 style={{textAlign: "center", marginBottom: "1.5rem"}}>Login</h1>
            <div style={{
                padding: "2rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}>
                <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                    <FormInputText name={"username"} control={control} label={"Username"}/>
                    <FormInputText name={"password"} control={control} label={"Password"}/>
                    <Button type="submit" variant={"contained"} color="primary">
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;