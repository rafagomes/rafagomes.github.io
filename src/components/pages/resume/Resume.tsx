import React, { ReactElement, Fragment, useContext } from "react";
import styled from "@emotion/styled";
import resumeContent from "../../../resume-content/resume.json";
import { LanguageContext } from "../../../contexts/LanguageContext";
import Heading from "../../atoms/heading";
import List from "../../molecules/list";

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
    const { language } = useContext(LanguageContext);

    const renderList = (list: []) => <List items={list} />;

    const renderText = (item: any) => <p>{item.text}</p>;

    const renderSidebar = () => {
        return resumeContent[language].sidebar.map((item: TypeSidebar, index: number) => (
            <Fragment key={index}>
                <Heading rank="2">{item.title}</Heading>
                {Array.isArray(item.content) ? renderList(item.content) : renderText(item.content)}
            </Fragment>
        ));
    };

    const renderMainContent = (mainContent: Array<MainContent>) => {
        return mainContent.map((item: MainContent, index: number) => (
            <div key={index}>
                <Heading rank="3">{item.title}</Heading>
                <Heading rank="4">{item.subtitle}</Heading>
                <p>{item.date}</p>
                {item.description ? <p>{item.description}</p> : ""}
            </div>
        ));
    };

    const renderMain = () => {
        return resumeContent[language].main.map((item: Main, index: number) => (
            <Fragment key={index}>
                <Heading rank="2">{item.title}</Heading>
                {renderMainContent(item.content)}
            </Fragment>
        ));
    };

    return (
        <BlackSquare className="resume">
            <aside className="sidebar">
                <div className="name-block">
                    <Heading rank="1">Rafa Gomes</Heading>
                    <Heading rank="2">web developer</Heading>
                </div>
                {renderSidebar()}
            </aside>
            <main className="main">{renderMain()}</main>
        </BlackSquare>
    );
}

export default Resume;
