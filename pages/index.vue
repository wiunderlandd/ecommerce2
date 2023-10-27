<template>
    <div>
      <div class="main-content">
        <section class="hero">
          <h1 class="title">Selamat datang guys</h1>
        </section>
  
        <section class="features">
          <div class="feature">
            <h2 class="feature-title">Belanja cepat</h2>
            <p class="feature-description">
              Belanja dengan cepat dan santay
            </p>
          </div>
  
          <div class="feature">
            <h2 class="feature-title">Murah meriah</h2>
            <p class="feature-description">
              harga murah kualitas ga murahan
            </p>
          </div>
  
          <div class="feature">
            <h2 class="feature-title">Produk lengkap</h2>
            <p class="feature-description">
              lengkap kaya kantong doraemon 
            </p>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <style scoped>
  .main-content {
    background-image: url(../public/images/cool-background.png);
    max-width: 100%;
    margin: 0 auto;
    padding: 115px;
  }
  
  .hero {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .title {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #666;
  }
  
  .features {
    display: flex;
    justify-content: space-between;
  }
  
  .feature {
    flex: 1;
    text-align: center;
    padding: 20px;
    border: 2px solid white;
    border-radius: 8px;
    margin: 0 10px;
  }
  
  .feature-title {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  .feature-description {
    font-size: 1rem;
    color: #666;
  }
</style>