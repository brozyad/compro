import Layout from '../components/Layout';
import { FC } from 'react';

const Services: FC = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-8 p-6 mb-5 bg-white">
        <h1 className="text-8xl font-extrabold">Services</h1>

        <section className="mt-8">
          <h2 className="text-2xl font-bold hover:scale-95 duration-500">Logo</h2>
          <p className="mt-4">A logo is a visual identity for an entity that has certain specific criteria, such as shape, philosophy, and color. we help you create a logo that best represents your brand.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold hover:scale-95 duration-500">Design Book & Magazine</h2>
          <p className="mt-4">Books/magazines as a publication work that has its own charm from its physical form. Books have a format that can attract people’s attention to read them. We create well-designed books or magazines that engage readers and enhance the overall reading experience.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold hover:scale-95 duration-500">Campaign</h2>
          <p className="mt-4">We prioritize creating effective strategies that align your vision with your audience in a genuine, yet commercially viable way. A marketing campaign is a series of coordinated activities by a company or organization to promote products or services to the target audience. A marketing campaign aims to increase brand awareness, generate leads, and drive sales.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold hover:scale-95 duration-500">Merchandise</h2>
          <p className="mt-4">Merchandise refers to goods or products that are bought and sold in trade or commerce. It encompasses a wide range of items that can be physical or digital, and it is typically associated with retail businesses. Merchandise can include anything from clothing, electronics, and food items to digital products like software and e-books. The term can also refer to promotional items associated with brands, events, or celebrities, such as branded t-shirts, posters, or other memorabilia.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold hover:scale-95 duration-500">Website Design</h2>
          <p className="mt-4">Once the project is started, we start with designing your site. We do this by carefully considering imagery and fonts, we want your new website to look amazing, but we also need to consider how big an impact it will have. We create layouts that are easy to scan and visually appealing. Intuitive and easy-to-use navigation system. ensuring that visitors can find the information they need quickly and easily.</p>
        </section>

        <section className="mt-8 ">
          <h2 className="text-2xl font-bold hover:scale-95 duration-500">Website Development</h2>
          <p className="mt-4">When the design is signed, we build your website to the highest standards. Clean code is important to ensure your website loads as fast as possible to reduce stress on the server. We ensure websites are optimized for all devices, including desktops, tablets and smartphones to create a smooth user experience across all devices.</p>
        </section>


      </div>
    </Layout>
  );
};

export default Services;
