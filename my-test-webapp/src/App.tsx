import React, { useEffect, useState } from 'react';
import './App.css';

// String u = "Mario";
// const u: string = "mario";

// string / number

// interface UserType {
//   firstName: string
//   lastName: string
// }
type UserType = {
  firstName: string
  lastName: string
  age: number
}

function formatUser(user: UserType): string {
  // return `${user.firstName} ${user.lastName}`
  return "Ciao " + user.firstName + ' ' + user.lastName + " JS lover"
  // return 1
}

const u: UserType = {
  firstName: "Simone",
  lastName: "Puce",
  age: 23
}

function Persona(props: UserType): JSX.Element {
  return (
    <h3>
      Sono {props.firstName} {props.lastName} e ho {props.age} anni.
    </h3>
  )
}

function App() {

  // const persone: UserType[] = [];
  const persone: Array<UserType> = [
    {firstName: 'Gioele', lastName: 'Lopalco', age: 19},
    {firstName: 'Narcis', lastName: 'Verdesca', age: 16}
  ];

  const [contatore, setContatore] = useState<number>(0);
  const [mario, setMario] = useState<string>('');

  // let contatore: number = 0;

  const incrementaContatore = () => {
    setContatore(contatore + 1);
    // contatore += 1;
    // console.log('contatore = ', contatore);
  }
  // function incrementaContatore2() {
  //   contatore += 1;
  // }

  useEffect(() => {
    console.log('stampato ogni volta che cambia mario');
  }, [mario]);

  useEffect(() => {
    console.log('primo render');
  }, []);

  useEffect(() => {
    console.log('ad ogni re-render');
  });

  // fetch('http://qualcosa')

  return (
    <div className="App">
      <p>Ciccio</p>

      <h1>Il contatore vale <br />{contatore}</h1>
      <button onClick={incrementaContatore}>Increment</button>


      <p>{formatUser(u)}</p>
      <p> { u.age >= 18 ? 'Sei maggiorenne' : 'Sei minorenne' } </p>
      <hr />
      <Persona firstName={u.firstName} lastName={u.lastName} age={u.age} />
      <Persona firstName="Alessandro" lastName="Marra" age={2023 - 1989} />

      {persone.map((persona, index) => {
        return (
          <Persona
            firstName={persona.firstName}
            lastName={persona.lastName}
            age={persona.age}
            key={'persona-' + index}
          />
        )
      })}

      {/* {persone.map(persona => {
        return <Persona
            firstName={persona.firstName}
            lastName={persona.lastName}
            age={persona.age}
          />
      })}

      {persone.map(persona => <Persona
        firstName={persona.firstName}
        lastName={persona.lastName}
        age={persona.age}
      />
      )} */}
    </div>
  );
}

export default App;
