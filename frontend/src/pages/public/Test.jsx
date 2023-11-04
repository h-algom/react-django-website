import { useState } from "react";
import axios from 'axios';

const Test = () => {
    const [profiles, setProfiles] = useState({});
    const BACKEND_URL = 'https://6gxyf4-8000.csb.app/profile/'
    axios.get(BACKEND_URL)
    .then(res => {
        setProfiles(res.data);
    }).catch(err => {
        console.log(err)
    })

    return (
        <div>
            <h1>Backend Data</h1>
            <div className="flex-row align-center">
                {
                    profiles.map((profile, id) => (
                        <div className="profile" key={id}>
                            <div className="username">{profile.username}</div>
                            <div className="status">{profile.status}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Test;