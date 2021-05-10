import React from "react";
import styled from "styled-components";
import Button from "./Button";
import copytoClipboard from "../utils/copyToClipboard";
import time from "../utils/time";

const PaletteDisplay = ({ id, c1, c2, c3, c4, date, buttonText }) => {
  return (
    <>
      <Palette>
        <div className="Palette__wrap">
          <div className="color c1" style={{ background: `${c1}` }}>
            <span className="colorName" onClick={(e) => copytoClipboard(e, c1)}>
              {c1}
            </span>
            <Toast>Copied</Toast>
          </div>
          <div className="color c2" style={{ background: `${c2}` }}>
            <span className="colorName" onClick={(e) => copytoClipboard(e, c2)}>
              {c2}
            </span>
            <Toast>Copied</Toast>
          </div>
          <div className="color c3" style={{ background: `${c3}` }}>
            <span className="colorName" onClick={(e) => copytoClipboard(e, c3)}>
              {c3}
            </span>
            <Toast>Copied</Toast>
          </div>
          <div className="color c4" style={{ background: `${c4}` }}>
            <span className="colorName" onClick={(e) => copytoClipboard(e, c4)}>
              {c4}
            </span>
            <Toast>Copied</Toast>
          </div>
        </div>
        <div className="Palette__cta">
          <Button name={buttonText} id={id}></Button>
          <span className="time">{time(date)}</span>
        </div>
      </Palette>
    </>
  );
};

const Palette = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 18em;
  flex-wrap: wrap;
  height: 19em;
  padding: 1em;
  border-radius: 5px;
  margin: 1em;
  background-color: #fff;
  box-shadow: 0 0 25px 0 rgb(197 197 197 / 40%);
  .Palette__wrap {
    display: flex;
    flex-direction: column;
    flex: 1 1;
  }
  .color {
    position: relative;
    cursor: pointer;
    .colorName {
      position: absolute;
      bottom: 0;
      padding: 0 0.3em;
      background: rgba(0, 0, 0, 0.25);
      color: #fff;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      &.open + span {
        transform: translateY(0);
        opacity: 1;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.5);
      }
    }
    &:hover .colorName {
      opacity: 1;
    }
  }
  .c1 {
    flex: 3 1;
  }
  .c2 {
    flex: 2 1;
  }
  .c3 {
    flex: 1.5 1;
  }
  .c4 {
    flex: 1 1;
  }
  .Palette__cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
    button {
      padding: 0.5em 1em;
      font-size: 1rem;
      border: 1px solid #e9f2f9;
      border-radius: 5px;
      background: inherit;
      cursor: pointer;
      &:hover {
        background: #e9f2f9;
      }
    }
    span {
      font-size: 0.825rem;
    }
  }
`;
const Toast = styled.span`
  position: absolute;
  bottom: -3em;
  z-index: 1;
  background: rgba(12, 12, 12, 0.8);
  color: #fff;
  font-weight: 400;
  font-size: 0.8rem;
  padding: 0.4em 0.8em;
  border-radius: 5px;
  transform: translateY(-1em);
  opacity: 0;
  transition: all 200ms ease-in;
  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 50%;
    top: -0.4em;
    width: 0;
    height: 0;
    border-left: 0.2em solid transparent;
    border-right: 0.2em solid transparent;
    border-bottom: 0.4em solid rgba(0, 0, 0, 0.8);
  }
`;
export default PaletteDisplay;
