import { MenuItem, Select, TextField, Button, Typography } from '@mui/material';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import * as confetti from 'canvas-confetti';
const ManageOfficeHours = () => {
    const [teachers, setTeachers] = useState([]);
    const [selected, setSelected] = useState('blank');
    const [password, setPassword] = useState('')
    const [edits, setEdits] = useState([]);



    const updateOfficeHours = async (teacherName) => {
        const d = teachers.map((teacher) => (teacher.name === teacherName) ? edits : teacher)
        const response = await fetch('/api/teachers', {
            method: "post",
            body: JSON.stringify({
                teachers: JSON.stringify(d),
                password: password
            }),
            headers: {
                'content-Type': 'application/json'
            }
        })
    }

    const fetchTeachers = async () => {
        try {
        const response = await fetch('/api/teachers')
        const data = await response.json()
        setTeachers(data)
        } catch (e) {
            console.log("Failed to set teachers", e)
        }
    }
    useEffect(() => { fetchTeachers() }, []);
    const officeHoursSetter = (e, i) => {
        const prev = structuredClone(edits);
        prev.officeHours[i] = e;
        setEdits(prev)
    }

    return (
        <div className="ManageOfficeHours">

            <Select value={selected} onChange={(e) => { setSelected(() => e.target.value); setEdits(() => teachers.filter((x) => x.name === e.target.value)[0]) }}>
                <MenuItem value="blank">
                    Select Teacher
                </MenuItem>
                {teachers.map((obj) => obj.name).map((teacher) => {
                    return (<MenuItem selected={teacher === selected} key={teacher} value={teacher}>{teacher}</MenuItem>);
                })}
            </Select>

            {(selected !== "blank") ?
                <div className='editor'>
                    <h1>{selected}</h1>

                    <div className="hours" style={{ display: "flex", width: "50%", flexWrap: "wrap", rowGap: "1em" }}>
                        {edits.officeHours.map((edit, index) => {
                            return <OfficeHoursManager
                                start={edit}
                                key={JSON.stringify(edit)}
                                index={index}
                                setter={officeHoursSetter}
                                del={() => {
                                    const prev = structuredClone(edits);
                                    prev.officeHours.splice(index, 1);
                                    setEdits(prev)
                                }
                                }
                            />
                        })}
                        <Button variant='contained' style={{ width: '2em', height: '2em', minWidth: 0, padding: '16px' }} onClick={() => { const prev = structuredClone(edits); prev.officeHours.push({ day: "", time: "" }); setEdits(prev) }}>+</Button>
                    </div>

                    <br /><br /><br />

                    <TextField key="passwords" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

                    <br />
                    <Button variant="outlined" onClick={() => { updateOfficeHours(edits.name) }}>Update</Button>


                </div>
                : <Typography variant='h1'>Select a teacher to edit office hours</Typography>}




        </div>
    )

}

const OfficeHoursManager = ({ start, setter, index, del }) => {
    const [day, setDay] = useState(start.day);
    const [time, setTime] = useState(start.time);

    const [confetti_func, setConfetti] = useState(() => { });

    const confetti_canvas = useRef();

    useEffect(() => {
        setConfetti({
            run: confetti.create(confetti_canvas.current, { resize: true }),
            zIndex: () => {
                confetti_canvas.current.style.zIndex = 1000;
                setTimeout(() => { confetti_canvas.current.style.zIndex = -1; }, 500)
            }
        })
    }, [confetti_canvas])

    const handleDayChange = (e) => {
        setDay(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    return (
        <div style={{ display: "flex", position: "relative", justifyContent: "space-between", width: "100%", alignItems: "center", height: "5em" }}>
            <TextField value={day} onChange={handleDayChange} placeholder="Day" slotProps={{ input: { style: { height: "5em", fontSize: "2em", padding: "0px" } } }} sx={{ padding: "0", maxHeight: "100%" }} />
            <p style={{ fontWeight: 900, fontSize: '1.5em' }}>@</p>
            <TextField value={time} onChange={handleTimeChange} placeholder="Time" slotProps={{ input: { style: { height: "5em", fontSize: "2em", padding: "0px" } } }} sx={{ padding: "0", maxHeight: "100%" }} />
            <div style={{ width: "64px", height: "100%", display: "flex", justifyContent: 'space-between', flexWrap: "wrap", flexDirection: 'row', rowGap: '4px' }}>
                <Button variant="contained" color="error" onClick={() => del(index)} style={{ width: "100%", height: "calc(50%-2px)" }}><DeleteIcon /></Button>
                <Button variant="contained" color="success" onClick={() => { setter({ day, time }, index); confetti_func.run({ spread: 360, startVelocity: 22, particleCount: 100 }); confetti_func.zIndex() }} style={{ width: "100%", height: "calc(50%-2px)" }}>Save</Button>
                {/*see https://github.com/catdad/canvas-confetti for confetti config */}
            </div>
            <canvas ref={confetti_canvas} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: -1 }} />
        </div >
    );
};


export default ManageOfficeHours;