import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0%;
    top: 0%;
    z-index: 1;
    width: 100%;
    height: 100%; 
    overflow: auto;
    opacity: 1;
    background-color: rgba(0,0,0,0.4);  
`

export const Content = styled.div`
    position: absolute;
    display: flex;
    width: 350px;
    height: 160px;
    border-radius: 4px;
    padding-bottom: 5px;
    flex-direction: column;
    background-color: #fefefe;
`

export const Top = styled.div`
    display: flex;
    padding: 5px;
    border-radius: 4px 4px 0px 0px;
    background-color: var(--top-bgColor);

    .title {
        display: flex;
        align-self: center;
        flex-grow: 1;
        font-weight: bold;
        color: var(--title-color)
    }

    .closeBtn {
        font-size: 1.5em;
        cursor: pointer;
    }

    .closeBtn:hover {
        color: red;
    }
`

export const Body = styled.div`
    display: flex;
    text-align: left;
    font-weight: bold;
    align-items: center;
    flex-grow: 1;
    padding: 5px;
`

export const Bottom = styled.div`
    display: flex;
    justify-content: center;

    .actionBtn {
        margin: 2px;
        padding: 8px;
        color: white;
        background-color: var(--top-bgColor);
    }
`




