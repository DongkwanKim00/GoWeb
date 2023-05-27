import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Rank = () => {
  const baseUrl = "http://localhost:8000";
  const [rankedList, setRankedList] = useState([]);

  useEffect(() => {
    getRankedPosts();
  }, []);

  const getRankedPosts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/board/ranked`);
      setRankedList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (

    <div style={{ background: `url('/cloudBackground.gif') no-repeat center center fixed`, WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', minHeight: '100vh', padding: '50px' }}>
      <h1 style={{ textAlign: "center", color: "#000000", position: "fixed", left: "38%" }}>카테고리별 인기 게시글</h1>

      <div style={{position: "fixed", marginLeft: "40%", marginTop: "3.5%"}}>
        <input type="checkbox" name="rank" value="Toy" checked={selectedOption === "Toy"} onChange={handleOptionChange} style={{ marginLeft: "15px"}}/> <label style={{ color: "#000000" , marginRight: "10px"}}>Toy</label>
        <input type="checkbox" name="rank" value="Delivery" checked={selectedOption === "Delivery"} onChange={handleOptionChange} /> <label style={{ color: "#000000" , marginRight: "10px"}}>Delivery</label>
        <input type="checkbox" name="rank" value="Agriculture" checked={selectedOption === "Agriculture"} onChange={handleOptionChange} /> <label style={{ color: "#000000" , marginRight: "10px"}}>Agriculture</label>
        <input type="checkbox" name="rank" value="Education" checked={selectedOption === "Education"} onChange={handleOptionChange} /> <label style={{ color: "#000000" , marginRight: "10px"}}>Education</label>
        <label style={{ color: "#000000" , marginRight: "10px"}}>👈Select category</label>
      </div>

      <div id="onoffDisplay">
      {!selectedOption && (
      <div id="basic" style={{ left: "20%", width: "60%", marginTop: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", position: "fixed", maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>카테고리</th>
            <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>제목</th>
            <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>추천 수</th>
            <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성자</th>
            <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성일</th>
          </tr>
        </thead>
        <tbody>
          {rankedList.map((post) => (
            <tr key={post.id}>
              <td style={{ color: "#ffffff", padding: "10px" }}>{post.category}</td>
              <td style={{ color: "#ffffff", padding: "10px" }}>
                {post.image && (
                  <img src={`${baseUrl}/api/board/image/${post.id}`} alt="게시글 이미지" style={{ width: "50px", height: "auto", marginRight: "10px" }} />
                )}
                <Link to={`/board/detail/${post.id}`} style={{ color: "#ffffff", textDecoration: "underline" }}>
                  {post.title}
                </Link>
              </td>
              <td style={{ color: "#ffffff", padding: "10px" }}>{post.recommendation}</td>
              <td style={{ color: "#ffffff", padding: "10px" }}>{post.author}</td>
              <td style={{ color: "#ffffff", padding: "10px" }}>{new Date(post.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )}

        {selectedOption === 'Toy' && <div id="toyDisplay" style={{ left: "20%", width: "60%", marginTop: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", position: "fixed", maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>카테고리</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>제목</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>추천 수</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성자</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성일</th>
              </tr>
            </thead>
            <tbody>
              {rankedList.filter((post) => post.category === "Toy").map((post) => (
                <tr key={post.id}>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.category}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>
                    {post.image && (
                      <img src={`${baseUrl}/api/board/image/${post.id}`} alt="게시글 이미지" style={{ width: "50px", height: "auto", marginRight: "10px" }} />
                    )}
                    <Link to={`/board/detail/${post.id}`} style={{ color: "#ffffff", textDecoration: "underline" }}>
                      {post.title}
                    </Link>
                  </td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.recommendation}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.author}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{new Date(post.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        }

        {selectedOption === 'Delivery' && <div id="deDisplay" style={{ left: "20%", width: "60%", marginTop: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", position: "fixed", maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>카테고리</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>제목</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>추천 수</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성자</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성일</th>
              </tr>
            </thead>
            <tbody>
              {rankedList.filter((post) => post.category === "Delivery").map((post) => (
                <tr key={post.id}>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.category}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>
                    {post.image && (
                      <img src={`${baseUrl}/api/board/image/${post.id}`} alt="게시글 이미지" style={{ width: "50px", height: "auto", marginRight: "10px" }} />
                    )}
                    <Link to={`/board/detail/${post.id}`} style={{ color: "#ffffff", textDecoration: "underline" }}>
                      {post.title}
                    </Link>
                  </td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.recommendation}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.author}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{new Date(post.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        }
        {selectedOption === 'Agriculture' && <div id="agrDisplay" style={{ left: "20%", width: "60%", marginTop: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", position: "fixed", maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>카테고리</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>제목</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>추천 수</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성자</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성일</th>
              </tr>
            </thead>
            <tbody>
              {rankedList.filter((post) => post.category === "Agriculture").map((post) => (
                <tr key={post.id}>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.category}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>
                    {post.image && (
                      <img src={`${baseUrl}/api/board/image/${post.id}`} alt="게시글 이미지" style={{ width: "50px", height: "auto", marginRight: "10px" }} />
                    )}
                    <Link to={`/board/detail/${post.id}`} style={{ color: "#ffffff", textDecoration: "underline" }}>
                      {post.title}
                    </Link>
                  </td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.recommendation}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.author}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{new Date(post.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        }

        {selectedOption === 'Education' && <div id="eduDisplay" style={{ left: "20%", width: "60%", marginTop: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", position: "fixed", maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>카테고리</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>제목</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>추천 수</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성자</th>
                <th style={{ color: "#ffffff", borderBottom: "1px solid #ffffff", padding: "10px" }}>작성일</th>
              </tr>
            </thead>
            <tbody>
              {rankedList.filter((post) => post.category === "Education").map((post) => (
                <tr key={post.id}>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.category}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>
                    {post.image && (
                      <img src={`${baseUrl}/api/board/image/${post.id}`} alt="게시글 이미지" style={{ width: "50px", height: "auto", marginRight: "10px" }} />
                    )}
                    <Link to={`/board/detail/${post.id}`} style={{ color: "#ffffff", textDecoration: "underline" }}>
                      {post.title}
                    </Link>
                  </td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.recommendation}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{post.author}</td>
                  <td style={{ color: "#ffffff", padding: "10px" }}>{new Date(post.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        }
      </div>
    </div>
  );
};

export default Rank;