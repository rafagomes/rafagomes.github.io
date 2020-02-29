import React, { ReactElement } from "react";
import styled from "@emotion/styled";

const BlackSquare = styled.div`
    margin-right: 150px;
    background: black;
    color: white;
    padding: 50px;
    font-size: 24px;
`;

function Resume(): ReactElement {
    const hardSkills = [
        "Javascript, Typescript",
        "CSS, Sass, Stylus, Emotion, Styled components",
        "Html, Pug, Semantic",
        "Angular, React, Vue",
        "Ionic, React Native",
        "Jasmine, Jest",
        "Node.js, Express",
        "MongoDB, MySQL",
        "Python, Flask, Django",
        "Docker, vagrant",
        "Linux Administration",
        "AWS EC2 management",
        "Agile, Kanban, Scrum",
        "Ethical hacking principles",
    ];

    const renderHardSkills = () => {
        return hardSkills.map(hardSkill => <li>{hardSkill}</li>);
    };

    return (
        <BlackSquare className="resume">
            <aside className="sidebar">
                <div className="name-block">
                    <h1>Rafa Gomes</h1>
                    <h2>web developer</h2>
                </div>
                <h2>Profile</h2>
                <p>
                    I've developed my entire life | and I'm searching for a remote | position in the field of Front- |
                    end or Full Stack to apply my | skills and continue my growth | as a professional and | human being.
                </p>

                <h2>Hard Skills</h2>
                <ul>{renderHardSkills()}</ul>
            </aside>
            <main className="main">
                <h2>Experience</h2>
                <h3>Technology Manager</h3>
                <h4>Accenture Interactive | Jan 2018 - present</h4>
                <p>Lorem ipsum</p>

                <h3>Technology Manager</h3>
                <h4>Accenture Interactive | Jan 2018 - present</h4>
                <p>Lorem ipsum</p>

                <h3>Technology Manager</h3>
                <h4>Accenture Interactive | Jan 2018 - present</h4>
                <p>Lorem ipsum</p>

                <h3>Technology Manager</h3>
                <h4>Accenture Interactive | Jan 2018 - present</h4>
                <p>Lorem ipsum</p>

                <h3>Technology Manager</h3>
                <h4>Accenture Interactive | Jan 2018 - present</h4>
                <p>Lorem ipsum</p>

                <h3>Technology Manager</h3>
                <h4>Accenture Interactive | Jan 2018 - present</h4>
                <p>Lorem ipsum</p>

                <h2>Education</h2>
                <h3>Technology Manager</h3>
                <h4>Accenture Interactive | Jan 2018 - present</h4>
                <p>Lorem ipsum</p>

                <h2>Awards</h2>
                <h3>Technology Manager</h3>
                <h4>Accenture Interactive | Jan 2018 - present</h4>
                <p>Lorem ipsum</p>
            </main>
        </BlackSquare>
    );
}

export default Resume;
