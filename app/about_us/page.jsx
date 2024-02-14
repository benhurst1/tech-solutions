import FeaturesText from "../components/features/FeaturesText";

export default function Page() {
  return (
    <div className="flex flex-col gap-5 bg-slate-100 py-5 px-10 min-h-screen">
      <FeaturesText
        title={"About Tech Solutions Hub"}
        body={
          "Tech Solutions Hub is dedicated to providing innovative technology solutions to businesses worldwide. With a team of experienced professionals and a commitment to excellence, we strive to be your trusted partner in tech."
        }
      />
      <FeaturesText
        title={"Our Mission & Vision"}
        body={
          "Our mission is to empower businesses with cutting-edge technology solutions and expert guidance to drive growth and innovation. Our vision is to be the go-to hub for all technology needs, fostering digital transformation and success for our clients."
        }
      />
      <FeaturesText
        title={"Our Journey"}
        body={
          "Since our inception in [Year], Tech Solutions Hub has been at the forefront of technological innovation. We've evolved and grown, but our commitment to delivering exceptional service remains unchanged."
        }
      />
    </div>
  );
}
