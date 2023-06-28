
import Img from '../public/img.png'
import Card from './components/Card'

function App() {
  

  return (
    <>
    <div>
      <Card img = {Img}  name = "Gustavo Adoncio" bio= "Web Development Student" email= 'gustavoadoncio@gmail.com' phone = '81984670017' git = 'https://github.com/Adonccio'  instagram= 'https://www.instagram.com/adonccio'/>
    </div>
    </>
  )
}

export default App
