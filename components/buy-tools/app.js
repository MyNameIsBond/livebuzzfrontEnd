import Button from '@material-ui/core/Button';
import React from "react";
import styles from "./styles.css";

const App = props =>
  <div className={styles.container}>
    <h1>
      Select Show
    </h1>
    <div>
      <Button variant="contained" color="primary"
        onClick={() => {window.oc.product.setProduct('Live Show 1', 'https://mysinginglessons.co.uk/wp-content/uploads/2017/04/Live-concert-crowd-620x342.jpg')}}
      >
        Show 1 
      </Button>
    </div>
    <div>
      <Button variant="contained" color="primary"
        onClick={() => {window.oc.product.setProduct('Live Show 2', 'https://townsquare.media/site/366/files/2018/12/Ghost-26.jpg?w=980&q=75')}}
      >
        Show 2
      </Button>
      <Button variant="contained" color="primary"
        onClick={() => {window.oc.product.setProduct('Live Show 3', 'https://media.npr.org/assets/img/2015/03/17/457283146_slide-43a84b9fa50496406611aa099b5aef82d0b4e96a-s800-c85.jpg')}}
      >
        Show 3
      </Button>
    </div>

    <h1>
      Watch the show
    </h1>
    <div>
      <Button variant="contained" color="primary"
        onClick={() => {window.oc.cart.addToCart()}}
      >
        Watch It!
      </Button>
    </div>
  </div>;

export default App;
