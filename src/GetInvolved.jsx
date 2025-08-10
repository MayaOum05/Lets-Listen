import './GetInvolved.css';
import FormInput from './components/FormInput';
import AccordionCard from './components/AccordionCard';

export default function GetInvolved(props){
    console.log(props)
return(

<main className="gi-main">

  <section className="top-section-gi">
      <div className="titlediv" >
        <h1 className="text-blue-500">Get Involved With Us!</h1>
      </div>
      <div className="logodiv">
        <img src={props.letslistenlogo} alt="The Let's Listen logo"/>
      </div>
  </section>

  <section className="middle-section-gi">
  <div className="div60">
    <h2>Join Us</h2>
    <p>If you're passionate about what we do and would love to be part of our gowing team. We'd love to hear from you!</p>
    <h3 className="submitresume">Submit Your Resume</h3>





    {/* TODO: Hook up this form to backend or form handler when available */}
    <form onSubmit={(e) => e.preventDefault()}>





      <FormInput label="Name" name="name" placeholder="Name" />
      <FormInput label="Email" name="email" type="email" placeholder="Email" required/>
      <label htmlFor="resume-upload" className="custom-file-label">Upload Resume</label>
      <input type="file" id="resume-upload" className="hidden-file-input" name="resume" />
      <FormInput label="Short Message / Introduction" name="message" placeholder="Short Message / Introduction" />
      <button type="submit">Submit</button>
    </form>
    <p>We'll reach out to you if your skills match any future openings!</p>
  </div>
  <aside className="div40">
    <h3>Available Openings</h3>
    <p>Explore roles and get ready today.</p>
    <div className="accordion-grid">
      <AccordionCard title="AI Research Intern" description="Contribute to our ML models and experiment with data science pipelines." />
      <AccordionCard title="Frontend Developer" description="Help enhance our web experience with React and Next.js." />
      <AccordionCard title="Community Coordinator" description="Engage with users and build partnerships with local tech groups." />
      <AccordionCard title="Content Strategist" description="Plan blog and newsletter content to reflect our mission." />
      <AccordionCard title="UX/UI Designer" description="Design user-friendly and accessible interfaces for our platform." />
      <AccordionCard title="Project Manager" description="Coordinate across teams to ensure deliverables are met on time." />
    </div>
  </aside>
</section>

  <section className='bottom-section-gi'>
    <h2>Contact Us</h2>
    <p>Let's connect! Have questions, suggestions or ideas? Reach out to us anytime - we're always listening.</p>
    <div className="div100">
      <h3>General Inquiries:</h3>
      <p><a href="mailto:info@letslisten.org">info@letslisten.org</a></p>
    </div>
    <div className="div100">
      <h3>Careers:</h3>
      <p><a href="mailto:careers@letslisten.org">careers@letslisten.org</a></p>
    </div>
  </section>

</main>
)
}