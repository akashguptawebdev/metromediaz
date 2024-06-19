import React from "react";

const Footer = () => {
  return (
    <section className="bg-gray-800 text-gray-300 ">
      <footer class="Container">
        <div class=" mx-auto flex  justify-between ">
          <div class="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
            <h2 class="text-lg font-semibold mb-4">Follow Us</h2>
            <div class="flex space-x-4 ">
              <a
                href="https://www.instagram.com/metromediaz.in?igsh=MWxuMHVjeHp1Y2ZkNg=="
                class="text-gray-300 hover:text-white transition duration-300"
              >
                <i class="fa-brands fa-instagram  text-3xl"></i>
              </a>
              <a
                href="https://m.facebook.com/groups/643688573052777/?ref=share&mibextid=NSMWBT "
                class="text-gray-300 hover:text-white transition duration-300"
              >
                <i class="fa-brands fa-facebook text-3xl"></i>
              </a>
              <a
                href="https://wa.me/qr/U56RLAO5RCR4E1"
                class="text-gray-300 hover:text-white transition duration-300"
              >
                <i class="fa-brands fa-whatsapp text-3xl"></i>
              </a>
            </div>
          </div>

          <div class="w-full md:w-1/2 lg:w-1/4">
            <h2 class="text-lg font-semibold mb-4">Contact Us</h2>

            <div className="list-none">
              <ul>
                <li>
                  <i class="fa-solid fa-phone"></i> 9142245171
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-[14px] md:text-lg text-center md:text-right mt-5"><i class="fa-solid fa-envelope"></i> metromediaz.in@gmail.com</p>
      </footer>
    </section>
  );
};

export default Footer;
