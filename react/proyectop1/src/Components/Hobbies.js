import React from 'react';
// Usamos ../ para subir un nivel desde components hacia src
import imagenDibujo from '../Dibujo.jpg';
import imagenPasear from '../Pasear.jpg';

const Hobbies = () => {
    return (
        <div>
            <h2>Hobbies</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <img 
                        src={imagenDibujo}
                        alt="Dibujo" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Dibujar</p>
                </div>
                <div>
                    <img 
                        src={imagenPasear}
                        alt="Pasear" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Viajar </p>
                </div>
            </div>
        </div>
    );
};

export default Hobbies;