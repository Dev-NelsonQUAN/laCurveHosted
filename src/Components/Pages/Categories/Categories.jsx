import React from 'react'
import Header from '../../Header/Header'
import './Categories.css'
import CardCategories from '../CardCategories/CardCategories'
import Datas from '../../dB/data'
import AllDatas from '../../dB/allDatas.json'


const Categories = () => {
 const TheDatas = Object.values(AllDatas)
 console.log(TheDatas)

  // const Datas = [
  //   {
  //     id: 1,
  //     category: "Intercontinental Dishes",
  //     img: '../../../../src/assets/sharpMeal.jpeg'
  //   },
  //   {
  //     id: 2,
  //     category: 'Local Dishes',
  //     img: '../../../../src/assets/sharpMeal2.jpeg'
  //   },
  //   {
  //     id: 3,
  //     category: 'Snacks',
  //     img: '../../../../src/assets/sharpMeal3.jpeg'
  //   },
  //   {
  //     id: 4,
  //     category: 'Fries',
  //     img: '../../../../src/assets/thePlaceMeal.jpeg'
  //   },
  //   {
  //     id: 5,
  //     category: 'Soft Drinks',
  //     img: '../../../../src/assets/sharpMeal2.jpeg'
  //   },
  //   {
  //     id: 6,
  //     category: 'Bevearages',
  //     img: '../../../../src/assets/sharpMeal.jpeg'
  //   }
  // ]

 

  // const Datas = [1,2,3]
  return (
    <div className='Categories'>
        {/* <Header/> */}

        {/* <div className='CategoriesInner'> */}
            <div className='CategoriesCard'>
              {
                TheDatas.map((e, id) => {
                return <CardCategories key={id} e={e}/>
                })
              }
            </div>
        {/* </div> */}
    </div>
  )
}

export default Categories