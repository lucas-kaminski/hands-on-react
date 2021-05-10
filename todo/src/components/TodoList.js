import {VStack,HStack, Text, IconButton, StackDivider, Spacer} from '@chakra-ui/react'
import {FaTrash} from 'react-icons/fa'

import React,{useState} from 'react'
//29:33 
function TodoList(props) {
    console.log('todo',props.listaToDo)
    const [modalVisible, setModalVisible] = useState(false)
    
    return (<VStack divider={<StackDivider />} borderColor='gray.100' borderWidth='3px' p='4' borderRadius='lg' width='100%' maxWidth={{base:'90vw',sn:'80vw', lg:'50vw',xl:'40vw'}} alignItems='stretch'>
        {props.listaToDo.map(indexLista => (
            <HStack key={indexLista.id}>
                <Text>{indexLista.body}</Text>
                <Spacer />
                <IconButton icon={<FaTrash />} isRound='true' onClick={() => setModalVisible(!modalVisible)} />
            </HStack>
        ))}
        {modalVisible && <h1>modal</h1>}
        </VStack>
    )
}
export default TodoList
