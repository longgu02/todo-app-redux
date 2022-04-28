// MUI Components
import {Box,
        Card,
        FormControl,
        Input,
        InputLabel,
        Button,
        Grid,
        Stack,
        Typography} from "@mui/material"

// Hooks
import { useState } from "react"

// Style
import "./style/TodoApp.css"

// Icon
import checkImg from "../image/check-mark.png"
import checkCompleteImg from "../image/accept.png"
import deleteImg from "../image/close.png"

export default function TodoApp({todo, addItem, markItem, deleteItem}){
    const [item, setItem] = useState('');
    return <div className="TodoApp">
        <FormControl className="form-todo">
            <Grid container = {true}>
            <InputLabel htmlFor="item">ADD ITEM</InputLabel>
                <Input className="item-input" type="text" 
                    id="item" 
                    name="item" 
                    value={item} 
                    placeholder="Enter your item" 
                    onChange={(e) => setItem(e.target.value)}/>
                <Button className="form-button" onClick={() =>{
                    if(item) addItem(item);
                    setItem('');}}>
                    ADD
                </Button>
            </Grid>
        </FormControl>
        <br/>
        <Stack spacing={1} direction="column-reverse" className="todo-stack">
          {todo && todo.map((item, index) => (
                <Card key={index} className="item">
                    {item.isDone ? <img src={checkCompleteImg} 
                                        className="check-img" 
                                        onClick={() => markItem(item)}/> : 
                                        <img src={checkImg} 
                                        className="check-img" 
                                        onClick={() => markItem(item) }/>}
                    <Typography variant="h5" className={item.isDone ? "complete item-typography" : "item-typography"}>
                        {item.content}
                    </Typography>
                    <img src={deleteImg} className="delete-img" onClick={() => deleteItem(item)}/>
                </Card>
            ))}
        </Stack>
    </div>
}