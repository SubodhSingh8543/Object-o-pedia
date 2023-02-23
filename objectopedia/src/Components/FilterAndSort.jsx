import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, CheckboxGroup, Heading, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom';

const FilterAndSort = () => {

    const [searchParams,setSearchParams] = useSearchParams();
  
     const searchParamsfilter = searchParams.getAll("filter")

    const [filterVal,setFilterVal] = useState(searchParamsfilter || []);
    const [sortVal,setSortVal] = useState(searchParams.get("sort") || "");

    const handleFilter = (value)=>{
        setFilterVal(value)
    }

    const handleSort = (value)=>{
        setSortVal(value)
    }

    useEffect(()=>{
        let params = {};

        if(filterVal.length && sortVal.length){

            params.filter = filterVal;
            params.sort = sortVal;
        }
        else if(filterVal.length){

            params.filter = filterVal;
        }
        else if(sortVal.length){

            params.sort = sortVal;
        }

        setSearchParams(params)
    },[filterVal,sortVal])
  

  return (
    <div style={{position:"sticky",top:"0px",bottom:"150px"}}>
      <Box border="1px solid grey" borderRight="8px solid grey " width="80%"
    
  >
        <Heading color="gray.900" opacity="0.7">
          Filter & Sort
        </Heading>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  color="#4A5568"
                  as="span"
                  flex="1"
                  py="1"
                  fontSize="2em"
                  textAlign="left"
                >
                  Filter
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} spacing={"3"}>
              <CheckboxGroup colorScheme="green" value={filterVal} onChange={handleFilter}>
                <Stack spacing={[1, 5]} direction={["column"]}>
                 
                 <Text fontWeight="bold" textAlign="left">By Category</Text>
                 
                  <Checkbox color="#000000DE" value="desks">
                    Desks
                  </Checkbox>
                  <Checkbox color="#000000DE" value="charging sulotions">
                  Charging Solutions
                  </Checkbox>
                  <Checkbox color="#000000DE" value="macbook sleeves">
                  Macbook Sleeves
                  </Checkbox>
                  <Checkbox color="#000000DE" value="messenger bags">
                  Messenger Bags
                  </Checkbox>
                  <Checkbox color="#000000DE" value="watchbands">
                  Watchbands
                  </Checkbox>
                  <Checkbox color="#000000DE" value="Hard Cover">
                  Hard Cover
                  </Checkbox>

                </Stack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  color="#4A5568"
                  as="span"
                  flex="1"
                  py="1"
                  fontSize="2em"
                  textAlign="left"
                >
                  Sort
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup value={sortVal} onChange={handleSort}>
                <Stack direction="column">
                  <Radio py="2" color="#000000DE" value="asc">
                    Asc
                  </Radio>
                  <Radio color="#000000DE" value="desc">
                    Desc
                  </Radio>
                  <Radio color="#000000DE"  value="">
                    Reset
                  </Radio>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </div>
  );
}

export default FilterAndSort