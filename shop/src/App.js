import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categoris from "./components/Categoris";
import ShowFullitem from "./components/ShowFullitem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Furniture',
          img: 'img-1.jpg',
          desc: 'Lorem Ipsum — это просто фиктивный текст',
          category: 'Furniture',
          price: '50'
        },

        {
          id: 2,
          title: 'Sofa',
          img: 'img-2.jpg',
          desc: 'Lorem Ipsum — это просто фиктивный текст',
          category: 'Sofa',
          price: '439.99'
        },

        {
          id: 3,
          title: 'Sofa and Armchair',
          img: 'img-3.jpg',
          desc: 'Lorem Ipsum — это просто фиктивный текст',
          category: 'Sofa',
          price: '249.99'
        },

        {
          id: 4,
          title: 'Table chairs and sofa',
          img: 'img-4.jpg',
          desc: 'Lorem Ipsum — это просто фиктивный текст',
          category: 'Table chairs and sofa',
          price: '149.99'
        },

        {
          id: 5,
          title: 'Beds',
          img: 'img-5.webp',
          desc: 'Lorem Ipsum — это просто фиктивный текст',
          category: 'Beds',
          price: '349.99'
        },

        {
          id: 6,
          title: 'Everything for the bedroom',
          img: 'img-6.jpg',
          desc: 'Lorem Ipsum — это просто фиктивный текст',
          category: 'Sofa',
          price: '49.99'
        },

      ],
      showFullitem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.choosCategory = this.choosCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categoris choosCategory={this.choosCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullitem && <ShowFullitem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullitem: !this.state.showFullitem})
  }

  choosCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
