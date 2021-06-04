# Ajax의 동작 원리

## Ajax의 구성 요소

- 웹 페이지의 표현을 위한 HTML과 CSS

- 데이터에 접근하거나 화면 구성을 동적으로 조작하기 위해 사용되는 <a href='http://localhost:8080/vuepress/Study_Ajax/DOM/DOM.html'>DOM 모델 </a>

- 데이터의 교환을 위한 JSON이나 XML

- 웹 서버와의 비동기식 통신을 위한 XMLHttpRequest 객체

- 위에서 언급한 모든 기술을 결합하여 사용자의 작업 흐름을 제어하는 데 사용되는 자바스크립트

## Ajax의 동작 원리

Ajax을 이용한 웹 프로그램은 <font style='color:red;'>**JavaScript**</font>를 통해 웹 서버와 통신한다.
<img src='https://user-images.githubusercontent.com/82923245/120745004-32bc3380-c537-11eb-8e39-8418ddd85c7b.png' />

- 서버와의 통신을 사용자 UI가 아닌 <font style='color:red;'>**JavaScript**</font>가 대신 하기때문에 웹 브라우저는 서버의 응답을 기다릴 필요 없이 다른 작업을 처리할 수 있다.
