import { Link, useHistory } from 'react-router-dom'
import { FormEvent } from 'react'

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'
import { database } from '../services/firebase'

export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()

  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    history.push(`/rooms/${firebaseRoom.key}`) //key = o id da sala
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input type='text' placeholder='Nome da sala' onChange={event => setNewRoom(event.target.value)} value={newRoom} />
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