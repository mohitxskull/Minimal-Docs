import { Center, Paper, SimpleGrid, Stack, Text } from '@mantine/core';
import { Children } from 'react';

interface MDXChessBoardProps {
  data: string[][];
}

const Alphabet = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const MDXChessBoard = (props: MDXChessBoardProps) => {
  return (
    <Stack>
      {Children.toArray(
        props.data.map((item, index) => (
          <SimpleGrid cols={item.length + 1}>
            <Center h="100%">
              <Text ta="center" fw="bold">
                {index + 1}
              </Text>
            </Center>

            {item.map((subItem) => (
              <>
                <Paper withBorder radius={0} h={45} px={5}>
                  <Center h="100%">
                    <Text fw="bold">{subItem}</Text>
                  </Center>
                </Paper>
              </>
            ))}
          </SimpleGrid>
        ))
      )}

      <SimpleGrid cols={props.data[0].length + 1}>
        {Children.toArray(
          Array.from({ length: props.data[0].length + 1 }).map((_, index) => (
            <Text ta="center" fw="bold">
              {Alphabet[index]}
            </Text>
          ))
        )}
      </SimpleGrid>
    </Stack>
  );
};
