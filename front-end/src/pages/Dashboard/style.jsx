import styled from "styled-components";

export const DashboardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000000ee;
  gap: 20px;

  button {
    user-select: none;
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
  }
`;
