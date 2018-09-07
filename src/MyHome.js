import React, { Component } from 'react';
import SimpleSlider from './MainCategorySlider';
import SimpleSlider2 from './SubCategorySlider';

class Category extends Component {
    render() {
        return (
            <div id="Categories" className="CategoriesClass">
                <h2>Välj rum</h2>
                <SimpleSlider />
            </div>
        );
    }
}

class SubCategory extends Component {
    render() {
        return (
            <div id="SubCategories" className="SubCategoriesClass">
                <h2>Tillval för KÖK</h2>
                <SimpleSlider2 />
            </div>
        );
    }
}

class Products extends Component {
    render() {
        return (
            <div id="Products" className="ProductsClass">
                <h2>Kakel</h2>
                <br />
                <div className="productcategories active">Rekommenderade</div><div className="productcategories">Standard</div><div className="productcategories">Premium</div>
                <br /><br /><br />
                <h4>&#10003; Rekommenderade</h4>
                <div className="products">
                    <img src="/images/kakel1.jpg" alt="" />
                    <button className="">&#10003;</button>
                </div>
                <div className="products">
                    <img src="/images/kakel2.jpg" alt="" />
                    <button className="">&#10003;</button>
                </div>
                <div className="products">
                    <img src="/images/kakel3.jpg" alt="" />
                    <button className="done">&#10003;</button>
                </div>
                <div className="products">
                    <img src="/images/kakel4.jpg" alt="" />
                    <button className="">&#10003;</button>
                </div>
                <br /><br /><br /><br /><br />
                <h4>Standard</h4>
                <div className="products">
                    <img src="/images/kakel4.jpg" alt="" />
                    <button className="">&#10003;</button>
                </div>
                <div className="products">
                    <img src="/images/kakel2.jpg" alt="" />
                    <button className="">&#10003;</button>
                </div>
                <div className="products">
                    <img src="/images/kakel1.jpg" alt="" />
                    <button className="">&#10003;</button>
                </div>
                <div className="products">
                    <img src="/images/kakel3.jpg" alt="" />
                    <button className="">&#10003;</button>
                </div>
                <br /><br /><br /><br /><br />
                <h4>&#9733; Premium</h4>
                <div className="products">
                    <img src="/images/kakel3.jpg" alt="" />
                    <button className="">&#10003;</button>
                </div>
                <div className="products">
                    <img src="/images/kakel1.jpg" alt="" />
                    <button className="">&#10003;</button>
                </div>
                <div className="products">
                    <img src="/images/kakel4.jpg" alt="" />
                    <button className="">&#10003;</button>
                </div>
                <div className="products">
                    <img src="/images/kakel2.jpg" alt="" />
                    <button className="">&#10003;</button>
                </div>
            </div>
        );
    }
}

class MyHome extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            category: true,
            active: false,
            products: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleProducts = this.handleProducts.bind(this);
    }

    handleClick() {
        this.setState({
            category: !this.state.category,
            active: !this.state.active,
        });
    }
    handleProducts() {
        this.setState({
            active: !this.state.active,
            products: !this.state.products,
        });
    }

    render() {
        return (
            <section>
                <h1>Min bostad</h1>

                {this.state.category && <Category />}
                {this.state.category && <div className="fullbtnaccept" onClick={this.handleClick}>Visa KÖK</div>}

                {this.state.active && <div className="halfbtnchange" onClick={this.handleClick}>Ändra rum</div>}
                {this.state.active && <div className="halfbtnaccept" onClick={this.handleProducts}>Visa Kakel</div>}
                {this.state.active && <SubCategory />}

                {this.state.products && <Products />}
                {this.state.products && <div className="halfbtnchange" onClick={this.handleProducts}>Byt rum/kategori</div>}
                {this.state.products && <div className="halfbtnundec" onClick={this.handleProducts}>Välj Kakel</div>}

                {/* <div className="fullwidthbtn">Se bänkskivor</div> */}
            </section>  
        );
    }
  }

  export default MyHome;