import styled, { css } from "styled-components";

import Button from "../../Component/Button/Button";
import React from "react";

const EditProfile = () => {
  return (
    <EditWrap>
      <Title>Edit Profile</Title>
      <Label>First name</Label>
    </EditWrap>
  );
};

export default EditProfile;

const EditWrap = styled.main`
  height: 120vh;
`;

const Title = styled.div`
  font-size: 45px;
  display: black;
  font-weight: 800;
  letter-spacing: 0.5px;
`;

const Label = styled.div``;

const StyledInput = styled.input``;
