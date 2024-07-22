import React, { useEffect } from 'react';
import { MdArrowUpward } from "react-icons/md";
import image8 from './assets/Espresso.png'

const Articles = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollDiv = document.querySelector('.scroll');
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 400) {
        scrollDiv.style.display = 'flex';
      } else {
        scrollDiv.style.display = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
<div className="article-body">
  <div className="coffee-image flex w-full h-full justify-center mb-10">
    <img src={image8} alt="coffee image" className="w-[1150px] h-[500px] rounded-lg" />
  </div>
  <div className="title-body mx-[105px] mb-10">
    <h3 className="text-4xl font-bold text-gray-800">The Art and Science of Making the Perfect Espresso</h3>
    <div className="author flex mt-5">
      <p className="text-xl font-medium text-gray-800">Written by Fiddyhamma</p>
      <p className="day ml-5">Monday, June 17</p>
    </div>
    <div className="border-t border-gray-300 mt-5"></div>
  </div>
  <article className="mx-[105px]">
    <section className="my-5">
      <h4 className="text-2xl font-medium text-gray-800">Introduction</h4>
      <p>
        Espresso is more than just a type of coffee; it's a complex and flavorful drink that has captivated coffee enthusiasts around the world. Originating from Italy in the early 20th century, espresso has grown to become a cornerstone of coffee culture globally. This article delves into the intricacies of making a perfect espresso, covering everything from the selection of coffee beans to the final brew, and includes step-by-step instructions to guide you through the process.
      </p>
    </section>
    <section className="my-5">
      <h4 className="text-2xl font-medium text-gray-800">The Components of a Perfect Espresso</h4>
      <p className="text-xl font-medium text-gray-800 mt-5">Choosing the Right Coffee Beans</p>
      <p>
        The journey to a perfect espresso begins with selecting high-quality coffee beans. While any coffee bean can be used to make espresso, certain beans are better suited for the task due to their flavor profile and roasting level.
      </p>
      <ul className="list-disc list-inside mt-3 ml-5 flex flex-col w-full">
        <li className="w-full">Single-Origin vs. Blends: Single-origin beans come from a specific region and offer unique flavors characteristic of that area. Blends combine beans from different regions to create a balanced flavor. Both can be excellent for espresso, depending on your taste preference.</li>
        <li className="w-full">Roast Level: Espresso typically requires a medium to dark roast to achieve the desired boldness and complexity. Dark roasts tend to have deeper, richer flavors with lower acidity, making them ideal for espresso.</li>
        <li className="w-full">Freshness: Coffee beans should be fresh, ideally roasted within the past two weeks. Fresh beans retain more oils and aromas, contributing to a richer espresso.</li>
      </ul>
      <p className="text-xl font-medium text-gray-800 mt-5">Grinding the Beans</p>
      <p>
        The grind size of the coffee beans is crucial in making espresso. The grind should be fine but not too fine, resembling table salt in texture. An inconsistent grind can lead to an uneven extraction, resulting in a bitter or weak espresso.
      </p>
      <ul className="list-disc list-inside mt-3 ml-5 flex flex-col w-full">
        <li className="w-full">Burr Grinder vs. Blade Grinder: A burr grinder is preferred over a blade grinder because it produces a more uniform grind size. Burr grinders crush the beans between two abrasive surfaces, while blade grinders chop the beans, leading to inconsistencies.</li>
      </ul>
      <p className="text-xl font-medium text-gray-800 mt-5">The Espresso Machine</p>
      <p>
        Investing in a quality espresso machine is essential for producing a perfect shot. There are several types of espresso machines, each with its own advantages, ensure to use the one best suited for you.
      </p>
      <p className="text-xl font-medium text-gray-800 mt-5">Tamping the Coffee</p>
      <p>
        Tamping is the process of compressing the ground coffee in the portafilter to ensure an even extraction. Proper tamping is crucial as it affects the water flow through the coffee grounds.
      </p>
      <ul className="list-disc list-inside mt-3 ml-5 flex flex-col w-full ">
        <li className="w-full">Pressure: Apply about 30 pounds of pressure to the coffee grounds. Use a consistent and even pressure to avoid channeling, where water finds a path of least resistance, leading to uneven extraction.</li>
        <li className="w-full">Level Surface: Ensure the coffee bed is level after tamping. An uneven surface can result in uneven extraction and a poor-tasting espresso.</li>
      </ul>
      <p className="text-xl font-medium text-gray-800 mt-5">The Brewing Process</p>
      <p>
        Pre-infusion involves wetting the coffee grounds with a small amount of water before applying full pressure. This step helps to evenly saturate the coffee and start the extraction process smoothly.
      </p>
      <ul className="list-disc list-inside mt-3 ml-5 flex flex-col w-full">
        <li className="w-full">Duration: Typically lasts for about 5 to 10 seconds.</li>
        <li className="w-full">Pressure: Low pressure, around 1 to 2 bars.</li>
      </ul>
      <p className="text-xl font-medium text-gray-800 mt-5">Extraction</p>
      <p>
        The extraction phase is where the magic happens. Water is forced through the coffee grounds at high pressure, extracting flavors, oils, and aromas to create a rich, concentrated espresso.
      </p>
      <ul className="list-disc list-inside mt-3 ml-5 flex flex-col w-full">
        <li className="w-full">Pressure: 9 bars (130 psi) is the standard pressure for extracting espresso.</li>
        <li className="w-full">Temperature: The ideal water temperature is between 195°F to 205°F (90°C to 96°C).</li>
        <li className="w-full">Time: A typical shot of espresso should take about 25 to 30 seconds to extract.</li>
      </ul>
      <p className="text-xl font-medium text-gray-800 mt-5">The Perfect Shot</p>
      <p>
        A perfect shot of espresso consists of three layers:
      </p>
      <ul className="list-disc list-inside mt-3 ml-5 flex flex-col w-full">
        <li className="w-full">Crema: The golden, creamy layer on top that contains aromatic oils and gases.</li>
        <li className="w-full">Body: The middle layer, which is rich and full-bodied.</li>
        <li className="w-full">Heart: The dark bottom layer with the deepest flavors.</li>
      </ul>
    </section>
    <section className="my-5">
      <h4 className="text-2xl font-medium text-gray-800">Conclusion</h4>
      <p className="pt-5">
        Making the perfect espresso is both an art and a science. It requires high-quality ingredients, precise equipment, and a deep understanding of the brewing process. From selecting the right beans to mastering the tamping technique and achieving the perfect extraction, each step plays a crucial role in crafting a delicious and satisfying espresso. Whether you're a seasoned barista or a coffee enthusiast at home, the journey to perfecting your espresso skills is a rewarding and enjoyable experience. So, grab your coffee beans, fire up your espresso machine, and start brewing the perfect shot of espresso today.
      </p>
    </section>
  </article>
</div>
<div className="scroll w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center fixed right-2.5 bottom-28 z-50 shadow-md hidden" onClick={scrollToTop}>
  <MdArrowUpward />
</div>

    </>
    
  )
}

export default Articles
