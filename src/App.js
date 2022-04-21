import './App.css';

function Lake({name}) {
  return(
    <div>
      <h1>Visit {name}</h1>
    </div>
  );
}

function SkiResort({name}) {
  return (
    <div>
      <h1>Visit {name}</h1>
    </div>
  );
}

function App(props) {
  return (
    <div>
      {props.season === "summer" ? (
        <Lake name="Jenny Lake" />
      ) : props.season === "winter" ? (
        <SkiResort name="JHMR" />
      ) : (
        <h1>
          Come back in the winter or summer!
        </h1>
      )
      }
    </div>
  );
   
      }
   



export default App;
