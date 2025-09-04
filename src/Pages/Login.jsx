import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const USER = 'alexm';
const PASS = 'contra';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === USER && password === PASS) {
            setError('');
            navigate('/dashboard');
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '40px auto', textAlign: 'center', padding: '24px', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box' }}>
            <h2>Iniciar Sesión</h2>
            <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={e => setUsername(e.target.value)}
                style={{ width: '100%', padding: '8px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ width: '100%', padding: '8px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={handleLogin} style={{ width: '100%', padding: '10px', background: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Entrar</button>
        </div>
    );
}

export default Login;
