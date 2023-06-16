'use client';

import Image from 'next/image';
import img1 from '../public/featured.jpg';
import img2 from '../public/checked.jpg';
const people: {
  img: string;
  name: string;
  job: string;
}[] = [
  {
    img: '/img/1.png',
    name: 'Brooklyn Simmons',
    job: 'Web Developer',
  },
  {
    img: '/img/2.png',
    name: 'Courtney Henry',
    job: 'Web Developer',
  },
  {
    img: '/img/3.png',
    name: 'Marvin McKinney',
    job: 'Web Developer',
  },
];

const featured: {
  item: string;
}[] = [
  {
    item: 'Đôi bên cùng có lợi',
  },
  { item: 'Xác định được ứng viên phù hợp' },
  { item: 'Cách thức nộp CV đơn giản cho người ứng tuyển' },
];

export default function Featured() {
  return (
    <div className="relative min-h-[660px]  max-xl:h-auto">
      <div className=" mx-auto grid max-w-7xl gap-x-14 px-4 py-6 sm:grid-cols-1 sm:px-6 md:grid-cols-1 lg:grid-cols-2 lg:px-8 xl:grid-cols-2">
        <div className="relative">
          <Image
            src={img1}
            alt=""
            width={665}
            height={538}
            //   className={styles.featuredrAboutImg}
          ></Image>
          <div className="absolute top-[60%] right-[-2%] h-[288px] w-[276px] rounded-t-lg bg-white shadow-md max-sm:top-[90%] max-sm:right-[15%]">
            <div className="h-[50px] rounded-t-lg bg-[#1967D2] py-4 px-20 text-base font-medium text-white">
              Applicants List
            </div>
            {people.map((val, index) => (
              <div className="flex p-3" key={index}>
                <Image
                  src={val?.img}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full"
                ></Image>
                <div className="ml-3">
                  <p className="text-base font-medium text-heading">
                    {val?.name}
                  </p>
                  <span className="text-sm text-text">{val?.job}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-sm:mt-[70%]">
          <h2 className="text-3xl font-medium text-heading">
            Nhận được các hồ sơ ứng viên từ những tài năng tốt nhất.
          </h2>
          <p className="mt-7 mb-5 text-base text-text">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps.
          </p>
          {featured.map((val, index) => (
            <div className="flex pb-4" key={index}>
              <div className="pt-0.5">
                <Image src={img2} alt="" width={16} height={13}></Image>
              </div>
              <p className="ml-2 text-base text-heading">{val?.item}</p>
            </div>
          ))}
          <button className="mt-[22px] rounded-lg bg-[#1967D2] py-4 px-7 text-base  font-normal text-white hover:bg-blue-700">
            <p>Post a Job</p>
          </button>
        </div>
      </div>
    </div>
  );
}
