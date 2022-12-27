import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from './Products';
import ErrorBanner from '../../components/ErrorBanner';
import Options from './Options';

function Type({orderType}) { //orderType을 props로 가져옴
    const [items, setItems] =useState([]); 
    const [error, setError] = useState(false);

    useEffect(() => {
        loadItems(orderType) //loadItems함수 call
    },[orderType])

    const loadItems = async (orderType) => {
        try{
           let response = await axios.get(`http://localhost:5000/${orderType}`); //${orderType}을 사용하기 위해선 ''아닌 ``사용
           setItems(response.data)
        } catch(error) {
            setError(true);
        }
    };

    if(error) {
        return <ErrorBanner message="에러가 발생했습니다."/>
    }

    //렌더링 부분
    //ItemComponent는 orderType에 따라서 결정
    const ItemComponent = orderType === "products"  ? Products : Options;
    const optionItems = items.map((item) => { //위에 배열로 선언한 items를 map으로 돌려서 item 하나씩 잡음
        <ItemComponent
           key={item.name}//props로 key를 사용하는데, key는 항상 unique한 값을 사용(=> 이 이름은 handelers.js json데이터의 name임)
           name={item.name}
           imagePath={item.imagePath}
        />
    })

    return (
            <>
              <h2>주문 종류</h2>
              <p>하나의 가격</p>
              <p>총 가격 : </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: orderType === "options" && "column",
                }}
              >
                {optionItems}
              </div>
            </>
    )
}

export default Type
