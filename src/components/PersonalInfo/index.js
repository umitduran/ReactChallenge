import React, { Component } from 'react'
import {Form, Input, Button, Select, Space, Divider,DatePicker} from 'antd';
import { FormInstance } from 'antd/lib/form';

const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 8,
    },
};
export default class Home extends Component<{}, State> {

    constructor(props) {
        super(props);
        this.state = {

        };
        //this.formRef = React.createRef<FormInstance>();
    }

    componentDidMount() {

    }

    render() {
        return (
            <Form {...layout} name='personal-info-form' style={{marginTop: '20px'}}>
                <Divider>Kişisel Bilgiler</Divider>
                <Form.Item name='eposta' label='E-Posta'>
                    <Input placeholder='E-Posta giriniz'/>
                </Form.Item>
                <Form.Item name='name' label='Adı Soyadı'>
                    <Input placeholder='Ad,Soyadi giriniz'/>
                </Form.Item>
                <Form.Item name='fatherName' label='Baba Adı'>
                    <Input placeholder='Baba Adi giriniz'/>
                </Form.Item>
                <Form.Item name='placeOfBirth' label='Doğum Yeri'>
                    <Input placeholder='Dogum yeri giriniz'/>
                </Form.Item>

                <Form.Item name='birthday' label='Doğum Tarihi'>
                    <DatePicker placeholder='Dogum tarihi giriniz' style={{
                        width: '100%',
                    }}/>
                </Form.Item>

                <Form.Item name='gender' label='Cinsiyet'>
                    <Select
                        placeholder="Cinsiyet Seciniz"
                        allowClear
                    >
                        <Option value="male">Bay</Option>
                        <Option value="female">Bayan</Option>
                    </Select>
                </Form.Item>

                <Form.Item name='phone' label='Telefon'>
                    <Input placeholder='Telefon giriniz'/>
                </Form.Item>

                <Form.Item name='salary' label='Aylık Maaşı'>
                    <Input placeholder='Aylik maasinizi giriniz'/>
                </Form.Item>

                <Form.Item name='ibanNo' label='IBAN No'>
                    <Input placeholder='IBAN giriniz'/>
                </Form.Item>

                <Form.Item name='id' label='ID'>
                    <Input defaultValue='32309' disabled/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Space>
                    <Button htmlType="button" >
                        Vazgeç
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Kaydet
                    </Button>
                    <Button type="link" htmlType="button" >
                        Değiştir
                    </Button>
                    </Space>
                </Form.Item>
            </Form>

        )
    }
}
