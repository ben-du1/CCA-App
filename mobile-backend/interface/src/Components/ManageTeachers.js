import { useState, useEffect, useRef } from 'react'
import statusCodes from '../statusCodes'
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/github.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const ManageTeachers = () => {

    const [teachers, setTeachers] = useState('{}')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')
    const codeRef = useRef(null);
    hljs.registerLanguage('json', json);

    const fetchTeachers = async () => {
        try {
        const response = await fetch('/api/teachers')
        const data = await response.json()

        setTeachers(JSON.stringify(data, null, 2))
        } catch(e) {
            console.log("Failed to fetch teachers", e)
        }
    }

    const updateTeachers = async () => {
        const response = await fetch('/api/teachers', {
            method: "post",
            body: JSON.stringify({
                teachers: teachers,
                password: password
            }),
            headers: {
                'content-Type': 'application/json'
            }
        })
        const data = response.status
        console.log(data)
        setStatus(data + ' ' + statusCodes[data])
    }


    useEffect(() => {

        fetchTeachers()
    }, [])

    useEffect(() => {
        if (codeRef.current) {
            delete codeRef.current.dataset.highlighted;
            hljs.highlightElement(codeRef.current);
        }
    }, [teachers]);



    return (
        <div className="ManageTeachers">

            <div style={{ flex: 1, display: 'flex' }}>

                <textarea
                    value={teachers}
                    onChange={e => setTeachers(e.target.value)}
                    style={{ flex: 1 }}
                >
                </textarea>
                <pre style={{ flex: 1 }}>
                    <code className='json' ref={codeRef}>{teachers}</code>
                </pre>

            </div>

            <br />
            <TextField placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <br /><br />
            <Button onClick={updateTeachers} variant="outlined">Update</Button>
            <br />
            <b>{status}</b>
        </div>
    )
}

export default ManageTeachers