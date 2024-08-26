import {useState} from 'react';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import ImagesNavigator from '../components/ImagesNavigator';
import GenContext from '../helpers/GenContext';

const MainPage = () => {
  const [isSliderOpen, setSliderOpen] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const values = {isSliderOpen, setSliderOpen, selectedProductIndex, setSelectedProductIndex, productQuantity, setProductQuantity};
  return (
    <>
      <GenContext.Provider value={values}>
        <Navbar />
        <Content />
        <ImagesNavigator />
      </GenContext.Provider>
    </>
  );
};

export default MainPage;