<script setup>
import navigation from '@/components/navigation.vue'
import footerr from '@/components/footerr.vue'
</script>

<template>
  <section class="index">
    <navigation />
    <section class="se-hero">
      <div class="hero-main">
        <div class="hero-heading">
          <p class="hero-sub-heading-green">Shaping The Future</p>
          <h1 class="hero-main-heading">
            Empowering the Future Through<br />
            Clean Energy <span> Innovation</span>
          </h1>
          <p class="hero-sub-heading-normal">One Sustainable Solution At A Time.</p>
        </div>

        <div class="hero-rating">
          <div class="hero-rating-wrapper">
            <h3>4.9</h3>

            <div class="hero-rating-stars">
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
            </div>
            <p>UNHCR</p>
          </div>
          <div class="hero-rating-wrapper">
            <h3>4.9</h3>
            <div class="hero-rating-stars">
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
            </div>
            <p>ENDEV</p>
          </div>
          <div class="hero-rating-wrapper">
            <h3>4.9</h3>
            <div class="hero-rating-stars">
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
              <img src="../assets/icons/star-fill.svg" alt="" class="hero-stars" />
            </div>
            <p>EDCL</p>
          </div>
        </div>
      </div>
      <div class="hero-img-wrppr">
        <img src="../assets/photography/hero-img.png" alt="" class="hero-img" />
      </div>
    </section>
    <section class="se-about">
      <div class="about-wrapper">
        <h1 class="about-heading">OAK Investments Limited</h1>
        <p class="about-par">
          A Rwandan service provider committed to increasing access to cleaner, more sustainable
          energy solutions for cooking and lighting and promoting environmental conservation with
          affordability across the region.
        </p>
      </div>

      <div class="about-pateners-wrpp">
        <div class="about-pateners">
          <div class="slider">
            <img src="../assets/photography/edcl.png" alt="" class="about-pateners-logos" />
          </div>
          <div class="slider">
            <img src="../assets/photography/giz.png" alt="" class="about-pateners-logos" />
          </div>
          <div class="slider">
            <img src="../assets/photography/reg.png" alt="" class="about-pateners-logos" />
          </div>
          <div class="slider">
            <img src="../assets/photography/rssb.png" alt="" class="about-pateners-logos" />
          </div>
          <div class="slider">
            <img src="../assets/photography/snv.png" alt="" class="about-pateners-logos" />
          </div>
          <div class="slider">
            <img src="../assets/photography/ssm.png" alt="" class="about-pateners-logos" />
          </div>
          <div class="slider">
            <img src="../assets/photography/endev.png" alt="" class="about-pateners-logos" />
          </div>
          <div class="slider">
            <img src="../assets/photography/unhcr.png" alt="" class="about-pateners-logos" />
          </div>
        </div>
      </div>
    </section>
    <section class="se-products">
      <h1 class="products-heading">
        <span>Products</span><br />
        Our Industry-<br />
        Supercharged Products.
      </h1>

      <div class="products-wrapper">
        <div class="product product-1">
          <h3 class="product-name">STOVE</h3>
          <p class="product-desc">
            The ZED X has been designed to meet the needs of roboticists working at the bleeding
            edge.
          </p>
          <RouterLink to="/products/stoves">view</RouterLink>
        </div>
        <div class="product product-2">
          <h3 class="product-name">BRIQUETTES</h3>
          <p class="product-desc">
            The ZED X has been designed to meet the needs of roboticists working at the bleeding
            edge.
          </p>
          <RouterLink to="/products/briquettes">view</RouterLink>
        </div>
      </div>
    </section>
    <section class="se-services">
      <div class="services-main">
        <h1 class="services-title">
          <span>Services</span><br />
          What OAK offers to <br />
          it’s dearest customers.
        </h1>
        <div class="services-wrapper">
          <div class="services-serve">
            <img src="../assets/icons/services-1.svg" alt="" class="services-icons" />
            <p>Crafted Briquettes</p>
            <img src="../assets/icons/plus.svg" alt="" class="services-icons" />
          </div>
          <div class="services-serve">
            <img src="../assets/icons/services-2.svg" alt="" class="services-icons" />
            <p>Meticulous Stoves</p>
            <img src="../assets/icons/plus.svg" alt="" class="services-icons" />
          </div>
          <div class="services-serve">
            <img src="../assets/icons/service-3.svg" alt="" class="services-icons" />
            <p>Customer Support</p>
            <img src="../assets/icons/plus.svg" alt="" class="services-icons" />
          </div>
        </div>
      </div>
      <div class="services-3d">
        <img src="../assets/photography/se-services.png" alt="" class="services-3d-img" />
      </div>
    </section>
    <section class="se-featured">
      <h1 class="featured-heading">
        <span>Featured</span><br />
        Find out what has been<br />
        said about us on media.
      </h1>

      <div class="featured-main">
        <div class="featured-wrapper">
          <img src="../assets/photography/featured-1.png" alt="" />

          <div class="featured-wrapper-inner">
            <h3 class="featured-title-green">November 2nd 2020</h3>
            <h3 class="featured-title">
              Reducing Deforestation<br />
              Africa’s Rwanda
            </h3>
            <p class="featured-par">
              To reduce deforestation, Rwanda aims to diminish the usage of biomass for cooking.
              Werecently visited
            </p>
            <a href="" class="featured-link"> Read More </a>
          </div>
        </div>
        <div class="featured-wrapper">
          <img src="../assets/photography/featured-2.png" alt="" />

          <div class="featured-wrapper-inner">
            <h3 class="featured-title-green">November 2nd 2020</h3>
            <h3 class="featured-title">
              Reducing Deforestation<br />
              Africa’s Rwanda
            </h3>
            <p class="featured-par">
              To reduce deforestation, Rwanda aims to diminish the usage of biomass for cooking.
              Werecently visited
            </p>
            <a href="" class="featured-link"> Read More </a>
          </div>
        </div>
        <div class="featured-wrapper">
          <img src="../assets/photography/featured-3.png" alt="" />
          <div class="featured-wrapper-inner">
            <h3 class="featured-title-green">November 2nd 2020</h3>
            <h3 class="featured-title">
              Reducing Deforestation<br />
              Africa’s Rwanda
            </h3>
            <p class="featured-par">
              To reduce deforestation, Rwanda aims to diminish the usage of biomass for cooking.
              Werecently visited
            </p>
            <a href="" class="featured-link"> Read More </a>
          </div>
        </div>
      </div>
    </section>
    <footerr />
  </section>
</template>

<style scoped>
@font-face {
  font-family: popins-bold;
  src: url(../assets/fonts/Poppins-Bold.ttf);
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250 * 7));
  }
}

@media (max-width: 1024px) {
  .se-hero {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 32px;
    /* margin-top: 71px; */

    .hero-main {
      display: flex;
      flex-direction: column;
      gap: 72px;
      width: 100%;
      justify-content: flex-end;
      padding: 32px 0;

      .hero-heading {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .hero-sub-heading-green {
          color: #0c4f26;
        }
        .hero-main-heading {
          font-family: popins-bold;
          font-size: 40px;
          span {
            color: #0c4f26;
          }
        }
      }

      .hero-rating {
        display: flex;
        .hero-rating-wrapper {
          margin-right: 32px;
          padding: 0 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-left: 1px solid rgb(0, 0, 0, 0.5);

          h3 {
            font-family: popins-bold;
          }
          .hero-rating-stars {
            display: flex;
            gap: 8px;

            .hero-stars {
              width: 16px;
              height: 16px;
              filter: brightness(0) saturate(100%) invert(76%) sepia(67%) saturate(1985%)
                hue-rotate(333deg) brightness(98%) contrast(93%);
            }
          }
        }
      }
    }

    .hero-img-wrppr {
      width: 100%;
      padding: 0 32px;
      img {
        object-fit: cover;
        height: auto;
        width: 100%;
      }
    }
  }

  .se-about {
    display: flex;
    flex-direction: column;
    padding: 32px;
    margin-top: 32px;
    gap: 72px;

    .about-wrapper {
      display: flex;
      flex-direction: column;
      gap: 32px;

      .about-heading {
        font-family: popins-bold;
        font-size: 40px;
      }
    }

    .about-pateners {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .about-pateners-logos {
        object-fit: cover;
        height: 40px;
        /* width: 48px; */
      }
    }
  }
  .se-products {
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 72px;
    margin-top: 71px;

    .products-wrapper {
      display: flex;
      flex-direction: column;
      gap: 32px;
      margin: 16px 0;
      .product {
        border-radius: 8px;
        width: 100%;
        height: 100vh;
        padding: 32px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 16px;

        h3 {
          color: white;
        }

        p {
          color: white;
        }

        a {
          text-decoration: underline;
          text-transform: uppercase;
          color: white;
          font-size: 14px;
        }
      }

      .product-1 {
        background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
          url('../assets/photography/STOVE.jpeg');
        background-size: cover;
        background-position: center;
      }
      .product-2 {
        background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
          url('../assets/photography/BRIQUETTES.jpeg');
        background-size: cover;
        background-position: center;
      }
    }
  }
  .se-services {
    display: flex;
    padding: 32px;
    gap: 72px;
    margin-top: 71px;

    .services-main {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      .services-title {
      }

      .services-wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .services-serve {
          padding: 16px 8px;
          display: flex;
          justify-content: space-between;
          border: 1px solid #0c4f26;
          border-radius: 8px;

          .services-icons {
            object-fit: cover;
            height: 48px;
            width: 48px;
            filter: brightness(0) saturate(100%) invert(21%) sepia(10%) saturate(5073%)
              hue-rotate(100deg) brightness(95%) contrast(91%);
          }
        }
      }
    }

    .services-3d {
      display: none;
    }
  }
  .se-featured {
    display: flex;
    flex-direction: column;
    gap: 72px;
    padding: 32px;
    margin-top: 71px;
    /* background-color: red; */

    .featured-heading {
    }

    .featured-main {
      display: flex;
      flex-direction: column;
      gap: 32px;
      .featured-wrapper {
        width: 100%;
        flex-grow: 1;
        border: 1px solid #0c4f26;
        img {
          object-fit: cover;
          width: 100%;
        }

        .featured-wrapper-inner {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px;

          .featured-title {
            font-size: 22px;
            line-height: 1.2;
          }
          .featured-title-green {
            color: #0c4f26;
            font-size: 20px;
          }

          .featured-par {
            font-size: 16px;
          }

          .featured-link {
            font-size: 16px;
          }
        }
      }
    }
  }
}

@media (min-width: 1025px) {
  .se-hero {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    height: calc(100vh - 71px);
    padding: 32px 112px;
    margin-top: 71px;

    .hero-main {
      display: flex;
      flex-direction: column;
      gap: 72px;
      width: 50%;
      justify-content: flex-end;
      padding: 32px 0;

      .hero-heading {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .hero-sub-heading-green {
          color: #0c4f26;
        }
        .hero-main-heading {
          font-family: popins-bold;
          font-size: 40px;
          span {
            color: #0c4f26;
          }
        }
      }

      .hero-rating {
        display: flex;

        .hero-rating-wrapper:first-child {
          border-left: none;
        }

        .hero-rating-wrapper {
          margin-right: 32px;
          padding: 0 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-left: 1px solid rgb(0, 0, 0, 0.5);

          h3 {
            font-family: popins-bold;
          }
          .hero-rating-stars {
            display: flex;
            gap: 8px;

            .hero-stars {
              width: 16px;
              height: 16px;
              filter: brightness(0) saturate(100%) invert(76%) sepia(67%) saturate(1985%)
                hue-rotate(333deg) brightness(98%) contrast(93%);
            }
          }
        }
      }
    }

    .hero-img-wrppr {
      display: flex;
      align-items: center;
      /* justify-content: flex-end; */
      width: 50%;
      height: 100px;
      color: red;
      padding: 72px;
      img {
        object-fit: cover;
        /* height: auto; */
        width: 100%;
      }
    }
  }

  .se-about {
    display: flex;
    flex-direction: column;
    padding: 32px 0;
    height: calc(100vh - 71px);
    margin-top: 71px;

    .about-wrapper {
      height: 60vh;
      padding: 0 112px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 32px;

      .about-heading {
        font-family: popins-bold;
        font-size: 40px;
      }

      .about-par {
        width: 60%;
      }
    }

    .about-pateners-wrpp {
      .about-pateners {
        display: flex;
        width: calc(200 * 14);
        animation: scroll 30s infinite;

        .slider {
          position: relative;
          overflow: hidden;
          height: 56px;
          width: auto;

          .about-pateners-logos {
            margin-left: 64px;
            object-fit: cover;
          }
        }
      }
    }
  }

  .se-products {
    display: flex;
    flex-direction: column;
    padding: 32px 112px;
    gap: 72px;
    margin-top: 71px;

    .products-heading {
      font-family: popins-bold;
      font-size: 32px;

      span {
        font-family: popins;
        font-size: 26px;
      }
    }

    .products-wrapper {
      display: flex;
      gap: 32px;
      margin: 16px 0;
      .product {
        border-radius: 8px;
        width: 100%;
        height: 100vh;
        padding: 32px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 16px;

        h3 {
          color: white;
        }

        p {
          color: white;
        }

        a {
          text-decoration: underline;
          text-transform: uppercase;
          color: white;
          font-size: 14px;
        }
      }

      .product-1 {
        background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
          url('../assets/photography/STOVE.jpeg');
        background-size: cover;
        background-position: center;
      }
      .product-2 {
        background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
          url('../assets/photography/BRIQUETTES.jpeg');
        background-size: cover;
        background-position: center;
      }
    }
  }

  .se-services {
    display: flex;
    padding: 32px 112px;
    gap: 72px;
    height: calc(100vh - 71px);
    margin-top: 71px;

    .services-main {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      .services-title {
        font-family: popins-bold;
        font-size: 32px;

        span {
          font-family: popins;
          font-size: 26px;
        }
      }

      .services-wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .services-serve {
          padding: 16px 8px;
          display: flex;
          justify-content: space-between;
          border: 1px solid #0c4f26;
          border-radius: 8px;

          .services-icons {
            object-fit: cover;
            height: 48px;
            width: 48px;
            filter: brightness(0) saturate(100%) invert(21%) sepia(10%) saturate(5073%)
              hue-rotate(100deg) brightness(95%) contrast(91%);
          }
        }
      }
    }

    .services-3d {
      width: 50%;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }

  .se-featured {
    display: flex;
    flex-direction: column;
    gap: 72px;
    padding: 32px 112px;
    margin-top: 71px;

    .featured-heading {
      font-family: popins-bold;
      font-size: 32px;

      span {
        font-family: popins;
        font-size: 26px;
      }
    }

    .featured-main {
      display: flex;
      gap: 32px;
      .featured-wrapper {
        height: 80vh;
        width: 100%;
        border: 1px solid #0c4f26;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        img {
          object-fit: cover;
          width: 100%;
          height: 55%;
        }

        .featured-wrapper-inner {
          height: fit-content;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .featured-title {
            font-size: 22px;
            line-height: 1.2;
          }
          .featured-title-green {
            color: #0c4f26;
            font-size: 20px;
          }

          .featured-par {
            font-size: 16px;
          }

          .featured-link {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
