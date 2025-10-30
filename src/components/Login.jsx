import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const BroilinkLogo = () => (
    <div className="broilink-logo-container">
        <span className="broilink-logo-text">Broilink</span>
    </div>
);

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState('');
    const [rememberMe, setRememberMe] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
    // VALIDASI LOGIN SEDERHANA-OWNER
    if (username === 'owner' && password === '12345') {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('role', 'owner');

        // REDIRECT KE DASHBOARD OWNER
        navigate('/dashboard-owner');
        } else {
            setError('Username atau Password salah');
        }
    };


    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-form-side">
                    <h1 className="welcome-title">Selamat Datang</h1>
                    <p className="subtitle">Masuk ke akun Broilink Anda</p>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder=" "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <label htmlFor="password">Password</label>
                        <div className="password-input-wrapper">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder=" "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <span 
                                className="toggle-password" 
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '👁️' : '👁️'}
                            </span>
                        </div>
                        
                        <div className="remember-me-checkbox">
                            <input
                                id="rememberMe"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="rememberMe">Ingat Saya</label>
                        </div>

                        <button type="submit" className="login-button">
                            Masuk
                        </button>
                    </form>

                    <div className="form-links">
                        <a href="#lupa-password" className="link-forgot">Lupa Password?</a>
                        <a href="#masalah-akun" className="link-issue">Ada Masalah Akun?</a>
                    </div>
                </div>

                <div className="product-info-side">
                    <BroilinkLogo />
                    <p className="tagline">
                        Teknologi pintar untuk peternakan ayam broiler yang lebih efisien dan produktif
                    </p>

                    <ul className="feature-list">
                        <li><span className="dot dot-green"></span> Monitoring Real-time</li>
                        <li><span className="dot dot-blue"></span> Analisis Data Cerdas</li>
                        <li><span className="dot dot-green"></span> Otomasi Kandang</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Login;