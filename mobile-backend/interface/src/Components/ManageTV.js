import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const ManageTV = () => {

    const [password, setPassword] = useState('')
    const [TV, setTV] = useState('')



    const submit = async () => {
        await fetch('/api/TV', {
            method: 'post',
            body: JSON.stringify({
                TV: TV,
                password: password
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    const getTv = async () => {
        try {
            const response = await fetch('/api/tv');
            const data = await response.json() ?? "";
            setTV(() => data.tv);
        } catch (e) {
            console.log("unable to set TV", e);
        }
    }

    useEffect(() => { getTv(); }, []);

    return (
        <div>
            <TextField placeholder="TV Link" value={TV} onChange={(e) => { setTV(e.target.value) }} sx={{ width: "100% " }} />
            <br /><br />
            <TextField placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
            <br /><br />
            <Button onClick={submit} variant="outlined">Update</Button>
        </div>
    )
}

export default ManageTV