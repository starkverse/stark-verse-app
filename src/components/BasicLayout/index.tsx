import classnames from 'classnames';
import Footer from "./Footer";
import Header from "./Header";

const Basic = ({ children, className }: any) => {
  return (
    <div className={classnames(className, "flex flex-col min-h-screen")}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Basic;
