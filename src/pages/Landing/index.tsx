import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/MeuProf.svg';
import landingImg from '../../assets/images/girlPc.png';

import network from '../../assets/images/network.png';
import click from '../../assets/images/click.png';
import menu from '../../assets/images/menu.png';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHearIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

const teachers = [
    {
      "id": '1',
      "subject": "Física",
      "cost": "60",
      "online": "Disponível",
      "group": "Disponível",
      "course": "Medicina",
      "name": "Felipe Dantas",
      "avatar": "https://avatars0.githubusercontent.com/u/62896397?s=460&u=7f6eb283e67fddf77d5e43f2987cf9948bff7d55&v=4",
      "whatsapp": "86995185757",
      "bio": "Professor de Física, Matemática e Química. Gosto de ajudar alunos a alcançarem boas notas"
    },
    {
      "id": '2',
      "subject": "Matemática",
      "cost": "50",
      "online": "Disponível",
      "group": "Disponível",
      "course": "Medicina",
      "name": "João Gabriel",
      "avatar": "https://mcusercontent.com/bc934d067a92cc650b4ec728f/images/a5aa0ab7-d7ea-432d-8d77-6c3858debc81.jpg",
      "whatsapp": "86994940808",
      "bio": "Professora de Física, Matemática e Química. Gosto de ajudar alunos a alcançarem boas notas"
    },
    {
      "id": '3',
      "subject": "Matemática",
      "cost": "55",
      "online": "Disponível",
      "group": "Disponível",
      "course": "Medicina",
      "name": "Francisco Gabriel",
      "avatar": "https://mcusercontent.com/bc934d067a92cc650b4ec728f/images/cc557df7-6686-4f24-9bf1-bc6a2381f187.jpg",
      "whatsapp": "86994940808",
      "bio": "Professora de Física, Matemática e Química. Gosto de ajudar alunos a alcançarem boas notas"
    },
    {
      "id": '4',
      "subject": "Matemática",
      "cost": "45",
      "online": "Disponível",
      "group": "Disponível",
      "course": "Medicina",
      "name": "Gabriel Soares",
      "avatar": "https://mcusercontent.com/bc934d067a92cc650b4ec728f/images/73df8814-14e5-4330-ade6-80b76faeaf72.jpg",
      "whatsapp": "86994940808",
      "bio": "Professora de Física, Matemática e Química. Gosto de ajudar alunos a alcançarem boas notas"
    },
    {
      "id": '5',
      "subject": "Matemática",
      "cost": "60",
      "online": "Disponível",
      "group": "Disponível",
      "course": "Medicina",
      "name": "Nicole Dantas",
      "avatar": "https://avatars0.githubusercontent.com/u/62896397?s=460&u=7f6eb283e67fddf77d5e43f2987cf9948bff7d55&v=4",
      "whatsapp": "86994940808",
      "bio": "Professora de Física, Matemática e Química. Gosto de ajudar alunos a alcançarem boas notas"
    },
    {
      "id": '6',
      "subject": "Biologia",
      "cost": "60",
      "online": "Disponível",
      "group": "Disponível",
      "course": "Design Gráfico",
      "name": "Pam Beesly",
      "avatar": "https://i.insider.com/5aeb5fa742e1cc19da46a727?width=1100&format=jpeg&auto=webp",
      "whatsapp": "86994940808",
      "bio": "Professora de Física, Matemática e Química. Gosto de ajudar alunos a alcançarem boas notas"
    },
    {
    "id": '7',
    "subject": "Biologia",
    "cost": "80",
    "online": "Disponível",
    "group": "Disponível",
    "course": "Administração",
    "name": "Michael Scott",
    "avatar": "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
    "whatsapp": "86994940808",
    "bio": "Professora de Física, Matemática e Química. Gosto de ajudar alunos a alcançarem boas notas"
    },
  ]


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
                                    Detalhes
                                </Link>
                            </div>
                        )
                    })}
                    
                </div>
                
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Marcar Aula
                    </Link>
                </div>
            </section>
            
            <section className="perks">
                <div className="perksContainer">
                    <div className="perksList">
                        <div className="perksItem">
                            <img src={network} style={{width: 70px, marginBottom: 15}}/>
                            <h2>Todos em um só lugar</h2>
                            <div>
                                <p>Reunimos os melhores professores numa mesma plataforma!</p>
                                <p><a href="/br/shop/goto/shipping_and_returns" data-analytics-title="learn more about free delivery" aria-label="Saiba mais sobre o frete grátis." ><span>Saiba mais</span><span ></span></a></p>
                            </div>
                        </div>
                        <div className="perksItem">
                            <img src={click} style={{width: 70px, marginBottom: 15}}/>
                            <h2>Praticidade para Marcar</h2>
                            <div>
                                <p>Economize tempo e marque sua aula particular em minutos.</p>
                                <p><a href="/br/shop/goto/ww/financing" data-analytics-title="learn more about financing" aria-label="Saiba mais sobre o opções de pagamento" ><span>Saiba mais</span><span ></span></a></p>
                            </div>
                        </div>
                        <div className="perksItem">
                            <img src={menu} style={{width: 60px, marginBottom: 15}}/>
                            <h2>Várias Matérias Disponíveis</h2>
                            <div>
                                <p>De Química a aulas de violão! Você encontra tudo aqui.</p>
                                <p><a href="/br/shop/goto/personal_session" data-analytics-title="learn more about online personal sessions" aria-label="Saiba mais sobre as sessões personalizadas online"><span>Saiba mais</span><span></span></a></p>
                            </div>
                        </div>

                        <div className="buttons-container">
                            <Link to="/study" className="study">
                                Encontrar meu prof!
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing;
