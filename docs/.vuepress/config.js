// config.js
module.exports = {
    title: '숨쉬고 눈깜빡이고 침삼켜', // 사이트 타이틀
    description: 'vuepress로 만든 문서입니다.',
    base: '/vuepress/',
    dest: 'build',
    themeConfig: {
      logo: 'https://user-images.githubusercontent.com/82923245/120453262-d984c080-c3cd-11eb-8290-1192553c9684.jpg', // 로고 이미지
      nav: [
        { text: 'Reposipory', link:'https://github.com/LEEKEUNSANG/'},
      ],
      sidebar:  [
        {title:'Home', path:'/'},
        {title:'Study_Ajax', children: [
          '/Study_Ajax/ajax_info/ajax_info', 
          '/Study_Ajax/ajax_mechanism/ajax_mechanism',
          '/Study_Ajax/DOM/DOM'
        ]},
      ],
  }
  };