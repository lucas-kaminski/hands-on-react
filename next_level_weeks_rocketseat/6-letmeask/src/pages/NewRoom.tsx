import { Link } from 'react-router-dom'

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'

export function NewRoom(){
  return (
    <div id='page-auth'>
      <aside>
        <img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas'/> {/* não passa o url, mas sim o import */}
        <strong>Crie salar de Q&amp;A ao-vivo</strong>
        <p>Tire suas dúvidas em tempo real</p>
      </aside>
      <main>
        <div className='main-content'> {/* nõa usa class, mas sim className */}
          <img src={logoImg} alt='Let me ask!' />
          <h2>Criar uma nova sala</h2>
          <form>
            <input type='text' placeholder='Nome da sala'/>
            <Button type='submit'>Criar sala</Button>
          </form>
          <p>
            Quer entrar numa sala existente? <Link to='/'>clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}