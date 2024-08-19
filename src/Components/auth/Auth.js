import styled from 'styled-components'

export const MainBody = styled.div`
width: 100vw;
height: 70vh;
/* background: green; */
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
position: absolute;
top:15%;
`

export const MaininnerWrapper = styled.div`
width: 50%;
height: 100%;
background: linear-gradient(rgb(11, 119, 11), rgb(56, 221, 92, 223)),url();


img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
}
`
export const Mainwrapper = styled.div`
width: 100%;
height:100%;
/* background: ; */

display: flex;
/* padding: 1rem; */
/* justify-content: space-evenly; */
align-items: center;
justify-content: center;
`
// export const HeroDiv =styled.div`
export const SignUpForm=styled.div`
width:50%;
height:100%;
/* margin:20px; */
/* background: teal; */
display: flex;
align-items: center;
justify-content: center;
`
export const SignUpWrapper = styled.div`
width: 70%;
height:90%;
background: white;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;


padding: 20px;
display: flex;
flex-direction: column;
gap: 8px;
/* justify-content: center; */
/* align-items: center; */
`


export const CreateAcct =styled.div`
width: 100%;
display: flex;
justify-content: center;

h2{
    font-family: Arial, Helvetica, sans-serif;
}
`

export const Button =styled.button`
width: 100%;
height: 35px;
background: ${({Bg})=>( Bg ? "green":"white")};
border: ${({Bg})=>(Bg ? "none":"1px solid rgba(128, 128, 128, 0.452)")};
color:${({Bg})=>(Bg ? "white":"")};
font-size: 15px;
font-weight: 550;

&:hover{
    cursor: pointer;
}
`
export const Or = styled.div`
width:100%;
display: flex;
align-items: center;
justify-content: space-between;

`
export const InputDiv = styled.div`
width: 100%;
height: 12%;
/* display: flex; */
/* background-color: aquamarine; */


`
export const Select=styled.select`
width:100%;
height: 30px;
/* padding: 10px; */
border: 1px solid green;`
export const Div=styled.div`
width: 100%;
height: 3;
/* padding: 10px; */
border: 1px solid green;
display: flex;
align-items: center;
gap:20px;
`
export const Input=styled.input`
width:${({width})=>(width ?"90%":"100%")};
height: ${({height})=> (height ? '22px':'30px')};
padding: 10px;

border: ${({border})=>(border ? 'none':'1px solid green')};
outline: ${({outline})=>(outline ? 'none':'green')}
`
export const Label = styled.label``
export const Text = styled.div`
display: flex;
justify-content:flex-end;

span{
    &:hover{
        text-decoration: underline;
        cursor: pointer;
        transition: all 350ms ease-in-out;
  color: red;

    }
}
`
export const Hr = styled.hr`
height: 1px;
width: 45%;

`
export const PasswordCheck=styled.div`
display: flex;
width: 100%;
/* flex-direction: column; */
flex-wrap: wrap;
`