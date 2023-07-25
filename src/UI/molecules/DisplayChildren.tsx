import { Box } from "../atoms/Box";
import { Text } from "../atoms/Text";
import { IData } from "../organisms/FormParent";

export function DisplayChildren({ data }: { data: IData }) {
  return (
    <Box
      justify="flex-start"
      align="center"
      maxwidth="600px"
      p="40px"
      direction="column"
    >
      <Text size="large" weight="normal" color="white">
        {data.name}
      </Text>
      <Text size="large" weight="normal" color="white">
        {data.surname}
      </Text>
      <Text size="large" weight="normal" color="white">
        {data.age}
      </Text>
      <Text size="large" weight="normal" color="white">
        {data.description}
      </Text>
      <Text size="large" weight="normal" color="white">
        {data.street}
      </Text>
      <Text size="large" weight="normal" color="white">
        {data.number}
      </Text>
      <Text size="large" weight="normal" color="white">
        {data.neighborhood}
      </Text>
      <Text size="large" weight="normal" color="white">
        {data.city}
      </Text>
      <Text size="large" weight="normal" color="white">
        {data.state}
      </Text>
      <Text size="large" weight="normal" color="white">
        {data.country}
      </Text>
    </Box>
  );
}
