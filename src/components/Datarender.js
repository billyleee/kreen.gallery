
import React from 'react';
import data from "../db.json"; 
import "../global.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function Datarender() {
    
    return (
    <div class="dataGambar">
        {
            data.Experiences.map((experience, i) => {
                return (
                    <div key={i}>
                        <div>
                            <a href={experience.url}>
                                <img class='gambardata' src={experience.logo} alt={experience.companyName} />
                            </a>
                            <div>
                                <div>
                                    <a href={experience.url}>{experience.companyName}</a>
                                </div>
                                {experience.roles.map(function (role, i) {
                                    return <div key={i}>
                                        <h5>{role.title}</h5>
                                        <span>start date:{role.startDate}</span>
                                        <p>end date:{role.endDate}</p>
                                        <span>{role.location}</span>
                                        <p>{role.description}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                );
            })
        }
    </div>
        );
}

export default Datarender;