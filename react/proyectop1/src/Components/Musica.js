import React from 'react';

const Musica = () => {
    return (
        <div>
            <h2>Gustos Musicales Actuales</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <img 
                        src="/Imagenes1/kpop.jpg" 
                        alt="Artista 1" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>kpop</p>
                </div>
                <div>
                    <img 
                        src="/Imagenes1/flor.jpg" 
                        alt="Artista 2" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Musica folklore</p>
                </div>
            </div>
        </div>
    );
};

export default Musica;