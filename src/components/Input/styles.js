import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #7878ff;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 75px;
        background-color: #7878ff;
        border: 0;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        font-size: 24px;
        font-family: 'Roboto';
        color: #FFFFFF;
        text-align: end;
    }
`

export default InputContainer;