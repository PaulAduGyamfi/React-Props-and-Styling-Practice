import React from 'react'
import Jokes from './Jokes'
function App(){
    return (
       <div>
             <Jokes 
             joke = {{
                 question: 'Why does Waldo wear stripes?',
                 punchline: 'Because he doesn’t want to be spotted.'
             }}
             />
              <Jokes 
              joke = {{
                 question: 'What do you call a sad cup of coffee?',
                 punchline: 'Depresso.'
             }}
              />
               <Jokes 
               joke = {{
                 question: 'What do you do when your hot pants catch on fire?',
                 punchline: 'Put them out with your pantyhose.'
             }}
               />
                <Jokes 
                joke = {{
                 question: 'Why did David Hasselhoff change his name to “The Hoff?”',
                 punchline: 'It’s less hassle.'
             }}
                />
                 <Jokes 
                 joke = {{
                 question: 'What is Whitney Houston’s favorite type of coordination?',
                 punchline: 'HAAANNNNND EYEEEEEEE.'
             }}
                 />
       </div>
    );
}

export default App