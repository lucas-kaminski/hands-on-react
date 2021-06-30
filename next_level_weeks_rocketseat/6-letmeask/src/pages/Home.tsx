import { useHistory } from 'react-router-dom'

import { auth, firebase, } from '../services/firebase'

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIconImg from '../assets/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'

export function Home() {

  const history = useHistory()

  // function signIn() {

  // }

  function handleCreateRoom() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider).then(result => { //autenticação firebase
      console.log(result)
    })
    history.push('/rooms/new')
  }

  return (
    <div id='page-auth'>
      <aside>
        <img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas' /> {/* não passa o url, mas sim o import */}
        <strong>Crie salar de Q&amp;A ao-vivo</strong>
        <p>Tire suas dúvidas em tempo real</p>
      </aside>
      <main>
        <div className='main-content'> {/* nõa usa class, mas sim className */}
          <img src={logoImg} alt='Let me ask!' />
          <button className='createRoom' onClick={handleCreateRoom}>
            <img src={googleIconImg} alt='Logo da google' />
            Crie sua sala com o google
          </button>
          <div className='separator'>ou entre em uma sala</div>
          <form >
            <input type='text' placeholder='Digite o código da sala' />
            <Button type='submit'>Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}