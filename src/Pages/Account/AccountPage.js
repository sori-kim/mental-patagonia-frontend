import { Link, withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Button from "../../Component/Button/Button";
import styled from "styled-components";
import useInputState from "../../hooks/useInputState";

const AccountPage = ({ history }) => {
  const token = localStorage.getItem("patago_token");
  const [firstname, setFirstname, handleChangeFirstname] = useInputState("");
  const [lastname, setLastname, handleChangeLastname] = useInputState("");
  const [email, setEmail, handleChangeEmail] = useInputState("");

  useEffect(() => {
    fetch("http://3.34.144.236:8080/member/", {
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

  const handleLogOut = () => {
    localStorage.removeItem("patago_token");
    history.push("/");
  };

  return (
    <Wrap>
      <Title style={{ paddingTop: "20%" }}>Account</Title>
      <Account>
        <AccountTop>
          <Profile>
            <ProfileWrap>
              <Title style={{ fontSize: "28px" }}>Profile</Title>
              <ProfileDetails>
                <Label>First Name</Label>
                <Value>{firstname}</Value>
              </ProfileDetails>
              <ProfileDetails>
                <Label>Last Name</Label>
                <Value>{lastname}</Value>
              </ProfileDetails>
              <ProfileDetails>
                <Label>Email</Label>
                <Value>{email}</Value>
              </ProfileDetails>
              <ProfileDetails>
                <Label>Password</Label>
                <Value>**********</Value>
              </ProfileDetails>
              <ProfileBottom>
                <Button onClick={handleLogOut} style={{ width: "160px" }}>
                  Logout
                </Button>
                <Link to="/account/profile">
                  <Edit>Edit</Edit>
                </Link>
              </ProfileBottom>
            </ProfileWrap>
          </Profile>
          <Address>
            <Title style={{ fontSize: "28px" }}>Address Book</Title>
            <Button style={{ width: "150px", marginTop: "7%" }}>Add New</Button>
          </Address>
        </AccountTop>
        <Help>
          <Title style={{ color: "white", fontSize: "35px" }}>
            Need Some help?
          </Title>
          <Button
            style={{
              backgroundColor: "white",
              color: "black",
              width: "150px",
            }}
          >
            Help Center
          </Button>
        </Help>
      </Account>
      <History>
        <Title>Order History</Title>
        <Button
          style={{
            backgroundColor: "white",
            height: "55px",
            color: "black",
            border: "3.5px solid black",
            marginTop: "6%",
          }}
        >
          Find an order
        </Button>
      </History>
    </Wrap>
  );
};

export default withRouter(AccountPage);

const Wrap = styled.div`
  height: 150vh;
  width: 60%;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 45px;
  display: black;
  font-weight: 800;
  letter-spacing: 0.5px;
`;

const Account = styled.div``;

const AccountTop = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Profile = styled.div`
  background-color: #eeeeee;
  width: 50%;
  height: 500px;
  margin-right: 50px;
  border-radius: 10px;
`;

const ProfileWrap = styled.div`
  padding: 10%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProfileDetails = styled.div``;

const Label = styled.p`
  font-size: 11px;
  color: rgba(0, 0, 0, 0.4);
  letter-spacing: 0.5px;
  padding-bottom: 12px;
`;

const Value = styled.p``;

const ProfileBottom = styled.div`
  display: flex;
  align-items: center;
`;

const Edit = styled.h1`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Address = styled.div`
  background-color: #eeeeee;
  width: 50%;
  height: 200px;
  border-radius: 10px;
  padding-left: 5%;
  padding-top: 5%;
`;

const Help = styled.div`
  background-color: black;
  border-radius: 10px;
  margin-top: 3%;
  padding: 0 5%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const History = styled.div`
  height: 1000px;
  padding: 5%;
  margin-top: 7%;
`;
