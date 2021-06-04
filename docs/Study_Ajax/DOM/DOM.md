# DOM(Document Object Model)

## DOM 이란?

- 문서 객체 모델(Document Object Model 이하 DOM)은 HTML 문서나 XML문서의 프로그래밍 인터페이스이다.
- 동일한 문서를 다른 형태로 표현하고, 저장하고, 조작하는 방법을 제공한다.
- DOM은 문서 내의 모든 요소를 구조화된 표현으로 제공하며 프로그래밍 언어가 각각의 요소에 접근하는 방법을 제공한다.
- 웹 페이지의 객체 지향 표현이며, JavaScript와 같은 스크립팅 언어를 이용해 DOM을 수정할 수 있다.
  ::: tip 요약
  **문서 구조, 스타일, 내용 들을 변경할 수 있게 길을 만들어준다!!!**
  :::

## DOM 요소의 선택

::: details HTML 요소를 선택하는 방법

- HTML 태그 이름(tag name)을 이용한 선택
- 아이디(id)를 이용한 선택
- 클래스(class)를 이용한 선택
- name 속성(attribute)을 이용한 선택
- CSS 선택자(selector)를 이용한 선택
- HTML 객체 집합(object collection)을 이용한 선택
  :::

### HTML 태그 이름(tag name)을 이용한 선택 예제

getElementsByTagName()

```js
// 태그가 <td>인 모든 요소를 선택.
var selectItem = document.getElementsByTagName("td");
// 선택된 모든 요소의 텍스트 색상을 "red"로 변경
for (var i = 0; i < selectItem.length; i++) {
  selectItem.item(i).style.color = "red";
}
```

:::details item()
해당 HTML 객체 집합에서 전달받은 인덱스에 해당하는 요소를 반환해줌
:::

### 아이디(id)를 이용한 선택 예제

getElementsById()

```js
// 아이디가 "product"인 하나의 요소를 선택
var selectItem = document.getElementsById("product");
// 선택된 요소의 텍스트 색상을 "blue"로 변경
selectItem.style.color = "blue";
```

::: danger 주의
JavaScript에서 id를 선택은 해당 아이디를 가지고있는 요소중 첫 번째 요소 하나만을 선택한다. \
= 여러 요소를 선택하고 싶을 때는 id 선택을 피해라!!!
:::

### 클래스(class)를 이용한 선택 예제

getElementsByClassName()

```js
// 클래스명이 "selectMainProduct"인 모든 요소를 선택.
var selectItem = document.getElementsByClassName("selectMainProduct");
// 선택된 요소의 텍스트 색상을 "aqua"로 변경.
for (var i = 0; i < selectItem.length; i++) {
  selectItem.item(i).style.color = "aqua";
}
```

### name 속성(attribute)을 이용한 선택 예제

getElementsByName()

```js
// name 속성값이 "product_cd"인 모든 요소를 선택
var selectItem = document.getElementsByName("product_cd");
// 선택된 요소의 텍스트 색상을 "gray"로 변경.
for (var i = 0; i < selectItem.length; i++) {
  selectItem.item(i).style.color = "gray";
}
```

### CSS 선택자(selector)를 이용한 선택 예제

querySelectorAll()

```js
// 클래스가 "selectMainProduct"인 요수 중에서 <td> 요소만을 선택
var selectItem = document.querySelectorAll("td.selectMainProduct");
// 선택된 모든 요소의 텍스트 색상을 변경함.
for (var i = 0; i < selectItem.length; i++) {
  selectItem.item(i).style.color = "green";
}
```

### HTML 객체 집합(object collection)을 이용한 선택 예제

```js
// <title> 요소를 선택함.
var title = document.title;
document.write(title);
```

## DOM 요소의 내용 변경

<font style='color:red;'>**innerHTML**</font> 프로퍼티를 이용하여 HTML 요소의 내용을 손쉽게 변경할 수 있다.

```js
var exText = document.getElementById("text");
exText.innerHTML = "짜잔! 내용이 바뀌었어요!";
```
