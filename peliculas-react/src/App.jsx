import './App.css'


function Pelicula({urlImagen, titulo, descripcion}) {
  return <div className="pelicula">
    <h2>{titulo}</h2>
    <div className="poster-pelicula">
      <img src={urlImagen} alt="" />
    </div>
    <p><b>SINOPSIS:</b> {descripcion}</p>
  </div>
}

function MiembroEquipo({ nombre, apellido }) { 
  return (
    <div className="miembro-equipo">
      <h3>{nombre}</h3>
      <h2>{apellido}</h2>
    </div>
  )
}


function App() {

  const equipo = [
    {
      nombre: "Gabo",
      apellido: "Penagos"
    },
    {
      nombre: "Julian",
      apellido: "Mendez"
    },
    {
      nombre: "Nata",
      apellido: "Mendez"
    },
    {
      nombre: "Jineth",
      apellido: "Mendez"
    }
  ];

  return (
    <main>
      <header>
        <h1>Equipo Idiomas Puentes</h1>
      </header>
      <section>
        <div id="equipo">
          {equipo.map(miembro => {
            return <MiembroEquipo key={miembro.nombre} nombre={miembro.nombre} apellido={miembro.apellido}></MiembroEquipo>
          })}
        </div>
      </section>
    </main>
  )
}

export default App
