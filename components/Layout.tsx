// components/Layout.tsx
import Header from './Header';

const Layout = ({ children }) => (
    <>
        <div>
            <div style={{ border: '1px solid black', paddingLeft:"10px", paddingRight:"10px", background:" #fbfbfb" }}>
                <Header />
                <main>{children}</main>
            </div>
        </div>
    </>
);

export default Layout;
