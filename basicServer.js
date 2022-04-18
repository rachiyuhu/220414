//express 모듈을 사용해서 서버 생성
const {response} =  require('express');
const express =  require('express');

//서버 생성
const app = express();

//request 이벤트 리스너 설정
app.use( (request, response) => { 
    response.send('<h1>Hello express</h1>');

});

//서버를 실행
//app.listen(포트번호,)
app.listen(52273, () => {
    console.log("Server running at http://127.0.0.1:52273");
});