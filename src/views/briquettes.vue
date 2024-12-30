<script setup>
import navigation from '@/components/navigation.vue'
import footerr from '@/components/footerr.vue'
</script>

<template>
  <navigation />
  <section class="product-slide">
    <div class="product-slide-wrpp">
      <div class="product-title">
        <h1>
          briquettes<br />
          C28-23 Max & S26-13
        </h1>
        <p>Fueling Efficiency, Sparking Sustainability!</p>
      </div>
    </div>
  </section>

  <section class="product_about">
    <div class="about_title_wrppr">
      <h1 class="about_title">Cook Smart, Live Greener!</h1>
      <p class="about_desc">
        C28-23 Max and S26-13 stoves deliver efficient and thee eco-friendly cooking solutions.
        <span>C28-23 Max</span>, with its larger cooking surface, perfect for families & commercial
        use, while Compact <span>S26-13</span> is ideal for small households or portable
        cookingeringii.
      </p>
    </div>

    <div class="product_numbers">
      <div class="product-numbers-wppr">
        <h1>25% - 30%</h1>
        <p>Fuel Consumption Reduction</p>
      </div>
      <div class="product-numbers-wppr">
        <h1>50%</h1>
        <p>Fuel Consumption Reduction</p>
      </div>
      <div class="product-numbers-wppr">
        <h1>5+ Years</h1>
        <p>Durability</p>
      </div>
    </div>
  </section>

  <section class="product_qoute">
    <h1>
      <span>&quot;</span>
      I've been using the C28-23 Max and S26-13 stoves for a few months, and I' really impressed.
      The fuel efficiency is excellent — I’m using less fuel andd cooking longer. The low smoke
      emissions make indoor cooking much to e healthier, and both stoves are very durable. Overall,
      they’re a great action <span>&bdquo;</span>
    </h1>
    <p>Gakire Alfred</p>
    <a href="">Read more</a>
  </section>
  <section class="se-faqs">
    <div class="faqs-title">
      <h1>
        Frequently Asked<br />
        Questions (FAQs)<br />
        <span>Your Questions, Answered!</span>
      </h1>
    </div>
    <div class="faqs-wrapped">
      <div class="faqs-faq">
        <h1>01&nbsp;&nbsp;Do the stoves come with a warranty?</h1>
        <p>
          s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book
        </p>
      </div>
      <div class="faqs-faq">
        <h1>Do the stoves come with a warranty?</h1>
        <p>
          s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book
        </p>
      </div>
      <div class="faqs-faq">
        <h1>Do the stoves come with a warranty?</h1>
        <p>
          s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book
        </p>
      </div>
    </div>
  </section>
  <footerr />
</template>

<style scoped>
@font-face {
  font-family: popins-bold;
  src: url(../assets/fonts/Poppins-Bold.ttf);
}
@media (max-width: 1024px) {
  .product-slide {
    height: 100vh;
    flex-direction: column;
    justify-content: flex-end;
    padding: 16px;
    margin-top: 76px;

    .product-slide-wrpp {
      background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
        url('../assets/photography/carbonized.jpeg');
      background-size: cover;
      background-position: center;
      height: 100%;
      border-radius: 16px;
      padding: 32px;
      display: flex;
      align-items: flex-end;
      .product-title {
        h1 {
          font-size: 40px;
          color: white;
          font-family: popins-bold;
        }

        p {
          color: white;
          font-size: 16px;
        }
      }
    }
  }

  .product_about {
    width: 100%;
    padding: 16px;
    margin-top: 71px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 72px;

    .about_title_wrppr {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .about_title {
        font-family: popins-bold;
        width: 100%;
        font-size: 40px;
        line-height: 1;
      }

      .about_desc {
        width: 100%;

        span {
          color: #0c4f26;
          font-family: popins-bold;
        }
      }
    }

    .product_numbers {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .product-numbers-wppr {
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
          font-family: popins-bold;
          color: #0c4f26;
          font-size: 40px;
        }
        p {
        }
      }
    }
  }

  .product_qoute {
    height: 100vh;
    padding: 16px;
    margin-top: 71px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;

    h1 {
      span {
        font-size: 30px;
        font-style: italic;
        font-family: popins-bold;
      }
    }
  }

  .se-faqs {
    width: 100%;
    padding: 16px;
    margin-top: 71px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 72px;

    .faqs-title {
      font-family: popins-bold;
      font-size: 32px;
      span {
        font-family: popins;
        font-size: 26px;
      }
    }
    .faqs-wrapped {
      width: 100%;
      .faqs-faq {
        display: flex;
        flex-direction: column;
        gap: 24px;
        border-top: 1px solid #000;
        padding: 32px 16px;

        h1 {
        }

        p {
          font-size: 16px;
        }
      }
    }
  }
}

@media (min-width: 1025px) {
  .product-slide {
    flex-direction: column;
    justify-content: flex-end;
    height: calc(100vh - 71px);
    padding: 32px 112px;
    margin-top: 76px;

    .product-slide-wrpp {
      background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
        url('../assets/photography/carbonized.jpeg');
      background-size: cover;
      background-position: center;
      height: 100%;
      border-radius: 16px;
      padding: 32px;
      display: flex;
      align-items: flex-end;
      .product-title {
        h1 {
          font-size: 40px;
          color: white;
          font-family: popins-bold;
        }

        p {
          color: white;
          font-size: 16px;
        }
      }
    }
  }

  .product_about {
    height: 60vh;
    padding: 32px 112px;
    margin-top: 71px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 72px;

    .about_title_wrppr {
      display: flex;
      justify-content: space-between;
      .about_title {
        font-family: popins-bold;
        width: 45%;
        font-size: 40px;
        line-height: 1;
      }

      .about_desc {
        width: 60%;

        span {
          color: #0c4f26;
          font-family: popins-bold;
        }
      }
    }

    .product_numbers {
      display: flex;
      justify-content: space-between;

      .product-numbers-wppr {
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
          font-family: popins-bold;
          color: #0c4f26;
          font-size: 40px;
        }
        p {
        }
      }
    }
  }

  .product_qoute {
    height: calc(100vh - 71px);
    padding: 0 240px;
    margin-top: 71px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    gap: 32px;

    h1 {
      span {
        font-size: 60px;
        font-style: italic;
        font-family: popins-bold;
      }
    }
  }

  .se-faqs {
    height: calc(100vh - 71px);
    padding: 32px 112px;
    margin-top: 71px;
    display: flex;
    justify-content: space-between;
    gap: 72px;

    .faqs-title {
      font-family: popins-bold;
      font-size: 32px;
      span {
        font-family: popins;
        font-size: 26px;
      }
    }
    .faqs-wrapped {
      width: 40vw;
      .faqs-faq {
        display: flex;
        flex-direction: column;
        gap: 24px;
        border-top: 1px solid #000;
        padding: 32px 16px;

        h1 {
        }

        p {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
