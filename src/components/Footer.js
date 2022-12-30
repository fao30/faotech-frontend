import React from "react";

const Footer = () => {
  return (
    <div class="bg-base-300 text-base-content">
      <footer class="footer mx-auto max-w-6xl p-12 flex flex-wrap justify-between">
        <div>
          <div class="font-title inline-flex text-3xl">
            <span class=" font-extrabold">Fao</span> <span>Tech</span>
          </div>
          <p>© 2023</p>
          <p>All Right Reserved.</p>
        </div>
        <div>
          <a href class="link link-hover">
            Features
          </a>
          <a href class="link link-hover">
            Pricing
          </a>
          <a href class="link link-hover">
            Resources
          </a>
          <a href class="link link-hover">
            Contact
          </a>
        </div>
        <div>
          <a href class="link link-hover">
            Bima Citra 16, No. 2
          </a>
          <a href class="link link-hover">
            Bekasi,
          </a>
          <a href="mailto:info@faotech.co" class="link link-hover">
            info@faotech.co
          </a>
          <a href class="link link-hover">
            123-456-7890
          </a>
        </div>
        <div>
          <a>
            We're looking for talented,
            <br />
            passionate folks to join our team.
          </a>
          <button className="btn btn-success mt-2 normal-case">
            Jobs at FaoTech
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
