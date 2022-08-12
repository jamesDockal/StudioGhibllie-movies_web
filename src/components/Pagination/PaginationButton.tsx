import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  isCurrent?: boolean;
  number: number;
  onPageChange?: (page: number) => void;
};

const PaginationButton: React.FC<Props> = ({
  isCurrent = false,
  number,
  onPageChange,
}) => {
  return isCurrent ? (
    <Button
      size={"sm"}
      fontSize={"xs"}
      width={4}
      colorScheme={"pink"}
      disabled
      _disabled={{
        bg: "pink.500",
        cursor: "default",
      }}
    >
      {number}
    </Button>
  ) : (
    <Button
      size={"sm"}
      fontSize={"xs"}
      width={4}
      bg={"gray.700"}
      _hover={{
        bg: "gray.500",
      }}
      onClick={() => onPageChange && onPageChange(number)}
    >
      {number}
    </Button>
  );
};

export default PaginationButton;
