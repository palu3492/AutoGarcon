import React from "react";
import Card from 'react-bootstrap/Card';

class Order extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="p-3">
        <Card className="text-center">
          <Card.Header style={cardHeaderStyle}>
            <span class="px-2 py-1 mr-2" style={boxNumberStyle}>{this.props.boxNumber}</span>
            <span>Order Number: {this.props.order.order_num}</span>
          </Card.Header>
          <Card.Body>
            {/*<Card.Title>Special title treatment</Card.Title>*/}
              {/* <Card.Text>
              With supporting text below as a natural lead-in to additional content.
              </Card.Text> */}

              {this.props.order.items.map((item, key) => (
                <div style={itemStyle}>
                  <p style={{margin: "0", padding: "0.8em"}}>{item.quantity}x</p>
                  <p style={{margin: "0", padding: "0.8em"}}>{item.title}</p>
                </div>
              ))}

          </Card.Body>
          <Card.Footer className="text-muted">Table: {this.props.order.table}</Card.Footer>
        </Card>
      </div>
    )
  }
}

const itemStyle = {
    display: "flex",
    borderBottom: "grey solid 1px",
};

var cardHeaderStyle = {
  backgroundColor: '#0b658a',
  color: '#ffffff',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center'
};

const boxNumberStyle = {
  background: '#ffffff6e',
  borderRadius: 'calc(.25rem - 1px)',
};

export default Order;