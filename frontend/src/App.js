import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';


const App = () => {
    return (
        <>
            <Header />
            <main className='py-3'>
                <Container>
                    <Routes>
                        <Route path='/' element={<HomeScreen />} exact />
                        <Route path='/page/:pageNumber' element={<HomeScreen />} />
                        <Route path='/search/:keyword' element={<HomeScreen />} exact />
                        <Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen />} />
                        <Route path='/login' element={<LoginScreen />} />
                        <Route path='/register' element={<RegisterScreen />} />
                        <Route path='/profile' element={<ProfileScreen />} />
                        <Route path='/products' element={<HomeScreen />} />
                        <Route path='/products/:id' element={<ProductScreen />} />
                        <Route path='/cart'>
                            <Route path='' element={<CartScreen />} />
                            <Route path=':id' element={<CartScreen />} />
                        </Route>
                        <Route path='/shipping' element={<ShippingScreen />} />
                        <Route path='/payment' element={<PaymentScreen />} />
                        <Route path='/placeorder' element={<PlaceOrderScreen />} />
                        <Route path='/order/:id' element={<OrderScreen />} />
                        <Route path='/admin/userlist' element={<UserListScreen />} />
                        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
                        <Route path='/admin/productlist' element={<ProductListScreen />} exact />
                        <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen />} exact />
                        <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
                        <Route path='/admin/orderlist' element={<OrderListScreen />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default App;
