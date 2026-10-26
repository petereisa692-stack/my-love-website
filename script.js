/**
 * حكاية بيتر وحموكشتي ❤️ - المحرك التفاعلي للموقع
 * ملف JavaScript نظيف واحترافي بدون أي أخطاء برمجية
 */

// ==========================================================================
// 1. إعدادات الموقع الأساسية (يمكن لبيتر تعديلها بسهولة)
// ==========================================================================
const CONFIG = {
  names: {
    sender: "بيتر عيسى",
    receiver: "حموكشتي"
  },
  startDate: "2022-09-29T00:00:00", // تاريخ بداية القصة: 29 سبتمبر 2022
  typingSpeed: 38, // سرعة تأثير الآلة الكاتبة بالمللي ثانية
  slideshowInterval: 4000 // زمن الانتقال في السلايدشو السينمائي
};

// ==========================================================================
// 2. نص رسالة الحب الكاملة
// ==========================================================================
const LOVE_LETTER_TEXT = `يا حموكشتي،

عارفة إيه أكتر حاجة بفكر فيها لما بفتكر حكايتنا؟

إني من يوم 29 سبتمبر 2022، بدأت مع إنسانة بقت جزء كبير من حياتي، وإن السنين عدت وفيها ذكريات وضحك وكلام كتير، وأيام حلوة وأيام مكنتش سهلة علينا.

بس لما ببص لكل ده، بحس إن فيه كلام كتير جوايا يمكن مقلتهوش بالطريقة اللي تليق بيكي.

أنا مش هقولك إننا عمرنا ما زعلنا بعض، ولا إن كل حاجة بيننا كانت دايمًا سهلة.

إحنا بشر، بنغلط، وبنزعل، وساعات ممكن منعرفش نوصل لبعض حتى وإحنا نفسنا نكون أقرب لبعض.

بس وسط كل ده، فيه حاجة نفسي تعرفيها.

إنتِ بالنسبالي مش مجرد بنت بحبها، إنتِ إنسانة أنا اتخيلت معاها حاجات كتير لسه محصلتش.

اتخيلت أيام جاية نكون فيها أكبر وأنضج، ونبص لورا ونفتكر إحنا بدأنا إزاي، ونضحك على حاجات كانت مضايقانا وقتها، ونكون لسه مع بعض.

اتخيلت إني في يوم أكون واقف جنبك وإحنا بنبدأ حياة جديدة، وأفتكر إن البنت اللي قدامي دي هي نفسها حموكشتي اللي عرفتها يوم 29/9/2022.

ونفسي اليوم ده ييجي فعلًا.

مش علشان عايز قصة حب مثالية، لكن علشان نفسي أعيش معاكي قصة حقيقية، فيها تفاهم واهتمام واحتواء، وفيها اتنين بيختاروا بعض كل يوم.

أنا مش عايزك تكوني مبسوطة طول الوقت، ولا إنك تكوني قوية كل يوم.

نفسي أكون شخص تقدري تتكلمي معاه من غير ما تضطري تشرحي كل حاجة، وأكون قريب منك بطريقة تريحك، وأحبك بطريقة تحسسك بالأمان.

وأنا كمان عايز أتعلم إزاي أكون أحسن معاكي، وإزاي أسمعك وأفهمك، وإزاي نخلي علاقتنا مكان نرتاح فيه إحنا الاتنين.

أنا مش عايزنا نفضل مع بعض لمجرد إننا بقالنا سنين، أنا عايزنا نفضل نختار بعض علشان لسه عندنا رغبة نبني حاجة حلوة سوا.

عارفة يا حموكشتي؟

أجمل حاجة ممكن تحصل مش إننا نفضل فاكرين أول يوم حبينا فيه بعض، لكن إننا بعد سنين طويلة نكون لسه بنحب بعض، ولسه بنحاول، ولسه بنلاقي أسباب تخلينا نبتسم لبعض.

إنتِ بالنسبالي مش مجرد ذكرى حلوة في حياتي، إنتِ إنسانة نفسي أعيش معاها ذكريات جديدة.

نفسي حكايتنا تكمل، وإن يبقى لينا مستقبل نفتخر بيه، وإن اليوم اللي بنفتكر فيه أول يوم لينا يبقى مجرد بداية لحكاية أطول وأجمل.

ومهما كانت الأيام اللي جاية، نفسي نواجهها بصراحة، ونفهم بعض أكتر، ومنسيبش الزعل يتكلم مكاننا، ولا نخلي السكوت يبعدنا وإحنا ممكن نقرب بكلمتين صادقين.

من بيتر لحموكشتي..

من يوم 29/9/2022، ولسه عندي كلام كتير نفسي أعيشه معاكي، مش بس أقولهولك.

بحبك يا حموكشتي، ونفسي أجمل أيامنا تكون لسه جاية. ❤️`;

// ==========================================================================
// 3. حالة الموقع العامة (State Management)
// ==========================================================================
let currentScreen = 'welcome-screen';
let currentStage = 1;
let typewriterInterval = null;
let typewriterIndex = 0;
let isTypewriterFinished = false;
let slideshowTimer = null;
let currentSlideIndex = 0;
const discoveredCards = new Set();

// ==========================================================================
// 4. تشغيل الموقع عند تحميل الصفحة
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeartsCanvas();
  initMusicPlayer();
  initLoveCounter();
  initEventListeners();
});

// ==========================================================================
// 5. كانفاس القلوب العائمة والتفاعلية (Floating Ambient Hearts)
// ==========================================================================
function initHeartsCanvas() {
  const canvas = document.getElementById('heartsCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const hearts = [];
  const totalHearts = 28;

  class Heart {
    constructor(x, y, isInteractive = false) {
      this.x = x ?? Math.random() * width;
      this.y = y ?? (isInteractive ? y : height + Math.random() * 50);
      this.size = Math.random() * 14 + 10;
      this.speedY = isInteractive ? -(Math.random() * 3 + 2) : -(Math.random() * 1.2 + 0.6);
      this.speedX = (Math.random() - 0.5) * 1.2;
      this.opacity = isInteractive ? 1 : Math.random() * 0.6 + 0.2;
      this.fadeSpeed = isInteractive ? 0.015 : 0;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.02;
      this.color = ['#ff758f', '#ff4d6d', '#ff8fa3', '#c9184a', '#ffccd5'][Math.floor(Math.random() * 5)];
      this.isInteractive = isInteractive;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotSpeed;

      if (this.isInteractive) {
        this.opacity -= this.fadeSpeed;
      } else if (this.y < -30) {
        this.y = height + 30;
        this.x = Math.random() * width;
      }
    }

    draw() {
      if (this.opacity <= 0) return;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillStyle = this.color;
      ctx.beginPath();

      const topCurveHeight = this.size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      ctx.bezierCurveTo(0, 0, -this.size / 2, 0, -this.size / 2, topCurveHeight);
      ctx.bezierCurveTo(-this.size / 2, (this.size + topCurveHeight) / 2, 0, this.size, 0, this.size);
      ctx.bezierCurveTo(0, this.size, this.size / 2, (this.size + topCurveHeight) / 2, this.size / 2, topCurveHeight);
      ctx.bezierCurveTo(this.size / 2, 0, 0, 0, 0, topCurveHeight);

      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < totalHearts; i++) {
    hearts.push(new Heart(Math.random() * width, Math.random() * height));
  }

  function spawnHeartsAt(x, y, count = 4) {
    for (let i = 0; i < count; i++) {
      hearts.push(new Heart(x, y, true));
    }
  }

  // تفاعل اللمس وحركة الماوس لإطلاق قلوب رومانسية
  window.addEventListener('click', (e) => spawnHeartsAt(e.clientX, e.clientY, 5));
  window.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      spawnHeartsAt(e.touches[0].clientX, e.touches[0].clientY, 4);
    }
  }, { passive: true });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = hearts.length - 1; i >= 0; i--) {
      const h = hearts[i];
      h.update();
      h.draw();

      if (h.isInteractive && h.opacity <= 0) {
        hearts.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================================================
// 6. مشغل الموسيقى الرومانسي (Music Controller)
// ==========================================================================
function initMusicPlayer() {
  const audio = document.getElementById('bgMusic');
  const toggleBtn = document.getElementById('musicToggleBtn');
  const icon = document.getElementById('musicIcon');
  const text = document.getElementById('musicText');
  const equalizer = document.getElementById('musicEqualizer');

  if (!audio || !toggleBtn) return;

  // الموسيقى لا تبدأ تلقائياً بناء على طلب المستخدم
  let isPlaying = false;

  toggleBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      equalizer.classList.remove('playing');
      icon.textContent = '🎵';
      text.textContent = 'تشغيل الموسيقى';
    } else {
      audio.play().then(() => {
        isPlaying = true;
        equalizer.classList.add('playing');
        icon.textContent = '⏸️';
        text.textContent = 'إيقاف الموسيقى';
      }).catch((err) => {
        console.warn('ملف الموسيقى غير موجود حالياً أو المتصفح حظر التشغيل:', err);
        showToast('🎵 يمكنك إضافة أغنيتك المفضلة في مجلد music/ باسم our-song.mp3');
      });
    }
  });

  // إذا انتهت الأغنية يعيدها (تكرار loop)
  audio.addEventListener('ended', () => {
    if (isPlaying) audio.play();
  });
}

// ==========================================================================
// 7. عدّاد قصة حبنا منذ 29/09/2022
// ==========================================================================
function initLoveCounter() {
  const start = new Date(CONFIG.startDate).getTime();

  function update() {
    const now = new Date().getTime();
    const diff = now - start;

    if (diff < 0) return;

    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    // حساب السنوات والأيام المتبقية
    const years = Math.floor(totalDays / 365.25);
    const days = Math.floor(totalDays % 365.25);
    const hours = Math.floor(totalHours % 24);
    const minutes = Math.floor(totalMinutes % 60);
    const seconds = Math.floor(totalSeconds % 60);

    const elYears = document.getElementById('countYears');
    const elDays = document.getElementById('countDays');
    const elHours = document.getElementById('countHours');
    const elMinutes = document.getElementById('countMinutes');
    const elSeconds = document.getElementById('countSeconds');

    if (elYears) elYears.textContent = years;
    if (elDays) elDays.textContent = days;
    if (elHours) elHours.textContent = hours;
    if (elMinutes) elMinutes.textContent = minutes;
    if (elSeconds) elSeconds.textContent = seconds;
  }

  update();
  setInterval(update, 1000);
}

// ==========================================================================
// 8. الانتقال بين الشاشات الرئيسية
// ==========================================================================
function switchScreen(fromId, toId) {
  const fromScreen = document.getElementById(fromId);
  const toScreen = document.getElementById(toId);

  if (fromScreen) {
    fromScreen.classList.remove('active-screen');
    fromScreen.classList.add('hidden-screen');
  }

  if (toScreen) {
    toScreen.classList.remove('hidden-screen');
    toScreen.classList.add('active-screen');
    currentScreen = toId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function initEventListeners() {
  // زر البداية من شاشة الترحيب
  const startJourneyBtn = document.getElementById('startJourneyBtn');
  if (startJourneyBtn) {
    startJourneyBtn.addEventListener('click', () => {
      switchScreen('welcome-screen', 'story-section');
      goToStage(1);
    });
  }

  // أزرار التحكم بالآلة الكاتبة
  const skipBtn = document.getElementById('skipTypewriterBtn');
  const replayBtn = document.getElementById('replayTypewriterBtn');

  if (skipBtn) {
    skipBtn.addEventListener('click', skipTypewriter);
  }

  if (replayBtn) {
    replayBtn.addEventListener('click', replayTypewriter);
  }

  // مؤشرات الخطوات (Stepper)
  const stepIndicators = document.querySelectorAll('.step-indicator');
  stepIndicators.forEach((ind) => {
    ind.addEventListener('click', () => {
      const stepNum = parseInt(ind.getAttribute('data-step'), 10);
      goToStage(stepNum);
    });
  });

  // إغلاق المودال بزر Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightboxDirect();
    }
  });
}

// ==========================================================================
// 9. التنقل بين مراحل قصة حبنا (Stages 1-5)
// ==========================================================================
function goToStage(stageNum) {
  if (stageNum < 1 || stageNum > 5) return;
  currentStage = stageNum;

  // إخفاء كافة المراحل وإظهار المرحلة المختارة
  for (let i = 1; i <= 5; i++) {
    const stageEl = document.getElementById(`stage-${i}`);
    if (stageEl) {
      if (i === stageNum) {
        stageEl.classList.remove('hidden-stage');
        stageEl.classList.add('active-stage');
      } else {
        stageEl.classList.remove('active-stage');
        stageEl.classList.add('hidden-stage');
      }
    }
  }

  // تحديث شريط الخطوات (Stepper)
  const stepIndicators = document.querySelectorAll('.step-indicator');
  stepIndicators.forEach((ind) => {
    const step = parseInt(ind.getAttribute('data-step'), 10);
    if (step === stageNum) {
      ind.classList.add('active');
    } else {
      ind.classList.remove('active');
    }
  });

  // تمرير ناعم لرأس المرحلة
  const activeStageEl = document.getElementById(`stage-${stageNum}`);
  if (activeStageEl) {
    activeStageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ==========================================================================
// 10. تفاعل بطاقات "حاجات بحبها في حموكشتي" (المرحلة 4)
// ==========================================================================
function revealCard(cardElement) {
  if (!cardElement) return;
  cardElement.classList.toggle('flipped');

  // إضافة البطاقة لمجموعة المكتشفات
  discoveredCards.add(cardElement);
  const countSpan = document.getElementById('discoveredCount');
  if (countSpan) {
    countSpan.textContent = discoveredCards.size;
  }
}

// ==========================================================================
// 11. الانتقال إلى قسم الرسالة الأساسية وبدء الآلة الكاتبة
// ==========================================================================
function proceedToMainMessage() {
  switchScreen('story-section', 'letter-section');
  startTypewriterEffect();
}

function startTypewriterEffect() {
  const container = document.getElementById('typewriterText');
  const cursor = document.getElementById('typewriterCursor');
  const nextBox = document.getElementById('letterNextBox');
  const skipBtn = document.getElementById('skipTypewriterBtn');
  const replayBtn = document.getElementById('replayTypewriterBtn');

  if (!container) return;

  // إعادة ضبط الحالة
  container.textContent = '';
  typewriterIndex = 0;
  isTypewriterFinished = false;
  if (cursor) cursor.style.display = 'inline-block';
  if (nextBox) nextBox.style.display = 'none';
  if (skipBtn) skipBtn.style.display = 'inline-flex';
  if (replayBtn) replayBtn.style.display = 'none';

  clearInterval(typewriterInterval);

  typewriterInterval = setInterval(() => {
    if (typewriterIndex < LOVE_LETTER_TEXT.length) {
      container.textContent += LOVE_LETTER_TEXT.charAt(typewriterIndex);
      typewriterIndex++;
    } else {
      finishTypewriter();
    }
  }, CONFIG.typingSpeed);
}

function finishTypewriter() {
  clearInterval(typewriterInterval);
  isTypewriterFinished = true;

  const container = document.getElementById('typewriterText');
  const cursor = document.getElementById('typewriterCursor');
  const nextBox = document.getElementById('letterNextBox');
  const skipBtn = document.getElementById('skipTypewriterBtn');
  const replayBtn = document.getElementById('replayTypewriterBtn');

  if (container) container.textContent = LOVE_LETTER_TEXT;
  if (cursor) cursor.style.display = 'none';
  if (nextBox) nextBox.style.display = 'block';
  if (skipBtn) skipBtn.style.display = 'none';
  if (replayBtn) replayBtn.style.display = 'inline-flex';
}

function skipTypewriter() {
  finishTypewriter();
}

function replayTypewriter() {
  startTypewriterEffect();
}

// ==========================================================================
// 12. الانتقال إلى قسم المفاجآت التفاعلية
// ==========================================================================
function proceedToSurprises() {
  switchScreen('letter-section', 'surprise-section');
}

function chooseOption(choice) {
  const resultBox = document.getElementById('reactionResult');
  if (!resultBox) return;

  let messageHtml = '';

  if (choice === 'yes') {
    messageHtml = `
      <div class="reaction-msg">
        <p><strong>يا روحي وعمري كله.. ❤️</strong></p>
        <p>
          وأنا لو رجع بيا الزمن ألف مرة، مش هختار غيرك إنتِ يا حموكشتي.. هختارك في كل مرة وبنفس اللهفة والشغف!
          إنتِ أجمل صدفة وأحلى اختيار في عمري كله. 🥰🌸
        </p>
      </div>
    `;
  } else {
    messageHtml = `
      <div class="reaction-msg">
        <p><strong>مستنيكي ومستعد أسمعك طول العمر.. 🥹</strong></p>
        <p>
          نفسي أسمع كل كلمة وإنتِ باصة في عيني، ومستعد أفضل أسمعك لآخر يوم في حياتي من غير ما أمل ثانية واحدة!
          بحبك يا كل دنيتي. 💕✨
        </p>
      </div>
    `;
  }

  resultBox.innerHTML = messageHtml;
  resultBox.classList.add('visible');

  // تمرير بسيط ليرى الرد
  resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function unlockFinalSurprise() {
  const trigger = document.getElementById('giftBoxTrigger');
  const giftContent = document.getElementById('finalGiftContent');

  if (trigger) trigger.style.display = 'none';
  if (giftContent) {
    giftContent.style.display = 'block';
    giftContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // تأثير قصاصات الاحتفال بالقلوب
  triggerHeartShower();
}

// ==========================================================================
// 13. الانتقال للنهاية السينمائية والسلايدشو
// ==========================================================================
function proceedToCinematic() {
  switchScreen('surprise-section', 'cinematic-section');
  startCinematicSlideshow();
}

function startCinematicSlideshow() {
  const slides = document.querySelectorAll('.cinematic-slideshow-container .slide');
  if (!slides || slides.length === 0) return;

  clearInterval(slideshowTimer);
  currentSlideIndex = 0;

  slideshowTimer = setInterval(() => {
    slides[currentSlideIndex].classList.remove('active-slide');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add('active-slide');
  }, CONFIG.slideshowInterval);
}

function restartJourney() {
  clearInterval(slideshowTimer);
  switchScreen('cinematic-section', 'welcome-screen');
}

// ==========================================================================
// 14. نافذة تكبير الصور (Lightbox Modal)
// ==========================================================================
function openLightbox(imgSrc, captionText) {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImage');
  const modalCaption = document.getElementById('lightboxCaption');

  if (!modal || !modalImg) return;

  modalImg.src = imgSrc;
  if (modalCaption) modalCaption.textContent = captionText || '';

  modal.classList.add('active-lightbox');
  document.body.style.overflow = 'hidden'; // منع التمرير الخلفي
}

function closeLightbox(e) {
  // إغلاق فقط إذا ضغط خارج المحتوى
  if (e.target.id === 'lightboxModal') {
    closeLightboxDirect();
  }
}

function closeLightboxDirect() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('active-lightbox');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 15. بدائل الصور الاحتياطية (Graceful SVG Fallbacks)
// تضمن أن الموقع يظهر جميلاً جداً حتى قبل أن يضع بيتر صوره الشخصية
// ==========================================================================
function handleImageError(imgElement, type) {
  if (!imgElement || imgElement.dataset.fallbackApplied) return;
  imgElement.dataset.fallbackApplied = "true";

  let title = "بيتر وحموكشتي ❤️";
  let subtitle = "أجمل ذكرياتنا";

  switch (type) {
    case 'beginning':
      title = "البداية 29/9/2022 🌸";
      subtitle = "صورة أول يوم جمعنا";
      break;
    case 'memory1':
      title = "ضحكتنا الحلوة سوا ✨";
      subtitle = "ذكريات من القلب";
      break;
    case 'memory2':
      title = "لحظات الراحة والأمان 🕊️";
      subtitle = "معاكي الدنيا بخير";
      break;
    case 'memory3':
      title = "يوم مميز مش بيتنسي 💖";
      subtitle = "تفاصيل حبنا";
      break;
    case 'memory4':
      title = "ملامحك البريئة 💕";
      subtitle = "أحلى نظرة في عيونك";
      break;
    case 'memory5':
      title = "ملاذي ومكاني الآمن 🏡";
      subtitle = "إنتِ راحتي";
      break;
    case 'memory6':
      title = "مشاويرنا وحكاياتنا 🥰";
      subtitle = "ولسه مكملين سوا";
      break;
    case 'final':
      title = "بيتر وحموكشتي للأبد 💍";
      subtitle = "وعد العمر والحب الحقيقي";
      break;
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="100%" height="100%">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ff758f;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#ff4d6d;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#c9184a;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" rx="16"/>
      <circle cx="250" cy="170" r="70" fill="rgba(255,255,255,0.18)" />
      <text x="250" y="180" font-family="'Cairo', sans-serif" font-size="52" fill="#ffffff" text-anchor="middle">❤️</text>
      <text x="250" y="270" font-family="'Cairo', sans-serif" font-weight="700" font-size="24" fill="#ffffff" text-anchor="middle">${title}</text>
      <text x="250" y="305" font-family="'Cairo', sans-serif" font-weight="400" font-size="16" fill="rgba(255,255,255,0.9)" text-anchor="middle">${subtitle}</text>
      <text x="250" y="335" font-family="'Cairo', sans-serif" font-size="13" fill="rgba(255,255,255,0.75)" text-anchor="middle">(اضغط لاستبدالها بصورتك الحقيقية)</text>
    </svg>
  `;

  imgElement.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.trim());
}

// دالة لإشعار عائم لطيف
function showToast(msg) {
  const existing = document.getElementById('romanticToast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'romanticToast';
  toast.style.cssText = `
    position: fixed;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(35, 7, 18, 0.92);
    color: #ffffff;
    padding: 12px 24px;
    border-radius: 30px;
    font-size: 0.95rem;
    font-family: 'Cairo', sans-serif;
    font-weight: 600;
    z-index: 100000;
    box-shadow: 0 8px 30px rgba(0,0,0,0.3);
    border: 1px solid rgba(255,117,143,0.4);
    text-align: center;
    transition: opacity 0.4s ease;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// مطر القلوب الاحتفالي
function triggerHeartShower() {
  const count = 30;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.textContent = ['❤️', '💖', '💕', '🌸', '✨', '👑'][Math.floor(Math.random() * 6)];
      heart.style.cssText = `
        position: fixed;
        top: -40px;
        left: ${Math.random() * 100}vw;
        font-size: ${Math.random() * 24 + 18}px;
        z-index: 99999;
        pointer-events: none;
        transition: transform 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 3.5s ease;
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      `;
      document.body.appendChild(heart);

      requestAnimationFrame(() => {
        heart.style.transform = `translateY(${window.innerHeight + 80}px) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = '0';
      });

      setTimeout(() => heart.remove(), 3600);
    }, i * 80);
  }
}
