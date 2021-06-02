// config.js
module.exports = {
    title: 'vuepress-stater', // 사이트 타이틀
    description: 'vuepress로 만든 문서입니다.',
    themeConfig: {
      logo: 'https://user-images.githubusercontent.com/82923245/120453262-d984c080-c3cd-11eb-8290-1192553c9684.jpg', // 로고 이미지
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Reposipory', link:'https://github.com/LEEKEUNSANG'}
      ],
      sidebar: 'auto' // h1~h6 같은 heading tag를 기준으로 sidebar를 만들어줌
    }
  }