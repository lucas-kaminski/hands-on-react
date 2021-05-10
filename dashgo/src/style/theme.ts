//Alteração das configs padrões do chakra
import { extendTheme } from '@chakra-ui/react' //sempre importa do react

export const theme = extendTheme{
    style: {
        body:{
            bg: 'gray.900' //passa a cor por variável
            color: 'gray-50'
        }
    }
}
