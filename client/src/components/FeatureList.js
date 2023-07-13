import React from 'react'
import electronics from '../images/electronics.jpg'
import clothing from '../images/clothing.jpg'
import household from '../images/household.jpg'
import arts from '../images/arts.jpg'

const Feature = ({title, image}) => {
  return (
    <div className="border rounded-lg cursor-pointer">
      <div className='p-4 m-2 flex flex-col space-y-2'>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <img src={image} alt={title} height={300} width={300}/>
        <p>Shop now</p>
      </div>
    </div>
  )
}

const FeatureList = () => {

  const imageList = [
    {
      title: "Electronics",
      image: electronics
    },
    {
      title: "Clothing",
      image: clothing
    },
    {
      title: "Household",
      image: household
    },
    {
      title: "Art & Craft",
      image: arts
    }
  ]

  return (
    <div className='flex justify-center space-x-5 mb-5'>
      { imageList.map((item, index) => {
          return (
            <Feature key={index} title={item.title} image={item.image} />
          )
        })
      }
    </div>
  )
}

export default FeatureList