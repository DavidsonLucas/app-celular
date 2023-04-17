import styled from "styled-components";
import Background from './assets/bgimage.svg'
import {FcFullTrash} from 'react-icons/fc'

export const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 395px;
        height: 100vh;
        padding: 10vmin;
        background-image: url(${Background});
        background-repeat:no-repeat;

    img{
        margin-bottom: 40px;
    }  

    textarea{
        width: 342px;
        height: 142px;
        border-radius:15px ;
        padding: 10px 20px;
        font-size: 17px;
        margin-bottom: 20px;
    }

    .bnt_comentar{
        width: 20rem;
        height: 4.5rem ;
        font-size: 20px;
        background-color: #000000;
        color: white;
        border: none;
        border-radius: 5px;
        margin-bottom: 40px;
        
        &:hover{
            background-color: rgba(0,0,0,.60);
        }

        &:active{
            opacity: .1;
        }

    }
`

export const Ul = styled.ul`
    list-style: none;


    li{
        width:20.9vmax ;
        background-color: rgba(255,255,255,.25);
        height: 4.5rem;
        border-radius: 5px;
        font-size: 25px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        margin-bottom: 20px;
        color: white;
        position: relative;
        #button-da-li{
            display: none;
        }
    &:hover{
        #button-da-li{
            
        }
    }
 }
`
export const Lixeira = styled(FcFullTrash)`
            right:0;
            height: 35px;
            width: 35px;
            position: absolute;
            border: none;
            clip-path: circle(50% at 50% 50%);
            box-shadow: 0 0 5px rgba(0,0,0,.60) ;
            opacity: -1;

            &:hover{
            background-color: rgba(0,0,0,.60);
            opacity: 1;
            }

            &:active{
            opacity: .1;
            }
`