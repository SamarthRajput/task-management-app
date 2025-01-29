import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Heading } from "../components/ui/Heading";
import { SubHeading } from "../components/ui/SubHeading";
import { InputBox } from "../components/ui/InputBox";
import { Button } from "../components/ui/Button";
import { BottomWarning } from "../components/BottomWarning";

export const Signup = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-black h-screen flex justify-center">
       <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign Up"} />
                <SubHeading label={"Enter your information to create an account"}/>
                <InputBox onChange={(e) => {
                    setFirstName(e.target.value);
                }} placeholder={"John"} label={"First Name"}/>
                <InputBox onChange={(e) => {
                    setLastName(e.target.value)
                }} placeholder={"Doe"} label={"Last Name"}/>
                <InputBox onChange={(e) => {
                    setEmail(e.target.value)
                }} placeholder={"johndoe@gmail.com"} label={"Email"}/>
                <InputBox onChange={(e) => {
                    setPassword(e.target.value)
                }}  placeholder={"123@123"} label={"Password"} />

                <div className="pt-4">
                    <Button label={"Sign Up"} onClick={async () => {
                        const response = await axios.post("", {
                            firstName,
                            lastName,
                            email,
                            password
                        })
                        .catch((error) => {
                            alert("Email already taken/ wrong inputs");
                        })
                        
                        // Saving jwt token in localstorage
                        localStorage.setItem("token", response.data.token);

                        navigate("/dashboard");
                    }} 
                    ></Button>
                </div>
                    <BottomWarning label={"Already have an account ?"} buttonText={"Sign in"} to={"/signin"}></BottomWarning>
            </div>
       </div>
    </div>
}