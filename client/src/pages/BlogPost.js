import React, {useEffect, useState} from 'react';
import PageHeader from "../components/PageHeader";
import vector from "../static/img/vector-4.png";
import Footer from "../components/Footer";
import Article1 from "../components/Article1";

const BlogPost = ({article}) => {
    const [renderSwitch, setRenderSwitch] = useState(null);

    useEffect(() => {
        switch(article) {
            case 1:
                setRenderSwitch(<Article1 />);
                break;
            default:
                break;
        }
    }, []);

    return <div className="container container--aboutUs">
        <PageHeader currentPage={5} />
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <img className="backgroundImg backgroundImg--2" src={vector} alt="tlo" />
        {renderSwitch}
        <Footer />
        </div>
};

export default BlogPost;
