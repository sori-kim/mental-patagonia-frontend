import { Link, withRouter } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import Button from "../../Component/Button/Button";
import useInputState from "../../hooks/useInputState";

const EditProfile = ({ history }) => {
  const [clicked, setClicked] = useState(false);
  const [num, setNum] = useState(0);
  const token = localStorage.getItem("patago_token");
  const [firstname, setFirstname, handleChangeFirstname] = useInputState("");
  const [lastname, setLastname, handleChangeLastname] = useInputState("");
  const [email, setEmail, handleChangeEmail] = useInputState("");

  const handleInputClick = useCallback(
    (num) => {
      setClicked(true);
      setNum(num);
    },
    [clicked, num]
  );

  useEffect(() => {
    fetch(`http://3.34.144.236:8080/member/`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setFirstname(res.member_info.firstname);
        setLastname(res.member_info.lastname);
        setEmail(res.member_info.email);
      });
  }, []);

  const goBack = () => {
    history.push("/account");
  };

  const handleSave = useCallback(() => {
    fetch("http://3.34.144.236:8080/member/", {
      method: "PATCH",
      headers: {
        Authorization: token,
      },
      body: {
        firstname: firstname,
        lastname: lastname,
      },
    });
    alert("Successfully saved your info!");
    goBack();
  }, []);

  console.log("first, last >>", firstname, lastname);

  return (
    <Wrapper>
      <PageDetail>
        <Link to="/account">
          <span style={{ color: "rgba(0,0,0,0.6)" }}>Account</span>
        </Link>
        <svg
          viewBox="0 0 10.5 16.2"
          aria-labelledby="icon--chevron-right-desc icon--chevron-right-title"
          id="icon--chevron-right"
          xmlns="http://www.w3.org/2000/svg"
          width={10}
          fill="grey"
          style={{ marginRight: "10px", marginLeft: "10px" }}
        >
          <title id="icon--chevron-right-title">chevron right</title>
          <desc id="icon--chevron-right-desc">chevron right</desc>
          <path d="M8.8 6L3.1.3c-.4-.4-1-.4-1.4 0L.3 1.7c-.4.4-.4 1 0 1.4l4.9 5-4.9 5c-.4.4-.4 1 0 1.4l1.4 1.4c.4.4 1 .4 1.4 0l7.1-7.1c.4-.4.4-1 0-1.4L8.8 6z"></path>
        </svg>
        <span style={{ color: "rgba(0,0,0,0.9)" }}>Edit Profile</span>
      </PageDetail>

      <EditWrap>
        <Title>Edit Profile</Title>
        <ProfileDetails>
          <Label>First Name</Label>
          <InputWrap
            onClick={() => handleInputClick(1)}
            clicked={num === 1 ? clicked : null}
          >
            <StyledInput
              type="text"
              value={firstname}
              placeholder="First name"
              onChange={handleChangeFirstname}
            />
          </InputWrap>
        </ProfileDetails>
        <ProfileDetails>
          <Label>Last Name</Label>
          <InputWrap
            onClick={() => handleInputClick(2)}
            clicked={num === 2 ? clicked : null}
          >
            <StyledInput
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={handleChangeLastname}
            />
          </InputWrap>
        </ProfileDetails>
        <ProfileDetails>
          <Label>Email</Label>
          <InputWrap
            onClick={() => handleInputClick(3)}
            clicked={num === 3 ? clicked : null}
          >
            <StyledInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            />
          </InputWrap>
        </ProfileDetails>
        <ButtonWrap>
          <Link to="/account">
            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                border: "4px solid black",
                width: "100px",
                boxShadow: "none",
              }}
            >
              Cancel
            </Button>
          </Link>
          <Button style={{ boxShadow: "none" }} onClick={handleSave}>
            Save
          </Button>
        </ButtonWrap>
        <PasswordHelp>Password Help?</PasswordHelp>
      </EditWrap>
    </Wrapper>
  );
};

export default withRouter(EditProfile);

const Wrapper = styled.main`
  height: 120vh;
`;

const PageDetail = styled.p`
  padding-top: 12%;
  width: 80%;
  margin: 0 auto;
  font-weight: 800;
  font-size: 13px;
`;

const EditWrap = styled.div`
  height: 600px;
  width: 40%;
  margin: 0 auto;
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 45px;
  display: black;
  font-weight: 800;
  letter-spacing: 0.5px;
`;

const ProfileDetails = styled.div``;

const Label = styled.p`
  font-size: 11px;
  color: rgba(0, 0, 0, 0.4);
  letter-spacing: 0.5px;
  padding-bottom: 12px;
`;

const InputWrap = styled.div`
  border-bottom: ${(props) =>
    props.clicked ? "4px solid black" : "2px solid black"};
`;

const StyledInput = styled.input`
  appearance: none;
  margin: 0;
  background: none;
  border: none;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const PasswordHelp = styled.p`
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
`;
