import viteLogo from './assets/vitejs.svg';
import webpackLogo from './assets/webpack.svg';
import parceljsLogo from './assets/parceljs.png';
import InfoCard from './InfoCard';
import './App.css';

function App() {
  return (
    <>
      <h1>Herramientas de Construcción para React</h1>
      <div className= "infoCardGrid" >
        <InfoCard
          nombre="Vite"
          imagen={viteLogo}
          link="https://vitejs.dev/"
          descripcion="Vite es una herramienta de construcción rápida que prioriza la velocidad."
          funcionalidades={["Rápido inicio de proyectos", "Soporte para módulos ES"]}
        />

        <InfoCard
          nombre="Webpack"
          imagen={webpackLogo}
          link="https://webpack.js.org/"
          descripcion="Webpack es una herramienta flexible para empaquetar aplicaciones web."
          funcionalidades={["Módulos y dependencias", "Optimización de rendimiento"]}
        />

        <InfoCard
          nombre="Parcel"
          imagen={parceljsLogo}
          link="https://parceljs.org/"
          descripcion="Parcel es una herramienta sin configuración para aplicaciones web rápidas."
          funcionalidades={["Sin configuración inicial", "Compilación rápida"]}
        />
      </div>
    </>
  )
}

export default App
