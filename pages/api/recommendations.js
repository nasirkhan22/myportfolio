// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Sikandar Hayat',
    image: "images/sikandar.jpeg",
    designation: 'Data Scientist | Machine Learning Engineer | Python Developer',
    view: "I had the privilege of working alongside Nasir on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at JMM Technologies, where Nasir's professionalism and attention to detail shone brightly. I wholeheartedly endorse Nasir for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/"
  },
  {
    id: 1,
    name: 'Osama javaid',
    image: "images/osama.jpg",
    designation: 'MERN | JavaScript | Tailwind | Sass | Bootstrap',
    view: "I highly recommend Nasir as a React frontend developer. He is a valuable asset to our team, consistently delivering high-quality work. Nasir's strong technical skills and attention to detail are commendable. His ability to tackle complex problems and deliver elegant solutions make him a standout professional in his field.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  },
  {
    id: 2,
    name: 'Muhammad Ullah',
    image: "images/muhammad.jpeg",
    designation: 'MERN Stack Developer at Productbox',
    view: "I highly recommend Nasir Khan for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
  {
    id: 3,
    name: 'Haroon Hayat',
    image: "images/haroon.jpg",
    designation: 'Senior Frontend developer at JMM',
    view: "Working with Nasir has been an absolute pleasure. As a ReactJS developer, he has shown exceptional dedication and a strong commitment to learning and growth. Nasir consistently delivers high-quality code and demonstrates a deep understanding of ReactJS principles. His ability to collaborate with the team and take on new challenges is impressive. Nasir's positive attitude and eagerness to contribute have made a significant impact on our projects. He is a quick learner and adapts well to changing requirements, always striving to deliver the best solutions. I highly recommend Nasir for any ReactJS development position. He is a valuable asset to any team and I'm confident he will continue to thrive and make significant contributions in his future endeavors.",
    linkednURL: "#"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
