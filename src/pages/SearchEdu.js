import React, { Component } from 'react';
import Information from './info-edu';
import '../index.css';
import './DroneStyle.css';
import CommentBox from './CommentBox';
import ImageButton from './ImageButton';


class SearchEdu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      checkClicked: 0,
      clickedItem: null,
      category: ''
    };
  }

  

  
  handleCategoryChange = (newCategory) => {
    this.setState({ category: newCategory });
  };
  // handleClick = (sign) => (e) => {
  //   if (sign === 1) {
  //     const itemName = e.target.textContent;
  //     console.log("빵꾸똥꾸", itemName);
  //     this.setState({
  //       checkClicked: 1,
  //       clickedItem: itemName,
  //       category : itemName,
        
  //     });
      
  //   }
    
  // };
  handleClick = (sign) => (e) => {
    if (sign === 1) {
      const itemName = e.target.textContent;
      console.log("빵꾸똥꾸", itemName);
      this.setState({
        checkClicked: 1,
        clickedItem: itemName,
        category: itemName,
      }, () => {
        console.log('123456789',this.state.category); // 상태 속성인 category 값 출력
      });
      console.log('asdfasdfaas',this.state.category); 
    }
    console.log("teastestaest", this.category);
  };

  searchSpace = (event) => {
    if (event.key === 'Enter') {
      if (this.state.checkClicked === 1) {
        this.setState({
          checkClicked: 0,
          search: event.target.value,
        });
      } else {
        this.setState({
          search: event.target.value,
        });
      }
    }
  };

  render() {
    
    const { checkClicked } = this.state;
    const styleInfo = {
      paddingRight: '800px',
      fontSize: '65px',
      fontFamily: 'var(--font-googleSingleDay)',
      
      
      
    };
    const elementStyle = {
      border: 'none',
      padding: '20px',
      position: 'relative',
      left: '10vh',
      height: '8vh',
      width: '42vh',
      marginTop: '5vh',
      marginBottom: '10vh',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      fontSize: '38px',
      backgroundImage: `url(${process.env.PUBLIC_URL}/searchButton.png)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };

    const items = Information.filter((data) => {
      if (this.state.search === null || this.state.search === undefined) {
        return data;
      } else if (
        (data.name &&
          data.name.toLowerCase().includes(this.state.search.toLowerCase())) ||
        (data.country &&
          data.country.toLowerCase().includes(this.state.search.toLowerCase()))
      ) {
        return data;
      }
    }).map((data) => (
      <div key={data.name}>
        <ul>
          <li style={{ position: 'relative', left: '20vh' }}>
          <button
      
               style={styleInfo}
              onClick={this.handleClick(1)}
              onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                }}
              onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            }}
            >
  {data.name}
</button>
          </li>
        </ul>
      </div>
    ));

    const selectedItem = Information.find(
      (data) => data.name === this.state.clickedItem
    );

    return (
      <div style={{ marginTop: '35px' }}>
        <div className="home-search-area"  style={{
          background: `url('/lifesavingButton.gif') no-repeat center`,
          WebkitBackgroundSize: 'cover',
          MozBackgroundSize: 'cover',
          OBackgroundSize: 'cover',
          backgroundSize: 'cover',
          minHeight: '50vh',
          
        }}>
          <input
            type="text"
            placeholder="Enter "
            style={elementStyle}
            onKeyDown={(e) => this.searchSpace(e)}
            
          />

         
        </div>
        <div className="home-contents-area" style={{ backgroundImage: "url('/droneNote12.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
  {checkClicked === 1 && selectedItem ? (
    <>
      <div className="image-info-container">
        <div className="image-container">
          <img
            className="sojustyle"
            src={`/교육/${selectedItem.image}`}
            alt={selectedItem.name}
          />
        </div>
        <div className="info-container">
          <div className="info-details">
            <h1>{selectedItem.name}</h1>
            <p>{selectedItem.manufacturer}</p>
            <p>{selectedItem.kind}</p>
            <p>{selectedItem.type}</p>
            <p>{selectedItem.characteristics}</p>
          </div>
          <div className="content-container">
            <p>{selectedItem.application}</p>
          </div>
        </div>
      </div>

      <div className="button-container" style={{marginLeft:'150px'}}>
        <ImageButton />
        {/*<img className="like-notlike" src={`/like.png`} alt="Like" />
        <img
          className="like-notlike"
          src={`/NotLike.png`}
          alt="Not Like"
        />*/}
      </div>

      <CommentBox category={this.state.category} />
    </>
  ) : (
    items
  )}
</div>
      </div>
    );
  }
}

export default SearchEdu;