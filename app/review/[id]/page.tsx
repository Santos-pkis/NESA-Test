
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
    imageURL:"/images/judgereview1.jpg",
  },
  {
    id: 2,
    name: "Mr Joseph Johnson",
    title: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community, his innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. She aslo partnered with the Ministry of Education to implement Yeelen's innovative after-school program in 10 public schools, improving standardized test scores by an average of 20%.",
    bio:"Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community, his innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. ",
    imageURL:"/images/judgereview1.jpg",

  },
  {
    id: 3,
    name: "Mr Joseph Johnson",
    title: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community, his innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. She aslo partnered with the Ministry of Education to implement Yeelen's innovative after-school program in 10 public schools, improving standardized test scores by an average of 20%.",
    bio:"Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community, his innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. ",
    imageURL:"/images/judgereview1.jpg",

  },
  {
    id: 4,
    name: "Mr Joseph Johnson",
    title: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community, his innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. She aslo partnered with the Ministry of Education to implement Yeelen's innovative after-school program in 10 public schools, improving standardized test scores by an average of 20%.",
    bio:"Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community, his innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. ",
    imageURL:"/images/judgereview1.jpg",

  },
  {
    id: 5,
    name: "Mr Joseph Johnson",
    title: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community, his innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. She aslo partnered with the Ministry of Education to implement Yeelen's innovative after-school program in 10 public schools, improving standardized test scores by an average of 20%.",
    bio:"Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community, his innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. ",
    imageURL:"/images/judgereview1.jpg",

  },
  {
    id: 6,
    name: "Mr Joseph Johnson",
    title: "Brothers Building Futures (BBF)",
    achievements: "Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community, his innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. She aslo partnered with the Ministry of Education to implement Yeelen's innovative after-school program in 10 public schools, improving standardized test scores by an average of 20%..",
    bio:"Dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community, his innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. ",
    imageURL:"/images/judgereview1.jpg",
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
  params: { id: string };
}

export default function ReviewDetailPage({ params }: PageProps) {
  const nominee = mockNominees.find(
    (n) => n.id === parseInt(params.id, 10)
  );

  if (!nominee) {
    notFound(); // shows the default 404 page if nominee not found
  }

  const GradientLine = () => (
    <div className="h-[3px] bg-gradient-to-r from-[#FFC247] to-[#E48900] mt-2 w-36" />
  );

  return (
    <div className={styles.container}>
      <div className={styles.divImage}>
              <Image
                src="/images/nomineeNav.png"
                alt={nominee.name}
                width={1440}
                height={200}
              />
      
      </div>
              <Image
                src={nominee.imageURL}
                alt={nominee.name}
                width={200}
                height={200}
                className={styles.image}
              />

      <div className={styles.infoCont}>
        
        <div className={styles.detailCont}>

          <div className={styles.nameCont}>
            <h1 className={styles.text}>{nominee.name}</h1>
            <p className={styles.text1}>{nominee.title}</p>
          </div>
          
          <div className={styles.nameCont}>
            <h1 className={styles.text2}>Bio :</h1>
            <p className={styles.text3}>{nominee.bio}</p>
          </div>

          <div className={styles.nameCont}>
            <h1  className={styles.text2}>Achievements:</h1>
            <p className={styles.text3}>{nominee.achievements}</p>
          </div>

          <div className={styles.nameCont}>
            <h1  className={styles.text4}>Certificates</h1>
            <div className={styles.certificate}>
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
            <h1  className={styles.text4}>Images and Videos</h1>
            <div className={styles.certificate}>
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



      <div className={styles.reviewCont}>

        <div className={styles.reviewDetails}>

        <div className={styles.reviewandcommentCont}>
          <h1 className={styles.reviewandcomment}>Reviews and Comments</h1>
          <GradientLine />
        </div>

        <div className={styles.rateNomineeCont}>
          <div className={styles.lol}>
          <h1>Rate Nominee</h1>
              <Image
                src="/images/rating.png"
                alt={nominee.name}
                width={300}
                height={300}
              />
          </div>
        </div>


        <div className={styles.judgesCommentCont}>
            <h1 className={styles.ok}>Judges Comments</h1>
            <div className={styles.judgesCommentinfo}>
                <Image
                src="/images/Ellipse.png"
                alt={nominee.name}
                width={50}
                height={10}
              />
                <div className={styles.judgesCommentinfotext}>
                  <h1 className={styles.tttt}>Dr. Aminah Danjumah</h1>
                  <p className={styles.ttt}>Yeelen Education Project</p>
                </div>
            </div>

            <div className={styles.inputbox}>
                <input
                type="text"
                className={styles.input}
                placeholder="Write a comment on Nominee"
              />
            </div>

                <div className={styles.ccc}>
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
