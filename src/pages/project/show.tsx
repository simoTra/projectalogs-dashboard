import { useShow } from "@refinedev/core";
import { Show, NumberField, TagField, TextField } from "@refinedev/antd";
import { Typography } from "antd";
import { IProject } from "../../interfaces";

const { Title } = Typography;

export const ProjectShow = () => {
    const { query } = useShow<IProject>();
    const { data, isLoading } = query;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Name</Title>
            <TextField value={record?.name} />
            <Title level={5}>Description</Title>
            <TextField value={record?.description} />
            <Title level={5}>Client</Title>
            <TextField value={record?.client?.name} />
        </Show>
    );
};
