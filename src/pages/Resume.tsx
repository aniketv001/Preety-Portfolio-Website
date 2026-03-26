const resumePath = `${import.meta.env.BASE_URL}CV_Preety.pdf`;

const Resume = () => (
  <div className="w-screen h-screen bg-background">
    <iframe src={resumePath} title="Resume - Preety Prangya Samal" className="w-full h-full border-0" />
  </div>
);

export default Resume;
