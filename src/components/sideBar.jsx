import {
    Box,
    VStack,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    useDisclosure,
    IconButton,
    useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const subjects = ["react", "node", "angular", "javascript", "typescript", "python", "web security", "html"];

const SideBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    // `true` on desktop, `false` on mobile
    const isDesktop = useBreakpointValue({ base: false, md: true });

    const content = (
        <VStack spacing={4} align="stretch">
            {subjects.map((subject) => (
                <Button
                    as={Link}
                    to={`/start/${subject}`}
                    key={subject}
                    colorScheme="blue"
                    variant="ghost"
                    onClick={onClose}
                >
                    {subject.toUpperCase()}
                </Button>
            ))}
        </VStack>
    );

    if (isDesktop) {
        return (
            <Box w="250px" h="100vh" bg="blue.200" p={5}>
                {content}
            </Box>
        );
    }

    return (
        <>
            <IconButton
                icon={<HamburgerIcon />}
                onClick={onOpen}
                m={4}
                colorScheme="blue"
                aria-label="Open menu"
                position="fixed"
                top="1rem"
                left="1rem"
                zIndex={1000}
            />
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody mt={6}>{content}</DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default SideBar;


