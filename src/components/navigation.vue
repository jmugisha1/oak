<script setup></script>

<template>
  <nav class="navigation">
    <Router-link to="/" class="nav_logo_wrppr">
      <img src="../assets/icons/logo.svg" alt="" class="nav_logo" />
      <p>
        Oak<br />
        Investments<br />
        Limited
      </p>
    </Router-link>

    <div class="nav_links">
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/services">services</router-link>
      <router-link to="/services">products</router-link>
      <router-link to="/contact">featured</router-link>
    </div>

    <div class="nav_book">book a call</div>
  </nav>
</template>

<style scoped>
@media (max-width: 768px) {
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1px solid #333;
    color: #333;
    padding: 32px;
    border-bottom: 0.75px solid rgb(0, 0, 0, 0.75);
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 1000;
    background-color: #f4f4f4;

    .nav_logo_wrppr {
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

    .nav_links {
      display: none;
    }

    .nav_book {
      background-color: #9aba90;
      color: white;
      font-size: 18px;
      padding: 8px 16px;
      border-radius: 8px;
    }
  }
}
@media (min-width: 769px) {
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 8px;
    margin-bottom: 1px solid #333;
    color: #333;
    padding: 8px 108px;
    border-bottom: 0.75px solid rgb(0, 0, 0, 0.75);
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 1000;
    background-color: #f4f4f4;

    .nav_logo_wrppr {
      display: flex;
      gap: 16px;
      align-items: center;
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

    .nav_links {
      display: flex;
      gap: 32px;
      a {
        font-size: 14px;
        text-transform: uppercase;
        cursor: pointer;
      }
    }

    .nav_book {
      background-color: #9aba90;
      color: white;
      font-size: 18px;
      padding: 8px 16px;
      border-radius: 8px;
    }
  }
}
</style>
