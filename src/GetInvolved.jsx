import './GetInvolved.css';
import FormInput from './components/FormInput';

export default function GetInvolved(props){
    console.log(props)
return(

<main className="gi-main">



  <section className="top-section-gi">
      <div className="titlediv" >
        <h1>Get Involved With Us!</h1>
      </div>
      <div className="logodiv">
        <img src={props.letslistenlogo} alt="The Let's Listen logo"/>
      </div>
  </section>



  <section className="middle-section-gi">
  <div className="div60">
    <h2>Join Us</h2>
    <p>If you're passionate about what we do and would love to be part of our gowing team. We'd love to hear from you!</p>

    <h3>Submit Your Resume</h3>

    <form>
      <FormInput label="Name" name="name" placeholder="Name" />
      <FormInput label="Email" name="email" type="email" placeholder="Email" />
      <FormInput label="Upload Resume" name="Upload Resume" type="file" />
      <FormInput label="Short Message / Introduction" name="message" placeholder="Short Message / Introduction" />
      <button type="submit">Submit</button>
    </form>

  </div>

  <aside className="div40">
    <h3>Available Openings</h3>
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