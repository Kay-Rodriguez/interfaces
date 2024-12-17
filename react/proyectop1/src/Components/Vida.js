import React from 'react';

const Vida = () => {
    return (
        <div>
            <h2>Galería de mis cosas favoritas</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <img 
                        src="/Imagenes1/Perros.jpg" 
                        alt="Perros" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Perritos</p>
                </div>
                <div>
                    <img 
                        src="/Imagenes1/Bts.jpg" 
                        alt="Bts" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Bts</p>
                </div>
                <div>
                    <img 
                        src="/Imagenes1/Amigas.jpg" 
                        alt="Amigas" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Mis Amigas </p>
                </div>
                <div>
                    <img 
                        src="/Imagenes1/Dulces.jpg" 
                        alt="Dulces" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>los dulces </p>
                </div>
            </div>
        </div>
    );
};

export default Vida;