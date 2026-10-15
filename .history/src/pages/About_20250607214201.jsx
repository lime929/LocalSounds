import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <div className="about-page">
      <div className="img-overlay">
        <img 
          src={aboutImg} 
          alt="People gathering at a music event" 
          className="homeImg" 
        />
        <div className="text-img">
          <h1>About Local Sounds</h1>
        </div>
      </div>
      
      <div className="container">
        <div className="intro">
          <h1>Our Mission</h1>
          <p>
            Local Sounds is an organization dedicated to uplifting Chicago's diverse music culture by supporting local, independent artists and spotlighting upcoming music events throughout the city. Our mission is to give talented and often overlooked musicians the visibility they deserve while making it easier for fans to discover new sounds in their own neighborhood.
          </p>
          <p>
            Whether you're into indie rock, hip hop, jazz, or electronic music, our site helps you stay connected with Chicago's evolving music scene. We believe in building community through creativity, passion, and the power of live music.
          </p>
        </div>

        <section className="homeArtists">
          <h2>Our Origin</h2>
          <p>
            Local Sounds was born out of a love for music and a desire to support the local music scene in Chicago. We started as a small group of music lovers who wanted to share their passion for music with others and help bring more opportunities for local artists to perform. Every month, we curate a playlist that highlights ten up-and-coming acts, playable directly on our homepage, so you can discover new tracks without leaving the site.
          </p>
          <p>
            Our founders met at a small backyard show in Wicker Park and realized there was a real need to connect Chicagoans to the underground scenes happening in the diverse neighborhoods of the city. We partner with small venues, record shops, and community centers to host pop-up showcases, Q&A panels, and open-mic nights that celebrate local talent.
          </p>
          <p>
            We believe that music can break down barriers, so we actively work with neighborhood nonprofits to bring free concerts to places where concert tickets might be out of reach. Our ultimate goal is to create a community where artists, fans, and local businesses collaborate because when Chicago's music scene thrives, the whole city becomes a better place.
          </p>
        </section>

        <section className="homeEvents">
          <h2>Meet the Team</h2>
          <p>
            Local Sounds is united by a shared passion for Chicago's music culture and a commitment to uplifting voices in the city. We aim to build a platform that serves both artists and fans. By collaborating closely with local venues, promoters, and fellow music enthusiasts, we ensure that our website and events are relevant and inclusive. Together, we strive to create an environment where every emerging artist has the support and visibility they need to thrive.
          </p>
          <p>
            Our small but passionate team of music lovers, designers, and organizers is committed to making Local Sounds a reliable and inspiring resource for Chicago's music lovers. We work tirelessly to curate artist profiles, update event listings, and ensure the site reflects the city's musical heartbeat.
          </p>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <p>
            Have questions, suggestions, or want to get involved? We'd love to hear from you!
          </p>
          <ul>
            <li>Email: contact@localsoundschi.com</li>
            <li>Instagram: @localsoundschi</li>
            <li>Twitter: @localsoundschi</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
