import React from "react";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { fetchApi, baseUrl } from "../../util/fetchApi";
import ImageScrollBar from "../../components/ImageScrollBar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  console.log(amenities);
  return (
    <Box maxWidth="1000px" margin="auto" marginTop="3" p="4">
      {photos ? <ImageScrollBar data={photos} /> : "No Photos"}
      <Box w="full" p="6">
        <Flex paddingTop="2"  justifyContent="space-between">
        <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}{" "}
            </Box>
            
            <Text fontWeight="bold" fontSize="lg">
              AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
            </Text>
            
            <Box>
              <Avatar size="sm" src={agency?.logo?.url}></Avatar>
            </Box>
          </Flex>
        
          <br />
          
        </Flex>
        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </Flex>
        <Box marginTop="2" fontSize="lg" fontWeight="bold">
        <Text fontSize="lg">
            {title}
          </Text>
        </Box>
        <br />
        <Text lineHeight="2" color="gray.600">{description}</Text>
        <br />
        <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
          <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.200">
            <Text>Type</Text>
            <Text fontWeight="bold">{type}</Text>
          </Flex>
          <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.200">
            <Text>Purpose</Text>
            <Text fontWeight="bold">{purpose}</Text>
          </Flex>
          <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.200">
            <Text>Furnishing Status</Text>
            <Text fontWeight="bold">{furnishingStatus}</Text>
          </Flex>
        </Flex>
        <br />
        <Box>
        {amenities.length && <Text fontSize="2xl" fontWeigth="black">Amenities</Text>}
          <Flex flexWrap="wrap">
            {amenities?.map((item)=> { item?.amenities?.map(amenity =>  (
              <Text 
                fontWeight="bold"
                color="blue.400"
                fontSize="l"
                p="2"
                bg="gray.200"
                m="l"
                borderRadius="5"
                key={amenity.text}>
              {amenity?.text}
              </Text>))
              
            })}
          </Flex>
          <Flex flexWrap='wrap'>
          {amenities?.map((item) => (
              item?.amenities?.map((amenity) => (
                <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
                  {amenity.text}
                </Text>
              ))
          ))}
        </Flex>
        </Box>
        
      </Box>
    </Box>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
