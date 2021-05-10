import React from 'react'

import {Button, HStack, Input} from '@chakra-ui/react'

function AddTodo() {
    function enviarTodo() {
        console.log("Enviado")
    }

    return (
        <form onSubmit={enviarTodo}>
        <HStack mt='8'>
            <Input variant='filled' placeholder='Todo'/>
            <Button colorScheme='pink' px='8' type='submit'>Adicionar</Button>
        </HStack>
        </form>
    )
}

export default AddTodo
