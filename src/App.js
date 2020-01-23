import React, { useState, useEffect } from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setlatitude] = useState('');
  const [longitude, setlongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position)=> {
        const {latitude, longitude} = position.coords

        setlatitude(latitude)
        setlongitude(longitude)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout:3000,
      }
    );
  }, [])

  async function handleAddDev(e) {
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className= "input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={longitude}
                onChange={e => setlongitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={latitude}
                onChange={e => setlatitude(e.target.value)}
              />
            </div>
          </div>
        
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
          <ul>
            <li className="dev-item">
                <header>
                  <img src="https://avatars3.githubusercontent.com/u/5871858?s=460&v=4"  alt="Jhowl"/>
                  <div className="user-info">
                    <strong>Jhowl</strong>
                    <span>node, php</span>
                  </div>
                </header>
                <p>Lorem</p>
                <a href="https://github.com/jhowl">Acessar Perfil</a>
            </li>
            <li className="dev-item">
                <header>
                  <img src="https://avatars3.githubusercontent.com/u/5871858?s=460&v=4"  alt="Jhowl"/>
                  <div className="user-info">
                    <strong>Jhowl</strong>
                    <span>node, php</span>
                  </div>
                </header>
                <p>Lorem</p>
                <a href="https://github.com/jhowl">Acessar Perfil</a>
            </li>
            <li className="dev-item">
                <header>
                  <img src="https://avatars3.githubusercontent.com/u/5871858?s=460&v=4"  alt="Jhowl"/>
                  <div className="user-info">
                    <strong>Jhowl</strong>
                    <span>node, php</span>
                  </div>
                </header>
                <p>Lorem</p>
                <a href="https://github.com/jhowl">Acessar Perfil</a>
            </li>
            <li className="dev-item">
                <header>
                  <img src="https://avatars3.githubusercontent.com/u/5871858?s=460&v=4"  alt="Jhowl"/>
                  <div className="user-info">
                    <strong>Jhowl</strong>
                    <span>node, php</span>
                  </div>
                </header>
                <p>Lorem</p>
                <a href="https://github.com/jhowl">Acessar Perfil</a>
            </li>
          </ul>
      </main>
    </div>
  );
}

export default App;
