import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
const CardArray = [

    {
        image:service1,
        event: 'от 2500₽/м²',
        text:'Планировочное решение ',
        id:1

    },
    {
        image:service2,
        event: 'от 3000₽/м²',
        text:'Дизайн-проект ',
        id:2
    },
    {
        image:service3,
        event: 'от 30 000₽/мес',
        text:'Авторский надзор' ,
        id:3
    },
    {
        image:service4,
        event: '5% от стоимости',
        text:'Комплектация ' ,
        id:4
    }


]


function ServicesSection(){
 //вывожу из массива по две карточки на одной строке
    return(
        <div>
            <div>
            {CardArray.filter((card) => card.id < 3).map((CardArrays) => (
                    <ServiceCard
                        image={CardArrays.image}
                        event={CardArrays.event}
                        text={CardArrays.text}
                    />
                ))}
              
            </div>
            <div>
            {CardArray.filter((card) => card.id > 2).map((CardArrays) => (
                    <ServiceCard
                        image={CardArrays.image}
                        event={CardArrays.event}
                        text={CardArrays.text}
                    />
                ))}
               
            </div>
        </div>

  
    );
  }
  
  export default ServicesSection;