"use client";
import { Layout } from "antd";
import React from "react";
import { Footer, Navabar } from "..";

type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Layout
      style={{ width: "100%", minHeight: "100vh", backgroundColor: "#F3F9FE" }}
    >
      <Navabar />
      <Layout.Content>{children}</Layout.Content>
      <Footer />
    </Layout>
  );
}
