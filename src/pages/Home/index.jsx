import {useEffect, useState} from 'react'
import api from '../../services/api'

const Home = () => {
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get("/movie/now_playing", {
        params:{
          api_key: "d74ad846ba48ac20c45716dc0014b14f",
          language: "pt-br",
          page: 1,
        }
      })

      console.log(response.data.results)
    }

    loadFilmes()

  }, [])

  return (
    <div>
        <h1>Bem vindo a Home</h1>
    </div>
  )
}

export default Home