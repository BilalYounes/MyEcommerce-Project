import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;
const TextFilter = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const PaginationWrapp = styled.div`
display:flex;
justify-content: center;
margin-bottom: 6px;
`
const ProductList = ({onAdd}) => {
  return (
    <Container>
      {/* <Navbar /> */}
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <TextFilter> Filter Products:</TextFilter>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
     
          <TextFilter>Sort Products:</TextFilter>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>{" "}
        </Filter>
      </FilterContainer>
      <Products onAdd={onAdd} />
      <PaginationWrapp>
 
      <Pagination count={10} shape="rounded" />
 
   
    </PaginationWrapp>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
