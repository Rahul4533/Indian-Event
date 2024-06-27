import { Form, Input, Row, Col,  DatePicker,Checkbox,message } from 'antd';

import './form.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Forms = () => {

  const [form] = Form.useForm();
  const handleFinish = async(values) => {
    console.log('Form values:', values);
  const res=await   axios.post('/register',{values}) ; 
  form.resetFields();
  if(res.data.success){
    message.success('Form submitted successfully');
  }else{
    message.error('Form submission failed');
  }
  
  };

  return (
    <div className='form'>
      <h1>Indian Event Booking Form</h1>
      <Form layout="vertical" onFinish={handleFinish} form={form} className="m-3 display-flex">
        <h4>Personal Details</h4>  
        <Row gutter={20}>
        <Col xs={24} md={24} lg={8}>
            <Form.Item label="Booking Date" name="bookdate" required rules={[{ required: true }]}>
              <Input type="date" placeholder="Booking Date" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Full Name" name="fullname" required rules={[{ required: true }]}>
              <Input type="text" placeholder="Your name" />
            </Form.Item> 
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Email" name="email" required rules={[{ required: true }]}>
              <Input type="email" placeholder="Enter the Mail" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Date Of Program" name="date" required rules={[{ required: true }]}>
              <Input type="date" placeholder="Enter The Date" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Phone" name="phone" required rules={[{ required: true }]}>
              <Input type="number" placeholder="Enter phone" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
              <Form.Item label="Aadhar No" name="aadhar" required rules={[
                { required: true, message: 'Please enter your Aadhar number' },
                { pattern: /^\d{12}$/, message: 'Aadhar number must be exactly 12 digits' }
              ]}>
                <Input type="text" placeholder="Aadhar" />
              </Form.Item>
            </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Fathers Name" name="father" rules={[{ required: true }]}>
              <Input type="text" placeholder="Fathers" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Full Address" name="address" required rules={[{ required: true }]}>
              <Input type="text" placeholder="Address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Program Address" name="programaddress" required rules={[{ required: true }]}>
              <Input type="text" placeholder="Program Address" />
            </Form.Item>
          </Col>

        </Row>
        <h4 className="m-2">Payment Details</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Fixed Amount Of the Program" name="amount" required rules={[{ required: true }]}>
              <Input type="number" placeholder="Amount" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Advance Amount" name="advanceamount" required rules={[{ required: true }]}>
              <Input type="number" placeholder="Advance Amount" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Rest Amount Of The Program" name="restamount" required rules={[{ required: true }]}>
              <Input type="number" placeholder="Rest Amount" />
            </Form.Item>
          </Col>
         
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Date" name="Date" required>
              <DatePicker.RangePicker format="DD:MM:YYYY" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
              <Form.Item
                name="terms"
                valuePropName="checked"
                rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept terms and conditions') }]}
              >
                <Checkbox>
                  I have read and agree to the <Link to={'/term'}>terms and conditions</Link>
                </Checkbox>
              </Form.Item>
              <button className="btn btn-primary form-btn" type="primary">Submit</button>
            </Col>
              
        </Row>  
      </Form>
    </div>
  ); 
};

export default Forms;
