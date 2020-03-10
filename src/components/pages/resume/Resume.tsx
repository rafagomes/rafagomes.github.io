import React, { ReactElement, Fragment, useContext } from "react";
import styled from "@emotion/styled";
import resumeContent from "../../../resume-content/resume.json";
import { LanguageContext } from "../../../contexts/LanguageContext";
import Heading from "../../atoms/heading";
import List from "../../molecules/list";

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

const NameBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: black;
    background: white;
    margin-left: -50px;
    padding: 40px 0 20px 50px;
    margin-bottom: 55px;

    & h1,
    & h2 {
        font-size: 48px;
        font-weight: 300;
        margin: 0 0 30px 0;

        @media (min-width: 2000px) {
            font-size: 5rem;
        }
    }

    @media (max-width: 420px) {
        padding: 20px;
        margin-left: -20px;
        margin-bottom: 0px;

        & h1,
        & h2 {
            font-size: 30px;
            margin: 0 0 5px 0;
        }
    }
`;

const BlackSquare = styled.div`
    display: flex;
    margin-right: 150px;
    background: black;
    color: white;
    padding: 50px;
    font-size: 24px;

    & h2 {
        font-size: 36px;

        @media (min-width: 2000px) {
            font-size: 4rem;
        }
    }

    & p,
    & h3,
    & h4,
    & li {
        font-weight: 300;
        line-height: 1.4;
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }

    @media (max-width: 420px) {
        margin-right: 0;
        padding: 20px;
        font-size: 16px;
    }

    @media (min-width: 2000px) {
        margin-right: 10%;
        font-size: 2.3rem;
    }
`;

const Sidebar = styled.aside`
    width: 350px;
    margin-right: 10%;
    margin-bottom: 0;

    @media (max-width: 768px) {
        width: 100%;
        margin-right: 0;
    }

    @media (min-width: 2000px) {
        width: 30%;
    }
`;

const Main = styled.main`
    width: 50%;
    margin-top: -20px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ContentWrapper = styled.div`
    margin-bottom: 50px;

    @media (max-width: 420px) {
        margin-bottom: 30px;
    }

    & p {
        margin: 0 0 10px;

        @media (max-width: 420px) {
            margin: 0;
        }
    }

    & h2 {
        @media (max-width: 420px) {
            font-size: 2rem;
        }
    }

    & h3,
    & h4 {
        font-size: 24px;
        margin: 0 0 5px 0;

        @media (max-width: 420px) {
            font-size: 18px;
            margin: 0 0 5px 0;
        }

        @media (min-width: 2000px) {
            font-size: 3rem;
        }
    }
`;

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
                <p>{item.date}</p>
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
