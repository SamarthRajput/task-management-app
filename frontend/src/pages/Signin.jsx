import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Heading } from "../components/ui/Heading";
import { SubHeading } from "../components/ui/SubHeading";
import { InputBox } from "../components/ui/InputBox";
import { Button } from "../components/ui/Button";
import { BottomWarning } from "../components/BottomWarning";
export const Signin = () => {

    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate();

    return <div className="bg-black h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign In"}></Heading>
                <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
                <InputBox onChange={(e) => {
                    setUsername(e.target.value);
                }} label={"Email"} placeholder={"Johndoe@gmail.com"}></InputBox>
                <InputBox onChange={(e) => {
                    setPassword(e.target.value)
                }} label={"Password"} placeholder={"123456"}></InputBox>
                <div className="pt-4">
                <Button onClick={async () => {
                    try{await axios.post("", {
                        username,
                        password
                    }, {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }
                    })
                    navigate("/dashboard")
                }
                catch(error){
                    alert("Incorrect Username/Password")
                }
                }} label={"Sign in"}></Button>
                </div>
                <BottomWarning label={"Already have an account ?"} buttonText={"Sign Up"} to={"/signup"}></BottomWarning>
                </div>
            </div>
        </div>
}