### Portfolio Website - Boanta Cristian: https://boantacristian.ro/
 
Developed from scratch, intuitive, minimalist and responsive for many devices (Desktop, Tablet, Phone, etc.), on different browsers (Chrome, Safari, Mozilla, etc.) and with various resolutions (HD, FHD, WQHD, 2k, 4k, etc.), based on common screen sizes and aspect ratio.
 
- Environment
  * AngularJs
  * TypeScript
  * HTML
  * CSS
  * Bootstrap
  * JSON
   
- Libraries
  * Angular Material
  * Angular Swiper
  * Ngx Gallery
  * Vanilla Tilt
  * Toastr Notifications
  * TypewriterJs
  * EmailJs
  
- Tools
  * Visual Studio Code
  * Photoshop
  
- Challanges
  * The creation process
  * Making website responsive, not only for any resolution (common brakepoints), but also handling differences of approach and interpretation in various browsers of the css
  * Solving issues and errors using the vast internet
  
- Improvements
  * Find a way to render contend dynamically based on a calculation, not on manually adjust: 
    * `.styleclass{ attribute: calc(%/px/vw/rem/... + px)}`
  * Use database instead of JSON for site information, but right now, for the existing amount of information, I consider is not needed
  * Find a good alternative for blur filter in browsers that don't support `backdrop-filter`
  * Implement skill level bar animation for mobile devices, because hover action dosen't actually exist on mobile

### DISCLAIMER ###
    
  * The site works properly and as intended on every resolution and borwser
  * CSS resets were applied
  * Gyroscome for cards on mobile seems glitchy, so cards are moved by tap
      * iphone doesn't allow access to accelerometer sensors
      * some android phones allow gyroscope, some doesn't
      * Secure: https://boantacristian.ro/ gyroscope activated on supporting devices
      * Unsecure: http://boantacristian.ro/ gyroscope deactivated
  * Mozilla doesn't have activated by default backdrop-filter: blur 
      * manual activation link: https://dev.to/snkds/how-to-enable-backdrop-filter-in-firefox-2n8e
      * Noticeable that after manual activation in most cases blur is still not rendered, but browser see it as working due to other css classes activation in `@supports(attribute){...};`
  * IOS Safari is not tested on IPad, though in browser render works properly (Windows Desktop Chrome/Edge/Mozilla), 
      * I coudn't verify if there are render bugs on the device itself as tested for IPhones...and they were (found and fixed manually/hardcoded/hacks)) 
  * Safari macOS tasted just in browser (Windows Desktop Chrome/Edge/Mozilla)
  * Emulators, either desktop applications or online, didn't had access to `localhost:AngularPort` or default host `192.168.1.x:AngularPort`
  * Idk what is happening with experience card in Mozilla (seems there are 2 layers with different transform when hovering: 1 for card itself and one for `tilt` + `::after` + `::before`)
      * SOLVED: It was `transform: preserve 3d` issue
