import React, { ReactElement, Fragment, useContext } from "react";
import styled from "@emotion/styled";
import resumeContent from "../../../resume-content/resume.json";
import { LanguageContext } from "../../../contexts/LanguageContext";

interface TypeSidebar {
    title: string;
    content: {} | [];
}

interface MainContent {
    title: string;
    subtitle: string;
    date: string;
    description?: string;
}

interface Main {
    title: string;
    content: Array<MainContent>;
}

const BlackSquare = styled.div`
    margin-right: 150px;
    background: black;
    color: white;
    padding: 50px;
    font-size: 24px;
`;

function Resume(): ReactElement {
    // const { en, pt } = resumeContent;
    const { language } = useContext(LanguageContext);

    const renderList = (list: []) => (
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );

    const renderText = (item: any) => <p>{item.text}</p>;

    const renderSidebar = () => {
        return resumeContent[language].sidebar.map((item: TypeSidebar, index: number) => (
            <Fragment key={index}>
                <h2>{item.title}</h2>
                {Array.isArray(item.content) ? renderList(item.content) : renderText(item.content)}
            </Fragment>
        ));
    };

    const renderMainContent = (mainContent: Array<MainContent>) => {
        return mainContent.map((item: MainContent, index: number) => (
            <div key={index}>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.date}</p>
                {item.description ? <p>{item.description}</p> : ""}
            </div>
        ));
    };

    const renderMain = () => {
        return resumeContent[language].main.map((item: Main, index: number) => (
            <Fragment key={index}>
                <h2>{item.title}</h2>
                {renderMainContent(item.content)}
            </Fragment>
        ));
    };

    return (
        <BlackSquare className="resume">
            <aside className="sidebar">
                <div className="name-block">
                    <h1>Rafa Gomes</h1>
                    <h2>web developer</h2>
                </div>
                {renderSidebar()}
            </aside>
            <main className="main">{renderMain()}</main>
        </BlackSquare>
    );
}

export default Resume;
