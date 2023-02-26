import { useSidebarDrawer } from "@/context/SidebarDrawerContext";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { SideBarNav } from "./SidebarNav";

export function Sidebar() {

  const {isOpen, onClose} = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p='4'>
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="44" mr="8">
      <Stack spacing="12" align="flex-start">
        <SideBarNav />
      </Stack>
    </Box>
  );
}
