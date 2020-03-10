import styled from "@emotion/styled";

export const NameBlock = styled.div`
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

export const BlackSquare = styled.div`
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

export const Sidebar = styled.aside`
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

export const Main = styled.main`
    width: 50%;
    margin-top: -20px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ContentWrapper = styled.div`
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
