# InkPen.IO
InkPen Website

## Latest Release

### Version 1.0b27 (Second Sunday Beta)
**Download:** [logos.inkpen.io-1.0b27.zip](https://github.com/SuperBox64/InkPen.IO/releases/download/1.0-MVP-Beta-Feedback-Wanted/logos.inkpen.io-1.0b27.zip)

**What's New:**
- Bug fixes
- Speed improvements
- New layer panel

**Note:** This is the first of three Second Sunday betas coming before the official release. This software is not final and may contain new bugs.

## Next Release

### Build 28 - Coming Second Sunday of December
**Release Date:** December 8, 2025 at 6:00 PM EST

<div id="countdown"></div>

<script>
const countDownDate = new Date("Dec 8, 2025 18:00:00 EST").getTime();
const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "RELEASED";
  }
}, 1000);
</script>
