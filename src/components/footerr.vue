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
        <label for="message" class="label-2">message</label>
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

    <div class="footer-links-wrpp">
      <div class="links-title">
        <p class="links-p">
          Headquarters – Kacyiru KG 7<br />
          Factory – Mageragere, Nyarugenge
        </p>
        <a href="" class="links-underline"> oakinvestmentrwanda@gmail.com </a>
      </div>
      <div class="footer-links">
        <p class="links-p">social media</p>
        <a href="" class="links-underline">instagram</a>
        <a href="" class="links-underline">facebook</a>
        <a href="" class="links-underline">linked</a>
      </div>
      <div class="footer-links">
        <p class="links-p">menu</p>
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
/* uni */
.links-p {
  font-size: clamp(0.875rem, 0.8438rem + 0.1563vw, 1rem);
  text-transform: capitalize;
}
/*  */
.contacts-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    text-transform: capitalize;
    font-size: clamp(0.875rem, 0.75rem + 0.625vw, 1.375rem);
    font-family: popins;
  }

  input {
    border-bottom: 1px solid black;
  }
}

.contacts-form-mssg {
  label,
  .label-2 {
    text-transform: capitalize;
    font-size: clamp(0.875rem, 0.75rem + 0.625vw, 1.375rem);
    font-family: popins;
  }

  input {
    border-bottom: 1px solid black;
  }
}
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

    .search {
      width: 50%;
      padding: 4px 16px;
      background-color: #427656;
      height: fit-content;
      border-radius: 32px;
      display: flex;
      /* align-items: center; */
      justify-content: space-between;

      .input {
        width: 100px;
      }

      input::placeholder {
        width: 100px;
        color: #ffffff;
        text-transform: capitalize;
        font-size: clamp(0.6875rem, 0.6406rem + 0.2344vw, 0.875rem);
        line-height: 1.1;
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

  .footer-links-wrpp {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .links-title {
      display: flex;
      flex-direction: column;
    }
    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 4px;
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
      }

      .contacts-form-mssg {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }
  }

  .se-footer {
    flex-direction: column;
    justify-content: space-between;
    background-color: #0f301b;
    color: white;
    height: calc(100vh - 124px);
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
      }

      .contacts-form-mssg {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
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
  }
}
</style>
