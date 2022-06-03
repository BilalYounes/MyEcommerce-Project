import styled from "styled-components";
import "./style.css";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const Info = styled.div`
  position: relative;
  opacity: 0;
  transition: all 0.5s ease;
  display: flex;
  justify-content: space-between;
`;

const WishIcon = styled.div`
 width: 40px;
    height: 40px;
  opacity: 0;
    z-index: 9;
    position: absolute;
    top:8px;
    left:8px;
    color:gray;
   cursor:pointer;
    border-radius: 50%;
    display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
    &:hover{
      background-color: #e9f5f5;
    transform: scale(1.1);
 
    }
   
 `;


const Container = styled.div`
  &:hover ${Info} {
    opacity: 1;
  }
  &:hover ${WishIcon} {
    background-color: #e9f5f5;

    opacity: 1;
  }
  position: relative;
`;

const WrappName = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  font-weight: 300;
  font-size: 25px;
  margin-left: 6px;
`;
const RatingStyle = styled.div`
  display: flex;
  align-items: center;
`;
const Counter = styled.p`
  font-weight: 200px;
`;
const IconsWrapper = styled.div`
  position: absolute;
  right: 5px;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
 snackbar:{
   width:'100%',
  //  height: '20%',
  
   
 }
}));
const Product = ({ item,onAdd }) => {
  const classes = useStyles();

  const [value, setValue] = useState(2);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Container>
      <div className="wrapper">
        <div className="container">
          <WishIcon title="Add to WishList">
            <FavoriteBorderIcon sx={{ width: "40px", height: "35px" }} />
          </WishIcon>
          <div className="top">
            <img className="img" src={item.img} />
          </div>
          <div className="bottom">
            <Info>
              <WrappName>
                <Name>Laptop</Name>
                <RatingStyle>
                  <Rating
                    sx={{
                      // margin:
                      padding: "2px",
                    }}
                    name="read-only"
                    value={value}
                    readOnly
                  />
                  <Counter>(32)</Counter>
                </RatingStyle>
              </WrappName>
              <IconsWrapper>
                <Icon onClick={handleClick}>
                  <AddShoppingCartIcon  onClick={() => onAdd(item)} />
                </Icon>
              </IconsWrapper>
            </Info>
            <Snackbar className={classes.snackbar} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
        </Snackbar>
          </div>
        </div>
        <div class="inside">
    <div class="icon"><i class="material-icons">info_outline</i></div>
    <div class="contents">
      <table>
        <tr>
          <th>Width</th>
          <th>Height</th>
        </tr>
        <tr>
          <td>3000mm</td>
          <td>4000mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
      </table>
    </div>
  </div>
      </div>
    </Container>
  );
};

export default Product;
