import Button from "./Button";

function App() { //Componente é uma função que retorna html
  return ( //não da pra colocar seguidos componentes sem componente por volta 
    // <!-- tag fantasma para evitar div desnecessário -->
    <> 
    <Button title="Button 1"/>
    <Button>aa</Button> 
    <div> 
      <h1>Hello</h1>
      <Button title="Button 2"/>
      <Button title="Button 3"/>
    </div>
    </>    
  );
}
export default App;
