import React from 'react'
import { MdNoteAdd } from "react-icons/md";
import image8 from './assets/Espresso.png'

const Articles = () => {
  return (
    <>
    <div className='article-body'>
    <div className='coffee-image'>
    <img src={image8} alt='coffee image' className='coffee'/>
    </div>
    <div className='title-body'>
    <h3 className='text-4xl font-bold text-black-500'>The Art and Science of Making the Perfect Espresso</h3>
    <div className='author'>
    <p className='text-1xl font-medium text-black-500'>Written by Fiddyhamma</p>
    <p className='day'>Monday, June 17</p>
    </div>
    <div style={{ borderTop: "0.5px solid #E8E7E7 ", marginTop: 20 }}></div>
    </div>
    <article>
    <section>
    <h4 className='text-2xl font-medium text-black-500'>Introduction</h4>
    <p>
    Espresso is more than just a type of coffee; it's a complex and flavorful drink that has captivated coffee enthusiasts around the world. Originating from Italy in the early 20th century, espresso has grown to become a cornerstone of coffee culture globally. . This article delves into the intricacies of making a perfect espresso, covering everything from the selection of coffee beans to the final brew, and includes step-by-step instructions to guide you through the process.
    </p>
    </section>

    <section>
    <h4 className='text-2xl font-medium text-black-500'>The Components of a Perfect Espresso</h4>
    <p className='top-paragraph'>
    <p className='text-1xl font-medium text-black-500'> Choosing the Right Coffee Beans </p>
    The journey to a perfect espresso begins with selecting high-quality coffee beans. While any coffee bean can be used to make espresso, certain beans are better suited for the task due to their flavor profile and roasting level.
    <div className='article-list'>
    <li className='article-listed'>Single-Origin vs. Blends: Single-origin beans come from a specific region and offer unique flavors characteristic of that area. Blends combine beans from different regions to create a balanced flavor. Both can be excellent for espresso, depending on your taste preference.
    </li>
    <li className='article-listed'>Roast Level: Espresso typically requires a medium to dark roast to achieve the desired boldness and complexity. Dark roasts tend to have deeper, richer flavors with lower acidity, making them ideal for espresso.
    </li>
    <li className='article-listed'>Freshness: Coffee beans should be fresh, ideally roasted within the past two weeks. Fresh beans retain more oils and aromas, contributing to a richer espresso.
    </li>
    </div>

   <p className='text-1xl font-medium text-black-500'> Grinding the Beans </p>
    The grind size of the coffee beans is crucial in making espresso. The grind should be fine but not too fine, resembling table salt in texture. An inconsistent grind can lead to an uneven extraction, resulting in a bitter or weak espresso.
    <div article-list >
      <li className='article-listed'>
      Burr Grinder vs. Blade Grinder: A burr grinder is preferred over a blade grinder because it produces a more uniform grind size. Burr grinders crush the beans between two abrasive surfaces, while blade grinders chop the beans, leading to inconsistencies.
      </li>
    </div>
    
   <p className='text-1xl font-medium text-black-500'> The Espresso Machine </p>
    Investing in a quality espresso machine is essential for producing a perfect shot. There are several types of espresso machines, each with its own advantages, ensure to use the one best suited for you.

    <p className='text-1xl font-medium text-black-500'>Tamping the Coffee</p>
    Tamping is the process of compressing the ground coffee in the portafilter to ensure an even extraction. Proper tamping is crucial as it affects the water flow through the coffee grounds.
    <div article-list>
      <li className='article-listed' >
      Pressure: Apply about 30 pounds of pressure to the coffee grounds. Use a consistent and even pressure to avoid channeling, where water finds a path of least resistance, leading to uneven extraction.
      </li>
      <li className='article-listed'>
      Level Surface: Ensure the coffee bed is level after tamping. An uneven surface can result in uneven extraction and a poor-tasting espresso.
      </li>
    </div>

    <p className='text-1xl font-medium text-black-500'>The Brewing Process</p>
    Pre-infusion involves wetting the coffee grounds with a small amount of water before applying full pressure. This step helps to evenly saturate the coffee and start the extraction process smoothly.
    <div article-list>
    <li className='article-listed'>Duration: Typically lasts for about 5 to 10 seconds.</li>
    <li className='article-listed'>Pressure: Low pressure, around 1 to 2 bars.</li>
    </div>
    <p className='text-1xl font-medium text-black-500'>Extraction</p>
    The extraction phase is where the magic happens. Water is forced through the coffee grounds at high pressure, extracting flavors, oils, and aromas to create a rich, concentrated espresso.
    <div article-list >
    <li className='article-listed'>Pressure: 9 bars (130 psi) is the standard pressure for extracting espresso.</li>
    <li className='article-listed'>Temperature: The ideal water temperature is between 195°F to 205°F (90°C to 96°C).</li>
    <li className='article-listed'> Time: A typical shot of espresso should take about 25 to 30 seconds to extract.</li>
    </div>

    <p className='text-1xl font-medium text-black-500'>The Perfect Shot</p>
    A perfect shot of espresso consists of three layers:
    <div article-list>
    <li className='article-listed'>Crema: The golden, creamy layer on top that contains aromatic oils and gases.</li>
    <li className='article-listed'>Body: The middle layer, which is rich and full-bodied.</li>
    <li className='article-listed'>Heart: The dark bottom layer with the deepest flavors.</li>
    </div>
    </p>
    </section>

<section>
<h4 className='text-2xl font-medium text-black-500'>Conclusion</h4>
<p className='top-paragraph'>
   Making the perfect espresso is both an art and a science. It requires high-quality ingredients, precise equipment, and a deep understanding of the brewing process. From selecting the right beans to mastering the tamping technique and achieving the perfect extraction, each step plays a crucial role in crafting a delicious and satisfying espresso. Whether you're a seasoned barista or a coffee enthusiast at home, the journey to perfecting your espresso skills is a rewarding and enjoyable experience. So, grab your coffee beans, fire up your espresso machine, and start brewing the perfect shot of espresso today.
  </p>
  </section>
    </article>
    </div>
    </>
  )
}

export default Articles
