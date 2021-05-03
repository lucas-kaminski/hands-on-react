import {useEffect} from "react"

//o que quero executar, quando (array) (se mudar, será executado)

export default function Home(props) {
  //Modelo SPA
  //useEffect(() => {fetch('http://localhost:3333/episodes').then(response => response.json()).then(data => console.log(data))}, [])
  return (
    <div>
    <h1>Index</h1>
    <p>{JSON.stringify(props.episode)}</p>
    </div>
  )
}

//Server-side rendering
export async function getServerSideProps() { //função executada antes do render da page
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    }
  }
}