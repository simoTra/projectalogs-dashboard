import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const ClientEdit = () => {
    const { formProps, saveButtonProps, query } = useForm();

    const clientData = query?.data?.data;

    const { selectProps: projectsSelectProps } = useSelect({
        resource: "project",
        defaultValue: clientData?.projects?.map((item: any) => item?.id),
        optionLabel: "name",
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Id"
                    name={["id"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input readOnly disabled />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name={["name"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Projects"
                    name={"projects"}
                    getValueProps={(value: any[]) => {
                        return {
                            value: value?.map((item) => item?.id),
                        };
                    }}
                    getValueFromEvent={(selected: string[]) => {
                        return selected?.map((item) => ({ id: item }));
                    }}
                >
                    <Select mode="multiple" {...projectsSelectProps}  allowClear/>
                </Form.Item>
            </Form>
        </Edit>
    );
};
