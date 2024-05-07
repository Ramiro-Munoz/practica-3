import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    
    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value.toLowerCase().includes('o')) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
        }
        setUsername(value);
    };

    const handleRegister = () => {
        if (username === '' || username.toLowerCase().includes('o')) {
            alert('Usuario inválido para registrarse');
        } else {
            alert('¡Usuario registrado correctamente!');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Ingresa tu nombre de usuario" 
                value={username} 
                onChange={handleInputChange} 
            />
            <button onClick={handleRegister}>Registrarse</button>
            <p>{username}</p>
        </div>
    );
};

export default Login;