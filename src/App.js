import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Lấy tất cả các public routes và render chúng theo thứ tự đã định sẵn */}
                    {/* {publicRoutes.map((route, index) => {   // TODO handle route specific routes here 
                        // Lấy layout tùy chỉnh nếu có, ngược lại sẽ sử dụng DefaultLayout mặc định
                        const Layout = route.layout || DefaultLayout;

                        // trong JSX, việc sử dụng route.component trực tiếp trong <element /> sẽ không hợp lệ,
                        // bởi vì JSX cần một tham chiếu đến component (không phải thuộc tính của một đối tượng).
                        // Do đó, bạn cần gán route.component vào một biến trước, ví dụ Page, để sử dụng như một component thông thường
                        const Page = route.component;
                        
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })} */}

                    {publicRoutes.map(({ path, component: Component, layout: Layout }, index) => (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Layout>
                                    <Component />
                                </Layout>
                            }
                        />
                    ))}

                    {/* <Route path="/" element={<Home />} />
                    <Route path="/property/" element={<Property />} /> */}

                    {/* Add your private routes here */}
                    {/* <Route path="/private" element={<PrivateComponent />} /> */}
                    {/* Add your 404 route here */}
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
