const upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const download = document.getElementById("download");
const size = document.getElementById("size");

let img = new Image();

upload.addEventListener("change", function(e){

const file = e.target.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(event){

img.onload = function(){

drawPassport();

}

img.src = event.target.result;

}

reader.readAsDataURL(file);

});

size.addEventListener("change", drawPassport);

function drawPassport(){

if(!img.src) return;

if(size.value==="35x45"){

canvas.width=413;
canvas.height=531;

}

else if(size.value==="2x2"){

canvas.width=600;
canvas.height=600;

}

else{

canvas.width=500;
canvas.height=650;

}

ctx.fillStyle="white";
ctx.fillRect(0,0,canvas.width,canvas.height);

const scale=Math.min(
canvas.width/img.width,
canvas.height/img.height
);

const w=img.width*scale;
const h=img.height*scale;

const x=(canvas.width-w)/2;
const y=(canvas.height-h)/2;

ctx.drawImage(img,x,y,w,h);

}

function generatePassport(){

if(!img.src){

alert("Please upload an image.");

return;

}

drawPassport();

canvas.toBlob(function(blob){

const url=URL.createObjectURL(blob);

download.href=url;

download.download="passport-photo.jpg";

download.style.display="inline-block";

},"image/jpeg",0.92);

}
<section class="info">

<h2>Passport Photo Maker & Compressor Online</h2>

<p>
TinyPixel Passport Photo Maker is a free online tool that helps you create passport-size photos directly in your browser. Whether you need a photo for a passport, visa application, Aadhaar card, PAN card, driving licence, government job application, scholarship form, or online examination, this tool makes the process quick and simple. You don't need to install any software or create an account. Just upload your photo, choose the required size, and generate a ready-to-use passport photo in seconds.
</p>

<p>
Unlike many online editors, TinyPixel performs image processing locally in your browser whenever possible. This means your photos remain on your device, providing better privacy and faster performance. The tool works smoothly on Android phones, iPhones, tablets, laptops, and desktop computers.
</p>

<h2>Why Choose TinyPixel?</h2>

<ul>
<li>Free to use without registration.</li>
<li>Fast browser-based processing.</li>
<li>No software installation required.</li>
<li>Supports common passport photo sizes.</li>
<li>High-quality JPG output.</li>
<li>Mobile and desktop compatible.</li>
<li>Simple interface for beginners.</li>
<li>Useful for official documents and online applications.</li>
</ul>

<h2>Common Uses</h2>

<p>
You can use this passport photo tool for passport applications, visa applications, Aadhaar updates, PAN card applications, government recruitment forms, university admissions, scholarship portals, online exams, employee ID cards, student ID cards, travel documents, and many other official purposes. Before submitting your photo, always check the size and background requirements of the authority requesting the image.
</p>

<h2>How to Use</h2>

<ol>
<li>Upload your photo.</li>
<li>Select the required passport photo size.</li>
<li>Click the Generate Passport Photo button.</li>
<li>Preview the result.</li>
<li>Download the generated image.</li>
</ol>

<h2>Related Tools</h2>

<p>
<a href="compress-image-to-50kb.html">Compress Image to 50KB</a> |
<a href="compress-image-to-100kb.html">Compress Image to 100KB</a> |
<a href="png-to-jpg.html">PNG to JPG Converter</a> |
<a href="jpg-to-png.html">JPG to PNG Converter</a> |
<a href="webp-converter.html">WebP Converter</a>
</p>

</section>

<div class="adsense-placeholder">
<p>Advertisement</p>
</div>
<section class="info">

<h2>Frequently Asked Questions (FAQ)</h2>

<h3>Is TinyPixel Passport Photo Maker free?</h3>

<p>
Yes. TinyPixel Passport Photo Maker is completely free to use without registration or subscription.
</p>

<h3>Can I use it on mobile?</h3>

<p>
Yes. The tool works on Android phones, iPhones, tablets, laptops, and desktop computers using modern web browsers.
</p>

<h3>Are my photos uploaded to a server?</h3>

<p>
Image processing is designed to happen directly in your browser whenever possible, helping improve privacy and reduce upload time.
</p>

<h3>Which formats are supported?</h3>

<p>
You can upload common image formats such as JPG, PNG, and WebP. The generated passport photo is available in JPG format.
</p>

<h3>Can I use this tool for government forms?</h3>

<p>
Yes. It can help prepare photos for many government forms, job applications, visa applications, passports, Aadhaar updates, and similar online submissions. Always verify the official photo requirements before uploading.
</p>

<h2>Benefits of Using TinyPixel</h2>

<p>
TinyPixel combines speed, privacy, and ease of use. Since the tool runs in your browser, you don't need to install software or wait for files to upload. This makes it suitable for quick edits whether you're at home, at work, or using a mobile device.
</p>

<p>
Besides passport photos, TinyPixel also provides several free image optimization tools for reducing file size and converting image formats. These tools are useful for websites, email attachments, government portals, educational applications, and social media.
</p>

<h2>Explore More TinyPixel Tools</h2>

<ul>
<li><a href="compress-image-to-10kb.html">Compress Image to 10KB</a></li>
<li><a href="compress-image-to-20kb.html">Compress Image to 20KB</a></li>
<li><a href="compress-image-to-30kb.html">Compress Image to 30KB</a></li>
<li><a href="compress-image-to-50kb.html">Compress Image to 50KB</a></li>
<li><a href="compress-image-to-100kb.html">Compress Image to 100KB</a></li>
<li><a href="compress-image-to-200kb.html">Compress Image to 200KB</a></li>
<li><a href="png-to-jpg.html">PNG to JPG Converter</a></li>
<li><a href="jpg-to-png.html">JPG to PNG Converter</a></li>
<li><a href="webp-converter.html">WebP Converter</a></li>
</ul>

<div class="adsense-placeholder">
<p>Advertisement</p>
</div>

<h2>Quick Links</h2>

<p>
<a href="index.html">Home</a> |
<a href="about.html">About Us</a> |
<a href="privacy.html">Privacy Policy</a> |
<a href="terms.html">Terms &amp; Conditions</a> |
<a href="faq.html">FAQ</a> |
<a href="contact.html">Contact Us</a>
</p>

</section>