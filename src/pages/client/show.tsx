import { useShow } from "@refinedev/core";
import { Show, NumberField, TagField, TextField } from "@refinedev/antd";
import { List, Typography } from "antd";
import { IClient } from "../../interfaces";

const { Title } = Typography;

export const ClientShow = () => {
  const { query } = useShow<IClient>();
  const { data, isLoading } = query;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <TextField value={record?.name} />
      <Title level={5}>Projects</Title>
      {isLoading && record?.projects?.length ? (
        <>Loading...</>
      ) : (
        <>
          {record?.projects?.length ? (
            data?.data?.projects?.map((project: any) => (
              <TagField key={project?.name} value={project?.name} />
            ))
          ) : (
            <></>
          )}
        </>
      )}
    </Show>
  );
};
