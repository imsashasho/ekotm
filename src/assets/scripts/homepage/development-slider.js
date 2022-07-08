{
  //   const settings = [
  //       {
  //           cameras: ['http://youtube.com/1', 'http://youtube.com/2', 'http://youtube.com/3']
  //       },
  //       {
  //           cameras: ['http://youtube.com/1', 'http://youtube.com/2', 'http://youtube.com/3']
  //       }
  //   ]
  //   const sliderWrapperRef = document.querySelector('.development-video-wrap');
  //   const videoRef = document.querySelector('.development-video');
  //   const developmentDateSlidesRef = Array.from(
  //     document.querySelectorAll('.development-video-month__card'),
  //   );
  //   const cameraBtnsContainerRef = document.querySelector('.camera-actions');
  //   const settings = JSON.parse(sliderWrapperRef.dataset.settings);

  //   let currentCameraIndex = 0;
  //   let currentDateIndex = 0;
  //   let activeCameraBtn = null;

  //   const changeCameraIndex = index => {
  //     currentCameraIndex = index;
  //   };

  //   const changeDateIndex = index => {
  //     currentDateIndex = index;
  //   };

  //   const changeVideoSrc = () => {
  //     videoRef.src = settings[currentDateIndex].cameras[currentCameraIndex];
  //   };

  //   const handleCameraIndexChange = event => {
  //     const { target } = event;
  //     if (!target.hasAttribute('data-index')) return;

  //     const index = target.dataset.index;

  //     if (activeCameraBtn) {
  //       activeCameraBtn.classList.remove('active-camera');
  //     }

  //     target.classList.add('active-camera');
  //     activeCameraBtn = target;

  //     changeCameraIndex(index);
  //     changeVideoSrc();
  //   };

  //   const handleDateIndexChange = event => {
  //     event.preventDefault();

  //     const { currentTarget } = event;
  //     if (!currentTarget.hasAttribute('data-index')) return;

  //     const index = currentTarget.dataset.index;

  //     changeDateIndex(index);
  //     changeVideoSrc();
  //   };

  //   cameraBtnsContainerRef.addEventListener('click', handleCameraIndexChange);
  //   developmentDateSlidesRef.forEach(item => {
  //     item.addEventListener('click', handleDateIndexChange);
  //   });

  //   const posterImageRef = document.querySelector('.poster-image');

  //   function fadeImage() {
  //     posterImageRef.style.display = 'none';
  //   }
  //   posterImageRef.addEventListener('click', fadeImage);

  const developmentVideoRef = document.querySelector('.development-video');
  const developmentVideoActionsRef = document.querySelector('.camera-actions');
  let activeBtn = developmentVideoActionsRef.querySelector('.camera-btn');

  const handleVideoChange = (e) => {
    const { target } = e;
    const btn = target.closest('.camera-btn');
    if (btn) {
      const videoSrc = btn.dataset.src;
      developmentVideoRef.src = videoSrc;
      btn.classList.add('active-camera');
      activeBtn.classList.remove('active-camera');
      activeBtn = btn;
    }
  };

  developmentVideoActionsRef.addEventListener('click', handleVideoChange);
}
