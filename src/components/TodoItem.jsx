

// tabler icon
import { IconTrash } from "@tabler/icons"

// mantine
import { Card, Checkbox, Flex, ThemeIcon, Tooltip } from "@mantine/core"

function TodoItem({todo, toggleTodo ,deleteTodo}) {
  return (
      <Card sx={{overflow: ' visible', marginBottom:10}}>
        <Flex gap='md'>
          <Checkbox 
            label={todo.task}
            sx={{flexGrow:1, textDecoration: todo.isComplete ? 'line-through' : 'none'}} 
            checked={todo.isComplete}
            onChange={() => toggleTodo(todo.id)}
          />
          <Tooltip label='delete' transition='slide-up' sx={{fontSize:14}}>
            <ThemeIcon color='red' sx={{cursor:'pointer'}} onClick={() => deleteTodo(todo.id)}>
              <IconTrash size={18}/>
            </ThemeIcon>
          </Tooltip>
        </Flex>
      </Card>
    )
}

export default TodoItem