import Footer from '@/components/Footer'

const LayoutPage = ({children}) => {
    return (
        <div>
            {children}
            <Footer />
        </div>
    );
};

export default LayoutPage;