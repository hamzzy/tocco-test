// src/components/Catalog.js
import React from 'react';
import { Box, Grid, Image, Text } from '@chakra-ui/react';

const CatalogItem = ({ item }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={item.imageUrl} alt={item.imageAlt} />

    <Box p="6">
      <Box d="flex" alignItems="baseline">
        <Text
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          color="teal.600"
        >
          {item.category}
        </Text>
      </Box>

      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        {item.title}
      </Box>

      <Box>
        {item.price}
        <Box as="span" color="gray.600" fontSize="sm">
          / wk
        </Box>
      </Box>
    </Box>
  </Box>
);

const Catalog = ({ items }) => (
  <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
    {items.map((item, index) => (
      <CatalogItem key={index} item={item} />
    ))}
  </Grid>
);

export default Catalog;
