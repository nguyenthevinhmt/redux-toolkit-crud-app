import { Button, Form, Input, DatePicker } from "antd";
import IBlog from "../../../models/blog.model";
import { useState } from "react";
import { nanoid } from "nanoid";
import dayjs, { Dayjs } from "dayjs";

const initialState: IBlog = {
  title: "",
  description: "",
  publishDate: "",
  id: nanoid(),
};
const CreatePost: React.FC = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<IBlog>(initialState);
  const { title, description, publishDate } = formData;
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: IBlog) => ({ ...prev, title: e.target.value }));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: IBlog) => ({ ...prev, description: e.target.value }));
  };

  const handlePublishDateChange = (date: Dayjs | null): void => {
    if (date) {
      setFormData((prev) => ({ ...prev, publishDate: date.toString() }));
    }
  };
  const onFinish = () => {
    // Xử lý khi submit form
    console.log(formData);
    form.resetFields();
  };
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        width: "100%",
      }}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="vertical"
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<IBlog>
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your blog title!" }]}
        >
          <Input value={title} onChange={handleTitleChange} />
        </Form.Item>

        <Form.Item<IBlog>
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input your blog description!" },
          ]}
        >
          <Input value={description} onChange={handleDescriptionChange} />
        </Form.Item>

        <Form.Item<IBlog>
          label="PublishDate"
          name="publishDate"
          rules={[{ required: true, message: "Publish date is required!" }]}
        >
          <DatePicker
            value={dayjs(publishDate)}
            onChange={handlePublishDateChange}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default CreatePost;
