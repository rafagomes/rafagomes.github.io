import React, { ReactElement, useContext } from "react";
import resumeContent from "../../../resume-content/resume.json";
import { LanguageContext } from "../../../contexts/LanguageContext";
import Heading from "../../atoms/heading";
import List from "../../molecules/list";
import { BlackSquare, ContentWrapper, Main, NameBlock, Sidebar, DateParagraph } from "./Resume.style";

interface TypeSidebar {
    title: string;
    content: {} | string[];
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

function Resume(): ReactElement {
    const { language } = useContext(LanguageContext);

    const renderList = (list: []) => <List items={list} />;

    const renderText = (item: any) => <p>{item.text}</p>;

    const renderSidebar = () => {
        return resumeContent[language].sidebar.map((item: TypeSidebar, index: number) => (
            <ContentWrapper key={index}>
                <Heading rank="2">{item.title}</Heading>
                {Array.isArray(item.content) ? renderList(item.content) : renderText(item.content)}
            </ContentWrapper>
        ));
    };

    const renderMainContent = (mainContent: Array<MainContent>) => {
        return mainContent.map((item: MainContent, index: number) => (
            <ContentWrapper key={index}>
                <Heading rank="3">{item.title}</Heading>
                <Heading rank="4">{item.subtitle}</Heading>
                {item.date !== "" ? <DateParagraph>({item.date})</DateParagraph> : <span />}
                {item.description ? <p>{item.description}</p> : ""}
            </ContentWrapper>
        ));
    };

    const renderMain = () => {
        return resumeContent[language].main.map((item: Main, index: number) => (
            <ContentWrapper key={index}>
                <Heading rank="2">{item.title}</Heading>
                {renderMainContent(item.content)}
            </ContentWrapper>
        ));
    };

    return (
        <BlackSquare className="resume">
            <Sidebar className="sidebar">
                <NameBlock>
                    <Heading rank="1">Rafa Gomes</Heading>
                    <Heading rank="2">web developer</Heading>
                </NameBlock>
                {renderSidebar()}
            </Sidebar>
            <Main className="main">{renderMain()}</Main>
        </BlackSquare>
    );
}

export default Resume;
