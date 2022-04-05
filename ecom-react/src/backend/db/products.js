import { v4 as uuid } from "uuid";

import atomicHabits from "../../images/atomic-habits.jpg"
import fiveAmClub from "../../images/5am-club.jpg"
import alchemist from "../../images/alchemist.jpg"
import doTheEpicShit from "../../images/do-the-epic-shit.jpg"
import ikigai from "../../images/ikigai.jpg"
import thinkAndGrowRich from "../../images/think-and-grow-rich.png"
import theHouseOfStrangeStories from "../../images/TheHouseOfStrangeStories.jpg"
import HorrorsOfTheNight from "../../images/HorrorsOfTheNight.jpg"
import mahabharata  from "../../images/mahabharata.webp"
import unfinished  from "../../images/Unfinished.webp"
import agniKiUdaan from "../../images/agniKiUdaan.webp"
import theFitnessCurrency from "../../images/theFitnessCurrency.webp"

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    src:atomicHabits,
    title: "Atomic Habits",
    author: "James Clear",
    price: "300",
    oldPrice:"600", 
    categoryName: "Self-help",
    rating : 4.5,
    details :"People say when you want to change your life, you need to set big goals. But they’re wrong.World-renowned habits expert James Clear has discovered a simpler system for transforming your life. He knows that lasting change comes from the compound effect of hundreds of small decisions – doing two push-ups a day, waking up five minutes early, or holding a single short phone call. He calls them atomic habits."

  },
  {
    _id: uuid(),
    src:fiveAmClub,
    title: "The 5 Am Club",
    author: "Robin Sharma",
    price: "550",
    oldPrice:"600",
    categoryName: "Self-help",
    rating : 4.1,
    details :"This is details of book"

  },
  {
    _id: uuid(),
    src:theHouseOfStrangeStories,
    title: "The House Of Strangers Stories",
    author: "Ruskin Bond",
    price: "890",
    oldPrice:"1000",
    categoryName: "Horror",
    rating :3,
    details :"This is details of book"
  },
  {
    _id: uuid(),
    src:alchemist,
    title: "The Alchemist",
    author: "Panlo Coelho",
    price: "170",
    oldPrice:"251",
    categoryName: "Novel",
    rating : 4,
    details :"This is details of book"

  },
  {
    _id: uuid(),
    src:doTheEpicShit,
    title: "DO EPIC SHIT",
    author: "Ankur Warikoo",
    price: "1190",
    oldPrice:"1300",
    categoryName: "Non-Fiction",
    rating : 3.7,
    details :"This is details of book"

  },
  {
    _id: uuid(),
    src:ikigai,
    title: "Ikigai",
    author: "Francesc Miralles and Hector Garcia",
    price: "750",
    oldPrice:"800",
    categoryName: "Self-help",
    rating : 4.6,
    details :"This is details of book"

  },
  {
    _id: uuid(),
    src:thinkAndGrowRich,
    title: "Think And Grow Rich",
    author: "Napolean Hill",
    price: "117",
    oldPrice:"200",
    categoryName: "Non-Fiction",
    rating : 4.5,
    details :"This is details of book"

  },
  {
    _id: uuid(),
    src:mahabharata,
    title: "Mahabharata",
    author: "Pai Anant",
    price: "1860",
    oldPrice:"2000",
    categoryName: "Literature",
    rating : 4.9,
    details :"Mahabharata (Set Of 3 Volumes), published by Amar Chitra Katha, is a comic book version of the famous Indian epic of the Mahabharata. It consists of three volumes, spanning a total of 1200-odd pages.The Mahabharata is considered to be the longest epic poem in the world. The creation of this ageless epic is traditionally attributed to the seer Vyasa. His disciple Vaishampayana narrated it in public for the first time. King Janamejaya and numerous learned sages were present at the recital. They had gathered for a 12-year-long sacred ritual called Yajna."

  },
  {
    _id: uuid(),
    src:unfinished,
    title: "Unfinished",
    author: "Jonas Priyanka Chopra",
    price: "350",
    oldPrice:"450",
    categoryName: "Literature",
    rating : 2.5,
    details :"The most awaited autobiography by Priyanka Chopra!'I have always felt that life is a solitary journey, that we are each on a train, riding through our hours, our days, our years. We get on alone, we leave alone, and the decisions we made as we travel on the train are our responsibility alone.'In this thoughtful and revealing memoir, readers will accompany one of the world's most recognizable women on her journey of self-discovery. A remarkable life story rooted in two different worlds, Unfinished offers insights into Priyanka Chopra Jonas's childhood in India; her formative teenage years in the United States; and her return to India, where against all odds as a newcomer to the pageant world, she won the national and international beauty competitions that launched her global acting career."

  },
  {
    _id: uuid(),
    src:theFitnessCurrency,
    title: "The Fitness Currency",
    author: "Utkarsh Rai",
    price: "1400",
    oldPrice:"1550",
    categoryName: "Health/Fitness",
    rating : 3.5,
    details :"This is details of book"

  },
  {
    _id: uuid(),
    src:agniKiUdaan,
    title: "Agni Ki Udaan",
    author: "A.P.J Kalam",
    price: "195",
    oldPrice:"245",
    categoryName: "Novel",
    rating : 4.5,
    details :"This is details of book"
  }
,
{
  _id: uuid(),
  src:HorrorsOfTheNight,
  title: "Horrors Of The Night",
  author: "Tome Colemon",
  price: "590",
  oldPrice:"650",
  categoryName: "Horror",
  rating : 1,
  details :"This is details of book"
}];