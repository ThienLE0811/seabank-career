'use client';
import Link from 'next/link';
import Image from 'next/image';
import icon1 from '../public/coreValue/image 121.png';
import icon2 from '../public/coreValue/image 122 (1).png';
import icon3 from '../public/coreValue/image 122 (2).png';
import icon4 from '../public/coreValue/image 122 (3).png';
import icon5 from '../public/coreValue/image 122.png';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

const image = [
  { link: '/public/coreValue/image 121.png', main: true },
  { link: '/public/coreValue/image 122 (1).png', main: false },
  { link: '/public/coreValue/image 122 (2).png', main: false },
  { link: '/public/coreValue/image 122 (3).png', main: false },
  { link: '/public/coreValue/image 122.png', main: false },
];

export default function CoreValue() {
  return (
    <div className="">
      <div className="relative min-h-[660px] bg-neutral-300 max-xl:h-auto">
        <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="pt-4">
            <h2 className="text-3xl font-medium text-heading">
              Giá trị cốt lõi
            </h2>
          </div>
          <div className="mt-[5%] grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div className="max-w-[632px]">
              <Image src={icon1} alt="" width={600} height={150}></Image>
            </div>
            <div className="grid max-w-[632px] grid-cols-2 gap-6 max-md:ml-[5%] max-md:hidden">
              <Image src={icon2} alt="" width={300} height={202}></Image>
              <Image src={icon3} alt="" width={300} height={202}></Image>
              <Image src={icon4} alt="" width={300} height={202}></Image>
              <Image src={icon5} alt="" width={300} height={202}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
