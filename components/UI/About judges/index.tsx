import Image from 'next/image';

const judges = [
  {
    name: 'Mr. Benneth Osarieme Ogbe',
    title: 'Textured, Opinionated and Professional.',
    about: 'A highly motivated individual with over two decades of experience: sharing knowledge in music & the arts, benneth ogbeiwi\'s doggedness makes it impossible for individuals to deviate from the cause. He has been constantly told that he is very imposing in getting the job done: "I enjoy this privilege, which has afforded me the opportunity to collaborate with my associates to achieve set goals"',
    imageSrc: '/images/judge1.png',
  },
  {
    name: 'Dr. Aminah Danjumah',
    project: 'Yeelen Education Project',
    achievements: 'Aminah\'s dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community. An innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. She also partnered with the Ministry of Education to implement Yeelen\'s innovati',
    imageSrc: '/images/judge2.png',
  },
  {
    name: 'Dr. Aminah Danjumah',
    project: 'Yeelen Education Project',
    achievements: 'Aminah\'s dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community. An innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. She also partnered with the Ministry of Education to implement Yeelen\'s innovati',
    imageSrc: '/images/judge4.png',
  },
  {
    name: 'Dr. Aminah Danjumah',
    project: 'Yeelen Education Project',
    achievements: 'Aminah\'s dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community. An innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. She also partnered with the Ministry of Education to implement Yeelen\'s innovati',
    imageSrc: '/images/judge5.png',
  },
  {
    name: 'Dr. Aminah Danjumah',
    project: 'Yeelen Education Project',
    achievements: 'Aminah\'s dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community. An innovative mobile library system and successful partnership with the government showcase her ability to create sustainable change. She also partnered with the Ministry of Education to implement Yeelen\'s innovati',
    imageSrc: '/images/judge6.png',
  },
];

const JudgesList = () => {
  return (
    <section className="bg-white text-black py-10 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-10">
        {judges.map((judge, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <Image
                src={judge.imageSrc}
                alt={judge.name}
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 md:px-8">
              <h3 className="font-normal text-xl mb-2">{judge.name}</h3>
              {judge.title && <p className="text-gray-700 mb-2 font-normal">{judge.title}</p>}
              {judge.project && <p className="text-gray-700 mb-2 font-normal">{judge.project}</p>}
              {judge.about && (
                <>
                  <h4 className="text-gray-700 mb-2 font-normal">About:</h4>
                  <p className="mb-4 text-gray-600 mb-2 font-normal">{judge.about}</p>
                </>
              )}
              {judge.achievements && (
                <>
                  <h4 className="font-normal text-xl mb-2">Achievements:</h4>
                  <p className="text-gray-700 mb-2 font-normal ">{judge.achievements}</p>
                </>
              )}
<p className="inline-flex items-center cursor-pointer mt-2">
  <span className="relative">
    <span style={{ background: 'var(--Gradient, #FFC247)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
      View Full Profile
    </span>
    <span className="absolute bottom-[-1px] left-0 w-full h-[1px]" style={{ background: 'var(--Gradient, #FFC247)' }}></span>
  </span>
  <span className="ml-1" style={{ color: 'var(--Gradient, #FFC247)' }}> &gt; </span>
</p>  </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JudgesList;