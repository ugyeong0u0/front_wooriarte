import React, { useEffect } from 'react';
import axios from 'axios';
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Payment = ({exhibitId, ticketNumber}) => {
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "http://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "http://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const fetchMerchantUid = async (exhibitId, amount) => {
    try {
      const response = await axios.post('http://127.0.0.1:8080/api/payment', {
        exhibit_id: exhibitId,
        amount: amount,
      });
      return { merchantUid: response.data.merchant_uid, amount: response.data.amount };
    } catch (error) {
      console.error('merchant_uid를 가져오는 중 에러가 발생했습니다.', error);
      return null;
    }
  };

  const requestPay = async (exhibitId, amount) => {
    if(amount == 0) {
      alert("티켓 매수가 0입니다");
      return;
    }
    const userId = localStorage.getItem("userId");
    if(userId == undefined) {
      alert("로그인 후 이용해주세요");
      return;
    }

    const orderInfo = await fetchMerchantUid(exhibitId, amount);

    if (!orderInfo) {
      alert('결제 정보를 가져오는데 실패했습니다.');
      return;
    }

    const { IMP } = window;
    IMP.init('imp20842147');
    
    IMP.request_pay({
      pg: 'kakaopay.TC0ONETIME',
      merchant_uid: orderInfo.merchantUid,
      name: '테스트 상품',
      amount: orderInfo.amount
    }, async (rsp) => {
      try {
        const { data } = await axios.post('http://127.0.0.1:8080/api/payment/verifyIamport/' + rsp.imp_uid);
        console.log(data.verified); 
        if (data.verified) { 
          alert('결제 성공');
          const {ticket} = await axios.post('http://127.0.0.1:8080/api/tickets', {
            "amount": ticketNumber,
            "exhibitId":exhibitId,
            "userId":localStorage.userId,
            "paymentId": data.paymentId,
            "status": false,
            "canceled": false
          });
        } else {
          alert('결제 실패');
        }
      } catch (error) {
        console.error('결제 검증 중 에러 발생:', error);
        await axios.post('http://127.0.0.1:8080/api/payment/cancel/' + orderInfo.merchantUid);
        alert('결제 실패');
      }
    });
  };

  return (
    <div>
      <Button
        variant="contained"
        endIcon={<AddShoppingCartIcon />}
        onClick={() => requestPay(exhibitId, ticketNumber)}
        style={{
        marginTop: 10,
        backgroundColor: "black", // 버튼 배경색을 검정으로 설정
        color: "white", // 텍스트 색상을 흰색으로 설정
        "&:hover": {
          backgroundColor: "darkgrey", // 호버 상태의 배경색 변경
          },
        }}
      >결제하기</Button>
    </div>
  );
};

export default Payment;