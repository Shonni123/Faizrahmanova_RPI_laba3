import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { AuthModal } from './components/AuthModal/AuthModal';
import { HomePage } from './pages/Home/HomePage';
import { LecturersPage } from './pages/Lecturers/LecturersPage';
import { CoursesPage } from './pages/Courses/CoursesPage';
import { PartnersPage } from './pages/Partners/PartnersPage';
import { AboutPage } from './pages/About/AboutPage';
import { useAuth } from './hooks/useAuth';
import './App.css';

export function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [selectedLecturerId, setSelectedLecturerId] = useState(null);

    const auth = useAuth();

    const handleTabChange = (tab, lecturerId = null) => {
        setActiveTab(tab);
        if (lecturerId) {
            setSelectedLecturerId(lecturerId);
        } else if (tab !== 'lecturers') {
            setSelectedLecturerId(null);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="app-wrapper">
            <Header
                activeTab={activeTab}
                setActiveTab={handleTabChange}
                onOpenAuth={auth.openAuth}
            />

            <main className="main-content">
                {activeTab === 'home' && <HomePage setActiveTab={handleTabChange} />}
                {activeTab === 'partners' && <PartnersPage />}
                {activeTab === 'about' && <AboutPage />}
                {activeTab === 'lecturers' && (
                    <LecturersPage selectedLecturerId={selectedLecturerId} />
                )}
                {activeTab === 'courses' && <CoursesPage setActiveTab={handleTabChange} />}
            </main>

            <Footer />

            <AuthModal
                isOpen={auth.isOpen}
                onClose={auth.closeAuth}
                role={auth.role}
                setRole={auth.setRole}
                email={auth.email}
                setEmail={auth.setEmail}
                password={auth.password}
                setPassword={auth.setPassword}
                isSuccess={auth.isSuccess}
                onSubmit={auth.handleSubmit}
            />
        </div>
    );
}

export default App;
