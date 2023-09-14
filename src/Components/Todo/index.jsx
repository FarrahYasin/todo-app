import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { Title, Grid, Flex, Button, TextInput, Text, Slider } from '@mantine/core';
import List from '../List/List';
import { ListContext } from '../Context/dataList/dataList';
import LoginForm from '../LoginForm/LoginForm';
import Auth from '../Auth/Auth';
import { LoginContext } from '../Context/Context_Login/Context_Login';
import axios from 'axios';
import SignUp from '../SignupForm/SignupForm';

const Todo = () => {

  const { able } = useContext(LoginContext)
  const { data, dispatch } = useContext(ListContext)
  const [incomplete, setIncomplete] = useState([]);
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);


  async function addItem(item) {
    try {
      item.completed = false;
      const response = await axios.post(`https://hoehoehooo.onrender.com/todo`, item)
      console.log(response)
      dispatch({ type: 'CHANGE_THE_LIST', payload: item });
    } catch (err) {
    }
  }

  async function deleteItem(id) {
    try {
      await axios.delete(`https://hoehoehooo.onrender.com/todo/${id}`)
      const items = data.list.filter(item => item.id !== id);
      // setList(items);
      dispatch({ type: 'RE_PLACE_THE_LIST', payload: items });
    } catch (err) {
      console.log('DELETE THE ERR');
    }
  }

  async function toggleComplete(id) {
    if (able('update')) {

      const items = await Promise.all(data.list.map(async (item) => {
        if (item.id === id) {
          item.completed = !item.completed;
          try {
            item.id = id
            const response = await axios.put(`https://hoehoehooo.onrender.com/todo/${id}`, item)
            console.log(response, "RES")
          } catch (err) {
            console.log('UPDATE ERR', err);
          }
        }
        return item;
      }));

      dispatch({ type: 'RE_PLACE_THE_LIST', payload: items })
    }

  }
  async function getData() {
    try {
      const res = await axios.get('https://hoehoehooo.onrender.com/todo')
      dispatch({ type: 'RE_PLACE_THE_LIST', payload: res.data.data })
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData()
  }, []);
  useEffect(() => {
    let incompleteCount = data.list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // localStorage.setItem('list', JSON.stringify(data.list))
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [data.list]);

  return (
    <>
    <Flex direction='column' justify='center' align={'center'} mih='70vh'>
      <LoginForm />
      <SignUp />
      <Auth capability="read">
        <Title ta={'center'} c={'white'} bg='violet' w='80%' p={"20px"} m={'auto'} data-testid="todo-h1" order={1}>To Do List: {incomplete} items pending</Title>
      </Auth>
      <Grid mih={'80vh'} justify='center' w={'80%'} grow gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50} >
        <Grid.Col span={6}>
          <Auth capability="create">
            <form onSubmit={handleSubmit}>

              <h2 align={'center'} >Add To Do Item</h2>

              <TextInput
                onChange={handleChange}
                name="text"
                placeholder="Write the TASK here"
                label="To Do Item"
              />

              <TextInput
                onChange={handleChange}
                name="assignee"
                placeholder="Assigned to...."
                label="Assigned To"
              />

              <Text>Difficulty</Text>
              <Slider 
               color='violet' 
                onChange={handleChange}
                defaultValue={defaultValues.difficulty}
                step={1}
                min={1}
                max={5}
                name="difficulty"
              />
              <br></br>
              <Button  fullWidth ='true' color='violet' type="submit">Add Task</Button>
              
            </form>
          </Auth>
        </Grid.Col>
      </Grid>
          </Flex>
              <Auth capability="read">
                <List list={data.list} toggleComplete={toggleComplete} deleteItem={deleteItem} />
              </Auth>
</>
  );
};

export default Todo;




