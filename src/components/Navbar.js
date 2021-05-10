import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const modeChangeHandler = (e) => {
    dispatch({ type: "DARKMODE" });
    sessionStorage.removeItem("darkMode");
    sessionStorage.setItem("darkMode", !darkMode);
  };
  return (
    <StyledNav>
      <NavLink>
        <Link to="/" className="logo">
          Colorshub
        </Link>
      </NavLink>
      <div className="SubNav">
        <NavLink>
          <Link to="/create">Create</Link>
        </NavLink>
        <NavLink>
          <Link to="/saved">Saved</Link>
        </NavLink>
        <NavLink>
          <Link to="/about">About</Link>
        </NavLink>
        <div className="Mode">
          <label>
            <input
              type="checkbox"
              onChange={modeChangeHandler}
              checked={darkMode}
            ></input>
            <span className="check"></span>
          </label>
        </div>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 2em;
  background: #fff;
  box-shadow: 0 0 25px 0 rgb(197 197 197 / 40%);
  position: fixed;
  width: 100%;
  height: 10vh;
  z-index: 2;
  @media (max-width: 425px) {
    flex-wrap: wrap;
    justify-content: center;
    height: 14vh;
    /* padding: 1.5em 2em; */
  }
  .logo {
    font-weight: 600;
  }
  .SubNav {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .Mode {
    margin-left: auto;
    input {
      -webkit-appearance: none;
      visibility: hidden;
      display: none;
      &:checked ~ .check {
        background: #000000;
      }
      &:checked ~ .check:before {
        background: #ffffff;
        transform: translateX(1.65rem);
      }
    }
    .check {
      position: relative;
      display: block;
      width: 3rem;
      height: 1.5rem;
      background: #b9b9b9;
      cursor: pointer;
      border-radius: 1rem;
      overflow: hidden;
      transition: 400ms ease-in;
      &:before {
        content: "";
        position: absolute;
        top: 0.23rem;
        left: 0.2rem;
        background: #fff;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        transition: 400ms;
      }
      &:after {
      }
    }
  }
`;
const NavLink = styled.div`
  margin-right: 1em;
  font-weight: 300;
  &:last-child {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #333;
  }
`;

export default Navbar;
