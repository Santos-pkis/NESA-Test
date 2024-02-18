type Career = {
  id: number | string;
  image: string;
  title: string;
};

const careers: Career[] = [
  {
    id: "1",
    image: "/images/careers/admin.png",
    title: "Administrative and Business Development Services Team",
  },
  {
    id: "2",
    image: "/images/careers/service.png",
    title: "Online Services Team",
  },
  {
    id: "3",
    image: "/images/careers/tech.png",
    title: "ICT and Technology Development Team",
  },
  {
    id: "4",
    image: "/images/careers/project.png",
    title: "Project and Event Management Team",
  },
  {
    id: "5",
    image: "/images/careers/media.png",
    title: "Media Services Team",
  },
  {
    id: "6",
    image: "/images/careers/intern.png",
    title: "Internship & Volunteers",
  },
];

export default careers;
