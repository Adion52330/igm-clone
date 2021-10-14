import { USERS } from "./user";

export const POSTS = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1633655331363-c34828bcfa76?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    user: USERS[0].user,
    likes: 34685,
    caption:
      "Que lindo poder disfrutar de estos momentos que estamos viviendo! Gran triunfo!!! Gracias nuevamente por lo que me hacen sentir. Feliz es poco! Que no se corte :flag_ar::flag_ar: Nos vemos el jueves :muscle::muscle:",
    profile_picture: USERS[0].image,
    comments: [
      { user: "rinzhin_net", comment: "WOW" },
      { user: "murad_abdul_rahoof", comment: "meow" },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1633655331294-687588ddc8d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    user: USERS[2].user,
    likes: 34685,
    caption:
      "Photo by @gabrielegalimbertiphoto / A fishing boat sails among icebergs in Ilulissat Icefjord, on the west coast of Greenland.",
    profile_picture: USERS[2].image,
    comments: [
      { user: "rinzhin_net", comment: "WOW , This is an amazing picture man" },
      {
        user: "murad_abdul_rahoof",
        comment: "Great, I like to visit there.where is this place .",
      },
    ],
  },
];
