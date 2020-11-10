import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/MeuProf.svg';
import landingImg from '../../assets/images/girlPc.png';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHearIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, [])

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Estude com os melhores professores!</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="Plataforma de estudos" 
                    className="hero-image" 
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>
                </div>
                <span className="total-connections">
                    Mais de 10 professores cadatrados!
                </span>
            </div>
            
            <section className="secondary">
                <strong>Destques</strong>
                <div className="teacherList">
                    {teachers
                    .filter(teacher => teacher.id <= "4")
                    .map((teacher) => {
                        return (
                            <div className="teacherItem" key={teacher.id}>
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <img src={teacher.avatar} style={{marginRight: 5, objectFit: 'cover'}}/>
                                    <div style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <strong>{teacher.name}</strong>
                                        <p>{teacher.subject}</p>
                                    </div>
                                </div>
                                <Link to="/give-classes" >
                                    Dar Aulas
                                </Link>
                            </div>
                        )
                    })}
                    
                </div>
            </section>
        </div>
    )
}

export default Landing;
