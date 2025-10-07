"use client";
import React from "react";
import { Tabs, Collapse, Typography, Layout } from "antd";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default function TabsCollapsePage() {
  // Collapse items (new syntax)
  const collapseItems = [
    {
      key: "1",
      label: "FAQ 1: How do I reset my password?",
      children: (
        <Paragraph>
          You can reset your password by going to Settings → Security → Reset Password.
        </Paragraph>
      ),
    },
    {
      key: "2",
      label: "FAQ 2: How do I contact support?",
      children: (
        <Paragraph>
          You can contact support through the Help Center or by emailing support@example.com.
        </Paragraph>
      ),
    },
  ];

  // Tabs items (new syntax)
  const tabItems = [
    {
      key: "1",
      label: "Profile",
      children: (
        <Paragraph>
          Welcome to your profile! Here you can view and update your personal
          information, change your photo, and manage your bio.
        </Paragraph>
      ),
    },
    {
      key: "2",
      label: "Settings",
      children: (
        <Paragraph>
          Customize your app preferences here — adjust notifications, privacy
          settings, and account security options.
        </Paragraph>
      ),
    },
    {
      key: "3",
      label: "Help",
      children: (
        <>
          <Paragraph>Need some help? Check out the FAQs below:</Paragraph>
          <Collapse accordion items={collapseItems} />
        </>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", padding: "40px" }}>
      <Content style={{ background: "#fff", padding: "24px", borderRadius: "10px" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: "30px" }}>
          Tabs and Collapse Example
        </Title>

        {/* Tabs using new Ant Design syntax */}
        <Tabs defaultActiveKey="1" centered items={tabItems} />
      </Content>
    </Layout>
  );
}
