import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react'

const ManageBulletin = () => {

    const [password, setPassword] = useState('')
    const [bulletin, setBulletin] = useState('')

    const submit = async () => {
        await fetch('/api/bulletin', {
            method: 'post',
            body: JSON.stringify({
                bulletin: bulletin,
                password: password
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
    }
    const getBulletin = async () => {
        try {
            const response = await fetch('/api/bulletin');
            const data = await response.json() ?? "";
            setBulletin(() => data.bulletin);
        } catch (e) {
            console.log("unable to set bulletin", e);
        }
    }

    useEffect(() => { getBulletin(); }, []);

    return (
        <div>
            <TextField placeholder="Bulletin Link" value={bulletin} onChange={(e) => { setBulletin(e.target.value) }} sx={{ width: "100%" }} />
            <br /><br />
            <TextField placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
            <br /><br />
            <Button onClick={submit} variant="outlined">Update</Button>
        </div>
    )
}

export default ManageBulletin