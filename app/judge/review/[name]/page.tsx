
import { notFound } from 'next/navigation';
import Image from 'next/image';
import styles from './ReviewPage.module.css';
import CommentCard from '@/components/UI/judgenomination/JudgeComment';

interface Nominee {
  id: number;
  name: string;
  title: string;
  achievements: string;
  bio:string;
  imageURL: string;
}
interface Comment {
  id: number;
  name: string;
  title: string;
  imageURL: string;
  comment:string;
}

// Mock data for demonstration
const mockNominees: Nominee[] = 
[
  {
    id: 1,
    name: "Mr Joseph Johnson",
    title: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community, his innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. She aslo partnered with the Ministry of Education to implement Yeelen's innovative after-school program in 10 public schools, improving standardized test scores by an average of 20%.",
    bio:"Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community, his innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. ",
    imageURL:"/images/Judgereview1.png",
  },
];
const mockComment: Comment[] = 
[
  {
    id: 1,
    name: "Dr. Aminah Danjumah",
    title: "Yeelen Education Project",
    comment:"dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community, his innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. ",
    imageURL:"/images/Ellipse.png",
  },
  {
    id: 2,
    name: "Dr. Aminah Danjumah",
    title: "Yeelen Education Project",
    comment:"dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community, his innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. ",
    imageURL:"/images/Ellipse.png",
  },



];

interface PageProps {
  params: { name: string };
}

export default function ReviewDetailPage({ params }: PageProps) {
  const formattedName = params.name.toLowerCase().replace(/-/g, " ");
  const nominee = mockNominees.find(
    (n) => n.name.toLowerCase() === formattedName
  );


  if (!nominee) {
    notFound(); // shows the default 404 page if nominee not found
  }

  const GradientLine = () => (
    <div className="h-[3px] bg-gradient-to-r from-[#FFC247] to-[#E48900] mt-2 w-36" />
  );

  return (
    <div className="	p-0 m-0 flex flex-col">
      <div className="bg-[#FFF5DC] pb-[60px]
">
      <div className='mb-[150px]' style={{
            backgroundImage: `url('/images/nomineeNav.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '200px',
          }}>
   
            <div className='flex flex-col space-y-4 pl-10  pt-28'>
              <Image
                src={nominee.imageURL}
                alt={nominee.name}
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div>
                <h1 className="text-[30px] font-semibold
">{nominee.name}</h1>
                <p className="text-[20px] font-normal
">{nominee.title}</p>
              </div>
            </div>
      </div>

        <div className={`pt-24  ml-10 mr-10 flex flex-col space-y-6`}>
          <div className="flex flex-col gap-[4px]
">
            <h1 className="text-[18px] font-medium mb-[10px]
">Bio :</h1>
            <p className="text-[14px] font-normal
">{nominee.bio}</p>
          </div>

          <div className="flex flex-col gap-[4px]
">
            <h1  className="text-[18px] font-medium mb-[10px]
">Achievements:</h1>
            <p className="text-[14px] font-normal
">{nominee.achievements}</p>
          </div>

          <div className="flex flex-col gap-[4px]
">
            <h1  className="text-[20px] font-medium mb-[20px]
">Certificates</h1>
            <div className="flex flex-col md:flex-row gap-6 w-full h-full
">
    
                <Image
                src="/images/certificate1.png"
                alt={nominee.name}
                width={200}
                height={200}
              />
                <Image
                src="/images/certificate2.png"
                alt={nominee.name}
                width={200}
                height={200}
              />
                <Image
                src="/images/certificate1.png"
                alt={nominee.name}
                width={200}
                height={200}
              />
            </div>
          </div>

          <div>
            <h1  className="text-[20px] font-medium mb-[20px]
">Images and Videos</h1>
            <div className="flex flex-col md:flex-row gap-6
">
              <Image
                src="/images/video1.png"
                alt={nominee.name}
                width={200}
                height={200}
              />
              <Image
                src="/images/nomineeInfoImg.png"
                alt={nominee.name}
                width={200}
                height={200}
              />
              <Image
                src="/images/nomineeInfoImg1.png"
                alt={nominee.name}
                width={200}
                height={200}
              />
              <Image
                src="/images/nomineeInfoImg2.png"
                alt={nominee.name}
                width={200}
                height={200}
              />
            </div>
          </div>
          
       </div>


      </div>



      <div className="py-[50px] bg-white
">

        <div className="mx-[5%]
">

        <div className="mb-[50px]
">
          <h1 className="text-[25px]
">Reviews and Comments</h1>
          <GradientLine />
        </div>

        <div className="flex flex-row items-center justify-center mb-[50px]
">
          <div className="flex flex-col items-center gap-[20px]
">
          <h1>Rate Nominee</h1>
              <Image
                src="/images/rating.png"
                alt={nominee.name}
                width={200}
                height={300}
              />
          </div>
        </div>


        <div>
            <h1 className="mb-[30px]
">Judges Comments</h1>
            <div className="flex flex-row items-center gap-[20px] mb-[20px]
">
                <Image
                src="/images/Ellipse.png"
                alt={nominee.name}
                width={50}
                height={10}
              />
                <div>
                  <h1 className="text-[15px]
">Dr. Aminah Danjumah</h1>
                  <p className="text-[12px] font-light
">Yeelen Education Project</p>
                </div>
            </div>

            <div className="mb-[70px]
">
                <input
                type="text"
                className="w-1/2 bg-white rounded-md p-2 text-sm border border-[#bebdbd]
"
                placeholder="Write a comment on Nominee"
              />
            </div>

                <div className="flex flex-row gap-[20px]

">
              {mockComment.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
            </div>
        </div>




        </div>

       </div>





    </div>
  );
}
