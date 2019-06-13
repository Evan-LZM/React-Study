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
      title:
        " Motivation: The Scientific Guide on How to Get and Stay Motivated",
      desc:
        "Motivation is a powerful, yet tricky beast. Sometimes it is really easy to get motivated, and you find yourself wrapped up in a whirlwind of excitement.",
      imgUrl:
        "https://images.yourstory.com/cs/wordpress/2016/08/174-motivation.png"
    },
    {
      id: 3,
      title:
        " Motivation: The Scientific Guide on How to Get and Stay Motivated",
      desc:
        "Motivation is a powerful, yet tricky beast. Sometimes it is really easy to get motivated, and you find yourself wrapped up in a whirlwind of excitement.",
      imgUrl:
        "https://images.yourstory.com/cs/wordpress/2016/08/174-motivation.png"
    },
    {
      id: 4,
      title:
        " Motivation: The Scientific Guide on How to Get and Stay Motivated",
      desc:
        "Motivation is a powerful, yet tricky beast. Sometimes it is really easy to get motivated, and you find yourself wrapped up in a whirlwind of excitement.",
      imgUrl:
        "https://images.yourstory.com/cs/wordpress/2016/08/174-motivation.png"
    }
  ]
});

export default (state = defaultstate, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
