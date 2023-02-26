import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Michael Faleiro</Text>
          <Text color="gray.300" fontSize="small">
            michaelfaleiro@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Michael Faleiro"
        src="https://github.com/michaelfaleiro.png"
      />
    </Flex>
  );
}
