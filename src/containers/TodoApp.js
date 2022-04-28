import {addItem, 
        markItem, 
        deleteItem} from "../redux/todo"
import { connect } from "react-redux";
import TodoApp from "../components/TodoApp";

const mapStateToProps = (state) => ({
    todo: state.todo.items
})

const mapActionsToProps = {
    addItem,
    markItem,
    deleteItem
}

export default connect(mapStateToProps, mapActionsToProps)(TodoApp)