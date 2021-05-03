type User = {
    name:"string";
    address:{
        city: string;
        state: string;
    }
}
//retornar o texto do rodapé do site
function createWelcomeMessage(user: User) {
    return '${user.name}'
}

const welcomeMessage = createWelcomeMessage({
    name: "Lucas Kaminski",
    address: {
        city: "Curitiba",
        state: "PR"
    }
})

//tipagem
function Button() {
    return (
        <button>{props.title}</button>
    )
}

function App() {
    return (
        <>
        <Button tittle="Button 1" />
        <Button tittle={1} />
        <Button tittle="Button 3" />
        </>
        )   
}

