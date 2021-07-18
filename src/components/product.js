import React, {Component} from 'react';

class Product extends Component{

  constructor(props){
    super(props);
    this.onAddToCard = this.onAddToCard.bind(this);
  }

  onAddToCard(){
    alert(this.props.name + '-' + this.props.price + 'đ');
    console.log(this.props.name)
  }

  onAddToCard2 = () => {
    alert(this.props.name + '-' + this.props.price + 'đ');
    console.log(this.props.name)
  }

  render(){
    return(
      <div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div class="thumbnail">
            <img alt="an" src = { this.props.img }></img>
            <div class="caption">
              <h3>
                { this.props.name }
              </h3>
              <p>
                { this.props.price }
              </p>
              <p>
                <a href="#" class="btn btn-primary" onClick = { this.onAddToCard2 }>MuaNgay</a>
                
              </p>
            </div>
          </div>
        </div>
      </div>
        
      );
  }
}


export default Product;
