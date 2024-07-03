import React from 'react';
import { Layout, Row, Col, Card, Typography, Button } from 'antd';
import './theme.css';

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const AboutUsPage = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <Title level={1} style={{ color: 'white' }}>Indiana Event Celebrity Management</Title>
      </Header>
      <Content className="content">
        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={12}>
            <Card className="about-card">
              <Title level={3} className="title">Welcome to Indiana Event Celebrity Management!</Title>
              <Paragraph>
                At Indiana Event Celebrity Management, we specialize in bringing star power to your events. Our team of experienced professionals is dedicated to ensuring your event stands out by featuring high-profile celebrities who captivate and entertain your guests.
              </Paragraph>
              <Title level={4}>Our Services</Title>
              <Paragraph><strong>Celebrity Booking:</strong></Paragraph>
              <Paragraph>
                We handle all aspects of booking celebrities for various events, including corporate gatherings, weddings, concerts, product launches, and private parties. Our extensive network includes top actors, musicians, comedians, and other public figures, ensuring we can secure the perfect celebrity to match your event’s theme and audience.
              </Paragraph>
              <Paragraph><strong>Event Planning and Coordination:</strong></Paragraph>
              <Paragraph>
                We provide comprehensive event planning services to ensure every detail is meticulously organized. From initial concept development to final execution, our team works closely with clients to create memorable experiences that leave a lasting impression.
              </Paragraph>
              <Paragraph><strong>On-Site Management:</strong></Paragraph>
              <Paragraph>
                Our on-site management team ensures that everything runs smoothly during the event. We coordinate logistics, manage schedules, and handle any unforeseen issues, allowing you to focus on enjoying the event.
              </Paragraph>
              <Paragraph><strong>Personal Security:</strong></Paragraph>
              <Paragraph>
                We prioritize the safety and security of our celebrities and guests. Our security team is experienced in providing discreet and effective protection, ensuring a secure and enjoyable experience for everyone involved.
              </Paragraph>
              <Title level={4}>Why Choose Us?</Title>
              <Paragraph><strong>Experience and Expertise:</strong></Paragraph>
              <Paragraph>
                With years of experience in the industry, we have the knowledge and connections to deliver top-tier services. Our team is passionate about creating extraordinary events and is committed to exceeding client expectations.
              </Paragraph>
              <Paragraph><strong>Strong Industry Relationships:</strong></Paragraph>
              <Paragraph>
                Our strong relationships with celebrities and their representatives allow us to negotiate favorable terms and secure bookings that might otherwise be challenging.
              </Paragraph>
              <Paragraph><strong>Customized Solutions:</strong></Paragraph>
              <Paragraph>
                We understand that every event is unique, and we tailor our services to meet your specific needs and vision. Whether you’re planning an intimate gathering or a large-scale event, we provide customized solutions that align with your goals and budget.
              </Paragraph>
              <Title level={4}>Let’s Create Unforgettable Memories</Title>
              <Paragraph>
                At Indiana Event Celebrity Management, we believe that every event is an opportunity to create unforgettable memories. Our mission is to bring excitement and glamour to your events, ensuring they are talked about long after they’re over. Let us help you create an event that dazzles and delights your guests with the presence of their favorite stars.
              </Paragraph>
              <Button type="primary" className="contact-button">Contact Us</Button>
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer className="footer">
        <Paragraph style={{ color: 'white' }}>© 2024 Indiana Event Celebrity Management. All rights reserved.</Paragraph>
      </Footer>
    </Layout>
  );
};

export default AboutUsPage;
