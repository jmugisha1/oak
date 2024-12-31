<script setup></script>

<template>
  <section class="se-contacts se-uni-dskt se-uni-mobo">
    <h1 class="contacts-4">
      <span>Contacts</span><br />
      Have a chat with us<br />
      we’re always here for you.
    </h1>

    <form action="" class="form">
      <div class="form-wrpp">
        <div class="contacts-form">
          <label for="name">name</label>
          <input id="name" type="text" />
        </div>
        <div class="contacts-form">
          <label for="email">email</label>
          <input id="email" type="email" />
        </div>
      </div>

      <div class="form-wrpp">
        <div class="contacts-form">
          <label for="number">number</label>
          <input id="number" type="number" />
        </div>
        <div class="contacts-form">
          <label for="location">location</label>
          <input id="location" type="text" />
        </div>
      </div>

      <div class="contacts-form-mssg">
        <label for="message">message</label>
        <input id="message" type="text" />
      </div>
      <button class="buttons-fill">Send</button>
    </form>
  </section>

  <section class="se-footer se-uni-dskt se-uni-mobo">
    <div class="footer-header">
      <div class="footer-logo">
        <img src="../assets/icons/logo.svg" alt="" class="nav_logo" />
        <p>
          Oak<br />
          Investments<br />
          Limited
        </p>
      </div>

      <form action="/search" method="GET" class="search">
        <input
          type="search"
          name="query"
          placeholder="Search..."
          class="input"
        />
        <button type="submit" class="submit">
          <img src="../assets/icons/search.svg" alt="" />
        </button>
      </form>
    </div>

    <div class="footer-links">
      <div class="links">
        <p>
          Headquarters – Kacyiru KG 7<br />
          Factory – Mageragere, Nyarugenge
        </p>
        <a href=""> oakinvestmentrwanda@gmail.com </a>
      </div>

      <div class="footer-links">
        <p>social media</p>
        <a href="" class="links-underline">instagram</a>
        <a href="" class="links-underline">facebook</a>
        <a href="" class="links-underline">linked</a>
      </div>
      <div class="footer-links">
        <p>social media</p>
        <a href="" class="links-underline">Home</a>
        <a href="" class="links-underline">About</a>
        <a href="" class="links-underline">Services</a>
        <a href="" class="links-underline">Products</a>
        <a href="" class="links-underline">Featured</a>
        <a href="" class="links-underline">Contact Us</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*  */
.se-footer {
  .footer-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .footer-logo {
      width: fit-content;
      display: flex;
      gap: 16px;
      p {
        font-size: 14px;
        text-transform: uppercase;
        line-height: 1;
      }
      .nav_logo {
        width: 72px;
        height: 72px;
      }
    }
  }

  .search {
    width: 50%;
    padding: 8px 16px;
    background-color: #427656;
    height: fit-content;
    border-radius: 32px;
    display: flex;
    /* justify-content: space-between; */

    .input {
      color: #ffffff;
      width: fit-content;
    }

    .submit {
      img {
        filter: brightness(0) saturate(100%) invert(97%) sepia(5%)
          saturate(298%) hue-rotate(311deg) brightness(118%) contrast(100%);
        height: 20px;
        width: auto;
      }
    }
  }
}

@media (max-width: 1024px) {
  .se-contacts {
    flex-direction: column;

    .contacts-4 {
      font-family: popins-bold;
      font-size: 32px;
      span {
        font-family: popins;
        font-size: 26px;
      }
    }
    .form {
      display: flex;
      flex-direction: column;
      gap: 72px;
      .form-wrpp {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 72px;

        .contacts-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;

          label {
          }

          input {
            border-bottom: 1px solid black;
          }
        }
      }

      .contacts-form-mssg {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;

        label {
        }

        input {
          border-bottom: 1px solid black;
        }
      }
    }
  }

  .se-footer {
    flex-direction: column;
    justify-content: space-between;
    background-color: #0f301b;
    color: white;

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 72px;
      width: 100%;

      .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }
  }
}
@media (min-width: 1025px) {
  .se-contacts {
    flex-direction: column;
    justify-content: space-between;
    gap: 72px;

    .contacts-4 {
      font-family: popins-bold;
      font-size: 32px;
      span {
        font-family: popins;
        font-size: 26px;
      }
    }
    .form {
      display: flex;
      flex-direction: column;
      gap: 32px;
      .form-wrpp {
        width: 100%;
        display: flex;
        gap: 72px;

        .contacts-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;

          label {
            text-transform: capitalize;
            font-size: 20px;
          }

          input {
            border-bottom: 1px solid black;
          }
        }
      }

      .contacts-form-mssg {
        /* background-color: red; */

        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;

        label {
        }

        input {
          border-bottom: 1px solid black;
        }
      }
    }
  }

  .se-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 72px;
    background-color: #0f301b;
    color: white;

    .footer-links {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }
  }
}
</style>
