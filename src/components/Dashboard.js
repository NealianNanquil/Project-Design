import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Dashboard.css'; 

const Dashboard = () => {
    const navigate = useNavigate(); 

    const goToPostureDetection = () => {
        navigate('./components/ThreeVBHistory/PostureDetection'); 
    };

    const goToDistanceData = () => {
        navigate('./components/ThreeVBHistory/HeadToShoulder'); 
    };

    const goToClassifications = () => {
        navigate('./components/ThreeVBHistory/PostureClassification'); 
    };

    const goToCameraFeed = () => {
        navigate('/camera'); // Navigate to Camera Feed
    };

    const goToSettings = () => {
        navigate('/settings'); // Navigate to Settings
    };

    const goToControls = () => {
        navigate('/controls'); // Navigate to Controls
    };

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Dashboard</h1>
                <p>Welcome back! Here’s what’s happening today.</p>
            </header>
            <div className="dashboard-content">
                {/* Camera Feed Placeholder */}
                <section className="camera-feed">
                    <h2>Camera Feed</h2>
                    <div className="camera-placeholder">
                        {/* Placeholder for the camera feed */}
                        <p>[Camera Feed will be displayed here]</p>
                    </div>
                    <button className="action-button" onClick={goToCameraFeed}>
                        Go to Camera Feed
                    </button>
                </section>

                {/* Existing Posture Detection Section */}
                <section className="card">
                    <h2>Posture Detection</h2>
                    <p>View and analyze the posture detection results.</p>
                    <button className="action-button" onClick={goToPostureDetection}>
                        Go to Posture Detection
                    </button>
                </section>

                {/* Head-to-Shoulder Distance Section */}
                <section className="card">
                    <h2>Head-to-Shoulder Distance</h2>
                    <p>Check the head-to-shoulder distance measurements.</p>
                    <button className="action-button" onClick={goToDistanceData}>
                        View Distance Data
                    </button>
                </section>

                {/* Posture Classification Section */}
                <section className="card">
                    <h2>Posture Classification</h2>
                    <p>Review the posture classification reports.</p>
                    <button className="action-button" onClick={goToClassifications}>
                        See Classifications
                    </button>
                </section>

                {/* Settings Section */}
                <section className="card">
                    <h2>Settings</h2>
                    <p>Adjust your application settings here.</p>
                    <button className="action-button" onClick={goToSettings}>
                        Go to Settings
                    </button>
                </section>

                {/* Controls Section */}
                <section className="card">
                    <h2>Controls</h2>
                    <p>Manage your application controls here.</p>
                    <button className="action-button" onClick={goToControls}>
                        Go to Controls
                    </button>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
