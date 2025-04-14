const Footer = () => {
    return (
      <div className="bg-gray-800 text-white py-4 px-8 font-sans ">
      <main className="container mx-auto py-8 flex items-center gap-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Pauds</h2>
          <p>Pauds is a school that aims to educate all students.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-2">Address</h3>
              <p>Number 2831 Ranchview Dr, Richardson, California 92635, America Sent Country</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Phone Number</h3>
              <p>(270) 555-0443</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-gray-800 text-white py-4 px-8">
        <p className="text-center text-sm">
          Copy Right Pauds 2025, All Rights Reserved
        </p>
      </footer>
    </div>
    );
  };
  
  export default Footer;
  