function countDown() {
    console.log(1234)
    let countDownTimer= null,countTimes=''
      clearInterval(countDownTimer);
    // this.seconds = Math.ceil(this.inviteInfo.inviteCodeEndTime / 1000);
    let seconds = new Date('2029-03-05 12:00:00').getTime()/1000-new Date().getTime()/1000;
    let dom = document.querySelector('.time_desc');
    // this.seconds = 10000;
    const hms = seconds%86400;
    const day = Math.floor(seconds/86400);
    const hours = Math.floor(hms / 3600);
    const minute = Math.floor((hms % 3600) / 60);
    const second = Math.floor((hms % 3600) % 60);
    countTimes = `${day}天 ${hours}小时 0${minute}分钟 0${second}秒`;
    dom.innerHTML = countTimes;
    countDownTimer = setInterval(() => {
      if (seconds <= 0) {
          dom.innerHTML='我们回去啦';
        return window.clearInterval(countDownTimer);
      }
      seconds--;
      const hms = seconds%86400;
      const day = Math.floor(seconds/86400);
      const hours = Math.floor(hms / 3600);
      const minute = Math.floor((hms % 3600) / 60);
      const second = Math.floor((hms % 3600) % 60);
      countTimes = `${day}天 ${hours < 10 ? 0 : ''}${hours}小时 ${minute < 10 ? 0 : ''}${minute}分钟 ${
        second < 10 ? 0 : ''
      }${second}秒`;
       dom.innerHTML=countTimes;
    }, 1000);
}
countDown();