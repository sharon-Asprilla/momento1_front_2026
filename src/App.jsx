import './App.css'

import Main from './Components/Main.jsx'
import Card from './Components/Cards.jsx'

function App() {
  return(
    
      <div>
        <section className='header'>
          <header>
             <h2>componente uno</h2>
          </header>
           
        </section>

        <section className='main'>

          <main>
             <Main/>
          
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
          </main>
                

              
                   
            </section>

        
        

            
           
      
        
      </div>



  )
}

export default App;


