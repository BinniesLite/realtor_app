import {useEffect, useState} from 'react';
import {Flex, Select, Box, Input, Spinner, Icon, Button} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {MdCancel} from 'next/image';
import { filterData, getFilterValues } from '../util/filterData';

const SearchFilter = () => {
  const [filter, setFilters] = useState(filterData);
  const router = useRouter();
  console.log(router);
  const searchProperties = (filterValues) => {
    console.log(filterValues);
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      query[item.name] = item.value
    })
    router.push({pathname: path, query: query})
  }

  const searchLocation = (location) => {
    const path = router.pathname;


    
  }
  return (
    <Flex bg="gray.400" p="4" justifyContent="center" flexWrap="wrap">
      {filterData.map((filter) => (
        <Box key={filter.queryName}>
            <Select onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder} w='fit-content' p='2' >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
         
        </Box>
      ))}
    <Input onChange={e => searchLocation(e.target.value)} variant="outline" placeHolder='Your Name'></Input>
    </Flex>
  )
}

export default SearchFilter;