<script setup></script>

<template>
  <section class="se-contacts">
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
      <button>Send</button>
    </form>
  </section>

  <section class="se-footer">
    <div class="footer-header">
      <div class="logo">
        <p>
          Oak<br />
          Investments<br />
          Limited
        </p>
      </div>

      <form action="/search" method="GET" class="search">
        <input type="search" name="query" placeholder="Search..." />
        <button type="submit">icon</button>
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
      <div class="footer-links-outer">
        <div class="links-outer">
          <p>social media</p>
          <a href="">instagram</a>
          <a href="">facebook</a>
          <a href="">linked</a>
        </div>
        <div class="links-outer">
          <p>social media</p>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Products</a>
          <a href="">Featured</a>
          <a href="">Contact Us</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 768px) {
  .se-contacts {
    display: flex;
    flex-direction: column;
    gap: 72px;
    padding: 16px;
    gap: 72px;
    margin-top: 71px;

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

      button {
        background-color: #427656;
        color: white;
        padding: 8px 16px;
        border-radius: 32px;
        width: fit-content;
      }
    }
  }

  .se-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    gap: 72px;
    margin-top: 71px;
    background-color: #0f301b;
    color: white;

    .footer-header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      .search {
        padding: 8px 16px;
        background-color: #427656;
        height: fit-content;
        border-radius: 32px;

        input {
          color: #ffffff;
        }
      }
    }

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

      .footer-links-outer {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .links-outer {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
      }
    }
  }
}
@media (min-width: 1024px) {
  .se-contacts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 112px;
    gap: 72px;
    height: calc(100vh - 71px);
    margin-top: 71px;
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

      button {
        background-color: #0c4f26;
        color: white;
        padding: 4px 48px;
        border-radius: 8px;
        width: fit-content;
        text-transform: uppercase;
        font-size: 18px;
      }
    }
  }

  .se-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 112px;
    gap: 72px;
    height: calc(100vh - 71px);
    margin-top: 71px;
    background-color: #0f301b;
    color: white;

    .footer-header {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .search {
        padding: 8px 16px;
        background-color: #427656;
        height: fit-content;
        border-radius: 32px;

        input {
          color: #ffffff;
        }
      }
    }

    .footer-links {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .footer-links-outer {
        display: flex;
        width: 100%;
        justify-content: space-around;

        .links-outer {
          display: flex;
          flex-direction: column;
          gap: 4px;

          a {
            font-size: 16px;
            text-transform: uppercase;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
