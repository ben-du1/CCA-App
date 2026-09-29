import { Card, List, ListItem } from "@mui/material"
const Home = () => {
    return (
        <Card className="Home">
            <List>
                <ListItem>
                    Password entry MUST always be filled out before performing ANY action
                </ListItem>
                <ListItem>
                    You may need to reload before you can see your changes take effect
                </ListItem>
                <ListItem>
                    Be CAREFUL when editing key information
                </ListItem>
            </List>
        </Card>
    )
}

export default Home