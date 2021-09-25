import { Box } from "@chakra-ui/layout";
import React from "react";

import Card from "./Card";

export default function Cards({ cards }) {
  return (
    <Box>
      {cards.map((card) => (
        <Card key={card._id} card={card} />
      ))}
    </Box>
  );
}
