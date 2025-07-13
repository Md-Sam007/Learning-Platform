import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardContext } from "components/context/Dashboard";
import Unauthorized from "components/unAuthorized";
const SettingsPage = () => {
    
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@example.com");
    const [password, setPassword] = useState("");
    const {unauth, setauth }=useContext(DashboardContext);


    const navi=useNavigate();
    console.log(unauth)

    const handleSave = () => {
       
        if(!validate()) return 
        console.log("Saved changes:", { name, email, password });

        try{
            fetch("http://localhost:4000/update",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({value:{name:name,username:email,password:password}}),
                credentials: 'include'
            }).then(res=>res.status).then(res=>()=>{
                alert("Update Successfull");
                navi("/studentHome");
            });

        }catch(e){
            Error.log(e)

        }
        
        
    };
    
    const isAlphanumeric=(str)=>{
        const regx=/^[a-zA-Z0-9]+$/;
        return regx.test(str)
    }

    const validate=()=>{
        if(!email||!email.includes("@") || email.length<=8){ 
             alert("Invalid Email Entry, Email should contain More than 8 characters '@' included.");  
             return false 
        }
        if(password.length<8){
            alert("❌ Password too short: Must be at least 8 characters.");
            return false
        }

        if(!isAlphanumeric(password)){
            alert("❌ Invalid Password: Only letters and numbers allowed (no spaces or symbols).");
            return false;
        }
        return true


    }

    if(unauth){
        return (
            <Unauthorized/>
        )
    }
    else{
        return (
        <div className="h-screen w-screen bg-white">

        
        <div className="max-w-xl mt-8 rounded-xl bg-[#cac6c6] mx-auto p-6 space-y-6">
            <h1 className="text-3xl font-bold">Settings</h1>
            

            {/* Change Name */}
            <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full border px-3 py-2 rounded"
                />
            </div>

            {/* Change Email */}
            <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full border px-3 py-2 rounded"
                />
            </div>

            {/* Change Password */}
            <div>
                <label className="block text-sm font-medium">New Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full border px-3 py-2 rounded"
                />
            </div>

            <button
                onClick={handleSave}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
                Save Changes
            </button>
        </div>
        </div>
    );

    }
    
};

export default SettingsPage;

