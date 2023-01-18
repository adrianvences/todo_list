// react imports
import { useState } from 'react';

// mantine imports
import { Button, Card, Flex, TextInput } from '@mantine/core';

function TodoForm({addTodo}) {
  const [task,setTask] = useState ('');
  const [isValid, setIsValid] = useState(false);
  
  const handleChange = (e) => {
    setTask (e.target.value);
    if (e.target.value.length >= 2) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    if (isValid ) {
      addTodo(task);
      setTask('');
      }
  }


  return (
    <Card sx={{ marginBottom: 20, padding: 'md' }}>
      <form onSubmit={handleSubmit}>
        <Flex gap="md">
          <TextInput
            sx={{ flexGrow: 1 }}
            placeholder="what needs to get done?"
            value={task}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="gradient"
            gradient={{ from: 'grape', to: 'indigo' }}
            // if isValid is true then button will work if it is not true button will not work
            disabled={!isValid}>
            Add Todo
          </Button>
        </Flex>
      </form>
    </Card>
  );
}

export default TodoForm;
