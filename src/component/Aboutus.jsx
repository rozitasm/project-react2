function Aboutus(){
    return(
        <>
        

    <section className="grid sm:grid-cols-2 py-8 my-16  ">
    <div className="flex flex-col py-2 mx-4 ms-6 pt-20 pe-6">
  
  <h1 className="text-4xl font-bold mb-4 ">About Us</h1>


  <h2 className="text-2xl font-semibold mb-8 ">
    Elevating everyday experiences through quality, design, and trust.
  </h2>

 
  <p className="text-lg leading-relaxed mb-6 ">
    Our store was founded with a simple vision: to create a place where customers can discover
    carefully selected products that blend style, durability, and functionality. We believe that 
    great products do more than just meet expectations—they enhance the way you live. 
    Every item in our collection is chosen with attention to detail, ensuring that it brings value, 
    comfort, and confidence to your daily routine. Over the years, we have built strong relationships 
    with trusted suppliers and manufacturers, allowing us to offer items that reflect both quality 
    craftsmanship and modern aesthetics.
  </p>

{/*  
  <p className="text-base text-gray-600 leading-relaxed">
    Our commitment goes beyond selling products. We strive to create a shopping experience 
    that feels personal, transparent, and reliable. From customer support to fast delivery, 
    every part of our process is designed with your satisfaction in mind. Thank you for choosing 
    us — we look forward to being a part of your journey.
  </p> */}
</div>
    <div class="columns-2 gap-4 me-2">
      <img class="w-full aspect-[2/2] my-4 object-cover rounded-xl" src="/img/watch1.jpg"/>
      <img class="w-full aspect-[3/2] object-cover rounded-xl" src="/img/jw3.jpg"/>
      <img class="w-full aspect-[3/2] my-4 object-cover rounded-xl" src="/img/cl.jpg"/>
      <img class="w-full aspect-[2/2] object-cover rounded-xl" src="/img/loc3.jpg"/>
    </div>
     
    </section>
        
        </>
    )
}

export default Aboutus