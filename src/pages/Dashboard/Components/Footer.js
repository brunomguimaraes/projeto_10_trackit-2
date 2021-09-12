import styled from "styled-components";
export default function Footer() {
    return (
        <FooterStyled>
            <h3>
                Hábitos
            </h3>
            <BlueCircle>
                <h3>Hoje</h3>
                <WhiteCircle top={"6px"} left={"42px"}></WhiteCircle>
                <WhiteCircle top={"65px"} left={"15px"}></WhiteCircle>
                <Arc width="69" height="79" viewBox="0 0 69 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.4653 79C23.9039 78.9959 18.4059 77.8214 13.3291 75.5531C8.25231 73.2847 3.71069 69.6387 0 65.5L5.89068 60.5653C9.40767 64.4945 13.8525 67.4821 18.8205 69.2563C23.7885 71.0305 29.1218 71.5348 34.3348 70.7233C39.5477 69.9118 44.4746 67.8104 48.667 64.6103C52.8593 61.4101 56.1838 57.2131 58.3377 52.4012C60.4916 47.5893 61.4066 42.3155 60.9992 37.0601C60.5919 31.8047 58.8751 26.7345 56.0054 22.3114C53.1356 17.8882 49.204 14.2526 44.5686 11.7355C39.9331 9.21842 34.7411 7.9999 29.4653 8V0C39.9505 0 50.0063 4.1616 57.4205 11.5693C64.8347 18.977 69 29.0239 69 39.5C69 49.9761 64.8347 60.023 57.4205 67.4307C50.0063 74.8384 39.9505 79 29.4653 79Z" fill="white" />
                </Arc>
            </BlueCircle>
            <h3>
                Histórico
            </h3>
        </FooterStyled>
    );
}

const FooterStyled = styled.footer`
display:flex;
justify-content:space-around;
align-items:center;
position: fixed;
bottom:0;
left:0;
width: 100%;
height: 70px;
background: #FFFFFF;
h3{
    font-size:18px;
    color:#52B6FF;
}
`
const BlueCircle = styled.div`
position:absolute;
bottom:10px;
width: 91px;
height: 91px;
background: #52B6FF;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
h3{
    font-size:18px;
    color:#fff;
}
`
const Arc = styled.svg`
position:absolute;
top:6px;
right:6px;

`
const WhiteCircle = styled.div`
position: absolute;
width: 8px;
height: 8px;
background-color:#fff;
border-radius:50%;
top:${props => props.top};
left:${props => props.left};
`