import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (

<div style={{ fontFamily: 'LeituraNews, serif' }}>
<div className="flex justify-center w-full hero">
  <div class="flex items-center justify-between p-4 max-w-[700px]">
  <div class="text-left">
  <h1>Mehdi Hussain</h1>
    <p>First-year Electrical Engineering and Computer Science Student @ <Link className="mr-3 bg-sky-700 hover:bg-sky-500" href="https://berkeley.edu">UC Berkeley</Link></p>
    <p>mehdi [at] mehdi [dot] us</p>
    <p><Link className="mr-3 bg-sky-700 hover:bg-sky-500" href="/files/Resume.pdf">Resume</Link> <Link className="mr-3 bg-sky-700 hover:bg-sky-500" href="https://github.com/mehdihdev">Github</Link> <Link className="mr-3 bg-sky-700 hover:bg-sky-500" href="https://www.linkedin.com/in/mehdihdev">LinkedIn</Link></p>
    
  </div>


  <div className="relative w-72 h-72 pt-11">
        <Image
          src="/images/mehdi.jpg" // Replace with the path to your image
          alt="Your Name"
          layout="fit" // Ensures the image fills the container
          width={720}
          height={720}
          objectFit="cover" // Makes the image cover the container proportionally
          className="rounded-full" // Makes the image circular
        />
      </div>
</div>


</div>

<div class="max-w-[700px] mx-auto p-4">
  <h2 className="pb-2">About Me</h2>
  <p>My name is Mehdi, an aspiring Entrepreneur and current undergraduate student @ UC Berkeley studying Electrical Engineering and Computer Science (EECS). I’ve spent the better part of the last half-decade solving problems through code, everything from building apps to help muslims pray to creating AI-powered glasses to help the blind see. 
<br />
<br />
Outside of technology, my other hobbies include Airports (and anything plane-related really), Trains, Math, and anything Business/Investment related. 
<br />
<br />
You can find most of the projects I’ve worked on down below, or also on LinkedIn and on Github. 
 
  </p>
</div>

<div id-="projects" className="w-full projects">
<div class="max-w-[700px] mx-auto p-4 projects">
<h2 className="pb-5">Projects</h2>
<div class="grid grid-cols-3 gap-3 pb-7">
  <div>
    <h3>
    Inexpensive Glasses for the Blind and Visually Impaired Using AI and OpenCV</h3>
    <div className="rounded-lg">
      <i class="fa fa-file-text-o"></i> <Link className="mr-3 bg-sky-700 hover:bg-sky-500" href="/files/isefpaper2023.pdf">Paper</Link>
      <i class="fa fa-video"></i> <Link className="mr-3 bg-sky-700 hover:bg-sky-500" href="https://www.youtube.com/shorts/sQFdRm3IRzE">Video</Link> <br />
      <i class="fa fa-link"></i> <Link className="mr-3 bg-sky-700 hover:bg-sky-500" href="https://partner.projectboard.world/isef/project/ebed027t-inexpensive-ai-glasses-for-the-visually-impaired">ProjectBoard</Link>
    </div>
  </div>
  <div class="col-span-2">
    <p>Designed, built, and presented a project using the Raspberry Pi, Python, AI/ML technologies, and the OpenCV library in order to help the blind & visually impaired be able to detect objects through auditory means.<br />Presented research at various science fairs and placed first at NCSEF, NCSAS, and competed as a finalist at International Science and Engineering Fair 2023 in Dallas, TX.</p>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 pb-7">
  <div>
    <h3>
    IABAT Website & App</h3>
    <div className="rounded-lg">
      <i className="fa-brands fa-app-store-ios"></i> <Link className="mr-3 bg-sky-700 hover:bg-sky-500" href="https://apps.apple.com/tr/app/iabat/id1470669636">Get the App</Link> <br />
      <i class="fa fa-link"></i> <Link className="mr-3 bg-sky-700 hover:bg-sky-500" href="https://iabat.org">Website</Link>
    </div>
  </div>
  <div class="col-span-2">
    <p>Redesigned and rebuilt a website that offered a renewed UI & UX experience for users finding events, prayer times, and built an API that enabled integration between the website and the mobile app. Built using PHP, Wordpress, HTML/CSS, and Javascript.
    </p>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 pb-7">
  <div>
    <h3>Inexpensive EEG-Controlled Prosthetic Arm using AI and ML</h3>
    <i class="fa fa-file-text-o"></i> <Link className="mr-3 bg-sky-700 hover:bg-sky-500" href="/files/prostheticpaper2024.pdf">Paper</Link>
  </div>
  <div class="col-span-2">
    <p>Worked on a year-long research project to develop an EEG prosthetic arm alongside Duke University undergraduates and professor Dr. Megan Madonna using human-centered and engineering design processes to research problems related to the UN Global Goal of Good Health.</p>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 pb-7">
  <div>
    <h3>NC Hack</h3>
    <i class="fa fa-github"></i> <Link className="mr-3 bg-sky-700 hover:bg-sky-500" href="https://github.com/NC-Hack/NC-Hack">Github</Link>
  </div>
  <div class="col-span-2">
    <p>During COVID-19, I helped to build a software that hosted Seasonal Hackathons, encouraging 200+ students all across the globe to compete in coding competitions for prizes.</p>
  </div>
</div>

</div>

</div>









</div>

  );
}
