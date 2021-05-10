import {Heading} from '@chakra-ui/react'; //import das tags utilizadas

import {VStack} from '@chakra-ui/react' //template padrão que centraliza
import {IconButton} from '@chakra-ui/react' //gera botões padrões, estilizado com botão do react

import TodoList from './components/TodoList' //
import AddTodo from './components/AddTodo' //importa os componentes utilizados no site

import {FaSun, FaMoon} from 'react-icons/fa'

function App() {
  var todos = [
    {
        id: 1,
        body: 'COMPRAR ARROZ'
    },
    {
        id: 2,
        body: 'FAZER FEIJÃO'
    }
  ]
  console.log('APP',todos) //Envia o object em um array com a função e o props
  return (
    <VStack p={4}>
    <IconButton icon={<FaSun />} isRound='true' size='lg' alignSelf='flex-end'></IconButton>
    <Heading mb='8' fontWeight='extrabold' bgGradient='linear(to-r, pink.500, pink.300, blue.500)' bgClip='text'>Todo Aplication</Heading>
    <TodoList listaToDo={todos}/>
    <AddTodo />
    </VStack>
  );
}

export default App;
