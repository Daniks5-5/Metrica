import React from "react";
import Heading from "../Heading/Heading";
import "./ReviewSection.css"

function ReviewSection() {
    return (
        <div className="Cards"> 
               <Heading 
            level='h2'
            text='ОТЗЫВЫ'
            
            />
             <div className="allCards">
         
         <div className="reviewCard">
       <div className="review-title">
           <Heading
               level='h1'
               text='Ксения, проект 65 кв.м.'
           />
       </div>
       <div className="review-text">
           <p> Хочу искренне поблагодарить Вас за работу, проделанную на высоком уровне! Нам с мужем было очень приятно с Вами работать! Спасибо за Ваше умение правильно слышать пожелания своих клиентов и выполнять работу, которая превосходит все ожидания! Мы даже не надеялись, что на 34 кв.м. кто-то сможет нам грамотно разместить все, что мы хотим и даже больше!</p>
           <p>Вам удалось это просто превосходно! Нам лишь осталось воплотить красоту, которую Вы нам создали в жизнь и поделиться с Вами результатом!
           </p>
       </div>
   </div>
       
       
   <div className="reviewCard">
       <div className="review-title">
           <Heading
               level='h1'
               text='Регина, проект 89 кв.м.'
           />
       </div>
       <div className="review-text">
           <p> Спасибо большое за такой классный проект! Все стильно, круто, продумано! Очень приятно было с вами работать! Спасибо, что терпели наши «хочу это, хочу то» в поисках идеального для нас ремонта. Здорово, что мы нашли такого основательного, ответственного и внимательного к деталям дизайнера!</p>
           <p>Хочется скорее реализовать проект и наслаждаться современной, функциональной и красивой квартирой! Будем рекомендовать Вас всем друзьям и знакомым! </p>
       </div>
   </div>

   <div className="reviewCard">
       <div className="review-title">
           <Heading
               level='h1'
               text='Яна, проект 120 кв.м.'
           />
       </div>
       <div className="review-text review__text">
           <p> Хотелось бы сказать большое спасибо за проделанную работу! В задачу Марины входила разработка дизайн-проекта в минимальные сроки, и мне, конечно, не хотелось при этом потерять качество выполнения работы. Но волнения были напрасны: все вопросы решались оперативно, всегда предлагалось несколько вариантов решения, а также предоставлялись комментарии, какой способ решения будет более подходящим.</p>
           <p> В итоге проект был сдан в оговоренный срок, и мне просто не терпится приступить к его реализации! Проект получился очень стильным и современным! Буду рекомендовать Вас тем, кому еще предстоит это непростое дело - ремонт!</p>
       </div>
   </div>
        </div>
       
  

        </div>
       
    )
}

export default ReviewSection;