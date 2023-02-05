import styled from "styled-components";

export const DivStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000000ee;

  button {
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    color: #03e9f4;
    background: transparent;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 24px;
    overflow: hidden;
    transition: 0.2s;
  }
  button:hover {
    color: #f8f8ff;
    background: #03e9f4;
    box-shadow: 0 0 10px #03e9f4, 0 0 40px #03e9f4, 0 0 80px #03e9f4;
    transition-delay: 1s;
  }
  button span {
    position: absolute;
    display: block;
  }
  button span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
  }
  button:hover span:nth-child(1) {
    left: 100%;
    transition: 1s;
  }
  button span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
  }
  button:hover span:nth-child(3) {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }
  button span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
  }
  button:hover span:nth-child(2) {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }
  button span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
  }
  button:hover span:nth-child(4) {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
  }
`;
