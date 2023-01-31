import React from "react";
import { Layout } from "../../Global/Layout";
import { SurveyHeader } from "../../Global/SurveyHeader";

export const EditProfile = () => {
  return (
    <Layout>
      <SurveyHeader title={"회원정보"} undoPage={"/about"} />
    </Layout>
  );
};
