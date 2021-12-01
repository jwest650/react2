import "./App.css";

function App() {
    return (
        <div>
            <nav className="navbar">
                <h5>PIZZAMANIA</h5>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a href="" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="" className="nav-link">
                            About Pizza
                        </a>
                    </li>
                    <li>
                        <a href="" className="nav-link">
                            Pizza Types
                        </a>
                    </li>
                </ul>
            </nav>

            <div
                id="example"
                className="carousel slide row"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="example"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li data-target="example" data-slide-to="1"></li>
                    <li data-target="example" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner parent-carousel">
                    <div className="carousel-item active">
                        <img
                            src="./Images/anthony-duran-QbOvrpDU1KA-unsplash.jpg"
                            alt=""
                            className="d-block w-100"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./Images/vitalii-chernopyskyi-Oxb84ENcFfU-unsplash.jpg"
                            alt=""
                            className="d-block w-100"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./Images/ivan-torres-MQUqbmszGGM-unsplash.jpg"
                            alt=""
                            className="d-block w-100"
                        />
                    </div>
                </div>

                <a
                    className="carousel-control-prev"
                    href="#example"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#example"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <main className="container">
                <h2 className="text-center">About Pizza</h2>
                <div className="row">
                    <div className="col-md-6 image">
                        <img
                            src="./Images/bulbul-ahmed-3svNmQj8_X8-unsplash.jpg"
                            alt=""
                            className="d-block w-100"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2>Pizza is awesome</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Aliquam magni fuga unde ad provident cum ut
                            laboriosam, at accusamus nisi itaque maxime minus
                            dolores quam, corporis laborum eaque vero alias.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Aliquam magni fuga unde ad provident cum ut
                            laboriosam, at accusamus nisi itaque maxime minus
                            dolores quam, corporis laborum eaque vero alias.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Aliquam magni fuga unde ad provident cum ut
                            laboriosam, at accusamus nisi itaque maxime minus
                            dolores quam, corporis laborum eaque vero alias.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Aliquam magni fuga unde ad provident cum ut
                            laboriosam, at accusamus nisi itaque maxime minus
                            dolores quam, corporis laborum eaque vero alias.
                        </p>
                    </div>
                </div>
            </main>
            <section className="container">
                <h2 className="text-center">Pizza Types</h2>
                <div className="row cards">
                    <div className="card" style={{ width: "15rem" }}>
                        <img
                            src="./Images/alan-hardman-SU1LFoeEUkk-unsplash.jpg"
                            alt=""
                            className="d-block"
                        />
                        <h3>Pepperoni Pizza</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eligendi veniam facere accusantium rem eaque
                            porro quaerat aliquid iusto! Quasi ab consectetur
                            illo vero
                        </p>
                    </div>
                    <div className="card" style={{ width: "15rem" }}>
                        <img
                            src="./Images/shourav-sheikh-a66sGfOnnqQ-unsplash.jpg"
                            alt=""
                            className="d-block w-100"
                        />
                        <h3>VegetablePizza</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eligendi veniam facere accusantium rem eaque
                            porro quaerat aliquid iusto! Quasi ab consectetur
                            illo vero
                        </p>
                    </div>
                    <div className="card" style={{ width: "15rem" }}>
                        <img
                            src="./Images/quin-engle-lHUdfk5WGXc-unsplash.jpg"
                            alt=""
                            className="d-block w-100"
                        />
                        <h3>Cheese Pizza</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eligendi veniam facere accusantium rem eaque
                            porro quaerat aliquid iusto! Quasi ab consectetur
                            illo vero
                        </p>
                    </div>
                    <div className="card" style={{ width: "15rem" }}>
                        <img
                            src="./Images/engin-akyurt-1PoaXQ5Ztwo-unsplash(1).jpg"
                            alt=""
                            className="d-block w-100"
                        />
                        <h3>Bossu Pizza</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eligendi veniam facere accusantium rem eaque
                            porro quaerat aliquid iusto! Quasi ab consectetur
                            illo vero
                        </p>
                    </div>
                </div>
            </section>
            <footer className="container">
                <p>&copy; 2019 Pizzamainia All Right Preserved !</p>
            </footer>
        </div>
    );
}

export default App;
