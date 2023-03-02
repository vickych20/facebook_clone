const user = [
  {
    id: 1,
    profilepicture:
      "https://media.gettyimages.com/id/1327685551/photo/allen-and-company-annual-meeting-brings-business-executives-media-moguls-and-politicians-to.jpg?s=612x612&w=gi&k=20&c=7Z3ZloL4oIGJpEoSs6feJWiWz83vgh96xb_Nt-yhLIM=",
    username: "Neena",
    desc: "Love For All, Hatred For None.",
    photo:
      "https://media.gettyimages.com/id/1327685551/photo/allen-and-company-annual-meeting-brings-business-executives-media-moguls-and-politicians-to.jpg?s=612x612&w=gi&k=20&c=7Z3ZloL4oIGJpEoSs6feJWiWz83vgh96xb_Nt-yhLIM=",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    profilepicture:
      "https://media.gettyimages.com/id/1185337763/photo/2020-breakthrough-prize-red-carpet.jpg?s=612x612&w=gi&k=20&c=iY46_iNSMftsjkmLjasvHKJS9rAind7Z05FmipOZKC4=",
    username: "Ravish",
    photo:
      "https://media.gettyimages.com/id/1185337763/photo/2020-breakthrough-prize-red-carpet.jpg?s=612x612&w=gi&k=20&c=iY46_iNSMftsjkmLjasvHKJS9rAind7Z05FmipOZKC4=",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    profilepicture:
      "https://media.gettyimages.com/id/1314493374/photo/confident-mature-man-against-white-background.jpg?s=612x612&w=gi&k=20&c=KwnPz8jWw5EMxvOE7C4PXrXNFLxWN8ixz8tP0W_bqFM=",
    username: "Arav",
    desc: "Every moment is a fresh beginning.",
    photo:
      "https://media.gettyimages.com/id/1314493374/photo/confident-mature-man-against-white-background.jpg?s=612x612&w=gi&k=20&c=KwnPz8jWw5EMxvOE7C4PXrXNFLxWN8ixz8tP0W_bqFM=",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    profilepicture:
      "https://media.gettyimages.com/id/1174212459/photo/mid-adult-male-school-counselor-stands-in-lobby.jpg?s=612x612&w=gi&k=20&c=QyDuBMofEPPdpTymIJM3rBhM10PyHyOu5wUrDHaKErs=",
    username: "Rakesh",
    photo:
      "https://media.gettyimages.com/id/1174212459/photo/mid-adult-male-school-counselor-stands-in-lobby.jpg?s=612x612&w=gi&k=20&c=QyDuBMofEPPdpTymIJM3rBhM10PyHyOu5wUrDHaKErs=",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    profilepicture: "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
    username: "Shivansh",
    photo: "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    profilepicture:
      "https://media.istockphoto.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.jpg?s=612x612&w=0&k=20&c=2hQ4Sm9Puyf1otnVwcyvnY0fk4af-XxHyGqq9ozPpgE=",
    username: "Vihaan",
    photo:
      "https://media.istockphoto.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.jpg?s=612x612&w=0&k=20&c=2hQ4Sm9Puyf1otnVwcyvnY0fk4af-XxHyGqq9ozPpgE=",
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    profilepicture:
      "https://images.indianexpress.com/2023/01/Virat-Kohli-and-Anushka-Sharma.jpg",
    username: "Vihaan",
    desc: "Never regret anything that made you smile.",
    photo:
      "https://images.indianexpress.com/2023/01/Virat-Kohli-and-Anushka-Sharma.jpg",
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    profilepicture: "https://wallpapercave.com/wp/xt2DuKK.jpg",
    username: "Anika",
    photo: "https://wallpapercave.com/wp/xt2DuKK.jpg",
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    profilepicture:
      "https://cdn.w600.comps.canstockphoto.com/handsome-male-model-with-arms-crossed-picture_csp1170681.jpg",
    username: "Aahna",
    desc: "Change the world by being yourself.",
    photo:
      "https://cdn.w600.comps.canstockphoto.com/handsome-male-model-with-arms-crossed-picture_csp1170681.jpg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    profilepicture:
      "https://p4.wallpaperbetter.com/wallpaper/601/305/165/brad-pitt-actor-man-smile-celebrity-hollywood-wallpaper-preview.jpg",
    username: "kiaan",
    desc: "Change the world by being yourself.",
    photo:
      "https://cdn.w600.comps.canstockphoto.com/handsome-male-model-with-arms-crossed-picture_csp1170681.jpg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 1,
    profilepicture:
      "https://thelogicalindian.com/h-upload/2021/12/11/208402-untitled-design-6.jpg",
    username: "Neena",
    desc: "Love For All, Hatred For None.",
    photo:
      "https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    profilepicture:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    username: "Ravish",
    photo:
      "https://thelogicalindian.com/h-upload/2021/12/11/208402-untitled-design-6.jpg",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    profilepicture:
      "https://media.gettyimages.com/id/1314493374/photo/confident-mature-man-against-white-background.jpg?s=612x612&w=gi&k=20&c=KwnPz8jWw5EMxvOE7C4PXrXNFLxWN8ixz8tP0W_bqFM=",
    username: "Arav",
    desc: "Every moment is a fresh beginning.",
    photo:
      "https://media.gettyimages.com/id/1314493374/photo/confident-mature-man-against-white-background.jpg?s=612x612&w=gi&k=20&c=KwnPz8jWw5EMxvOE7C4PXrXNFLxWN8ixz8tP0W_bqFM=",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    profilepicture:
      "https://media.gettyimages.com/id/1174212459/photo/mid-adult-male-school-counselor-stands-in-lobby.jpg?s=612x612&w=gi&k=20&c=QyDuBMofEPPdpTymIJM3rBhM10PyHyOu5wUrDHaKErs=",
    username: "Rakesh",
    photo:
      "https://media.gettyimages.com/id/1174212459/photo/mid-adult-male-school-counselor-stands-in-lobby.jpg?s=612x612&w=gi&k=20&c=QyDuBMofEPPdpTymIJM3rBhM10PyHyOu5wUrDHaKErs=",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    profilepicture:
      "https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg",
    username: "Shivansh",
    photo:
      "https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    profilepicture:
      "https://media.istockphoto.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.jpg?s=612x612&w=0&k=20&c=2hQ4Sm9Puyf1otnVwcyvnY0fk4af-XxHyGqq9ozPpgE=",
    username: "Vihaan",
    photo:
      "https://media.istockphoto.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.jpg?s=612x612&w=0&k=20&c=2hQ4Sm9Puyf1otnVwcyvnY0fk4af-XxHyGqq9ozPpgE=",
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    profilepicture:
      "https://media.gettyimages.com/id/1179420343/photo/smiling-man-outdoors-in-the-city.jpg?s=612x612&w=gi&k=20&c=n663L5A4XlwcUvNpX_eu4ur1sMmrD6dt_c1mbWjrLXk=",
    username: "Vihaan",
    desc: "Never regret anything that made you smile.",
    photo:
      "https://media.gettyimages.com/id/1179420343/photo/smiling-man-outdoors-in-the-city.jpg?s=612x612&w=gi&k=20&c=n663L5A4XlwcUvNpX_eu4ur1sMmrD6dt_c1mbWjrLXk=",
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    profilepicture:
      "https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=",
    username: "Anika",
    photo:
      "https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=",
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    profilepicture:
      "https://cdn.w600.comps.canstockphoto.com/handsome-male-model-with-arms-crossed-picture_csp1170681.jpg",
    username: "Aahna",
    desc: "Change the world by being yourself.",
    photo:
      "https://cdn.w600.comps.canstockphoto.com/handsome-male-model-with-arms-crossed-picture_csp1170681.jpg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    profilepicture:
      "https://cdn2.momjunction.com/wp-content/uploads/2021/02/What-Is-A-Sigma-Male-And-Their-Common-Personality-Trait-910x1024.jpg",
    username: "kiaan",
  },
];
export default user;
