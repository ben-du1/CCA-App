import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PeopleIcon from '@mui/icons-material/People';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Home from './Components/Home';
import ManageTeachers from './Components/ManageTeachers';
import ManagePosts from './Components/ManagePosts';
import ManageBulletin from './Components/ManageBulletin';
import ManageTV from './Components/ManageTV';
import ManageOfficeHours from './Components/ManageOfficeHours';
export const links = [
    {name: 'How to Use', path: "/", icon: <HelpOutlineIcon />, element: <Home />},
    {name: "Manage Post", path: "/manageposts", icon: <QuestionAnswerIcon />, element: <ManagePosts />},
    {name: "Manage Teachers", path: "/manageteachers", icon: <PeopleIcon />, element: <ManageTeachers />},
    {name: "Manage Office Hours", path: "/manageofficehours", icon: <AccountBoxIcon />, element: <ManageOfficeHours />},
    {name: "Manage Bulletin", path: "/managebulletin", icon: <PresentToAllIcon />, element: <ManageBulletin />},
    {name: "Manage TV", path: "/managetv", icon: <LiveTvIcon />, element: <ManageTV />}
]