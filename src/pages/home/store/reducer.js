import { fromJS } from "immutable";

const defaultstate = fromJS({
  topicList: [
    {
      id: 1,
      title: "Habits",
      imgUrl: "https://i.ytimg.com/vi/dioBOEjnFUk/maxresdefault.jpg"
    },
    {
      id: 2,
      title: "Creativity",
      imgUrl:
        "http://www.intheblack.com/~/media/intheblack/allimages/leadership/2018/boy-glasses-colourful-brain-sketch.jpg"
    },
    {
      id: 3,
      title: "Better Sleep",
      imgUrl:
        "https://www.rd.com/wp-content/uploads/2016/05/01-things-better-sleep-woman-stretching-bed.jpg"
    },
    {
      id: 4,
      title: "Reading List",
      imgUrl:
        "https://media.npr.org/assets/img/2017/06/28/istock-506236357-5961b1f611e5136a7cd3fd5f74d97f4575f48c66-s800-c85.jpg"
    },
    {
      id: 5,
      title: "Productivity",
      imgUrl:
        "https://www.businessmagazinegainesville.com/wp-content/uploads/2018/03/The-10-Most-Useful-Apps-to-Excel-at-Productivity.jpg"
    },
    {
      id: 6,
      title: "Motivation",
      imgUrl:
        "http://blogs.eltiempo.com/wrong-way-corrigan/wp-content/uploads/sites/517/2019/04/Motivation_02.jpg"
    },
    {
      id: 7,
      title: "Constant Improvement",
      imgUrl:
        "https://www.duggarwellness.com/wp-content/uploads/Steady-improvement-741x492.jpg"
    }
  ],
  articleList: [
    {
      id: 1,
      title:
        " Motivation: The Scientific Guide on How to Get and Stay Motivated",
      desc:
        "Motivation is a powerful, yet tricky beast. Sometimes it is really easy to get motivated, and you find yourself wrapped up in a whirlwind of excitement.",
      imgUrl:
        "https://images.yourstory.com/cs/wordpress/2016/08/174-motivation.png"
    },
    {
      id: 2,
      title: "The Habits Guide: How to Build Good Habits and Break Bad Ones",
      desc:
        "Before we get into the guide, I want to recommend the most comprehensive guide on how to change your habits and get 1% better every day: My new book Atomic Habits. ",
      imgUrl:
        "https://assets.website-files.com/5a690960b80baa0001e05b0f/5c1922211bfb086be392295d_7%20Habits%20of%20Highly%20Effective%20Project%20Managers.png"
    },
    {
      id: 3,
      title:
        "The Science of Sleep: A Brief Guide on How to Sleep Better Every Night",
      desc:
        "If you want to learn how to sleep better, then you're in the right place. This guide will walk you through everything you need to know if you want to get better sleep. ",
      imgUrl:
        "http://cdn.shopify.com/s/files/1/2559/0242/articles/blog3_1024x1024.jpg?v=1529312734"
    },
    {
      id: 4,
      title: "The Best Books:Recommended Reading List",
      desc:
        "The page is a reading list sharing the best books to read in various categories based on many hours of reading and research. You’ll find more than 100 good books to read, organized by category.",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbf8pCZjFi54rL7W3-NXihaVKgRzB3mr0TR5Wxa4jhONYJPAxc"
    }
  ],
  advertisementList: [
    {
      id: 1,
      imgUrl:
        "//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },
    {
      id: 2,
      imgUrl:
        "//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
    {
      id: 3,
      imgUrl:
        "//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },
    {
      id: 4,
      imgUrl:
        "//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
    }
  ]
});

export default (state = defaultstate, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
