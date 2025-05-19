import FakeImage from '@/public/next.svg'
import Image from 'next/image';

const  Portfolio =() => {
  return (
    <div>
      This is portfolio page
      <Image src={FakeImage} alt='Next text'
      width={300}
      />
      <Image src='https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
       alt='Image Address'
       width={400}
       height={400}
       />
     
    </div>
  )
}
export default Portfolio;
// generate metadata

export const  generateMetadata = () => {
  return {
    title: "This is a Portfolio page",
    description:"All about of Portfolio"
  }
}

