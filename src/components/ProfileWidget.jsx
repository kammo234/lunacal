import React, { useState } from 'react'
import { MapPin, Calendar, Briefcase } from 'lucide-react'
import './ProfileWidget.css'

const ProfileWidget = () => {
    const [activeTab, setActiveTab] = useState('about me')

    const tabs = [
        { id: 'about me', label: 'About Me' },
        { id: 'experiences', label: 'Experiences' },
        { id: 'recommended', label: 'Recommended' }
    ]

    const experiences = [
        {
            id: 1,
            company: 'Salesforce',
            role: 'Sales Representative',
            period: '2021 - Present',
            location: 'Santa Carla, CA'
        },
        {
            id: 2,
            company: 'TechCorp',
            role: 'Account Executive',
            period: '2019 - 2021',
            location: 'Albany, NY'
        },
        {
            id: 3,
            company: 'StartUp Inc',
            role: 'Business Development',
            period: '2017 - 2019',
            location: 'New York, NY'
        }
    ]

    const recommendations = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Product Manager',
            mutual: 8
        },
        {
            id: 2,
            name: 'Mike Chen',
            role: 'Sales Director',
            mutual: 12
        },
        {
            id: 3,
            name: 'Emily Davis',
            role: 'Account Manager',
            mutual: 6
        }
    ]

    return (
        <div className="profile-widget">
            <div className="tabs-container">
                <div className="tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="tab-slider">
                    <div className={`slider-indicator ${activeTab}`}></div>
                </div>
            </div>

            <div className="tab-content">
                {activeTab === 'about me' && (
                    <div className="about-content">
                        <p>
                            Hello!! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                        </p>
                        <p>
                            I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4-year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9–10 AM. This is a...
                        </p>
                    </div>
                )}

                {activeTab === 'experiences' && (
                    <div className="experiences-content">
                        {experiences.map(exp => (
                            <div key={exp.id} className="experience-item">
                                <div className="experience-header">
                                    <h4>{exp.company}</h4>
                                    <span className="period">{exp.period}</span>
                                </div>
                                <p className="role">{exp.role}</p>
                                <div className="location">
                                    <MapPin size={14} />
                                    <span>{exp.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'recommended' && (
                    <div className="recommended-content">
                        {recommendations.map(rec => (
                            <div key={rec.id} className="recommendation-item">
                                <div className="rec-avatar">
                                    <img
                                        src={`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face&${rec.id}`}
                                        alt={rec.name}
                                    />
                                </div>
                                <div className="rec-info">
                                    <h4>{rec.name}</h4>
                                    <p>{rec.role}</p>
                                    <span className="mutual">{rec.mutual} mutual connections</span>
                                </div>
                                <button className="connect-btn">Connect</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfileWidget