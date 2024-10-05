

const Footer = () => {
  return (
    <div className='w-[100%] mx-auto  '>
        <div className=' flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 ml-4 mr-4 text-base'>
          <div className=" ">
            <img src="https://img.freepik.com/premium-vector/colorful-bird-gradient-logotype-vector-illustration_1253202-57495.jpg?semt=ais_hybrid" className=' h-24 ml-12 w-[max(80px)]' alt="" />
            <p className='w-full md:w-2/3 text-gray-600 '>
                We are a team of professionals who are dedicated to providing the best services to our customers. We are here to help you find the best businesses in your area.
            </p>
          </div>
          <div>
            <p className='text-xl font-medium mb-5 mt-5 '>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Support</li>
                <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className='text-xl font-medium mb-5 mt-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91- 987654321</li>
                <li>contact@gmail.com</li>
            </ul>
          </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Ecom - All Rights Reserved. </p>
        </div>
    </div>
  )
}

export default Footer